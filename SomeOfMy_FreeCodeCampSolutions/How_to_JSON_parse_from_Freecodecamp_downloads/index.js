
let Object = JSON.parse('{"index.js":"// Setup\\nvar myArray = [];\\nvar i = 10;\\n\\n// Only change code below this line.\\ndo {\\n  myArray.push(i);\\n  i++;\\n} while (i < 11);\\n"}');

console.log(Object['index.js']);



// MY ORIGINAL FUNCTION

// Setup
let myArray = [];
var i = 10;

// Only change code below this line.
do {
  myArray.push(i);
  i++;
} while (i < 11);


console.log(myArray);