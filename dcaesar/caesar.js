const caesar = function(string, number) {
    var result = "";
    const mod = (n, m) => (n % m + m) % m;
	  for (var i = 0; i < string.length; i++) {
		  var c = string.charCodeAt(i);
		  if      (65 <= c && c <=  90) result += String.fromCharCode(mod((c - 65 + number), 26) + 65);  // Uppercase
		  else if (97 <= c && c <= 122) result += String.fromCharCode(mod((c - 97 + number), 26) + 97);  // Lowercase
		  else                          result += string.charAt(i);  // Copy
	  }
	  return result;
}

module.exports = caesar
