"use strict";
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Calling the function for three different city-country pairs
const cityCountry1 = city_country('Lahore', 'Pakistan');
const cityCountry2 = city_country('New York', 'USA');
const cityCountry3 = city_country('Sydney', 'Australia');
console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);
