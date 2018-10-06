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
    let isPigLatin;
    for (let index = 0; index < 5 word.length; index += 1) {
      const letter = word.charAt(index);
      if (letter.includes(vowels) === false) {
        word += "ay";
        isPigLatin = true;
      } else {
        console.log(`${letter} is a conson`);
      }
    };
  }

  sentence.split(" ").forEach(word => {
    changeWord(word);
  });
  //  .join(" ");
}

// console.log(translate("aya bitche"));

/* module.exports = {
  translate
}; */
