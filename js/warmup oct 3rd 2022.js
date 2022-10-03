// re-write the following using a for loop: var i = 20; while (i >= 0) { console.log(i); i--; }

for(let i = 20; i > 0; i--){
    console.log(i)
}

// Add ‘strawberry’ to the beginning, middle, and end of the array.
let fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];

fruits.unshift("strawberry")
fruits = [...fruits.slice(0,4),'strawberry',...fruits.slice(4)]
fruits.push('strawberry')

console.log(fruits)