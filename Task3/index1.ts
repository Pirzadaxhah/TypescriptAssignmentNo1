let person:string="SalarSikandar"
 console.log(person.toUpperCase())
console.log(person.toLowerCase())

function toTitleCase(input:string):string{
    return input
    .split(' ')
    .map(word=> word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase())
    .join(' ')
}
const originalstring:string="salar sikandar"
 console.log(toTitleCase(originalstring))