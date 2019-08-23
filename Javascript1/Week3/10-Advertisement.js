// Use the list of vehicles to write an advertisement. So that it prints something like: 
// "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

// Hint, the output should be correct English with all the punctuation in place (that's the challenge). 
// So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma 
// and closed off by a period.

function vehicle(color, code, age){
   let type; 
   type = vehiclesList[code];{
   let isUsed;
   if (age <= 1) {
   isUsed = "new"
   } 
   else if (age > 1) {
   isUsed= "used"
   };
   console.log("a " + color + " "+ isUsed + " "+ type)
};
}
//console.log(vehicle("blue", 1, 5)); //a blue used car


console.log(vehicle("green", 3, 1)) //a green new bike
let carType = "cars, motorbikes,caravans and bikes."


console.log("Amazing Joe's Garage, we service" + " "+ carType) //Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.