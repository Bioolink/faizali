// var hi = prompt('masukan nama kamu :');
// alert(' Hi ' +hi)

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
nav.classList.toggle('slide');

});