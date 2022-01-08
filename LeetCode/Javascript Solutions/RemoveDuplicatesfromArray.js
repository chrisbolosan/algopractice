//leetcode #26 Remove Duplicates from Sorted Array
const removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums.length;
  const i = 0;
  for (let j = 1; j <= nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    }
  }
  return i;
};
