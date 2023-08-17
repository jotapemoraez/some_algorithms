function parse(inputString) {

    
    arr = inputString.split( " ")
    var resultado = 0
    var newStrOperation = ""

    if ( arr.length === 1) return arr[0]

    for ( var i =0 ; i < arr.length; i++) {

       if (arr[i] === "times") {

          if ( arr[i+1] === "negative") {
            
            resultado = Number(arr[i-1]) * Number(arr[i+2]) * -1

            arr.splice( i - 1, 4, resultado)

            newStrOperation = arr.join( " ")

          } else {
            resultado = Number(arr[i-1]) * Number(arr[i+1])

            arr.splice( i - 1, 3, resultado)

            newStrOperation = arr.join( " ")
          }
           break
       } else if (arr[i] === "plus" && inputString.indexOf("tim") === -1) {
          resultado = Number(arr[i-1]) + Number(arr[i+1])
          arr.splice( i - 1, 3, resultado)

          newStrOperation = arr.join( " ")
          break
       } else if (arr[i] === "negative" && inputString.indexOf("tim") === -1) {
            resultado = Number(arr[i-1]) - Number(arr[i+1])
            arr.splice( i - 1, 3, resultado)

            newStrOperation = arr.join( " ")
            break
     } 

    }

    console.log( newStrOperation)

    return parse(newStrOperation)

}



function betterParse(inputString) {

    var elements = inputString.split(' ')

    var elementsWithoutTimes = [];
    var past = null;

    for (var i = 0; i < elements.length-1; i++ ) {

      var current = elements[i]
      var next = elements[i+1]


      if (current === 'times') {
        var product = 0
        if (next === 'negative') {

          product = Number(past) * Number(elements[i+2])
          elementsWithoutTimes.push('negative')
          elementsWithoutTimes.push(product)
          i+=2
        } else {
          product = Number(past) * Number(next)
          
          elementsWithoutTimes.push(product)
          i++
        }

        
      } else {

        if (next !== 'times')
          elementsWithoutTimes.push(current)


      }




      past = current;
    }



    console.log(elementsWithoutTimes.join( ' '))

}

console.log(parse( "6 plus 2 times 3 plus 3 times negative 1 times negative 1 negative 1 plus 10"))


//console.log( parse( "5 plus 2 times 3 plus 3"))




