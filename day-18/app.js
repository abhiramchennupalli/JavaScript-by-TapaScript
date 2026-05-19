console.log('Hello World');
//Create Element Dynamically
{
    const pElem = document.getElementById('para-one');
    const newh1Elem = document.createElement('h1');
    newh1Elem.innerText = "This H1 tag is added dynamically";
    document.body.appendChild(newh1Elem);
}

{
    function button() {
        let pElem = document.createElement('p');
        pElem.innerHTML = 'This para Text is also added dynamically but by clicking button';
        document.body.appendChild(pElem);
    }
}

//Inserting Element Dynamically
{
    let pElem = document.getElementById('para-one');
    const spanElem = document.createElement('span');
    spanElem.innerText = "This span is added before the p tag";
    document.body.insertBefore(spanElem, pElem);

    const divElem = document.createElement('div');
    divElem.innerHTML = "<h1>This h1 is created and wraped in side div dynamically with innerHTML </h1>";
    document.body.insertBefore(divElem, pElem);
}

{
    const displayNoneH1 = document.querySelector('div');
    console.log(displayNoneH1.innerText);

}

//Removing the Element
{
    let list = document.getElementById('list');
    const removeChild = list.children[1];
    list.removeChild(removeChild);
    console.log(list);
}

{
    const pElem = document.querySelector('#para-one');
    pElem.remove();
}
{
    const imgElem = document.querySelector('img');

    imgElem.setAttribute('src', 'company logo.png');

    function scale1() {
        imgElem.setAttribute('width', "200px");
        imgElem.style.border = "none";

    }

    function scale2() {
        imgElem.setAttribute('width', "300px");
        imgElem.style.border = "1px solid blue";
    }

    function scale3() {
        imgElem.setAttribute('width', "400px");
        imgElem.style.border = "none";
    }
    console.log(imgElem.getAttribute('src'));

    imgElem.setAttribute('width', '100px');

    imgElem.setAttribute('height', '200px');
    imgElem.removeAttribute('height')
}

//travarsing / Naigation 
{
    const span = document.getElementById('text');
    console.log('parent element', span.parentElement.parentElement);
    console.log('parent node ', span.parentNode.parentNode);

    const mainDiv = document.getElementById('main-id');
    console.log('childern', mainDiv.children);
    console.log('childnode', mainDiv.childNodes);

}


{
    const divClassChange = document.querySelector('.class-list-div');
    console.log(divClassChange.classList);
    // divClassChange.classList = ;
    // divClassChange.classList.add("class-change-class-list");
    function toggleBackgroung() {
        divClassChange.classList.toggle('class-change-class-list');
        console.log(divClassChange.classList);
    }

}
