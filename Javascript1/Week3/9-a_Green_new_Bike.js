//Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function vehicle(color, code, age)
{
    let type; 
        type = vehiclesList[code];
     

{
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