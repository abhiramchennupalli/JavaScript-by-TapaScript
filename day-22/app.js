setTimeout(() => {
    console.log("This is written in set time out code");
}, 4000);

console.log('This is callback asynchronous JS');


{
    function greet(name) {
        console.log(`Hello ${name}`);
    }

    function userName(callback) {
        callback('Abhiram')
    }

    userName(greet);
}

{
    function wish (name){
        console.log(`hello ${name}`);
    }

    
}