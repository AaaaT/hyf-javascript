//Create a function named vehicleType that receives a color, 
//and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' 
//for example when called as vehicleType("blue", 2)





function vehicleType(color, code){
    let type; 
    if (code === 1){
        type = "car"
    }; 
    if (code === 2){
        type = "motorbike"
    };
 
console.log("a " + color + " "+ type)
};

console.log(vehicleType("blue", 2));
