/*
    place order 2sec
    cut the fruit 2sec
    add water and ice cream 1
    start the machine 1sec
    select container 2sec
    select topping 3sec
    sering ice creamm 2

*/

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

// let order = (call_production, fruit_selection) => {

//     setTimeout(() => {
//         console.log(`Order placed with ${stocks.Fruits[fruit_selection]}`);
//         call_production();
//     }, 2000);
// };

// let production = () => {
//     console.log(`production started`);

//     setTimeout(() => {
//         console.log("started cutting fruits");

//         setTimeout(() => {
//             console.log(`Added ${stocks.liquid[0]} and ${stocks.liquid[1]} to the ice cream`);

//             setTimeout(() => {
//                 console.log("Started Machine");

//                 setTimeout(() => {
//                     console.log(`ice cream is being ready with ${stocks.holder[2]}`);

//                     setTimeout(() => {
//                         console.log(`ice cream is being ready with toppins ${stocks.toppings[0]}`);

//                         setTimeout(() => {
//                             console.log(`Ice cream is ready and served`);

//                         }, 3000);
//                     }, 3000);
//                 }, 2000);
//             }, 1000);
//         }, 1000);
//     }, 2000);
// };

// order(production, 2);


let is_shop_open = false;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {                                                                      
            setTimeout(() => {
                resolve(work());
            }, time);
        }
        else {
            reject(console.log('Our shop is closed'));
        }
    });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    


    .then(() => {




        return order(2000, () => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are selected`);
        })

    })


    .then(() => {
        return order(1000, () => {
            console.log(`Machine is started`);
        })
    })


    .then(() => {
        return order(2000, () => {
            console.log(`Icecream was placed on ${stocks.holder[0]}`);
        })
    })


    .then(() => {
        return order(3000, () => {
            console.log(`${stocks.toppings[0]} was selected`);
        })
    })


    .then(() => {
        return order(1000, () => {
            console.log(`ice cream served`);
        })
    })

    .catch(() => {
        console.log(`customer left`);
    })

    .finally(() => {
        console.log(`Day ended, shop is closed`);
    })