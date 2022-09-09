let sample = "Hello Codeup";
sample.length
sample.toLowerCase()
sample.toUpperCase()
sample.indexOf('l')
sample.lastIndexOf('C')
sample.substring(0,4)
sample.substring(sample.indexOf('H'),sample.lastIndexOf('p'))
sample.replace('Hello','Ahoy')
let brotherBear = 5
let littleMermaid = 3
let herculesMovie = 1
let rentalPrice = 3

let totalPrice = (brotherBear * rentalPrice) + (littleMermaid * rentalPrice) + (herculesMovie * rentalPrice);
totalPrice = (brotherBear + littleMermaid + herculesMovie) * rentalPrice
console.log("Total Price: ", totalPrice)

let googlePay = 400
let amazonPay = 380
let facebookPay = 350

let googleTotal = googlePay * 6
let amazonTotal = amazonPay * 4
let facebookTotal = facebookPay * 10;

let weeklyPay = googleTotal + amazonTotal + facebookTotal
console.log("Weekly pay: ",weeklyPay)

//canBeEnrolled = IF NOT FULL & SCHEDULE DOES NOT CONFLICT
let spaceInClass = false
let spaceInSchedule = true
let canBeEnrolled = spaceInClass && spaceInSchedule

console.log(canBeEnrolled)

//offerCanBeApplied = IF MORE THAN 2 ITMS and OFFER NOT EXPIRED or IS PREMIUM MEMBER
let offerNotExpired = true
let moreThanTwoItems = true
let isPremiumMember = false
let offerCanBeApplied = offerNotExpired && (moreThanTwoItems || isPremiumMember)
console.log(offerCanBeApplied)

let username = "codeup"
let password = "notarealpassword"

let valid = password.length >= 5 && username.length < 20 && password.indexOf(username) == -1
console.log("Valid : " + valid)


let noWhiteSpace = (password.length === password.trim().length) && (username.length === username.trim().length)
console.log("No Whitespace: " + noWhiteSpace)
