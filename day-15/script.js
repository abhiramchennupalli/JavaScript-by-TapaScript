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
    
}