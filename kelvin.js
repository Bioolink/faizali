const but = document.querySelector('.but');
const pg = document.querySelector('.page');
const tx = document.querySelector('.page .text p');
const tx1 = document.querySelector('.page .text h1');
const bg =document.body;
but.addEventListener('click', function(){
    bg.classList.toggle('bg')
    pg.classList.toggle('pg')
    but.classList.toggle('move')
    tx.classList.toggle('tx')
    tx1.classList.toggle('tx')
})
