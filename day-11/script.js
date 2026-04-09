console.log("Day-11 Closure in Js");

function outer() {
    let x = 10;
    return function inner() {
        console.log(x);
    }



}

let funct = outer();
console.log(funct());
//----

function outerCount() {
    let count = 11;

    return function () {
        count++;
        console.log(count);
    }
}

let returnValue = outerCount();
returnValue();
returnValue();



//Small Bank Application

// function createBankAccount(initialBalance) {

//     let balance = initialBalance;

//     return function deposit(amount) {
//         balance = balance + amount;

//         console.log("Deposited", amount, "Currenr Balance", balance);
//     }
// }

// const abhiRamAmount = createBankAccount(100);

// abhiRamAmount(200);
// abhiRamAmount(500);
// abhiRamAmount(1000);

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {


        deposit: (amount) => {
            balance = balance + amount;
            console.log("Deposited ", amount, " Current Balance ", balance);
        },



        withdraw: (amount) => {
            if (amount > balance) {
                console.warn("Insifficient Fund");
            } else {
                balance = balance - amount;
                console.log("Withdrawn ", amount, " Current Balance ", balance);
            }
        },

        
        
        checkBalance: () => console.log("Current Balance", balance),
    };
}

const tapaScriptAccount = createBankAccount(100);

console.log(tapaScriptAccount)

console.log(tapaScriptAccount.deposit(300)); // 400
day-11/script.js
console.log(tapaScriptAccount.withdraw(50)); // 350

console.log(tapaScriptAccount.withdraw(20)); // 330

console.log(tapaScriptAccount.withdraw(50)); // 280

console.log(tapaScriptAccount.withdraw(150)); // 130

console.log(tapaScriptAccount.checkBalance()); // 130
