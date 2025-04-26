function countLetterOfString(str, letter) {
  let count = str.split('').filter(item => item.toLowerCase() === letter.toLowerCase()).length;
  
  return count;
}

// test
console.log(countLetterOfString('hello world', 'l')); // 3