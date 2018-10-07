function translate(sentence) {
  const vowels = ["a", "e", "i", "o", "u", "y"];

  function changeWord(word) {
    let isPigLatin = false;
    let i = 0;
    let processedWord;
    while (isPigLatin === false) {
      const letter = word.charAt(i);
      if (Array.from(letter).includes(vowels) === false) {
        processedWord = `${word}ay`;
        isPigLatin = true;
        i += 1;
      }
      console.log(`${letter} is a conson`);
    }
    return processedWord;
  }
  sentence.split(" ").forEach(word => {
    changeWord(word);
  });
  //  .join(" ");
}

console.log(translate("aya bitche"));

/* module.exports = {
  translate
}; */
