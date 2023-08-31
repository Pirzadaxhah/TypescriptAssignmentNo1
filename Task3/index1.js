"use strict";
let person = "SalarSikandar";
console.log(person.toUpperCase());
console.log(person.toLowerCase());
function toTitleCase(input) {
    return input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
const originalstring = "salar sikandar";
console.log(toTitleCase(originalstring));
