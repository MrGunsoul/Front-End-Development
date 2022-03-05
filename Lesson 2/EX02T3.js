
let convertToMinutesFormat = hoursInHundredths => {
    let test=hoursInHundredths.replace(",",".")
    window.hr = Math.floor(Math.abs(test));
    window.min = Math.floor((Math.abs(test)*60)%60);
    return (hr< 10 ? "0" : "") + hr + ":" + (min < 10 ? "0" : "") + min;

}

// If there is only one argument, then paragraph does not need ()
//For example const square = (number) => {return number*number;}
//For example const square = number => {return number*number;}
// If there is only sentence, then paragraph does not need {}. Remember to also remove return
//For example const square = number =>  number*number;




const displayResult = () => {



    let timeToConvert = document.getElementById("aTime").value;

    
  
    document.getElementById("this").innerHTML = 
    convertToMinutesFormat(timeToConvert) ? `${timeToConvert} hours is in hours and minutes equal to ${hr}:${min}`:"test";
  
  
  
  }
  
 
