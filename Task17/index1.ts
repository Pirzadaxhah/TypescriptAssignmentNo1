var Guestlist:string[] = ["Maryam", "Mehak", "Zahra", "kalsoom"];
console.log("I would be really happy if you " + Guestlist[0] + "come to my birthday party");
console.log("I would be really happy if you " + Guestlist[1] + "come to my birthday party");
console.log("I would be really happy if you " + Guestlist[2] + "come to my birthday party");
console.log("I would be really happy if you " + Guestlist[3] + "come to my birthday party");
console.log(Guestlist[1] + "cannot come due to some urgent piece of work ");
Guestlist[1] = "Yusra";
console.log(Guestlist)
console.log("I would be really happy if you " + Guestlist[0] + "come to my birthday party");
console.log("I would be really happy if you " + Guestlist[1] + "come to my birthday party");
console.log("I would be really happy if you " + Guestlist[2] + "come to my birthday party");
console.log("I would be really happy if you " + Guestlist[3] + "come to my birthday party");
console.log("I found a bigger dinner table for my birthday dinner .I am so much excited ");
Guestlist.unshift("Areeba");
Guestlist.splice(2, 0, "Nida");
console.log("I would be really happy if you " + Guestlist[0] + " come to my birthday party");
console.log("I would be really happy if you " + Guestlist[1] + " come to my birthday party");
console.log("I would be really happy if you " + Guestlist[2] + " come to my birthday party");
console.log("I would be really happy if you " + Guestlist[3] + " come to my birthday party");
console.log("I would be really happy if you " + Guestlist[4] + " come to my birthday party");
console.log("Sorry I an invite only two people for dinner")
Guestlist.pop()

console.log("Sorry kalsoom due to less space you are not invited")
console.log(Guestlist)
// maryam yusra zahra kalsoom
//areeba maryam  nida usra zahra kalsoom 
Guestlist.pop()
console.log("sorry "+ Guestlist.pop()+ " due to less space you are not inivted")
Guestlist.pop()
console.log(Guestlist)
console.log("Please be sure to come on time "+ Guestlist[0]+ " as u are still invited")
console.log("Please be sure to come on time "+ Guestlist[1]+ " as u are still invited")
Guestlist.pop()
Guestlist.pop()
console.log(Guestlist)
console.log("And now i have an empty list " )