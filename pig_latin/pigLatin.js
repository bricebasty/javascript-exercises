function translate(sentence) {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "z"
  ];

  function changeWord(word) {
    let isPigLatin = false;
    let i = 0;
    while (isPigLatin === false) {
      const letter = word.charAt(i);
      if (Array.from(letter).includes(vowels) === false) {
        word += "ay";
        isPigLatin = true;
        i += 1;
      } else {
        console.log(`${letter} is a conson`);
      }
    }
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
