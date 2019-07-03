const assert = chai.assert.deepStrictEqual
const range = _.range
const print = console.log
print('##### begin #####')

// 1 Create a function that takes 3 arguments and returns the sum of the these arguments.
function f (a, b, c){    return a+b+c}
assert (6,f(1, 2, 3))

// 2 Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar (color){    return 'a ' + color + ' car'}
assert ('a red car', colorCar('red'))

// 3 Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
function g (obj){     return JSON.stringify(obj);}
assert ("{}", g({}))
assert ('{"name":"john"}', g({name: 'john'}))


print('##### end #####')
