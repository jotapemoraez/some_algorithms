

function maxCountWellFormed(str) {
   let totalCount = 0
   function traversal(input) {
        var newInput = ""
        let start = input.indexOf("(")
        
        console.log( input , totalCount)
        if (start !== -1) {

            newInput = removeElement(input, start)

            let end = newInput.indexOf(")")

            if (end === -1)
                return

            newInput = removeElement(newInput, end)
            
            totalCount+=2
            traversal(newInput)
            
        } else {
            return
        }

        

       
   }

   traversal(str)

   return totalCount
}

function optimal( input) {

    var leftPar = 0
    var rightPar = 0

    for (let element of input) {

        if (element == "(")
            leftPar++
        if (element == ")")
            rightPar++

    }

    var min = Math.min(leftPar, rightPar)

    return min*2

}

console.log(optimal("(()))") )

function removeElement(input, start) {

    return input.slice(0, start) + input.slice(start+1, input.length)
}

