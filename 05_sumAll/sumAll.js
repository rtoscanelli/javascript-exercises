const sumAll = function(min, max) {

    if ((min < 0) || (max < 0)) { return 'ERROR'; }
    if (!Number.isInteger(min) || !Number.isInteger(max)) { return 'ERROR'}

    let sum = 0;

    if (min > max) {
        const a = min;
        min = max;
        max = a;
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
