/*
Create a file named break_and_continue.js in the js directory.
*/

/*
Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
*/
let oddNum
while(1) {
    oddNum = prompt('Please enter an odd number between 1 and 50')
    if(oddNum > 50 || oddNum < 0  || oddNum % 2 == 0){
        alert("Number not valid")
    }
    if(oddNum % 2 > 0 && oddNum < 50) break
}

/*
Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
 */
for(let i = 0; i < 50;i++){
    if(i == oddNum) {
        console.log(`Yikes! Skipping number: ${i}`)
        continue
    }else if(i % 2 > 0) {
        console.log(`Here is an odd number: ${i}`)
    }
}