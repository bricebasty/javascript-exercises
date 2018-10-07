function translate(sentence) {
  function changeWord(word) {
    let processedWord = word;
    let syllabus = "";
    let isPigLatin = false;
    for (let i = 0; isPigLatin === false; i += 1) {
      const letter = word.charAt(i);
      if (letter.match(/a|e|i|o|u|y/i) !== null) {
        isPigLatin = true;
      } else {
        processedWord = word.slice(i + 1);
        syllabus += letter;
      }
    }
    if (isPigLatin === true) {
      processedWord += `${syllabus}ay`;
    }
    return processedWord;
  }

  sentence
    .split(" ")
    .map(element => changeWord(element))
    .join(" ");

  return sentence;
}

console.log(translate("schbitch"));

/* module.exports = {
  translate
}; */
