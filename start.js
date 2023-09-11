'use strict';


// Functions

// function logger() {
//     return console.log('My name is Ike');
// }

// function FoodProcessor(food) {
//     return console.log(`I had a ${food} today!`);
// }

// const calcAge = function (birthYear) {
//     return console.log(`You are ${2023 - birthYear} years old`);
// }

// FoodProcessor('banana');
// logger();
// const age = calcAge(1990);

// Arrow functions

// const calcAge2 = birthYear => 2037 - birthYear
// console.log(calcAge2(1990))

// const yearsUntilRetirement = (birthYear) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(2004));


// Challenge

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}


const checkWinner = (team1, team2) => {
    const winner = Math.max(team1, team2);
    const loser = Math.min(team1, team2);
    const team = winner == team1 ? 'Dolphins' : 'Koolas';
    const lost = loser == team1 ? 'Dolphins' : 'Koolas';

    return console.log(`${team} beat ${lost} (${winner} vs ${loser}) `);
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoolas = calcAverage(23, 34, 27);

console.log(checkWinner(avgDolphins, avgKoolas));


