/**
 * 求字符串最后一个单词的长度
 */

function lastWordLenOfString(str) {
  if (!str) {
    return 0;
  }
  let arr = str.split(' ');
  return arr[arr.length - 1].length;
}

// test
console.log(lastWordLenOfString('hello world'));