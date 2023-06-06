// iterating through jQuery obj to grab all li's
for(let i = 0; i < $('li').length; i++){
    console.log('Day ' + i + ': ' + $('li').eq(i).text());
}

// refactored versions:

// each
$('li').each(function(i, el){
    console.log('Day ' + i + ': ' + $(el).text());
});

// map
let summary = $('li').map(function(i, el){
    return $('<p>', {
        text: 'On day ' + i + ', I earned ' + $(el).text()
    });
}); // summary is now a jQuery obj which contains one p tag for each li

$('body').append(summary.get()); 
//appends summary to the page
//.get method turns a jQuery obj into an arr

// filter
$('li').filter(function(i, el){
    return $(el).text()[0] === '-' // returns true if number is neg
}).css('color', 'red');