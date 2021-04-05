$(document).ready(onReady);

function onReady() {
  console.log('ready');
  $('#links a').on('click', scrollTo);

  $('#project-slides').carousel();
} // end onReady

function scrollTo() {
  console.log(this);
  var target = $(this).attr('href');

  $('html, body').animate({ scrollTop: $(target).offset().top - 60 }, 100);
}
