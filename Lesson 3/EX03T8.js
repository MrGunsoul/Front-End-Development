class Zipvalidator {
    static isValidZip (zipCode) {
       return /^\d{5}?$/.test(zipCode); 
    }
    static fixZip (zipCode) {
        let code=zipCode.toString()
        console.log(code.padStart(5,'0'));
    }
        
}



