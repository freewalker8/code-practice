/**
 * 连续的数字最大长度
 * 题目描述
近些年来，我国防沙治沙取得显著成果。某沙漠新种植N棵胡杨（编号1-N），排成一排。

一个月后，有M棵胡杨未能成活。

现可补种胡杨K棵，请问如何补种（只能补种，不能新种），可以得到最多的连续胡杨树？

输入描述
N 总种植数量，1 <= N <= 100000

M 未成活胡杨数量，M 个空格分隔的数，按编号从小到大排列，1 <= M <= N

K 最多可以补种的数量，0 <= K <= M

输出描述
最多的连续胡杨棵树
 */

/**
 * 
 * @param {number} len 种植数量
 * @param {Array<number>} disabledNumsPosition 未存活的胡杨位置
 * @param {number} fixMount 允许补种的数量
 * @returns {number} 最大连续胡杨数
 */
function maxContinuousNums(len, disabledNumsPosition, fixMount) {
  const nums = new Array(len).fill(0); // 0 表示合规

  for (let i = 0; i < disabledNumsPosition.length; i++) {
    nums[disabledNumsPosition[i] - 1] = 1; // 标记不合规
  }

  let left = 0; // 滑动窗口左边界
  let leftSum = 0; // 左滑动窗口边界内未存活数量
  let rightSum = 0; // 右滑动窗口边界内未存活数量
  let maxLen = 0; // 最大连续胡杨数

  for (let right = 0; right < len; right++) {
    rightSum += nums[right]; // 右滑动边界内未存活数量
    // 窗口内未存活数量大于可补种数量，则左滑动窗口边界向右移动
    while(rightSum - leftSum > fixMount) {
      leftSum += nums[left]; // 左滑动边界内未存活数量
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}

// test

console.log(maxContinuousNums(5, [2,4], 1)); // 3
console.log(maxContinuousNums(5, [2,4], 2)); // 5