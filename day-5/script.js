console.log('Day 05 of Java Script');

for (let count = 1; count <= 10; count++) {
    console.log(count);
}


let sum = 0;

for (let evenNum = 2; evenNum <= 100; evenNum++) {
    if (evenNum % 2 === 0) {
        sum = sum + evenNum;

    }
}

console.log(sum);

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}

let nu = 10;
for (nu; nu <= 20; nu++) {
    if (nu === 17) {
        continue;

    }
    console.log(nu);
}

let abhi = 1;
do {
    console.log(abhi);
    abhi++;
} while (abhi <= 10);

