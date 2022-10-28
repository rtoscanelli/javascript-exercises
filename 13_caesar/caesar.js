const caesar = function(str, shift) {

    let codedStr = '';
    let charUnicode = '';
    let newChar = '';

    for (const i in str) {
        if ('a' <= str[i] && str[i] <= 'z') {
            charUnicode = str.charCodeAt(i);
            newChar = String.fromCharCode(((charUnicode - 96 + shift)%26 + 26)%26 + 96);
            codedStr += newChar; 
        }
        else if ('A' <= str[i] && str[i] <= 'Z') {
            charUnicode = str.charCodeAt(i);
            newChar = String.fromCharCode(((charUnicode - 64 + shift)%26 + 26)%26 + 64);
            codedStr += newChar;
        }
        else {
            codedStr += str[i];
        }
    }

    return codedStr;

};

console.log(caesar('Mjqqt, Btwqi!', -5));

// Do not edit below this line
module.exports = caesar;
