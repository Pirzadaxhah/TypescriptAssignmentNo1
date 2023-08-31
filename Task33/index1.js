"use strict";
const ordinalnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const ordinalnumbers of ordinalnumber) {
    let ordinal;
    if (ordinalnumbers === 1) {
        ordinal = "st";
    }
    else if (ordinalnumbers === 2) {
        ordinal = "nd";
    }
    else if (ordinalnumbers === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${ordinalnumbers}${ordinal}`);
}
