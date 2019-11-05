/////////////////////
///////////// Initial
/////////////////////
export {}
let message = 'Welcome back';
console.log(message);


/////////////////////
///////////// Variable declaration
/////////////////////
let x = 10;
const y = 20;

let sum;
const t = "try"
// const a; error!


/////////////////////
///////////// Variable types
/////////////////////

// boolean, number and string

let isTrue: boolean = true;
let total: number = 0;
let name: string = "Johnson";
// name = true; error!

let sentence: string = `My name is ${name}`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;
let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3,4,5];
let list2: Array<number> = [6,7,8,9,10];
console.log(list1);
console.log(list2);

let person1: [string, number] = ['Chris', 22];
console.log(person1);

enum Color {Red, Green, Blue=5325};
let sea = Color.Blue;
console.log(Color);
console.log(`Sea is ${sea} color`);

let randomValue: any = 20;
randomValue = false;
randomValue = "What?";
console.log(randomValue);

let myVar: any = 534;
console.log(myVar.name);
// myVar(); exception thrown
// myVar.toUpperCase(); exception thrown

let myVar2: unknown = 534;
// (myVar2 as string).toUpperCase(); exception thrown
console.log(myVar2);

function hasName(obj: any): obj is { name: string } {
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
let a;
a = 10;
a = true;

let b = 20; // b inferred as number type
// b = true; error

let c: number | boolean;
c = 300;
c = false;

// any type can be anything
let d: any;
d = 500;
d = true;
d = c;


/////////////////////
///////////// functions
/////////////////////

function add(lhs, rhs) {
    return lhs + rhs;
}

function addNumbers(lhs: number, rhs: number) {
    return lhs + rhs;
}

addNumbers(10,20); // add(number, number) : number 
add(10,20); // add(any, any)

// optional parameter
function optionalAdd(lhs, rhs?) {
    if (rhs) return lhs + rhs;
    else     return lhs;
}

optionalAdd(300);
optionalAdd(300, 300);

// default parameter
function add2(lhs, rhs=10) {
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

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};

// fullName(p);

interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName}, ${person.lastName}`);
}
fullName(p);


/////////////////////
///////////// Classes
/////////////////////

class Employee {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log(`Good morning, ${this.name}!`);
    }
}

let emp1 = new Employee('Vishwas');
console.log(emp1.name);
console.log(emp1.greet());

class Manager extends Employee {

    constructor(name: string) {
        super(name); // call base class;
    }

    delegateWork(emp: Employee) {
        console.log(`Manager delegate task to ${emp.name}`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork(emp1);
m1.greet();