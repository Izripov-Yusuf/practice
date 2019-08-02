var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
button.addEventListener('click', function(){
 modal.classList.add('modal_active');
});

close.addEventListener('click', function() {
 modal.classList.remove('modal_active');
});

function time() {
 modal.classList.remove('modal_active');
}
setTimeout(time, 5000);