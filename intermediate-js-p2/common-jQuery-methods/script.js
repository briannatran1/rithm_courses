$(document).ready(function(){
    $('article').html(); // innerHTML
    $('article').text(); //innerText
    $('input').val(); // value
}); //add strings to these methods to set instead of get

$(document).ready(function(){
    $('article').addClass('hidden'); // add a class
    $('article').removeClass('hidden'); // remove a class
    $('article').toggleClass('hidden'); // toggle the class (if on -> off, vice versa)
});

// accessing element styles
$(document).ready(function(){
    $('article').css('background-color', 'red');
    $('article').css('background-color'); // red
    $('article').attr('style', 'display:flex');
    $('article').data('id', '1');
});

// traversing the DOM
$(document).ready(function(){
    let $childDivsInsideArticle = $('article').find('div').children();
});

// filtering
$(document).ready(function(){ // with js and jQuery
    let $firstLi = $('li')[0];
    $firstLi.innerText; // 'Item 1'
});

$(document).ready(function(){
    let $firstLi = $('li').eq(0);
    let $secondLi = $('li').eq(1);
    $firstLi.text(); // 'Item 1'
    $secondLi.text(); // 'Item 2'
});

// adding and removing elems from DOM
$(document).ready(function(){
    let $newParagraph = $('<p>');
    $newParagraph.text('Another article');
    $newParagraph.css('color', 'red');

    let $anotherParagraph = $('<p>', {
        text: 'Another approach',
        css: {
            color: 'purple',
            'font-size': '2em' // we have to use quotes because of the '-'
        }
    });
    $('article').append($newParagraph);
    $('article').prepend($anotherParagraph);
});

$(document).ready(function(){
    $(article).empty(); // remove all content inside article
    $(article).remove(); // remove the article element itself from the DOM
});

// adding and removing events 
$(document).ready(function(){
    $('article').on('click', function(evt){
        console.log($(evt.target).val()); // this works great
        console.log(evt.target.val()); // TypeError -> evt.target isn't a jQuery obj
    })
});