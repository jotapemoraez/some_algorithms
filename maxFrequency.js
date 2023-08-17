function maxFrequency(arr) {


    var maxFrequency = 0
    var maxElement = -1
    var map = new Map()

    for (var i = 0; i < arr.length; i++) {
        
        var element = arr[i]

        if (map.get(element)) {
            map.set(element, map.get(element) + 1)
        } else {
            map.set(element, 1)
        }

        if (map.get(element) > maxFrequency) {
            maxFrequency = map.get(element)
            maxElement = element
        }

    }

    return maxElement

}

console.log(maxFrequency([3,3,3,4,4,4,4]))