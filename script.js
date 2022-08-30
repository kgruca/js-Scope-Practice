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
// console.log(addArrow(2, 3)); also gives reference error

function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// var variables can cause problems, as their value is set to undefined when they are hoisted

if (!numProducts) deleteShoppingCart(); // causes deleteShoppingCart() to run, even though numProducts holds a value below

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}


// this keyword
console.log(this); // displays information about the Window
 
const calcAge = function(birthYear) {
    console.log(2050 - birthYear);
    console.log(this); // displays undefined
};

calcAge(1989);

const calcAgeArrow = birthYear => {
    console.log(2050 - birthYear);
    console.log(this); // displays information about the Window
};

calcAgeArrow(1989);

const krzysztof = {
    firstName: 'Krzysztof',
    year: 1989,
    calcAge: function() {
        console.log(2050 - this.year);
        /*const isMillenial = function () {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996); // this is undefined and an error is thrown. there are two solutions to this problem 
        }
        isMillenial();
        */
        // Solution 1 is to set a new variable called self and assign it the value of 'this'
        // const self = this;
        // const isMillenial = function () {
        // console.log(self);
        // console.log(self.year >= 1981 && self.year <= 1996); // this is undefined and an error is thrown. there are two solutions to this problem 
        // }

        // Solution 2 is to use an arrow function, since it will use the this keyword of its parent function. This is the better solution
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
    
        isMillenial();
        }
    },
    greet: () => {
        console.log(this);
        console.log(`Hey, ${this.firstName}`);
    },
};

krzysztof.calcAge(); // shows info about the krzysztof object

const svitlana = {
    year: 1988
};

svitlana.calcAge = krzysztof.calcAge; // method borrowing
svitlana.calcAge();

const f = krzysztof.calcAge; // possible because a function is just a value
// f(); // logs undefined, as this is now a regular function call that is not attached to any object


// regular functions vs arrow functions
// krzysztof.greet(); // logs 'Hey, undefined', as arrow functions don't get the 'this' keyword
// takeaway = don't use an arrow functions as a method