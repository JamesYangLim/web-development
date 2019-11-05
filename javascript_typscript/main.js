"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
/////////////////////
///////////// Variable declaration
/////////////////////
var x = 10;
var y = 20;
var sum;
var t = "try";
// const a; error!
/////////////////////
///////////// Variable types
/////////////////////
// boolean, number and string
var isTrue = true;
var total = 0;
var name = "Johnson";
// name = true; error!
var sentence = "My name is " + name;
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3, 4, 5];
var list2 = [6, 7, 8, 9, 10];
console.log(list1);
console.log(list2);
var person1 = ['Chris', 22];
console.log(person1);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 5325] = "Blue";
})(Color || (Color = {}));
;
var sea = Color.Blue;
console.log(Color);
console.log("Sea is " + sea + " color");
var randomValue = 20;
randomValue = false;
randomValue = "What?";
console.log(randomValue);
var myVar = 534;
console.log(myVar.name);
// myVar(); exception thrown
// myVar.toUpperCase(); exception thrown
var myVar2 = 534;
// (myVar2 as string).toUpperCase(); exception thrown
console.log(myVar2);
function hasName(obj) {
    return !!obj && typeof obj == "object" && "name" in obj;
}
// console.log(myVar2.name); error!
if (hasName(myVar2)) {
    console.log(myVar2.name);
}
/////////////////////
///////////// Type inference
/////////////////////
// like javascript, untype variable
var a;
a = 10;
a = true;
var b = 20; // b inferred as number type
// b = true; error
var c;
c = 300;
c = false;
// any type can be anything
var d;
d = 500;
d = true;
d = c;
/////////////////////
///////////// functions
/////////////////////
function add(lhs, rhs) {
    return lhs + rhs;
}
function addNumbers(lhs, rhs) {
    return lhs + rhs;
}
addNumbers(10, 20); // add(number, number) : number 
add(10, 20); // add(any, any)
// optional parameter
function optionalAdd(lhs, rhs) {
    if (rhs)
        return lhs + rhs;
    else
        return lhs;
}
optionalAdd(300);
optionalAdd(300, 300);
// default parameter
function add2(lhs, rhs) {
    if (rhs === void 0) { rhs = 10; }
    return lhs + rhs;
}
add2(200);
add2("helo");
/////////////////////
///////////// Interface
/////////////////////
// function fullName(person: { firstName: string, lastName: string }) {
//     console.log(`${person.firstName}, ${person.lastName}`);
// }
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
function fullName(person) {
    console.log(person.firstName + ", " + person.lastName);
}
fullName(p);
/////////////////////
///////////// Classes
/////////////////////
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning, " + this.name + "!");
    };
    return Employee;
}());
var emp1 = new Employee('Vishwas');
console.log(emp1.name);
console.log(emp1.greet());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.delegateWork = function (emp) {
        console.log("Manager delegate task to " + emp.name);
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork(emp1);
m1.greet();
