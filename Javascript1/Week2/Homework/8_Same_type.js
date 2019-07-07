// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.


// 8.1 First declare at least four variables and assign them different data types.
let cat = 7
let dog = []
let mouse = ['little']
let bunny = 359

// 8.2 For each variable write a console.log statement that logs the value
console.log(cat + ' cat');
console.log( dog + ' dog');
console.log(mouse + ' mouse');
console.log(bunny + ' bunny');
// let foo = 3;
// console.log("The value of my variable foo is: " + foo);

// 8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
console.log("The value of my variables are: number, string, string, number");// --->wrong number, object, object, number

// 8.4 Now use typeof to log the actual type of your variables.
console.log(typeof cat + cat);
console.log(typeof dog + dog);
console.log(typeof mouse + mouse + ' mouse');
console.log(typeof bunny + bunny);

// 8.5 Now compare the types of your different variables with one another.
function compareTypes if {(typeof cat == typeof dog)
       console.log('SAME TYPE');
}
console.log(compareTypes);

// 8.6 Make sure to also show a message when the variables you are comparing are not the same type.
// For example:

// let x = 9;
// let y = 'Hello';

// if (...) {
//     console.log('SAME TYPE');
// }
// // TODO -> add a way of giving feedback if your variables don't have the same type