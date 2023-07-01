// var hi = prompt('masukan nama kamu :');
// alert(' Hi ' +hi)

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', function () {
nav.classList.toggle('slide');

});


const menu = document.querySelector('.menu-toggle input');
const van = document.querySelector('nav ul');
menuToggle.addEventListener('click', function () {
nav.classList.toggle('op');

});

const body = document.querySelector('buk');
const toggle = document.getElementById("toggle");
toggle.onclick = function() {
toggle.classList.toggle('active');
body.classList.toggle('active');

}


function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
 }