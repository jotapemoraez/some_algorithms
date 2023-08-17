// for (var i = 0; i < 3; i++) {
//    //console.log( i)
//     setTimeout(function () {  
//         console.log(i)
//     }, 100+i)
// }

// console.log(i)


function run() {

    console.log(1)
    new Promise( (resolve, reject) => setTimeout(() => {
        resolve(5);
      }, 0)).then( a => console.log(a)) 
    console.log(4)
    setTimeout(function() {console.log(2)}, 1000)
    setTimeout(function() {console.log(3)}, 0)

   
}

run()