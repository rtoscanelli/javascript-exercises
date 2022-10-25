const reverseString = function(str) {
    
    let reverse = ''

    for(let i = str.length - 1; i >= 0; i--){
        reverse += str[i];
    }

    return reverse;
}

const removeFromArray = function(array, ...args) {

    return array.filter(x => !args.includes(x))
};

// Exercise:

const palindromes = function (str) {

    str = str.toLowerCase();
    let str_list = str.split("");
    const rev_str = reverseString(str);
    let rev_str_list = rev_str.split("");
    
    str_list = removeFromArray(str_list, "!", ",", ".", "?", " ");
    rev_str_list = removeFromArray(rev_str_list, "!", ",", ".", "?", " ");

    for (const i in str_list) {
        if (str_list[i] != rev_str_list[i]) { return false; }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
