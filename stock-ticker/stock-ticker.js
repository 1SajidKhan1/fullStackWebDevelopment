import getStockData from './fakeStockAPI.js';

const nameEl = document.querySelector('#name');
const symbolEl = document.querySelector('#symbol');
const priceEl = document.querySelector('#price');
const priceIconEl = document.querySelector('#price-icon');
const timeEl = document.querySelector('#time');

let prevPrice = null;

function display() {
  const {name, sym, price, time} = getStockData();
  
  nameEl.textContent = name;
  symbolEl.textContent = sym;
  priceEl.textContent = price;
  timeEl.textContent = time;

  const priceIconDirection = price > prevPrice ? 'increase.svg' : price < prevPrice ? 'decrease.svg' : 'no-change.svg';

  priceIconEl.textContent = '';
  const priceIconElement = document.createElement('img');
  priceIconElement.src = `svg/${priceIconDirection}`;
  priceIconElement.alt = 'Price direction icon';
  priceIconEl.appendChild(priceIconElement);

  prevPrice = price;
}

// display();

// setInterval(display, 2000);