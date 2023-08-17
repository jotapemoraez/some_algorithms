// // IIFE (Immediately Invoked Function Expression) 

// (function () {
//     var a = b = c=5
// })()

// var d = e = f = 10

// console.log(b,c)
// console.log(d,e,f)
const delay = ms => new Promise(resolve => {
    console.log( " sss " ,ms)
    setTimeout(resolve, ms)
});

const promises = [
  delay(1000).then(() => 'First value'),
  delay(2000).then(() => 'Second value'),
  delay(3000).then((ms) => 'Third value' + ms)
];

Promise.all(promises)
  .then(values => {
    // Process the resolved values
    console.log('Resolved values:', values);
  })
  .catch(error => {
    // Handle errors
    console.error('An error occurred:', error);
  });