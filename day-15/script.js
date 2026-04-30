// console.log("Hello World, It's Day:15 ARRAYS");
// {
//     {
//         const newArray = new Array('Tomato', 'Apple');
//         console.log(newArray);
//     }

//     {
//         let arr1 = new Array("banana");
//         console.log(arr1);
//     }
//     {
//         const students = new Array(
//             {
//                 name: 'Abhiram',
//                 age: 23,
//                 salary: 20000,
//             },

//             {
//                 name: 'Sriram',
//                 age: 22,
//                 salary: 25000,
//             }
//         );

//         console.log(students[0].name);
//     }

//     {
//         const arr1 = new Array(2);
//         console.log(arr1);
//     }

//     {
//         const fruits = ['Apple', 'Banana', 'mango', 'Grapes', 'Orange'];
//         fruits.push('Guava');
//         fruits.unshift('almond');

//         for (let i = 0; i <= fruits.length; i++) {
//             console.log(fruits[i]);
//         }
//     }

//     {
//         const fruits = ['Apple', 'Banana', 'mango', 'Grapes', 'Orange'];

//         let newFruitsArray = fruits.slice();
//         console.log(newFruitsArray);
//         console.log(fruits);

//     }

//     {
//         const [name, , salary, age = 23] = ['Abhiram', 'Chennupalli', 20000];

//         console.log(name, age, salary)
//     }


//     {
//         //rest parameters and spread operatior

//         let [one, two, three, four, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//         console.log(rest);

//         const fruits = ['Apple', 'Banana', 'mango', 'Grapes', 'Orange'];
//         const fruitsCopy = [...fruits, 'kiwi', 'dragon fruit'];
//         console.log(fruitsCopy);

//         let fruits2ndCopy = fruits.slice(2, 3);
//         console.log(fruits2ndCopy);
//         console.log('😀😁😁😂🤣😍😍🙍🏻‍♀️🧗🏻‍♀️');
//     }
//     {
//         //swaping values using distructuring array function
//         let firstName = 'Abhiram Sai';
//         let secondName = 'Chennupalli';
//         console.log(firstName, secondName);

//         [firstName, secondName] = [secondName, firstName];
//         console.log(firstName, secondName);

//         {
//             //merging items using distructuring array method

//             let fruit = "Apple";
//             let vegitable = "Brinjal";
//             const mixedVeg = [...fruit, ...vegitable];
//             console.log(...mixedVeg)
//         }
//     }

//     {
//         console.log("Hello World");
//     }

//     {
//     }
//      }     // Array Like
// {
//     // {key: "value"} // object
//     // [1,2,3] // array

//     const arr_like = { 0: "I", 1: "am", 2: "array-like", length: 3 };

//     console.log(arr_like);

//     arr_like[2]; // 'array-like'
//     arr_like.length; // 3

//     console.log("is arr_like is an array?", Array.isArray(arr_like)); // false

//     console.log("is arr_like is an object?", arr_like instanceof Object); // true

//     function checkArgs() {
//         console.log("Array Like Args", arguments);
//         const argArr = [...arguments];
//         console.log("Converetd Arary Args", argArr);
//         argArr.forEach((elem) => {
//             console.log(elem);
//         });
//     }

//     checkArgs(1, 45);

//     console.log(
//         "HTML COllection as Array Like",
//         document.getElementsByTagName("li")
//     );
//     const collectionArr = Array.from(document.getElementsByTagName("li"));
//     console.log("Converted Array", collectionArr);
// }
//----------------------------------------------------------------------
//revision of arrays

console.log("Hello world this is array revision");

{
    const arr = ['abhi', 'Vamsi', 'Durga ', 'Ruchitha', 'Komali Sravya'];
    console.log(arr);

}
{
    const arr = new Array('abhi', 'Vamsi', 'Durga ', 'Ruchitha', 'Komali Sravya');

    // push() method is mutable method, helps to add new element to array at last
    arr.push('Gopi nadh');

    //unshift() method is mutable method, helps to add new element to array at first
    arr.unshift('Jhansi Durga')
    console.log(arr);
    console.log(arr.length);

    //pop() method is used to last delete element from array 
    arr.pop();

    // slice() method is used to clone a existing erray 
    const arr2 = arr.slice();
    console.log(arr);
    console.log(arr2);

    console.log(Array.isArray(arr));//true (helps to wheater the variable is array or not);


}

{//array disctructuring
    const [tomato, mango, grapes, papaya = "abhiramsaichennupalli"] = ["abhi", 'ram', 'sai'];
    console.log(mango, papaya);


}

{
    //rest parameter and spread operator
    const [name, ...rest] = ['abhi', 'Vamsi', 'Durga ', 'Ruchitha', 'Komali Sravya'];
    const arr2 = ['abhi', 'Vamsi', 'Durga ', 'Ruchitha', 'Komali Sravya'];
    console.log(rest); //[vamsi, durga, rucitha, komali sravya];

    let arr3 = [...arr2];
    console.log(arr3);

}
{
    //distructuring merging arrays
    const arr1 = ['abhi', 'Vamsi', 'Durga ', 'Ruchitha', 'Komali Sravya'];

    const arr2 = ['abhi', 'Vamsi', 'Durga ', 'Ruchitha', 'Komali Sravya'];

    console.log([...arr2, ...arr1]);
}
{
    //concat is used to add two arrays and it is immutable method
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [6, 7, 8, 9, 10];
    const concateArray = arr1.concat(arr2);
    console.log(concateArray);
}

{
    //joint method helps to joint any character to array, 
    // if nothing is mention it takes , . array changed to text
    const arr1 = [1, 2, 3, 4, 5];
    console.log(arr1.join(' <-> ')); //1 <-> 2 <-> 3 <-> 4 <-> 5

}
{
    //fill() method, immutable 
    const colors = ['red', 'green', 'yellow'];
    const newColors = colors.fill('blue', 1, 2);
    console.log(newColors);
}

{
    //include()
    const colors = ['red', 'green', 'yellow'];
    console.log(colors.includes('yellow'));
}

{
    //indexOf() method is used to index of elements in a array. If elements is not present in the array it returns -1;
    const colors = ['red', 'green', 'yellow'];
    console.log(colors.indexOf('yellow'));
}

{

    //reverse() method is used to reverse the elements in the array;
    const colors = ['red', 'green', 'yellow'];
    console.log(colors.reverse('blue'));
}

{
    const colors = ['red', 'green', 'yellow'];
    console.log(colors.sort())

    //if we want to sort in decending order , we can use reverse method
}

{
    //splice() method 
    //syntax: array.splice(start,deleteCount,(item1,item2 etc))
    const colors = ['red', 'green', 'yellow', 'blue', 'white'];

    const splicedArray = colors.splice(1, 1, 'aqua', 'light blue');
    console.log(splicedArray);
    console.log(colors);

    //arr.splice(2,4,"avhi","ram","chennupalli");parameters lo 1st di index value , 
    // and delect starting position, 2nd di enni elements delect cheyali ani , next 
    // add chese vi anni array ki add chestunna elements

    //splice always returns array containing delected elements....

}

{
    //at() method is used to check index values from negitive side also

    const colors = ['red', 'aqua', 'light blue', 'yellow', 'blue', 'white'];
    console.log(typeof (colors))

    console.log(colors.at(-2)); //blue, output as string , negitive use cheyachu
}

{

    let customers = [
        {
            id: 1,
            f_name: "Abby",
            l_name: "Thomas",
            gender: "M",
            married: true,
            age: 32,
            expense: 500,
            purchased: ["Shampoo", "Toys", "Book"],
        },


        {
            id: 2,
            f_name: "Jerry",
            l_name: "Tom",
            gender: "M",
            married: true,
            age: 64,
            expense: 100,
            purchased: ["Stick", "Blade"],
        },

        {
            id: 3,
            f_name: "Dianna",
            l_name: "Cherry",
            gender: "F",
            married: true,
            age: 22,
            expense: 1500,
            purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
        },

        {
            id: 4,
            f_name: "Dev",
            l_name: "Currian",
            gender: "M",
            married: true,
            age: 82,
            expense: 90,
            purchased: ["Book"],
        },

        {
            id: 5,
            f_name: "Maria",
            l_name: "Gomes",
            gender: "F",
            married: false,
            age: 7,
            expense: 300,
            purchased: ["Toys"],
        },
    ];

    console.log(customers[2]);

    //filter method

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const evenNumbers = numbers.filter(isEven);
    const oddNumbers = numbers.filter(isOdd);

    function isEven(number) {
        return (number % 2 === 0)
    };

    function isOdd(number) {
        return number % 2 === 1;
    }
    console.log(evenNumbers);
    console.log(oddNumbers);

    const elder = customers.filter(isAdult);

    function isAdult(customer) {
        return customer.age >= 60;
    }
    console.log(elder)

    const bookBuy = customers.filter(boughtBook);

    function boughtBook(customer) {
        return (customer.purchased.includes("Book"));
    }
    //i did mistake previsouly that i used ==="book ", but it is wrong , and correct method is , it is a array, so 
    //we need to find wheater the element is present in the array or not

    console.log(bookBuy);

    const genderCheck = customers.filter(isMale)

    function isMale(customer) {
        return customer.gender == "M";
    }
    console.log(genderCheck);


    //arrow function , function argunment e inner lo return avvali
    const isFemale = customers.filter((isFemale) => {
        return isFemale.gender == "F"
    });
    console.log(isFemale);


    //----



    //map()method 

}

{
    const name = document.getElementById('head');
    console.log(name);
}

{
    const name = document.querySelectorAll('#head');
    console.log(name);
}
{
    const listName = document.getElementsByClassName("unorder-list");
    const array = [...listName];
    console.log(listName);
    console.log(array);
    array.forEach((elem) => {
        console.log(elem);
    })
    const collectionPromise = Array.fromAsync(document.getElementsByClassName('unorder-list'));


}

{
    function con() {
        console.log("Button Clicked!");


    }
}

{
    const numbers = [1, 2, 3, 4, 5, 6];
    const evenNumber = numbers.filter(function (number) {
        return number % 2 === 0;
    });
    console.log(evenNumber);

}

{
    let customers = [
        {
            id: 1,
            f_name: "Abby",
            l_name: "Thomas",
            gender: "M",
            married: true,
            age: 32,
            expense: 500,
            purchased: ["Shampoo", "Toys", "Book"],
        },


        {
            id: 2,
            f_name: "Jerry",
            l_name: "Tom",
            gender: "M",
            married: true,
            age: 64,
            expense: 100,
            purchased: ["Stick", "Blade"],
        },

        {
            id: 3,
            f_name: "Dianna",
            l_name: "Cherry",
            gender: "F",
            married: true,
            age: 22,
            expense: 1500,
            purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
        },

        {
            id: 4,
            f_name: "Dev",
            l_name: "Currian",
            gender: "M",
            married: true,
            age: 82,
            expense: 90,
            purchased: ["Book"],
        },

        {
            id: 5,
            f_name: "Maria",
            l_name: "Gomes",
            gender: "F",
            married: false,
            age: 7,
            expense: 300,
            purchased: ["Toys"],
        },
    ];

    const seniorCitizen = customers.filter(function (people) {
        return people.age >= 60;
    });
    console.log(seniorCitizen);

    const boughtBook = customers.filter(function (people) {
        return people.purchased.includes("Toys");
    });

    console.log(boughtBook);
    const newExpence = customers.map(function (expense) {
        return {
            id: expense.id,
            f_name: expense.f_name,
            l_name: expense.l_name,
            gender: expense.gender,
            age: expense.age,
            expense: expense.expense + expense.expense * 0.18,
            purchased: expense.purchased,
        }
    });
    console.log(newExpence);
    

}