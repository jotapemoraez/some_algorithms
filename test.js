// var fs = require('fs')

// function someAsyncOperation(callback) {
//   // Assume this takes 95ms to complete
//   fs.readFile('bfs.js', callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;

//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//   const startCallback = Date.now();

//   // do something that will take 10ms...
//   while (Date.now() - startCallback < 10) {
//     // do nothing
//   }
//   console.log(Date.now() - timeoutScheduled)
// });
// // const foo = () => console.log('foo')

// // console.log('start')
// // setTimeout( () => console.log('timeout finished'), 0)
// // fs.readFile('queue.js', (err,data) => console.log('data returned'))
// // setImmediate( () => {
// // 	console.log("executing setImediate callback");
// // 	setTimeout (() => console.log("second time out finished"), 0)});
// // process.nextTick(foo);
// //  new Promise((resolve,reject) => {
// //   resolve("eita")
// // }).then( data => console.log(data))   
// // console.log("end") //Q: 
// //    //timer //timer
// //    //IO
// //    //i
// //    //tick
// //    //p 

// //    //tick
// //    //p
// //    //imi
// //    //ti //ti

// // // console                      //start
// // // setTime          Timers 1     //end 
// // // fs.readFile      IO callback 1 //timeout finished
// // // setImediate      set imediate 1  

// console.log(alura)
// let alura = 'cursos';



let data = [
  [0.34, 0.8, 0.77, 0, 0, 0, 0.12, 0, 0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0.34, 0.8, 0.77, 0, 0, 0, 0.12, 0, 0, 0, 0, 0, 0.18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0.12, 0, 0, 0, 0, 0, 0, 0, 0.11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0.12, 0, 0, 0, 0.18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0.12, 0, 0, 0, 0, 0, 0.11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0, 0, 0.25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18, 0, 0.11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18, 0, 0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11, 0, 0, 0, 0, 0, 0, 0, 0, 0.12, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0.12, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31, 0, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12, 0], 
  [0.34, 0.8, 0.77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0.34, 0.8, 0, 0.65, 0.36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0.34, 0.8, 0, 0.65, 0, 0, 0.12, 0, 0.12, 0, 0, 0, 0.18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0.34, 0.8, 0, 0.65, 0, 0, 0.12, 0, 0.12, 0, 0, 0, 0, 0, 0.11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0.34, 0.8, 0, 0.65, 0, 0, 0.12, 0, 0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0], 
  [0.34, 0.8, 0, 0.65, 0, 0, 0.12, 0, 0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12, 0], 
  [0.34, 0.8, 0, 0.65, 0, 0, 0.12, 0, 0.12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

  /**
 * each row in the data is a customer's shopping cart containing the values of individual items.
 * the index position within the shopping cart represents a unique item from our store.  So index 3,
 * is always the same item across all carts.
 * 
 * a value of 0 means that the item for that index is not in the customer's cart.
 */
/**
 * task (1) sort the array by number of products (non zero numbers) in a given set from greatest to least
 * 
 * example result 
 *    [[1,2,3,4,5],[1,2,3],[1,2]]
 * 
 * task (2) group individual carts by the total value rounded to the nearest $0.25
 * 
 * example result
 *    {"0.25": [[0.10, 0.05, 0.10]],"0.50": [],"1.00": [[0.25, 0.75], [0.25, 0.50, 0.10]]}
 */

// let productsByCount = [];

// for (let i = 0; i < data.length; i++) {

  
//   const productCount = data[i].reduce((acc , current ) => 
//     (current > 0 ) ? acc + 1 : acc
//   , 0);


//   data[i].push(productCount);

  

//   console.log(productCount)

// }
// // console.log(productsByCount)

// let sortedArray = data.sort( (a, b) => b[b.length-1] - a[a.length-1]);

// console.log(sortedArray)


data = data.map((a) => a.filter((v) => v > 0));
data.sort((a, b) => b.length - a.length);

//console.log(data);


const ret = data.reduce( (acc,current ) => {

  const sum = (Math.round(current.reduce((x,y) => x+y, 0)*100)/100).toFixed(2) ;

  //acc[sum] = (acc[sum]) ? [...acc[sum], ...current] : [];

  if (sum in acc) {
    acc[sum].push(current)
   
  } else {
    acc[sum] = []
    acc[sum].push(current)
  }
  return acc;
  

}, {})

console.log(ret)



