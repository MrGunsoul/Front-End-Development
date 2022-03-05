console.log(1 === "1");
console.log(1 == "1");
console.log(1 === 1);
console.log(1 == 1);
console.log(typeof "Kissa");

var port = 3001; var currentPort = port || 3000;

console.log(port)


let distances = [164, 526, 248, 12, 81, 181, 34];

let distanceSum=0;

let i=0

while (distances[i]>100){
    distanceSum+=distances[i];
    i++;
}


/*
while (distances[i]>100){

    for (let i=1; i <= distances.length-1; i++){
        distanceSum += distances[i];
    }
}
*/
let testi = [123, "str", 0.5]

let numbers = [1,2,3,4,5,]


console.log(numbers.slice(0,2))