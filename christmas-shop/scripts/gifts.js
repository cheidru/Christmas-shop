const giftCategoryMNU = document.getElementById('gift-tabs');
const cardContainer = document.getElementById('gift-cards');
const scrollToTop = document.getElementById('scroll-to-top-btn');

let activeTab = document.getElementById('all-tab');
let windowWidth = 1440;
let windowScroll = 0;


checkWinWidth();
addGiftCards('all');
checkWinScroll();

window.addEventListener('resize', checkWinWidth);
window.addEventListener('scroll', checkWinScroll);

giftCategoryMNU.addEventListener('click', (event) => {
  activeTab.classList.remove('selected');
  activeTab = event.target;
  activeTab.classList.add('selected');
  addGiftCards(event.target.textContent);
})

scrollToTop.addEventListener('click', () => {window.scrollTo(0, 0)})

function checkWinWidth() {
  windowWidth = window.innerWidth;
  // Adjust behavior depending on screen width
  if(windowWidth <= 768 && !burgerMNU_ON) {
    burgerMNU.style.display = 'flex';
    burger.style.display = 'flex';
    burgerMNU_ON = true;
  } else if (windowWidth > 768 && burgerMNU_ON) {
    toggleBackgroundLock();  
    burgerMNU.style.display = 'none';
    burger.style.display = 'none';
    burgerMNU_ON = false;
    burger.classList.remove('cross-btn');
    burgerMNU.classList.remove('burger-menu-drive-in');
  } 
}

function checkWinScroll() {
  if(window.scrollY <= 300) {
    scrollToTop.style.display = 'none';
  } else {
    scrollToTop.style.display = 'block';
  }
}

function addGiftCards(category) {
  let cards = [];
  switch(category) {
    case 'all':
      cards = gifts;
      break;
    case 'for work':
      cards = gifts.filter((card) => card.category === 'For Work');
      break;
    case 'for health':
      cards = gifts.filter((card) => card.category === 'For Health');
      break;
    case 'for harmony':
      cards = gifts.filter((card) => card.category === 'For Harmony');
      break;
  }
  cardContainer.innerHTML = '';

  for(let i = 0; i < cards.length; i++) {
    const cardDIV = document.createElement('div');
    cardDIV.classList.add('best-gift-card');
    cardContainer.append(cardDIV);

    const cardIMGContainer = document.createElement('div');
    cardIMGContainer.classList.add('gift-card-img-container');
    cardDIV.append(cardIMGContainer);

    const cardIMG = document.createElement('img');
    cardIMGContainer.append(cardIMG);

    const cardDescr = document.createElement('div');
    cardDescr.classList.add('best-gift-card-descr');
    cardDIV.append(cardDescr);

    const cardCategory = document.createElement('h4');
    cardCategory.classList.add('best-gift-card-descr-caption');
    cardDescr.append(cardCategory);

    const cardName = document.createElement('h3');
    cardName.classList.add('best-gift-card-descr-text');
    cardDescr.append(cardName);
    
    switch(cards[i].category) {
      case 'For Work':
        cardIMG.src = '../assets/img/gift-for-work.png';
        cardIMG.setAttribute('alt', `${cards[i].name} image`);
        cardCategory.innerText = 'for work';
        cardCategory.classList.add('txt-blue');
        cardName.innerText = cards[i].name;
        break;
      case 'For Health':
        cardIMG.src = '../assets/img/gift-for-health.png';
        cardIMG.setAttribute('alt', `${cards[i].name} image`);
        cardCategory.innerText = 'for health';
        cardCategory.classList.add('txt-green');
        cardName.innerText = cards[i].name;
        break;
      case 'For Harmony':
        cardIMG.src = '../assets/img/gift-for-harmony.png';
        cardIMG.setAttribute('alt', `${cards[i].name} image`);
        cardCategory.innerText = 'for harmony';
        cardCategory.classList.add('txt-purple');
        cardName.innerText = cards[i].name;
        break;
    }
  }
}