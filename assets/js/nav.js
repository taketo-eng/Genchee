'use strict';

{
  const open_nav = document.getElementById('open-nav');
  const close_nav = document.getElementById('close-nav');
  const nav_items = document.getElementsByClassName('nav-item');
  const nav = document.getElementById('nav');

  for(let i = 0;i<nav_items.length;i++){
    nav_items[i].addEventListener('click', ()=>{
      nav.classList.toggle('open');
    });
  }

  open_nav.addEventListener('click', ()=>{
    nav.classList.toggle('open');
  });
  
  
  close_nav.addEventListener('click', ()=>{
    nav.classList.remove('open');
  });
}