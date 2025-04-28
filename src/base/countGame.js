/**
 * 题目描述
100个人围成一圈，每个人有一个编码，编号从1开始到100。

他们从1开始依次报数，报到为M的人自动退出圈圈，然后下一个人接着从1开始报数，直到剩余的人数小于M。

请问最后剩余的人在原先的编号为多少？

输入描述
输入一个整数参数 M

输出描述
如果输入参数M小于等于1或者大于等于100，输出“ERROR!”；

否则按照原先的编号从小到大的顺序，以英文逗号分割输出编号字符串

示例1
输入

3
1
输出

58,91
 */

function countGame(num, persions = 100) {
  if (num <= 1 || num >= 100) {
    return 'ERROR!';
  }
  let personNums = [];
  let i = 0;
  while (i < persions) {
    personNums.push(i + 1);
    i++;
  }

  function _escape(num) {
    if (personNums.length < num) {
      return personNums.sort((a, b) => a - b);
    }
    for (let i = 1; i <= personNums.length; i++) {
      if (i === num) {
        personNums = personNums.slice(i).concat(personNums.slice(0, i - 1));
        _escape(num);
      }
    }
  }

  _escape(num);

  console.log(personNums.join(','));
}

// test
countGame(3); // 58,91
countGame(4); // 34,45,97