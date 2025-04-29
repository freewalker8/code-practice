/**
 * 题目描述
单词接龙的规则是：

可用于接龙的单词首字母必须要前一个单词的尾字母相同；

当存在多个首字母相同的单词时，取长度最长的单词，如果长度也相等，则取字典序最小的单词；已经参与接龙的单词不能重复使用。

现给定一组全部由小写字母组成单词数组，并指定其中的一个单词作为起始单词，进行单词接龙，

请输出最长的单词串，单词串是单词拼接而成，中间没有空格。

输入描述
输入的第一行为一个非负整数，表示起始单词在数组中的索引K，0 <= K < N ；

输入的第二行为一个非负整数，表示单词的个数N；

接下来的N行，分别表示单词数组中的单词。

备注：

单词个数N的取值范围为[1, 20]；
单个单词的长度的取值范围为[1, 30]；
输出描述
输出一个字符串，表示最终拼接的单词串。

示例1
输入

0
6
word
dd
da
dc
dword
d

输出

worddwordda
1
说明

先确定起始单词word，再接以d开头的且长度最长的单词dword，剩余以d开头且长度最长的有dd、da、dc，则取字典序最小的da，所以最后输出worddwordda。
 */

function  wordChain(startIndex, wordList) {
  function findNextWord(startChar, words) {
    const nextWords = words.filter(word => word[0] === startChar);
    if (nextWords.length === 0) {
      return null;
    } else if (nextWords.length === 1) {
      return nextWords[0];
    } else {
      let maxWord = '';
      let maxLen = 0;
      nextWords.forEach(word => {
        if (word.length > maxLen) {
          maxWord = word;
          maxLen = word.length;
        } else if (word.length === maxLen) {
          // 字典序小的优先
          if (word < maxWord) {
            maxWord = word;
          }
        }
      });

      return maxWord;
    }
  }
  
  let result = wordList[startIndex];
  wordList.splice(startIndex, 1);

  while (true) {
    const nextWord = findNextWord(result.substr(-1), wordList);
    if (!nextWord) {
      break;
    }
    wordList.splice(wordList.indexOf(nextWord), 1);
    result += nextWord;
  }

  return result;
}

// test

console.log(wordChain(0, ['word', 'dd', 'da', 'dc', 'dword', 'd'])); // worddwordda
console.log(wordChain(4, ['word', 'dd', 'da', 'dc', 'dword', 'd'])); // dwordda
