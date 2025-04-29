/**
 * 题目描述
给定一个单链表 L，请编写程序输出 L 中间结点保存的数据。

如果有两个中间结点，则输出第二个中间结点保存的数据。

例如：

给定 L 为 1→7→5，则输出应该为 7；
给定 L 为 1→2→3→4，则输出应该为 3。
输入描述
每个输入包含 1 个测试用例。每个测试用例:

第 1 行给出链表首结点的地址、结点总个数正整数 N (≤105)。

结点的地址是 5 位非负整数，NULL 地址用 −1 表示。

接下来有 N 行，每行格式为：

Address Data Next 
1
其中 Address 是结点地址，Data 是该结点保存的整数数据(0 ≤ Data ≤ 108)，Next 是下一结点的地址。

输出描述
对每个测试用例，在一行中输出 L 中间结点保存的数据。

如果有两个中间结点，则输出第二个中间结点保存的数据。

( 如果奇数个节点取中间，偶数个取偏右边的那个值)

示例1
输入

00010 4
00000 3 -1
00010 5 12309
11451 6 00000
12309 7 11451

输出

6
 */

function printMiddleNode(head, chians) {
  const chiansSort = [];
  let nextPoint = head;
  function findNextChain(point) { 
    for (let i = 0; i < chians.length; i++) {
      const [address, data, next] = chians[i].split(' ');
      if (address === point) {
        return {
          address,
          data,
          next
        };
      }
    }

    return null;
  }

  while (nextPoint) {
    const { address, data, next } = findNextChain(nextPoint) || {};
    if (next) {
      chiansSort.push({ address, data, next });
    }
    nextPoint = next;
  }

  // 偶数取中间，奇数取偏右边的值，下标都等于Math.floor(chiansSort.length / 2)
  return chiansSort[Math.floor(chiansSort.length / 2)].data;
}

// test

console.log(printMiddleNode('00010', ['00000 3 -1', '00010 5 12309', '11451 6 00000', '12309 7 11451'])); // 6
console.log(printMiddleNode('10000', ['76892 7 12309', '12309 5 -1', '10000 1 76892'])); // 7