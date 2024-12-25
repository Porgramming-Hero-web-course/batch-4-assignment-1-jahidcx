{
    // problem 3

    const countWordOccurrences = (sentence: string, word: string): number => {
        const wordsArray = sentence.split(' ');
        // console.log(wordsArray);

        const count = wordsArray.reduce((acc, currentWord) => {
            return currentWord === word ? acc + 1 : acc
        }, 0)

        return count; 

    }


    // const wordCount = countWordOccurrences("I love typescript . How are you typescript ?", "typescript");
    // console.log(wordCount);












}