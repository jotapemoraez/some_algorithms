// const https = require('https')





// new Promise( (resolve) => {
//     https.get( "https://jsonplaceholder.typicode.com/users", (res) => {

//         let rawData = '';
//         res.on('data', (chunk) => {
//             rawData += chunk;
//             console.log( rawData)
//         });

//         res.on('end', () => {
//             try {
//                 const parsedData = JSON.parse(rawData);
//                 resolve(parsedData);
//             } catch (e) {
//                 reject(e.message);
//             }
//         });
//     })

// }).then((data) => {
//     console.log(data)
// })

var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    
    while ( min <= max) {
        guess = Math.floor( (max + min) / 2);
        console.log(min, max, guess)
        if (array[guess] === targetValue) {
            return guess;
        }
        else if (array[guess] < targetValue) {
            min = guess + 1;
        } 
        else {
            max = guess - 1;
        }
    }
    
    
    


	return -1;
};

console.log(doSearch([1,2,3], 3))