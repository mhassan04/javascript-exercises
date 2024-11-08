const palindromes = function (word) {
 const alphabetsandnums = 'qwertyuiopasdfghjklzxcvbnm1234567890';

 const newString = word.toLowerCase().split('').filter((character) => alphabetsandnums.includes(character)).join('');

 const reversedString = newString.split('').reverse().join('');

 return newString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
