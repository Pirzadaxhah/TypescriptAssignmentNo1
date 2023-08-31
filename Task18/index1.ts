let PlacesToVisit:string[]=["LosAngeles","Paris","Canada","Spain","Afghanistan"]
console.log("original order")
console.log(PlacesToVisit)
console.log("in Alphabetical order");
const sortedarray:string[]=[...PlacesToVisit].sort();
console.log(sortedarray)
console.log("printing original array")
console.log(PlacesToVisit)
const reverseorder=[...sortedarray].reverse()
console.log(reverseorder)
console.log("in original order")
console.log(sortedarray)
console.log("in reverse order")
 let reverseorder1=PlacesToVisit.reverse()
 console.log(reverseorder1)
 console.log("back to original position")
  let reverseagain=reverseorder1.reverse()
  console.log(reverseagain);
  console.log("alphabetical order")
console.log(PlacesToVisit.sort())
console.log("reverse alphabetical order")
console.log(PlacesToVisit.reverse())
// Checking index error
//let indexerror=PlacesToVisit[7]
//console.log(indexerror);



 




















