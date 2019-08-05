$(document).ready(function () {
 var scrollup = $('#scrollup');
 /* скрипт для стрелки вверх */
 $(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
   scrollup.addClass('scrollup_active')
  } else {
   scrollup.removeClass('scrollup_active')
 }
 });
 scrollup.click(function () {
  $("html, body").animate({
   scrollTop: 0
  }, 500);
  return false
 });
});