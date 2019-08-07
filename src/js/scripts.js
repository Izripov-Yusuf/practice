$(document).ready(function () {
 /* Обработка и отправка формы через AJAX */
 var modal = $('#overlay-thank');
 var close = $('#close-thank');
 $('#offer-form').on('submit', function (event) {
  if (document.form.username.value == '' || document.form.userphone.value == '') {
   valid = false;
   return valid;
  };
  event.preventDefault();
  $.ajax({
   url: 'mail.php',
   type: 'POST',
   data: $(this).serialize(),
   success: function (data) {
    $('form :input').val('');
    modal.addClass('modal-thank_active');
    close.on('click', function () {
     modal.removeClass('modal-thank_active');
    });
   }
  });
 });
});