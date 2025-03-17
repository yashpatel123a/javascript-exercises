const sumAll = function(start, finish) {
    if (!Number.isInteger(start) || !Number.isInteger(finish))
        return "ERROR";

    if(start < 0 || finish < 0)
        return "ERROR";
    if(finish <start)
    {
        let temp = start;
        start = finish;
        finish = temp;
    }
    let answer = 0;
    for(let i = start;i<=finish;i++)
    {
        answer += i;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;
