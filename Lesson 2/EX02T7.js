

function convertOuncesToGrams(measurements) {
  var arrayLength= measurements.length
  for (var i = 0; i < arrayLength; i++){ //Goes trough the array
    console.log(measurements[i].unit) // Trouble shoot prints
    if (measurements[i].unit=="ounce"){ // If the unit is "ounce" it runs these convert systems
      measurements[i].weight=measurements[i].weight*28.3495231; // Ounce to Gram ratio
      measurements[i].weight=Math.round((measurements[i].weight+ Number.EPSILON)*100)/100 // Rounding to two digits
      measurements[i].unit="grams"; // Changes unit after convert
    }
  
 

  }


}

const batch1={
  batchid:434, 
  unit:"ounce", 
  weight:12.21, 
}

const batch2={
  batchid:414, 
  unit:"gram", 
  weight:199.54, 
}

const batch3={
  batchid:522, 
  unit:"ounce", 
  weight:18.88, 
}

const batches=[batch1, batch2, batch3] // We add objects to array
console.log(batches.length) // My troubleshoot lines

convertOuncesToGrams(batches)

console.log(batches)




