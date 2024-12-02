const content = document.getElementById('content-wrapper');
const burgerBTN = document.getElementById('burger-btn-container');
const burger = document.getElementById('burger-btn');
const burgerMNU = document.getElementById('burger-menu-container');
const burgerItems = document.getElementById('burger-menu');

const overlay = document.getElementById('overlay');
const closeBTN = document.getElementById('modal-close');
const modal = document.getElementById('modal');
const modalIMG = document.getElementById('modal-img');
const modalCategory = document.getElementById('modal-card-descr-category');
const modalName = document.getElementById('modal-card-descr-name');
const modalText = document.getElementById('modal-card-descr-text');
const livePower = document.getElementById('live-power');
const createPower = document.getElementById('create-power');
const lovePower = document.getElementById('love-power');
const dreamPower = document.getElementById('dream-power');


let burgerMNU_ON = false;
let background_Locked = false;

burgerBTN.addEventListener('click', toggleBurgerMNU);
burgerItems.addEventListener('click', toggleBurgerMNU);

function toggleBurgerMNU () {
  // Toggle state of burger/cross button and burger menu when clicked
  burger.classList.toggle('cross-btn');
  burgerMNU.classList.toggle('burger-menu-drive-in');
  toggleBurgerBackgroundLock();
}

function toggleBurgerBackgroundLock() {
  // Lock/unlock modal window background
  if(!background_Locked && windowWidth <= 768) {
    document.body.style.overflow = 'hidden';
    background_Locked = true;
  } else {
    document.body.style.overflow = 'unset';
    background_Locked = false;
  }
}

function toggleModalBackgroundLock() {
  // Lock/unlock modal window background
  if(!background_Locked) {
    document.body.style.overflow = 'hidden';
    background_Locked = true;
  } else {
    document.body.style.overflow = 'unset';
    background_Locked = false;
  }
}

function showModal(cardNumber) {
  console.log('showModal enabled, ', 'cardNumber = ', cardNumber);
  overlay.style.display = 'block';
  modal.style.display = 'flex';
  toggleModalBackgroundLock();
  modalName.innerText = gifts[cardNumber].name;
  modalCategory.innerText = gifts[cardNumber].category;
  modalCategory.className = '';
  modalCategory.classList.add(categoryAttribute(gifts[cardNumber].category).color);
  modalIMG.src = categoryAttribute(gifts[cardNumber].category).src;
  modalText.innerText = gifts[cardNumber].description;
  livePower.innerText = gifts[cardNumber].superpowers.live;
  createPower.innerText = gifts[cardNumber].superpowers.create;
  lovePower.innerText = gifts[cardNumber].superpowers.love;
  dreamPower.innerText = gifts[cardNumber].superpowers.dream;  
  addFlakes(livePower.innerText, createPower.innerText, lovePower.innerText, dreamPower.innerText)

  overlay.addEventListener('click', closeModal, true);
  closeBTN.addEventListener('click', closeModal, true);
}

function closeModal() {
  overlay.style.display = 'none';
  modal.style.display = 'none';
  toggleModalBackgroundLock();
}

function categoryAttribute(category) {
  const categories = {
    'For Work': { src: './assets/img/gift-for-work.png', color: 'txt-blue'},
    'For Health': { src: './assets/img/gift-for-health.png', color: 'txt-green'},
    'For Harmony': { src: './assets/img/gift-for-harmony.png', color: 'txt-purple'}
  }
  return categories[category]
}

function addFlakes() {
  const flakeContainers = document.querySelectorAll('.snowflakes');
  for(let i = 0; i < 4; i++ ) {
    const flakesQTY = parseInt(arguments[i])/100;
    flakeContainers[i].innerHTML = '';
    for(let j = 0; j < 5; j++) {
      const flake = document.createElement('div');
      flake.classList.add(`${ j < flakesQTY ? 'flake' : 'no-flake'}`);
      flakeContainers[i].append(flake);
    }
    
    
  }
}