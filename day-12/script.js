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


// 🟢 Beginner Level
// 1. Counter App

// Create a function that:

// Starts with a number
// Has methods:
// increment()
// decrement()
// reset()
// getValue()

// 👉 Concept: private variable + closure

// 2. Password Manager

// Create a function that:

// Stores a password privately
// Methods:
// checkPassword(input)
// changePassword(oldPass, newPass)

// 👉 Ensure password is NOT directly accessible

// 3. Simple Wallet

// Like your bank app but simpler:

// addMoney(amount)
// spendMoney(amount)
// showBalance()

// 👉 Add validation (no negative money)

// 🟡 Intermediate Level
// 4. To-Do List Manager

// Create a function:

// Private array of tasks
// Methods:
// addTask(task)
// removeTask(index)
// listTasks()

// 👉 You cannot access tasks directly

// 5. Student Marks System
// Store marks privately
// Methods:
// addMarks(subject, marks)
// getAverage()
// getAllMarks()
// 6. Timer / Stopwatch (logic only)
// Private time
// Methods:
// start()
// stop()
// reset()
// getTime()

// 👉 No UI needed, just logic

// 🔴 Advanced Level
// 7. ATM Machine Simulation

// Build on your bank account:

// Add:
// pin (private)
// authenticate(pin)
// Only allow withdraw if authenticated
// 8. Shopping Cart System
// Private cart array
// Methods:
// addItem(item, price)
// removeItem(item)
// getTotal()
// 9. Rate Limiter (Very Important Concept 🚀)

// Create a function that:

// Allows a function to run only once every X seconds

// 👉 Used in real apps (APIs, buttons)

// 10. Like Button System ❤️
// Private count
// Methods:
// like()
// unlike()
// getLikes()
// 💡 Challenge (🔥 Must Try)
// 11. Secure Notes App
// Private notes array
// Methods:
// addNote()
// deleteNote()
// viewNotes(password)

// 👉 Combine:

// closures
// validation
// security
// 🧠 Pro Tip

// When solving these, always ask:

// “Can this variable be accessed directly from outside?”

// If YES ❌ → fix it using closure
// If NO ✅ → you did it right

// If you want, I can:

// ✔️ Give solutions step-by-step
// ✔️ Review your code
// ✔️ Turn one into a mini project (resume level)

// Just tell me which one you want to try first 💪
