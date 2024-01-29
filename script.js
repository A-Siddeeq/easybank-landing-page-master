let menu = document.querySelector('.hamMenu');
let openMenu = document.querySelector('.isOpen');
let closedMenu = document.querySelector('.isClosed');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');

openMenu.addEventListener('click', () => {
  openMenu.style.display = 'none'
  closedMenu.style.display = 'block'
  overlay.style.display = 'block'
  overlay.style.position = 'fixed'
  body.style.opacity = '0.9'
})

closedMenu.addEventListener('click', () => {
  closedMenu.style.display = 'none'
  openMenu.style.display = 'block'
  overlay.style.display = 'none'
  body.style.opacity = '1'
})

