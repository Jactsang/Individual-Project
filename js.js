// fixed navbar on scroll
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 50) { 
        $('.navbar').removeClass('navbar-light');
        $('.navbar').addClass('solid');
        $('#navbarbar a').addClass('white');
  
      } else if ($(document).scrollTop() < 50 ) {
        $('.navbar').removeClass('solid');
        $('.navbar').addClass('navbar-light');
      }
    })
});

// playbutton

$('#playbutton').mouseover(function() {
  $('#playbutton').css('color','green');
});

$('#playbutton').mouseleave(function() {
  $('#playbutton').css('color', 'white');
});



// hidden timeline block
$('#hidden-1').hide();
$('#hidden-2').hide();
$('#hidden-3').hide();
$('#hidden-4').hide();

$('#button1992').click(function() {
  $('#hidden-1').toggle(2000);
});

$('#1992back').click(function(){
  $('#hidden-1').toggle(5000);
});

$('#button2004').click(function() {
  $('#hidden-2').toggle(2000);
});

$('#2004back').click(function(){
  $('#hidden-2').toggle(5000);
});

$('#button2017').click(function() {
  $('#hidden-3').toggle(2000);
});

$('#2017back').click(function(){
  $('#hidden-3').toggle(5000);
});

$('#button2018').click(function() {
  $('#hidden-4').toggle(2000);
});

$('#2018back').click(function(){
  $('#hidden-4').toggle(5000);
});

// contact icon animation

$('.my-row4 i').mouseover(function() {
  $('.my-row4 i').removeClass('infinite');
});

$('.my-row4 i').mouseleave(function() {
  $('.my-row4 i').addClass('infinite');
});
