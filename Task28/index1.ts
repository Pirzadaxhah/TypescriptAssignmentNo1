let persons_age:number=21;
if (persons_age<2) {
    console.log("Person is a baby")
} 
else if (persons_age<=2 || persons_age<4)
 {
    console.log("Person is a toddler")
}
else if (persons_age<=4 ||persons_age<13){
    console.log("Person is a kid")
}
else if(persons_age<=13 ||persons_age<20){
    console.log("Person is a teenager")
}
else if (persons_age<=20 || persons_age<65){
    console.log("Person is an Adult")
}
else {
    console.log("person is older")
}