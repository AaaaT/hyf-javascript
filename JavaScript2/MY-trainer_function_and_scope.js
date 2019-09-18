// scope
console.log(a)  //undefined
(function foo() {
    let a = 1
    console.log(a) // 1

    function boo(){
        let a = 2
        console.log(a)  // 2
        
    }
    boo()
    console.log(a) // 1
    {
        let a = 4 
        let b = 5
    }
    console.log(b)  //undefined
    console.log(a)  //1
})()
let a = 3
console.log(a)  //3


function moo (){
    let a = 1
    {
        let b = 2
        {
            let c = 3
        }
        let d = 4
    }
    let e = 5
}





// closures and scope


function bomoo (){
    function bm (){
        //undefined
        let f = 7
        //f
    }
    //undefined
    let a = 1

    return function bm2 (){
        //a
        let g =8
        //a and g
    }
}



let myFunc = bomoo()
myFunc() // a and g




function bomooz (){
    function bm (){
        //undefined
        let f = 7
        //f
    }
    //undefined
    let a = 1

    function bm2 (){
        //a
        let g =8
        //a and g
    }
    {
        //a
        function bm3 (){
            //a
            let h = 9
            //a, h
        }
        //a
        let b = 2
        // a, b
        {
            //a, b
            function bm4 (){
                //a, b
                let j = 10
                //a, b, j
            }
            //a, b
            let c = 3
            //a, b, c
            function bm5 (){
                //a, b, c
                let k =11
                //a, b, c, k
            }
            //a, b, c
        }
        //a, b
        function bm6 (){
            //a, b
            let l =12
            //a, b, l
        }
        //a,b
        let d = 4
        //a, b, d
        function bm7 (){
            //a, b, d
            let m = 13
            //a, b, d, m
        }
        //a, b, d
    }
    //a
    function bm8 (){
        //a
        let n = 14
        //a, n
    }
    //a
    let e = 5
    //a, e
    function bm9 (){
        //a, e
        let anna = "anna"
        //a, e, anna
    }
    //a, e
}
