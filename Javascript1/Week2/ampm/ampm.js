const assert = chai.assert.deepStrictEqual
const range = _.range
const print = console.log
print('##### begin #####')

// Useful building blocks:
// * strings
// * slice
// * elvis ?:
// * if
// * {}
// * in
// * return
// const HH = {
//     '00':'12',
//     '14':'02',
//     '13':'01',
//     '23':'11',
// }
function f(hhxmm){
    let hh = hhxmm.slice(0,2)
    const mm = hhxmm.slice(3,5)
    const ampm = hh<'12' ? 'am' : 'pm'

    // if (hh=='00') hh='12'
    // if (hh=='13') hh='01'
    // if (hh=='23') hh='11'

    // // switch (hh) {
    // // case '00':
    // //     hh='12'
    // //     break;
    // // case '13':
    // //     hh='01'
    // //     break;
    // // case '23':
    // //     hh='11'
    // //     break;
    // // }

    // if (hh in HH)hh=HH[hh]
    hh= hh%12 
    if(hh==0) hh='12'
    return hh+':'+mm +' '+ ampm
}


assert('12:00 am', f('00:00'))
assert('12:01 am', f('00:01'))
assert('12:59 am', f('00:59'))
assert('1:00 am', f('01:00'))
assert('11:59 am', f('11:59'))
assert('12:00 pm', f('12:00'))
assert('12:01 pm', f('12:01'))
assert('12:59 pm', f('12:59'))
assert('1:00 pm', f('13:00'))
assert('11:59 pm', f('23:59'))
assert('2:20 pm', f('14:20'))


print('#####  end  #####')
