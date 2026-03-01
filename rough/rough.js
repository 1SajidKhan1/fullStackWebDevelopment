import {itemsBoughtArr} from './itemsBoughtArr.js'

let total = 0;
const calculationTotalCost = itemsBoughtArr => {
    for (let i=0; i<itemsBoughtArr.length; i++) {
        total += itemsBoughtArr[i].priceUSD
    }
    return total
}

console.log(calculationTotalCost(itemsBoughtArr).toFixed(2) + "$");