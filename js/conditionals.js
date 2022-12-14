"use strict";
(function(){
/* ########################################################################## */
// console.log("I work")
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(colorName){
//     if(colorName.toLowerCase() === 'red'){
//         return `${colorName} is the color of blood.`
//     }else if(colorName.toLowerCase() === 'blue'){
//         return ` ${colorName} is the color of the sky.`
//     }else if(colorName.toLowerCase() === 'cyan'){
//         return `${colorName} is the color of IDK what.`
//     }else{
//         return `I don't know anything about the color ${colorName}`
//     }
// }

console.log(analyzeColor('RED'))
console.log(analyzeColor('rEd'))
console.log(analyzeColor('red'))
console.log(analyzeColor('BlUe'))
console.log(analyzeColor('CyAn'))
console.log(analyzeColor('purple'))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(colorName){
    switch(colorName){
        case 'blue':
            return `The sky is ${colorName}`
           //<--- I didn't add break because return exits the execution context
        case 'red':
            return `Blood is ${colorName}`
        case 'cyan':
            return `${colorName} is the color of idk what`
        default:
            return `I don't know anything about ${colorName}`
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
const colorResponse = prompt("Give me a color")
alert(analyzeColor(colorResponse))

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber,total){
    switch(luckyNumber){
        case 0:
            return total
        case 1:
            return Number.parseFloat(total) - (Number.parseFloat(total) * 0.1) //10% off
        case 2:
            return Number.parseFloat(total) - (Number.parseFloat(total) * .25) //25% off
        case 3:
            return Number.parseFloat(total) - (Number.parseFloat(total) * .35) //35% off
        case 4:
            return Number.parseFloat(total) - (Number.parseFloat(total) * .5) //50% off
        case 5:
            return 0;
        default:
            return //we only accept up to 5
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);
const totalBill = Number.parseFloat(prompt('Enter the total bill amount'))
alert(`Your lucky number is ${luckyNumber} therefore, your bill is ${calculateTotal(luckyNumber,totalBill)}`)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function checkNum(num){
    if(isNaN(num)){
        alert("You didn't enter a number")
    }else {
        alert("Your number is " + (num % 2 == 0) ? 'even' : 'odd')
        alert("Your number plus one hundred is : " + (num + 100))
        alert("Your number is " + (num > 0 ? 'positive' : 'negative'))
    }
}

if(confirm("Would you like to enter a number?")){
    const num = Number.parseFloat(prompt("What is the number?"))
    checkNum(num)
}


})()

