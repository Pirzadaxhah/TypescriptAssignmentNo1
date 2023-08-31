"use strict";
function make_shirt(size = 'large', message = 'I love TypeScript') {
    console.log(`Creating a ${size}-sized shirt with the message: "${message}".`);
}
// Calling the function with default values
make_shirt(); // Large shirt with default message
// Calling the function with custom size and message
make_shirt('medium'); // Medium shirt with default message
make_shirt('small', 'Its Always You VS You'); // Small shirt with custom message
