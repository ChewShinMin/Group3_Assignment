const menuBtn = document.querySelector('.menuBtn');
let menuOpen = false;
menuBtn.addEventListner('click',() => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
