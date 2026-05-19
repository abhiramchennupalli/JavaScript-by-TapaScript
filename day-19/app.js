console.log('Hello World');
const btn = document.querySelector(".click-me-button");
let count = 0;
btn.addEventListener("click", () => {
    console.log(count)
    count++;
});

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
