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

