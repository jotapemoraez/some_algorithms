// function f() {
//    var a =b = 3
//     return {
//         bar: "hello"
//     }
// }

// // function e() {

// //     return 
// //     {
// //         bar: "hello"
// //     }
// // }


// console.log( f())

// console.log( b)
//------------------------------------------------------------------------------------
// var x = 10;
// function foo() {
//    var x = 20;
//   console.log(x);
  
// }
// foo();
// var i = 13
// function foo() {
//    for (var i = 0; i < 5; i++) {
//       var i = 10
//       setTimeout(function () {
//         console.log(i);
//       }, 1000);
//     }
// }


    

  
//   foo();
// function a() {
//     var who = 0
//     const object  = {
//         who: 'World',
//         greet() {
//         return `hello, ${this.who}`
//         },

//         farewell: () => {
//             console.log( this)
//         return `good, ${this.who}`
//         }

//     }
//     return object
// }

// console.log(a().farewell())
// console.log(a().greet())

// console.log( null == undefined)

// for (let i = 0 ; i < 5; i++) {

//     setTimeout(() =>console.log(i), i*1000)
// }



// t = ['a', 'a', 'b'].reduce( (acc, current) => {
//     console.log ( current == "a")
//     if (current == "a")
//       return acc+1 ;
//     else return acc
//   }, 0)

//   console.log( t)

a = [ 1, 2, 3]

b = [ ...a, 2]

console.log( a, b)