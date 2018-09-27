const palindromes = function(palin) {
  palin = palin.replace(/[^a-zA-Z0-9]/g).toLowerCase();
  return (palin.split("").reverse().join("") === palin ? true : false);
}

module.exports = palindromes

let palin = "Animal loots foliated detail of stool lamina.";
palin = palin.replace(/[^a-zA-Z0-9]/g).toLowerCase();
return (palin.split("").reverse().join("") === palin ? true : false);