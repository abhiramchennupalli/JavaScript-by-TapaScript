// const { createElement } = require("react");

// console.log('Hello World');
// const btn = document.querySelector(".click-me-button");
// let count = 0;
// btn.addEventListener("click", () => {
//     console.log(count)
//     count++;
// });

// {
//     const bubblingBtn = document.querySelector('.child');

//     const btnFunction = function () {
//         console.log("this is bubbling");
//         console.log(count)
//         count++;

//     }
//     const colorChange = () => {
//         document.body.classList.toggle('bg')
//     }
//     bubblingBtn.addEventListener("click", btnFunction, true);
//     bubblingBtn.addEventListener("click", colorChange);

// }

{
    {
        const bubblingBtn = document.querySelector('.btn');

        let clickCount = 0;

        const colorChange = () => {

            clickCount++;

            console.log(clickCount);

            if (clickCount === 10 || clickCount === 12) {
                document.body.classList.add("bg");
            } else if (clickCount === 11) {
                document.body.classList.remove('bg');
            }
        };

        bubblingBtn.addEventListener("click", colorChange);
    }
}
{

    const sonBtn = document.querySelector('.son');
    sonBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('son clicked');
    });

    const fatherBtn = document.querySelector('.father');

    fatherBtn.addEventListener('click', (event) => {

        console.log('parent clicked');
    })
}
{

    const h1Elem = document.querySelector(".class-list");

    h1Elem.addEventListener("click", (e) => {
        h1Elem.classList.toggle("class-list-example");
        console.log(e.target);
        console.log(e.currentTarget);
    });


}

{
    const numbers = [2, 3, 4, 5, 6];
    const doubledNumbers = numbers.map((number) => {
        return number * 2;
    }).join();

    console.log(doubledNumbers);
}
{

    const numbers = [1, 2, 3, 4, 5];
    function addFive(number) {
        return number = number + 5;
    }

    console.log(numbers.map(addFive))
}
{
    const names = ["abhiram", "ganesh", "ruchitha"];

    const upperCaseArray = names.map((name) => name.toUpperCase());

    console.log(upperCaseArray)
}

{
    const services = [
        { title: "Web Development" },
        { title: "SEO" },
        { title: "Testing Services" }
    ];

    const singleArray = services.map((service) => {
        return service.title;
    });

    console.log(singleArray)
}
{

    const services = [
        { title: "Web Development" },
        { title: "SEO" },
        { title: "Testing Services" }
    ];
    const singleArray = services.map((service) => {
        return `<p>${service.title}</p>`;

    }).join('');
    console.log(singleArray)

}
{
    const services = [
        {
            title: "Web Development",
            image: "web.svg"
        },
        {
            title: "SEO",
            image: "seo.svg"
        }
    ];

    document.querySelector('.mapFucnctionTesting').innerHTML =
        services.map((service) => {
            return `<div>
                        <img src=${service.image}>
                        <h3>${service.title}</h3>
                    </div>`
        }).join('');
}

{
    const names = ["Abhiram", "Ganesh", "Ruchitha"];

    const newArray = names.map((name) => `hello ${name}`);
    console.log(newArray)
}

{
    const products = [
        { name: "Phone", price: 20000 },
        { name: "Laptop", price: 50000 },
        { name: "Watch", price: 3000 }
    ];

    console.log(products.map((product) => product.price))
}

{
    const names = ["Abhiram", "Ganesh", "Ruchitha"];

    console.log(names.map((name, index) => {
        return `${index + 1}. ${name}`;
    }))

}