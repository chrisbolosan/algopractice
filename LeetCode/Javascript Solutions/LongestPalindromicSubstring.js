// Given a string s, return the longest palindromic substring in s.
//Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"
const longestPalindrome = function (s) {
  let max = '';
  for (let i = 0; i < s.length; i++) {
    for (const j of [0, 1]) {
      let left = i;
      let right = i + j;
      while (left >= 00 && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
    if (Math.ceil(max.length / 2) >= s.length - i) break;
  }
  return max;
};
