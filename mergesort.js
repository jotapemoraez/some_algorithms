function merge(list) {

  if (list.length === 1) {
    return [list[0]]
  }

  else {
    let firstList = merge(list.slice(0, Math.floor(list.length/2)));
    let secondList = merge(list.slice( Math.floor(list.length/2 ), list.length))
    let i = 0, j = 0;
    let result = [], tempList = []

    while ( i < firstList.length && j < secondList.length) {
      if (firstList[i] < secondList[j]) {

        result.push(firstList[i++])

      } else {
        result.push(secondList[j++])
      }
    }

    if (i == firstList.length) {
      i = j;
      tempList = secondList;
    } else {
      tempList = firstList;
    }

    while (i < tempList.length) {
      result.push(tempList[i++])
    }



    return result;
  }


}

console.log(merge([5,3,4,1,2]))