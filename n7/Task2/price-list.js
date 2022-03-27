let aPriceList;

export const setPriceList = priceList => {
    aPriceList = priceList;  
};

export const getPrice = (itemId, quantity) => {
    return 200.49;
};

export const priceList = {
    setPriceList,
    getPrice
};

//export default const ...