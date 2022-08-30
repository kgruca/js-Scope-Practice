'use strict';

function calcAgeIn2037(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
        }
        // console.log(str);
        // raises reference error as str is only available in the block it was defined it, above

        // the following code executes as 'var' variables are function-scoped instead of block-scoped
        console.log(millenial);

    }

    printAge();

    console.log(firstName);
    return age;
}

const firstName = 'Krzysztof';
calcAgeIn2037(1989);

// console.log(age);
// raises a reference error, since variable age is not in the global scope
//same with printAge()


// hoisting with variables
// console.log(me); gives undefined
// console.log(job); gives reference error
// console.log(year); gives reference error0

var me = 'Krzysztof';
let job = 'Software Engineer';
const year = 1989;


// hoisting with functions
// console.log(addDecl(2, 3)); can call this function and it returns 5
// console.log(addExpr(2, 3)); gives reference error
// console.log(addArr(2, 3)); also gives reference error

function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
}

const addArr = (a, b) => a + b;


// var variables can cause problems, as their value is set to undefined when they are hoisted

if (!numProducts) deleteShoppingCart(); // causes deleteShoppingCart() to run, even though numProducts holds a value below

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}