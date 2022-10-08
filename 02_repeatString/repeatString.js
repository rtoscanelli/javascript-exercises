const repeatString = function(str, repeat) {
    if (repeat < 0){
        return 'ERROR'
    }
    
    let res = '';
    for (let i = 0; i < repeat; i++) {
        res = res + str;
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
