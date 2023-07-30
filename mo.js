// function lol() {
//     var kl = document.body;
//     kl.classList.toggle('mana');
// }


const menu = document.querySelector('.box input');
const opac = document.querySelector('nav ul');
menu.addEventListener('click', function(){
    opac.classList.toggle('opas')
})





const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumb = document.querySelectorAll('.thumb')


container.addEventListener('click', function(e){

// chek thumb

if(e.target.className == 'thumb'){

    jumbo.src = e.target.src
    jumbo.classList.add('fade');

    setTimeout(function(){

        jumbo.classList.remove('fade')

    }, 500)


    thumb.forEach(function(thumb){

    //     if(thumb.classList.contains('active')){
    //         thumb.classList.remove('active')
    //     }
    // 

    thumb.className = 'thumb'
})
    e.target.classList.add('active')
}

})


const btn = document.querySelector('button');

btn.addEventListener('click', function(){


    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    console.log(r);

    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')   ';


})