// 10 / 2 => 0
// 5 / 2 => 1
// 2 / 2 => 0
//


function convertDecimalToBin(n) {

  let binary = (n%2).toString()

 

  if (n > 1)
    binary = convertDecimalToBin( parseInt(n/2)) + binary 

  return binary

}


console.log(convertDecimalToBin(5))