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
    for (let index = 0; index <= word.length; index += 1) {
      const letter = word.charAt(index);
      console.log("OK1");
      if (word.some(word.includes(vowels)) === true) {
        word += "ay";
      }
    }
  }

  sentence
    .split(" ")
    .forEach(word => {
      changeWord(word);
    })
    .join();
}

/* module.exports = {
  translate
}; */
