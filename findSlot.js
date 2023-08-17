function getIntersection(arrA, arrB, duration) {

    var minEnd = Math.min( arrA[1], arrB[1])

    var maxStart = Math.max(arrA[0], arrB[0])

    var gap = minEnd - maxStart

    if (gap >= duration) {

        return [maxStart, maxStart+duration]
    }
    
    return []

}

function getTimeWindow(slotsA, slotsB, duration) {

   for (let elementA of slotsA) {
        
       for (let elementB of slotsB) {
            
            var intersection = getIntersection(elementA, elementB, duration)
            
            if (intersection.length > 0)
                return intersection

        }
        
    }

    return []


}


console.log( getTimeWindow([ [1,5], [10,15], [20, 26], [50,67]],
     [[1,2], [10,15], [16,22],[60,70]] , 8))