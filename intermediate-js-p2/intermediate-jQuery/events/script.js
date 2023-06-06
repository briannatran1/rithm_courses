$(function(){
    $('ul').on('click', 'li', function(evt){
        console.log('You just clicked on ', $(evt.target).text());
    });
});

// or

$(function(){
    $('ul').on('click', 'li', function(){
        console.log('You just clicked on ', $(this).text());
    });
});