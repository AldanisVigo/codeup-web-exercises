alert("Welcome to my website.")
console.log("Good morning Java Cohort! Ya'll are looking good!")
const data = "data to alert"

alert(data)

const hadBreakfast = confirm("Have you had breakfast?")
console.log("You have " + (hadBreakfast ? '' : 'not') + " had breakfast.")
let favCol = prompt("What is your favorite color? ")
alert("Your fav color is " + favCol)
alert("Great your favorite color is " + favCol);

const littleMermaid = Number.parseInt(prompt("How many days for little mermaid?"))
const brotherBear = Number.parseInt(prompt("How many days for Brother Bear"))
const Hercules = Number.parseInt(prompt("How many days for Hercules?"))
const pricePerMovie = 3

const total = (littleMermaid + brotherBear + Hercules) * pricePerMovie
alert("Your price for movies is $" + total.toFixed(2))

const googlesPay = 400
const amazonPay = 380
const meta = 350
const hoursWorkedForGoogle = Number.parseInt(prompt("How many hours worked for google?"))
const hoursWorkedForAmazon = Number.parseInt(prompt("How may hours worked for Amazon?"))
const hoursWorkedForMeta = Number.parseInt(prompt("How many hours worked for the devil?"))

const payTotal = hoursWorkedForGoogle * googlesPay + hoursWorkedForAmazon * amazonPay + hoursWorkedForMeta * meta;

alert("You are rich you made : $" + payTotal.toFixed(2))

/*
    A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

    A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
 */

//Bullet #4
const classFull = confirm("Is the class full?")
const scheduleConflict = confirm("Does your current schedule conflict with the class schedule?")
const canEnroll = !classFull && !scheduleConflict
alert("Can you enroll in class? " + canEnroll)


//Bullet #5
const drinksBought = Number.parseInt(prompt("How many drinks have you bought?"))
const offerExpired = confirm("Has the offer expired?")
const premiumMember = confirm("Are you a premium member?")

//(You bought 2 or more drinks OR(||) you're  a premium member) AND(&&) NOT(!)offerExpired
const drinksBoughtOrPremiumMember = (drinksBought > 2 || premiumMember)
const canBeApplied = drinksBoughtOrPremiumMember && !offerExpired
alert("Can the offer be applied? " + canBeApplied)

//AND TRUTH TABLE         OR TRUTH TABLE
//00  0                   00 0
//01  0                   01 1
//11  1                   11 1
//10  0                   10 1

//true = 1
//false = 0
//! (expressionone || expressiontwo)


