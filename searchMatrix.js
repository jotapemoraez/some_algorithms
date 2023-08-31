var searchMatrix = function(matrix, target) {



  function binSearch(inputArr, target) {

      if (inputArr.length === 1) {

          return inputArr[0] === target

      } else {
          
          let midIndex = Math.floor(inputArr.length/2);
          let midElement = inputArr[ midIndex ]

          console.log(inputArr, midIndex, midElement)

          if (midElement === target) {
                  console.log("epa")
              return true
          } else {

              if (target > midElement) {
                  return binSearch( inputArr.slice( midIndex+1, inputArr.length), target)
                 
              } else {
                   return binSearch( inputArr.slice( 0, midIndex), target)
              }

          }




      }

  }
  
  let found = false
  console.log(matrix,"matrix")
  for (let arr of matrix) {
      console.log( "vai", arr)
      if (binSearch( arr, target)) {
          console.log( "jdnsajksadn")
          found = true;
           
          break
           
      }
  }


  return found
  
};


console.log( searchMatrix([ [ 1, 3, 5, 7 ], [ 10, 11, 16, 20 ], [ 23, 30, 34, 60 ] ], 3))