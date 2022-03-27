let aPriceList;

export const setPriceList = priceList => {
    aPriceList = priceList;  
};

export const getPrice = (itemName, quantity) => {
    
    const item = aPriceList.filter(e => e.itemname === itemName);
    
    const prices = item[0].prices.filter(e => e.qty < quantity);

    const price = prices[prices.length-1];
    return price.price * quantity;
};

export const priceList = {
    setPriceList,
    getPrice
};

//export default const ...