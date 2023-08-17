function countSubstrings(input, substr) {
  let count = 0;
  for (let i = 0; i < input.length; i += 1 ) {

    const temp = input.slice(i , i + substr.length);
    console.log(i , substr.length, temp)

    if (temp === substr) {

      count ++;
    }

  }


  return count;

}

function maxWord(input) {

  const words = input.split(' ');
  let map = {};
  let max = 0;
  let maxWord = '';

  for (const word of words) {
     
    map[word] ??= 0;
    map[word] ++;

    if (map[word] > max) {
      max = map[word];
      maxWord = word;
    }

  }

  return maxWord

}

function percentageOfLetters(input, letter) {

  //get total count
  //get total letter count in input

  let count = 0;
  let position = input.indexOf(letter);

  while (position !== -1) {
    count++;
    position = input.indexOf(letter, position+1);

  }

  return Math.round((count/input.length)*100);
  

}


console.log(percentageOfLetters("foobar", "f"))