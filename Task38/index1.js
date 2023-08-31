"use strict";
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for three different cities
describe_city('Karachi' + " is in");
describe_city('New York' + " is not in");
describe_city('Islamabad' + " is  in"); // Using the default country
