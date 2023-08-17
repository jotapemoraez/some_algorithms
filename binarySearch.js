function doBinSearch(arr, num) {


    var midElement = arr[ Math.floor(arr.length/2)]

    if (arr.length === 1) {
        return (midElement === num ) ?  num : "not found"
    }
    console.log(arr.length)
    if (num === midElement) {
        return num
    } else if (num > midElement) {

        return doBinSearch(arr.slice(arr.length/2, arr.length), num)

    } else {

        return doBinSearch(arr.slice(0, arr.length/2), num)

    } 

}

console.log(doBinSearch( [1,10,30,40,100], 30))

