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
        obj1: function add10(){
            return sum=x+10;
        },


        obj2: function add20(){
            return sum=x+20;
        },


        obj3: function add30(){
            return sum=x+30;
        },
    }
}

const returnFunction = mainFunction();
console.log(returnFunction.obj3())