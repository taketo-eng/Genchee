'use strict';

{
  const open_nav = document.getElementById('open-nav');
  const close_nav = document.getElementById('close-nav');
  const nav = document.getElementById('nav');


  open_nav.addEventListener('click', ()=>{
    nav.classList.toggle('open');
  });
  
  
  close_nav.addEventListener('click', ()=>{
    nav.classList.remove('open');
  });

  
}