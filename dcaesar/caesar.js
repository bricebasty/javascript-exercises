const caesar = function(string, number) {
    let result = "";
    const mod = (n, m) => (n % m + m) % m;
	  for (let i = 0; i < string.length; i++) {
		  let c = string.charCodeAt(i);
		  if      (c >= 65 && c <=  90) result += String.fromCharCode(mod((c - 65 + number), 26) + 65);  // Uppercase
		  else if (c >= 97 && c <= 122) result += String.fromCharCode(mod((c - 97 + number), 26) + 97);  // Lowercase
		  else                          result += string.charAt(i);  // Copy
	  }
	  return result;
}

module.exports = caesar
