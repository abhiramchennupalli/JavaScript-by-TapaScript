{
    let paraElement = document.createElement("p");
    paraElement.innerText = "this text is added dynamically";
    document.body.appendChild(paraElement);
}

{
    let heading = document.createElement("h1");
    heading.innerText = "This is nice heading";
    document.body.appendChild(heading);
}

{
    let span = document.createElement("span");
    span.innerText = "This is span ";
    let h1 = document.querySelector(".heading");
    document.body.insertBefore(span, h1);
    span.innerHTML = "<h1>this is modified text</h1>";

}

{
    let array = ["apple", "banana", "orange"];

    array.forEach((fruits, index) => {
        console.log(index, fruits);
    });
}

let div = document.querySelector(".classListTest");

div.className = "d-flex";
div.className += " flex-row";
div.classList.add("px-2" , "py-2");
console.log(div);


























