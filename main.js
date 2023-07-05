// var hi = prompt('masukan nama kamu :');
// alert(' Hi ' +hi)

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', function () {
nav.classList.toggle('slide');

});


const menu = document.querySelector('.menu-toggle input');
const van = document.querySelector('nav ul');
menu.addEventListener('click', function () {
nav.classList.toggle('op');

});

const kaka = document.querySelector('.buk');

kaka.addEventListener ('click', function() {
   kaka.classList.toggle('active');
  

});


function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
 }


 function change(){
    var main = document.body;
    main.classList.toggle("change-back")
 }