console.log("Hello Abhiram Sai");

// setTimeout(function () {
//     console.log("This is delayed 3 seconds");
// }, 3000);

let button = document.getElementById("clickme");
button.addEventListener("click", function () {
    console.log("Button clicked");
});

function add(callback) {
    console.log("Hello Abhiram");
    callback();
}

function greet() {
    console.log("Welcome to JavaScript");
}

add(greet);

// calculate(10, 5, add);
// calculate(10, 5, multiply);
// calculate(10, 5, subtract);

function calculation(a, b, callback) {
    
}

function add() {
    return ;
}
calculation(10, 5, add);

