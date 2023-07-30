// function lol() {
//     var kl = document.body;
//     kl.classList.toggle('mana');
// }


const menu = document.querySelector('.box input');
const opac = document.querySelector('nav ul');
menu.addEventListener('click', function(){
    opac.classList.toggle('opas')
})



const btn = document.getElementById('tWarna');
const body = document.body;

btn.addEventListener('click', function(){
    // document.body.style.backgroundColor = 'salmon';
    // document.body.setAttribute('class', 'biru-muda')
    document.body.classList.toggle('biru-muda')
})



const bntrandom = document.createElement('button');
const textbtn = document.createTextNode('Acak warna');

bntrandom.appendChild(textbtn);
bntrandom.setAttribute('type', 'button');
btn.after(bntrandom);

bntrandom.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 50);
    const g = Math.round(Math.random() * 255 + 50);
    const b = Math.round(Math.random() * 255 + 50);
    console.log(r);

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +',' + b +')';
})


const smerah = document.querySelector('input[name=smerah]');
const shijau = document.querySelector('input[name=shijau]');
const sbiru = document.querySelector('input[name=sbiru]');

smerah.addEventListener('input', function(){
    const r = smerah.value;
    const g = shijau.value;
    const b = sbiru.value;
    document.body.style.backgroundColor = 'rgba('+r+','+g+','+b+')';

})

shijau.addEventListener('input', function(){
    const r = smerah.value;
    const g = shijau.value;
    const b = sbiru.value;
    document.body.style.backgroundColor = 'rgba('+r+','+g+','+b+')';

})

sbiru.addEventListener('input', function(){
    const r = smerah.value;
    const g = shijau.value;
    const b = sbiru.value;
    document.body.style.backgroundColor = 'rgba('+r+','+g+','+b+')';


})

const con = document.value;