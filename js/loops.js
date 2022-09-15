/*
Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
 */

const showMultiplicationTable = (x) => {
    for(let i = 0; i <= 10; i++){
        console.log(`${x} x ${i} = ${x*i}`)
    }
}

showMultiplicationTable(1)
showMultiplicationTable(2)
showMultiplicationTable(3)
showMultiplicationTable(4)
showMultiplicationTable(5)
showMultiplicationTable(6)
showMultiplicationTable(7)
showMultiplicationTable(8)
showMultiplicationTable(9)
showMultiplicationTable(10)
showMultiplicationTable(11)
showMultiplicationTable(12)

/*
Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
 */
for(let i = 0; i < 10; i++){
    const randomNumber = Math.floor(20 + Math.random()*(200 - 20 + 1))
    console.log(`${randomNumber} is ${randomNumber % 2 === 0 ? 'even' : 'odd'}`)
}

/*
Create a for loop that uses console.log to create the output shown below.


1
22
333
4444
55555
666666
7777777
88888888
999999999
 */

for(let i = 1; i < 10; i++){
    for(let j = 0; j < i;j++){
        console.log(i)
    }
}

/*
Create a for loop that uses console.log to create the output shown below.


100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5
 */

for(let i = 100; i >= 5;i-=5){
    console.log(i)
}



