//let's learn about ASCII :
/*The ASCII standard covers 128 characters including:
Uppercase and lowercase English letters (A-Z, a-z).
Numbers (0-9).
Common punctuation marks and symbols (!, @, #, and so on).
Control characters (such as newline and tab).
*/
//While JavaScript strings use Unicode (UTF-16) internally,
// ASCII values match the first 128 Unicode characters,
// which is why ASCII-based examples work in JavaScript.

//upper-case
let val = "A";
console.log(val.charCodeAt(0)); // 65

//small-case
let val1 = "a";
console.log(val1.charCodeAt(0)); // 97

//symbols
let symbol = "!";
console.log(symbol.charCodeAt(0)) // 33



// the fromCharCode is use to convert the number to ASCII Character
let value = String.fromCharCode(65);
console.log(value); // A

let value1 = String.fromCharCode(66)
console.log(value1) //a



