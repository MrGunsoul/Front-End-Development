function buildRegisterNumber(theLetters, theDigits, letters, digits){
    try {
        if (letters === false){
            throw new Error ("Invalid register number letters")
        }
        if (digits === false){
            throw new Error ("Invalid register number digits")
        }
        if (letters === true && digits === true) {
            return `Register number is correct
            ${theDigits}-${theLetters}`;
        }
        } catch(e) {
            console.log(e);
        }
    }

function main(){
    let theDigits = document.getElementById("theDigits").value;
    let theLetters = document.getElementById("theLetters").value;
    let letters, digits;
    letters = /^(?!.*(?:W))([A-Z]\w|[A-Z]{2,3}|)+$/.test(theLetters);
    digits = /^(0|[1-9]\d{1,3}?)$/.test(theDigits);
    document.getElementById("content").innerHTML = buildRegisterNumber(theLetters, theDigits, letters, digits);
}

