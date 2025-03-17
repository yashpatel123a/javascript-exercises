const reverseString = function(str) {
    let ans = str.split("");
    ans = ans.reverse();
    ans = ans.join("");
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
