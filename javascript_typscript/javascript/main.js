/*
Run javascript with node. e.g. $ node main.js
*/
console.log('Hello world!');

/*
Data Types:
undefined, null, boolean, string, symbol, number, and object
*/
var myName = "Johnathan"; // can be used throughout the code
myName = 29;
let name = "freeCodeCamp"; // can only be used within a scope
const pi = 3.14159265; // constant cannot be changed

/*
Quotes
*/
var str = 'Hello "World"!';
var str2 = `'Hello "World!"'`;
console.log(str);
console.log(str2);

/*
escape character
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/
str = "abc \f sbe";
console.log(str);
str = "abc \b\b sbe";
console.log(str);
str = "abc \r sbe";
console.log(str);
console.log(str.length);


/*
immutability of string
*/
var myStr = "Jello world!";
myStr[0] = "H";
console.log(myStr);
myStr = myStr.replace("J", "H");
console.log(myStr);
