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
// Calling the make_great function to modify the magician names
const greatMagicians = make_great(magicianNames);
// Calling the show_magicians function to see the modified list
show_magicians(greatMagicians);
