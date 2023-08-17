function encodeHash(str) {

    var map = new Map();

    for (let charactere of str) {

        if (map.has(charactere)) {
            map.set(charactere, map.get(charactere) + 1)
        } else {
            map.set(charactere, 1)
        }

    }

    let result = "";

    for (let [key, value] of map) {

        result += value+key;

    }

    return result;

}

function encode(str) {


    let past = str[0], count = 0, result='';
    for (let charactere of str) {

        if (charactere === past) {
            count++;
        } else {
            result += count+past;
            count = 1;
        }
        past = charactere;

    }

    result += count+charactere;

    return result;
}

console.log(encode("aaaabbccaaaaaaa"))