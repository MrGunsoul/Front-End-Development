let person = { name: "Pentti", age: 25, country: "Finland"}


//Json object literal
//Has to be with "" except numerals
//Convert JavaScript object to Json object
let personString = JSON.stringify(person) 

//Convert from Json object to JavaScript object
let reCreatedPerson = JSON.parse(personString)