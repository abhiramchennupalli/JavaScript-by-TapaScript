console.log('Day 6: Mastering Functions');
//function declaring
function printName() {
    console.log("Abhiram Sai Chennupalli");
}

//function calling
printName();

//-----------------

//function as expressing

let printExpression = function () {
    console.log("Naga ruchitha Ravuri");
}

console.log(printExpression());

let sum = function () {
    console.log(2 + 5);
}

console.log(sum());

//passing paramenters and arguments

let addition = function (a, b) {
    sum = a + b;
    console.log(sum);
}

console.log(addition(3, 5));

// return

function add(a, b) {
    return a + b;
}


console.log(add(4, 4));
//

let number = function (x) {
    return 2 * x;
}
let doubleNumber = number(5);

let threeTimes = function (y) {
    return doubleNumber * y;
}
console.log(threeTimes(10));

function restParameters(a, b, c, ...rest) {
    console.log(a, b, c, ...rest);
}
restParameters(1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0);


// nested function

function outer() {
    console.log('Outer function');

    return function inner() {
        console.log('Inner function');
    }

}
outer();
let innerf = outer();

console.log(innerf());












//call back function





function myFunc(val) {
    console.log(val(), "Customized function");

}

function callBack() {
    console.log("I am callback function");
    return "called";
}

myFunc(callBack);

///

function abhi(value) {
    console.log(value());
}

function ruchitha() {
    console.log("Ravuri Naga Ruchitha");
    return;
}

abhi(ruchitha);

let naming = () => {
    console.log("Hello world");
}

naming();