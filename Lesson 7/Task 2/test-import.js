//import { getPrice, setPriceList } from "./price-list.js";
import { priceList as pl } from "./price-list.js";

const examplePriceList = 
[   
    {
      itemid: 1, 
      itemname: 'bottle', 
      prices: [{ qty: 1, price: 1.25},{ qty: 100, price: 1.10},{ qty: 1000, price: 1.00}]
    },

    {
      itemid: 2, 
      itemname: 'glass', 
      prices: [{ qty: 1, price: 2.50},{ qty: 50, price: 2.00},{ qty: 200, price: 1.60}]
    },
    
    {
      itemid: 3, 
      itemname: 'paper', 
      prices: [{ qty: 1, price: 1},{ qty: 50, price: 0.9},{ qty: 200, price: 0.8},{ qty: 2000, price: 0.5}]
    },
];

// setPriceList(examplePriceList);
pl.setPriceList(examplePriceList);

console.log(pl.getPrice('paper', 130))
// console.log(examplePriceList[0].itemid) // Gives first items id
// console.log(examplePriceList[1].prices["1"]) // Gives second items second dictionarys info
// console.log(examplePriceList.map(( {prices}) => prices)) // Gives prices dictionary for all items

// Array, dictionary, array, dictionary