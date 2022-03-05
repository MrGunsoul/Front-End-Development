
function isInteger(aYear) {

  if (aYear === parseInt(aYear, 10)){
    return true;
  }

  return false;

}


function isLeapYear(aYear) {

    if (aYear % 4 === 0 && (aYear % 100 !== 0 || aYear % 400 === 0)) {
        return true;
    }

    return false;

}



function tryIsLeapYear(aYear) {

  try {
  
    if (aYear === undefined || aYear === null || aYear === '') {
      throw new Error('Argument aYear is missing.');
    }
    
    if (!isInteger(aYear)) {
      throw new Error('Argument aYear is not integer.');
    }
    
    return isLeapYear(aYear);
    
  } catch (e) {
    
    console.error(e.name + ' : ' + e.message);

    
    }
    
  }


function displayResult() {

    let aYear = 2021.10;
  
    document.getElementById("content").innerHTML = tryIsLeapYear(aYear);
  
  }

displayResult();