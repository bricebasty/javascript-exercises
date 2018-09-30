const snakeCase = function(string) {
  return processedString = string.toLowerCase().replace(/\s/g, "_").replace(/[A-Z]/g, "_");
}

module.exports = snakeCase
