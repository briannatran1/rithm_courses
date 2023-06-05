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

