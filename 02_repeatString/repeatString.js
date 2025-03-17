const repeatString = function(str, num) {
    let answer = ""
    if(num < 0)
        return "ERROR";
    while(num > 0)  
    {
        answer += str;
        num--;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
