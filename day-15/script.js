console.log("Hello World, It's Day:15 ARRAYS");

{
    const newArray = new Array('Tomato', 'Apple');
    console.log(newArray);
}

{
    let arr1 = new Array("banana");
    console.log(arr1);
}
{
    const students = new Array(
        {
            name: 'Abhiram',
            age: 23,
            salary: 20000,
        },

        {
            name: 'Sriram',
            age: 22,
            salary: 25000,
        }
    );

    console.log(students[0].name);
}

{
    const arr1 = new Array(2);
    console.log(arr1);
}

{
    const fruits = ['Apple', 'Banana', 'mango', 'Grapes', 'Orange'];
    fruits.push('Guava');
    fruits.unshift('almond');

    for (let i = 0; i <= fruits.length; i++) {
        console.log(fruits[i]);
    }
}

{
    const fruits = ['Apple', 'Banana', 'mango', 'Grapes', 'Orange'];

    let newFruitsArray = fruits.slice();
    console.log(newFruitsArray);
    console.log(fruits);

}

{
    const [name, , salary, age = 23] = ['Abhiram', 'Chennupalli', 20000];

    console.log(name, age, salary)
}


{
    //rest parameters and spread operatior

    let [one, two, three, four, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(rest);

    const fruits = ['Apple', 'Banana', 'mango', 'Grapes', 'Orange'];
    const fruitsCopy = [...fruits, 'kiwi', 'dragon fruit'];
    console.log(fruitsCopy);

    let fruits2ndCopy = fruits.slice(2, 3);
    console.log(fruits2ndCopy);
    console.log('😀😁😁😂🤣😍😍🙍🏻‍♀️🧗🏻‍♀️');
}
{
    //swaping values using distructuring array function
    let firstName = 'Abhiram Sai';
    let secondName = 'Chennupalli';
    console.log(firstName, secondName);

    [firstName, secondName] = [secondName, firstName];
    console.log(firstName, secondName);

    {
        //merging items using distructuring array method

        let fruit = "Apple";
        let vegitable = "Brinjal";
        const mixedVeg = [...fruit,...vegitable];
        console.log(...mixedVeg)
    }
}

{
    console.log("Hello World");
}

