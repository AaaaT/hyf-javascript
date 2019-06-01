let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log("the string length " + myString.length);
 
let newString = myString.replace(/,/g, " ");
console.log(newString);


//str.replace (",", " " );