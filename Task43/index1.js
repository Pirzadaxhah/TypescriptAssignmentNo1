"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}
// Original array of magician's names
const magicianNames = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Creating a copy of the original array
const originalMagicians = magicianNames.slice();
// Calling the make_great function with a copy of the array to get a modified array
const greatMagicians = make_great(originalMagicians);
// Calling the show_magicians function with both arrays
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
