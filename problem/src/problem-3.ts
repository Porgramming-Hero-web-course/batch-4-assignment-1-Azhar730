{
  const countWordOccurrences = (sentence: string, word: string): number => {
    const wordFromSentence = sentence.toLowerCase().split(" ");
    const targetedWord = word.toLowerCase();
    const filteredWord = wordFromSentence.filter(
      (word) => word === targetedWord
    );
    const countWord = filteredWord.length;
    return countWord;
  };
  const result = countWordOccurrences("I love typescript i want typescript", "typescript");
  console.log(result);
}