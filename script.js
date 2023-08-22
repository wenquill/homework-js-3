//0-----------------------------
function isWorkingAgePerson (age) {
    const isAge = age >= 18 && age <= 65 ? 'true' : 'false';
    console.log(isAge);
}

isWorkingAgePerson(20); 
isWorkingAgePerson(4); 
isWorkingAgePerson(88); 
isWorkingAgePerson(18); 
isWorkingAgePerson(65); 


//1----------------------------
function isPrimeNumber (num) {
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (!(num % i)) return 'The number is composite.';
        }  
        return 'The number is prime.';
    } 
    else return 'The number is neither prime nor composite.';
}

console.log(isPrimeNumber(2));
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(0));
console.log(isPrimeNumber(-4));
console.log(isPrimeNumber(17));
console.log(isPrimeNumber(81));


//2---------------------------
let checkMultiplicity = function (divisible, divisor) {
    !(divisible % divisor) ? console.log('true') : console.log('false');
}

checkMultiplicity(25, 5) // true
checkMultiplicity(15, 3) // true
checkMultiplicity(15, 5) // true
checkMultiplicity(15, 4) // false


//3--------------------------
/**
 * This function returns true or false depending on whether the figure exists 
 * @param {Number} side1 - the length of the first side of triangle
 * @param {Number} side2 - the length of the second side of triangle
 * @param {Number} side3 - the length of the third side of triangle
 * @returns a boolean that determines whether a triangle exists
 */
let isTriangleExist = function (side1, side2, side3) {
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) return true;
    else return false;
}

console.log(isTriangleExist(3, 14, 6));
console.log(isTriangleExist(6, 6, 6));
console.log(isTriangleExist(3, -3, 1));
console.log(isTriangleExist(5, 9, 5));


//4--------------------------
/**
 * This function calculates the total square of a cone 
 * @param {number} r - radius of the cone base
 * @param {number} l - length of the side surfsce of a cone (твірна)
 * @returns total square of a cone
 */
function ConeTotalSquare (r, l) {
    if (r > 0 && l > 0) {
    const square = Math.PI * r * l + Math.PI * Math.pow(r, 2);
    return square;
    } else return 'Such cone doesn`t exist.'
}

console.log(ConeTotalSquare(5, 7)); //188.4
console.log(ConeTotalSquare(8, 12)); //502.6
console.log(ConeTotalSquare(-4, 12)); //no


