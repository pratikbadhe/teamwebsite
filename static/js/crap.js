
$(document).ready(function (){
    $('animate1').scrollspy({ target: '.navbar', offset: 1000 });

    $('.nav-link').on('click', function(){
        var clickedItem = $(this).attr('href');
       $('html, animate1').animate({
            scrollTop: $(clickedItem).offset().top - 100
       }, 250);
    });

});
var myString = 'pratik';
var x = "this is a test";
console.log(x);
