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


