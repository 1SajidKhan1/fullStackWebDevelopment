import { propertyForSalesArr } from './properties/propertyForSales.js';
import { placeholderPropertyObj } from './properties/placeholderPropertyObject.js';

const propertiesContainer = document.querySelector('#container');

function renderProperties(propertyArr) {
  const properties = propertyArr.map(i => {
    const { propertyLocation, priceGBP, roomsM2, comment, img } = i;
    return `<div class="property-card">
      <img src="images/${img}" alt="Property Image">
      <div class="content">
        <h2>${propertyLocation}</h2>
        <p>Price: £${priceGBP.toLocaleString()}</p>
        <p>${roomsM2.reduce((total, current) => total + current)} m²</p>
        <p>${comment}</p>
      </div>
    </div>`
  });

  propertiesContainer.innerHTML = properties.join('');
}

if (propertyForSalesArr.length > 0) {
  renderProperties(propertyForSalesArr);
} else {
  renderProperties([placeholderPropertyObj]);
};