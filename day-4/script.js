console.log("Day 04 Control Flow");

//Practicing If conditions 

let goingSchool = false;

if (goingSchool) {
    console.log('You are Present');
} else {
    console.log('your are absent');
}

//

let score = 20;

if (score >= 90) {
    console.log('Grade "A" ');
} else if (score >= 80) {
    console.log('Grade "B" ');
} else if (score >= 70) {
    console.log('Grade "C"');

} else if (score <= 70) {
    console.log('Your are fail in exam');
}

// Switch case example

let day = 3;

switch (day) {
    case 1: console.log('Monday');
        break;

    case 2: console.log('Tuesday');
        break;

    case 3: console.log('Wednesday');
        break;

    case 4: console.log('Thursday');
        break;

    case 5: console.log('Friday');
        break;

    case 6: console.log('Saturay');
        break;

    case 7: console.log('Sunday');
        break;

    default: console.log('Select correct number');

}

let name = 'ruchi';

switch (name) {
    case "abhi": console.log('Chennupalli');
        break;

    case "ruchi": console.log('Ravuri');
        break;

    default: console.log('Enter corrrect number');
}


// 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM.He enters an amount to withdraw.
// The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, 
// otherwise print “Invalid amount”.

let enterWithdrawAmount = 100;


if (enterWithdrawAmount % 100 === 0 && enterWithdrawAmount > 0) {
    console.log('Withdrawal sucessful');
} else {
    console.log('invalid amount');
}


// 3. Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, , /, %) as input, 
// and performs the operation on two numbers. Print the output on the console.

let num1 = 3;
let num2 = 4;
let operator = "/";

switch (operator) {
    case "+": console.log(num1 + num2);
        break;

    case "*": console.log(num1 * num2);
        break;

    case "-": console.log(num1 - num2);
        break;

    case "/":
        if (num2 === 0) {
            console.log('cannot dividd with 0');

        } else {
            console.log(num1 / num2);
        }

        break;

    case "%": console.log(num1 % num2);
        break;

    default: console.log("Select correct operator");
}

//4. Pay for your movie ticke
// Imagine, the INOX charges ticket prices based on age:

// Children (<18 years): $3
// Adults (18 - 60 years): $10
// Seniors (60+ years): $8
// Write a program that prints the ticket price based on the person’s age.

let ageOfAdience = 3;

if (ageOfAdience < 18) {
    console.log('Cost of movie ticket is $3');
}

else if (ageOfAdience >= 18 && ageOfAdience <= 60) {
    console.log("Cost of movie ticket is $10")
}

else if (ageOfAdience > 60) {
    console.log("Cost of ticekt prise is $8");
}

else {
    console.log('Enter valid Age');
}
// 5. Horoscope Sign Checker
// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. 
// Make it month bases, not date based. 
// Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

// ♈ Aries (Mar 21 – Apr 19)
// ♉ Taurus (Apr 20 – May 20)
// ♊ Gemini (May 21 – Jun 20)
// ♋ Cancer (Jun 21 – Jul 22)
// ♌ Leo (Jul 23 – Aug 22)
// ♍ Virgo (Aug 23 – Sep 22)
// ♎ Libra (Sep 23 – Oct 22)
// ♏ Scorpio (Oct 23 – Nov 21)
// ♐ Sagittarius (Nov 22 – Dec 21)
// ♑ Capricorn (Dec 22 – Jan 19)
// ♒ Aquarius (Jan 20 – Feb 18)
// ♓ Pisces (Feb 19 – Mar 20)

let birthMonth = "january";

switch (birthMonth) {


    case "january":
        console.log('Based on your month of birth your Zodiac sign is ♒ Aquarius');
        break;

    case "february":
        console.log('Based on your month of birth your Zodiac sign is ♓ Pisces');
        break;

    case "march":
        console.log('Based on your month of birth your Zodiac sign is ♈ Aries');
        break;

    case "april":
        console.log('Based on your month of birth your Zodiac sign is ♉ Taurus');
        break;

    case "may":
        console.log('Based on your month of birth your Zodiac sign is ♊ Gemini');
        break;

    case "june":
        console.log('Based on your month of birth your Zodiac sign is ♋ Cancer');
        break;

    case "july":
        console.log('Based on your month of birth your Zodiac sign is ♌ Leo');
        break;

    case "august":
        console.log('Based on your month of birth your Zodiac sign is ♍ Virgo');
        break;

    case "september":
        console.log('Based on your month of birth your Zodiac sign is ♎ Libra');
        break;

    case "october":
        console.log('Based on your month of birth your Zodiac sign is ♏ Scorpio');
        break;

    case "november":
        console.log('Based on your month of birth your Zodiac sign is ♐ Sagittarius');
        break;

    case "december":
        console.log('Based on your month of birth your Zodiac sign is ♑ Capricorn');
        break;

    default:
        console.log("Invalid month");
}


