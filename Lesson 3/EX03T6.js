function getRandomIntegerFromRange (startRange, endRange) {
    return Math.round(Math.random() * (endRange - startRange) + startRange);
}


getRandomIntegerFromRange(1,100)


function getTimeDifferenceInFullDays (startDate, endDate) {
    var date1 = new Date(startDate);
    var date2 = new Date(endDate);

    var difference = date2.getDate() - date1.getDate()-1;

    return difference


}

