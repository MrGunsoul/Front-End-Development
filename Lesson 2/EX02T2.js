const containsNumber = function(numbers, aNumber) {

    for (let i = 0; i < numbers.length; i++){
        if(numbers[i]== aNumber) {
            return true;
        }
    }
    return false;
};






function displayResult() {

    debugger;

    let someNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    let aNumberToSearch = document.getElementById("aNumber").value;
  
  
  
    document.getElementById("this").innerHTML = 
    containsNumber(someNumbers, aNumberToSearch) ? `Array contains the number ${aNumberToSearch} `: `Array doesn't contain the number `+ aNumberToSearch;
  
  
  
  }
