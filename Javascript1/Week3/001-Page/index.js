const assert = chai.assert.deepStrictEqual
const range = _.range
const print = console.log
print('##### begin #####')

//assert(range(5), [0,1,2,3,4])
function f(x) {
    return 2*x
}
f = (x) => 2*x
assert(f(5), 10)
assert(f(6), 12)

print('#####  end  #####')