

let distances = [164, 526, 248, 12, 81, 181, 34];

let distanceSum=0;

let i=0

while (distances[i]>100){
    distanceSum+=distances[i];
    i++;
}



while (distances[i]>100){

    for (let i=1; i <= distances.length-1; i++){
        distanceSum += distances[i];
    }
}

