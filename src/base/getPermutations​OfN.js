/**
 * 题目描述
给定参数n，从1到n会有n个整数：1,2,3,…,n,这n个数字共有n!种排列。

按大小顺序升序列出所有排列的情况，并一一标记，

当n=3时,所有排列如下:

“123” “132” “213” “231” “312” “321”

给定n和k，返回第k个排列。

输入描述
输入两行，第一行为n，第二行为k，
给定n的范围是[1,9],给定k的范围是[1,n!]。
输出描述
输出排在第k位置的数字。

示例1
输入

3
3

输出

213

说明

3的排列有123,132,213…,那么第三位置就是213
 */

function nFactorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * nFactorial(n - 1);
}

function getPermutation(n, k) {
  if (n < 1 || n > 9) {
    return;
  }
  if (k < 1 || k > nFactorial(n)) {
    return;
  }
  // 获取参与排列组合的数字
  let nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  
  let result = [];
  function genPermutations(nums, current, k) {
    if (nums.length === 0) {
      result.push(current);
      return;
    }
    let i = 0;
    // 获取排列组合结果
    while(i < nums.length) {
      let num = nums[i];
      const newNums = nums.slice(0, i).concat(nums.slice(i + 1));
      genPermutations(newNums, current + num, k);
      // 获取到第k个排列组合结果
      if (result.length === k) {
        return;
      }
      i++;
    }
  }

  genPermutations(nums, '', k);

  result.sort();

  console.log(result);

  return result[k - 1];
}

// test
console.log(getPermutation(3, 3)); // 213
console.log(getPermutation(2, 2)); // 21
