// var hi = prompt('masukan nama kamu :');
// alert(' Hi ' +hi)

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', function () {
nav.classList.toggle('kura');

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



const span = document.querySelector('.slide .card span');
span.addEventListener('click', function() {
   span.classList.toggle('up');
})




function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
 }


 function change(){
    var main = document.body;
    main.classList.toggle("change-back")
 }


 const tanggal = new Date('january 15, 2023 00:00:00')