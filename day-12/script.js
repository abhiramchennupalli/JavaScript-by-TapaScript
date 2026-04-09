// console.log("Day 12: Mastering Objects");
// let user = {
//     name: "Abhiram Sai",
//     age: 26,
// };
// let selectObjectFromFunction = () => {



//     return {
//         name: "Abhiram",

//         age: 24,

//         ["School name"]: "Abhiram Sai",


//     }


// const returnFuntion = selectObjectFromFunction();
// console.log(returnFuntion);


// let openBankAccount = (amount) => {
//     let balance = amount;

//     return function currentBalance(creditAmount) {
//         balance = amount + balance;
//         console.log(`before balance is ${amount} and credited ${balance} `)
//     }
// }

// let returnBalance = openBankAccount(200);
// console.log(returnBalance(200));
// console.log(returnBalance(100));//error coming







let mainFunction = () => {

    let x = 10;
    let sum;
    return {
        obj1: function add10() {
            return sum = x + 10;
        },


        obj2: function add20() {
            return sum = x + 20;
        },


        obj3: function add30() {
            return sum = x + 30;
        },
    }
}

const returnFunction = mainFunction();
// console.log(returnFunction.obj3());

function bankAccount(initialBalance) {
    let balance = initialBalance;

    return {

        deposit: (amount) => {
            balance = balance + amount;
            console.log(`Deposited amount is ${amount} and your current balance is ${balance}`);
        },

        withdraw: (amount) => {
            if (amount > balance) {
                console.warn("You don't have sufficient money in your account")
            } else {
                balance = balance - amount;
                console.log(`Withdrawn amount is ${amount} and your current balance is ${balance}`);
            }


        },

        checkBalance: () => {
            console.log(`Your current balance is ${balance}`);
        }
    }
}

let abhiCreatAccount = bankAccount(100);

abhiCreatAccount.checkBalance();
abhiCreatAccount.deposit(200);
abhiCreatAccount.deposit(500);
abhiCreatAccount.withdraw(300);
abhiCreatAccount.withdraw(500);
// abhiCreatAccount.withdraw(100);

