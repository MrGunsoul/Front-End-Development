
function isInteger(aYear) {

    if (aYear === parseInt(aYear, 10)){
      return true;
    }
  
    return false;
  
  }



function isLeapYearError(aYear) {
  
    try {

        if (aYear === undefined || aYear === null || aYear === ''){
            throw new Error("Argument aYear is missing.");
        }

        if (!isInteger(aYear)) {
          throw new Error("Non-integer argument year error");
        }

        if ((aYear % 4 === 0) && (aYear % 100 !== 0 || aYear % 400 === 0)) {
        return true;
        }
  


    }   catch(e) {
        console.log(e.name + ` : ` + e.message);

    }


return false;
  
}




function displayResult() {

    let aYear = 2021.10;
  
    document.getElementById("content").innerHTML = isLeapYearError(aYear);
  
  }

displayResult();