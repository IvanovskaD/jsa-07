// TODO - Difference between var & let

// Опсег претставува локацијата каде една варијабила/константа е декларирана,
// и диктира каде имаме пристап до таа варијабила/константа. Постојат 3 типа на опсега во JS:
//  - опсег на функција
//  - опсег на блок од код
//  - лексички опсег (lexical scope)

// разликата помеѓу let и var е:

// кога let  и const се декларирани во една функција 
// или блок од код, тие не можат да бидат пристапени надвор од таа функција/блок

// EXAMPLE 1

function random () {
    let age = 26 ;
    var color = "blue";
    const person = "Dragana";
}

console.log(person);

// EXAMPLE 2

// кога var е декларирана во опсегот на еден блок, таа може да биде пристапена надвор од тој блок код 

if(true) {
    var bird = "parrot";
    let animal = "panda";
}

console.log(bird);
console.log(animal);