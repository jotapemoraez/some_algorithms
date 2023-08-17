
class Dictionary {

    constructor(arr) {

        const wordMap = arr.reduce( (acc, word) => 
        {acc[word] = word
            return acc
        }, {})

        console.log(wordMap)

        this.dict = arr
    }


    isInDict(word) {

        return this.dict.some( (dictWord) => {
            const regexTemplate = word.replaceAll( '*', '.')
            const regex = new RegExp( `^${regexTemplate}`)
            return regex.test(dictWord)

        })

        //return this.dict.has(word)

    }

}

var map = new Dictionary([ '*aat', 'car', 'bar'])



console.log(map.isInDict('aa'))