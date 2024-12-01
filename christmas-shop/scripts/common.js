const content = document.getElementById('content-wrapper');
const burgerBTN = document.getElementById('burger-btn-container');
const burger = document.getElementById('burger-btn');
const burgerMNU = document.getElementById('burger-menu-container');
const burgerItems = document.getElementById('burger-menu');

let burgerMNU_ON = false;
let background_Locked = false;

burgerBTN.addEventListener('click', toggleBurgerMNU);
burgerItems.addEventListener('click', toggleBurgerMNU);

function toggleBurgerMNU () {
  // Toggle state of burger/cross button and burger menu when clicked
  burger.classList.toggle('cross-btn');
  burgerMNU.classList.toggle('burger-menu-drive-in');
  toggleBackgroundLock();
}

function toggleBackgroundLock() {
  // Lock/unlock modal window background
  if(!background_Locked && windowWidth <= 768) {
    document.body.style.overflow = 'hidden';
    background_Locked = true;
  } else {
    document.body.style.overflow = 'unset';
    background_Locked = false;
  }
}