const findTheOldest = function(arr) {
    const d = new Date();
    arr.sort((a, b) => {
        if(a.yearOfDeath === undefined)
                a.yearOfDeath = d.getFullYear();
        if(b.yearOfDeath === undefined)
            b.yearOfDeath = d.getFullYear();   
        let aYear = a.yearOfDeath - a.yearOfBirth;
        let bYear = b.yearOfDeath - b.yearOfBirth;
        return bYear - aYear;
    });

    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
