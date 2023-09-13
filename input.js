  const profil = document.getElementById('kk');
  const input = document.getElementById('foto');

  input.onchange = function(){
      profil.src = URL.createObjectURL(input.files[0]);
  }


  const bulat = document.querySelector('.bulat');
  const bgc = document.querySelector('.container');
  const text = document.querySelector('.form');
  const kl = document.querySelector('.b img');
  const body = document.body;

  bulat.addEventListener('click', function(){
    bulat.classList.toggle('move')
    body.classList.toggle('bg')
    bgc.classList.toggle('bg2')
    text.classList.toggle('bg3')
    kl.classList.toggle('bg4')
  });