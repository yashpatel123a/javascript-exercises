const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const temp = str
                .toLowerCase()
                .split('')
                .filter((char) => alphanumerical.includes(char))
                .join('');
    const reverse = temp.split('').reverse().join('');
    return reverse === temp;
};

// Do not edit below this line
module.exports = palindromes;
