//Create an object and a function that takes the object as a parameter and prints out all of its properties and values.


let ObjectA = [{
    "name": "myA",
    "size": "30",
    "color": "blue",
}];

function myObjectAParameters(){
return JSON.stringify(ObjectA);
}
console.log(ObjectA)

console.log(typeof(ObjectA)) //object
console.log(typeof(name)) //string
console.log(typeof(size)) //undefined
console.log(typeof(color)) //string