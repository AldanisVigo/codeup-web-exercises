// Write a function to return an array of only the Even numbers from an array with the numbers 1 through 10
// example input: [1,2,3,4,5] expected output: [2,4]
const arrayEvenToTen = a =>a.filter(i=>i%2 === 0 && i <= 10)
console.log(arrayEvenToTen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));

/*
	Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string to each of the objects. Return the new array of objects. Don’t mutate the original array.
example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
*/

let somefunc = (a,con) => a.map(c=>({...c,continent: con}))

let original = [
    {
        country : 'U.S'
    },
    {
        country : 'Canadia'
    }
]
console.log(somefunc(original,'America'))

console.log(original)