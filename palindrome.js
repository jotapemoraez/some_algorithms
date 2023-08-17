//longest pal
var longestPalindrome = function(str) {
    var biggestPal = ""
    var biggestLen = 0

    if (str.length === 1)
        return str
    for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {
        var temp = str.slice(i, j)
        if ( temp.length > biggestLen && isPal(temp))  {

            biggestPal = temp
            biggestLen = temp.length
        }
          
      }
  }

  return biggestPal
};

function isPal(str) {
    var isPal = true
    for (var i = 0; i< str.length/2; i++) {
      if (str.charAt(str.length - i - 1) !== str.charAt(i) ) {
        isPal = false
        i = str.length
      }

    }
    return isPal
}