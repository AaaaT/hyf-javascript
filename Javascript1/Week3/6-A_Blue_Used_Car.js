//Create a function called vehicle, like before, but takes another parameter called age, 
//so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, age, code)
{
    let type; 
    if (code == 5){
        type = "car"
    }; 
    if (code == 6){
        type = "motorbike"
    };
{
   let isUsed;
    if (age < 1) {
    isUsed = "new"
   } 
   else if (age >=1) {
    isUsed= "used"
   };
   console.log("a " + color + " "+ isUsed + " "+ type)
};
}
console.log(vehicle("blue", 1, 5)); //a blue used car