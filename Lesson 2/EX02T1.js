
function isLeapYear(aYear) {

    if (aYear % 4 === 0 && (aYear % 100 !== 0 || aYear % 400 === 0)) {
        return true;
    }

    return false;

}

function displayResult() {



    let exampleYear = document.getElementById("aYear").value;
  
  
  
    document.getElementById("this").innerHTML = 
    isLeapYear(exampleYear) ? `Year ${exampleYear} is a leap year`: `Year ${exampleYear} is not a leap year`;
  
  
  
  }


