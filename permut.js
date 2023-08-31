


let val = 0
  function permut(values) {
    let returnValue = [];
    if (values.length === 2) {
      return [ [values[0], values[1] ], [values[1], values[0] ]]
    }

    for (let i = 0; i < values.length; i++) {

      const clone = [...values]

      const element = clone.splice(i, 1);


      const subLists = permut(clone);
     
      const mappedSubLists = subLists.map( subList =>  {
        subList.push( element[0])
        return subList;
        val++
      })

      for (let mappedSubList of mappedSubLists) {
        returnValue.push(mappedSubList)
        val++
      }
      

    }
    return returnValue;
    

  }


console.log(permut([1,2,3]))
console.log(val)
