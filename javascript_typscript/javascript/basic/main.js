/*
Run javascript with node. e.g. $ node main.js
*/
console.log('Hello world!');

/*
Data Types:
undefined, null, boolean, string, symbol, number, and object
*/
var myName = "Johnathan"; // can be used throughout the while program
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


/*
functions
*/

function wordBlanks(myNoun, myAdjactive, myVerb, myAdverb) {
  return "The " + myAdjactive + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));
 
function foo(a, b) {
  console.log(a + b);
}

foo("abc", "abc");
foo(34, 345);

var c = "C";
function foo2() {
  var c = "foo C";
  return c;
}

console.log(foo2());
console.log(c);

function foo3(isTrue) {
  if (isTrue) console.log("True");
  else console.log("False");
}

foo3("sfsdf");


// Array
var arr = ["John", 142];
console.log(arr);

// Nested array
arr = ["John", 142, ["wow", 3.23, ["my"]]];
console.log(arr);
console.log(arr[2]);
console.log(arr[2][2]);
arr[2] = "Override";
console.log(arr[2]);
arr.push([true, ["holyshit", 1231], "really!?", [6.34]]); // add element to the end of the array
console.log(arr);
var popElement = arr.pop();  // pop the end element out of the array
console.log(arr);
console.log(popElement);
var shiftElement = popElement.shift(); // pop the beginning element out of the array
console.log(popElement);
console.log(shiftElement);
popElement.unshift(shiftElement); // add element to the beginning of the array
console.log(popElement);


/*
Strict equality operator (===)
*/
console.log( 3 == '3' );
console.log( 3 == 3 );
console.log( 3 === '3' );
console.log( 3 === 3 );
console.log( 3 !== '3' );
console.log( 3 < '4' );
console.log( 3 > '4' );
console.log( 3 <= '4' );
console.log( 3 >= '4' );


/*
Math
*/

function abTest(a, b) {
  if (a < 0 || b < 0) return undefined;
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));

/*
Javascript objects
*/
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};