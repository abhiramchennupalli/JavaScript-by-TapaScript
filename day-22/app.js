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
    function wish(name) {
        console.log(`hello ${name}`);
    }


}
{

    let greet = (name) => {
        console.log("Hello abhi!", name);
    }

    let greeting = () => {
        console.log("Ones again hello abhi!");
    }
    greet(greeting());

}






{
    function greet(name) {
        console.log("hello" + name);
    }

    function processUser(callback) {
        callback('Abhiram');
    }

    processUser(greet);
}

{

    function greet(name) {
        console.log(`hello ${name}`);
    }

    function userName(username) {
        username("Abhiram");
    }

    userName(greet);

}

{






}
