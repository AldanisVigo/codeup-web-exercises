"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

const isTrue = (val) => val === true
const addOne = (val) => Number.parseFloat(val) + 1
const concat = (val1,val2) => val1.toString()+val2.toString()
const isEven = (val) => Number.parseFloat(val)%2===0 || false
const isEqual = (val1,val2) => val1==val2
const and = (val1,val2) => val1&&val2
const isFalse = (val) => val === false
const not = (val) => !val
const isIdentical = (val1,val2) => val1 === val2
const or = (val1,val2) => val1 || val2


// let first = prompt("First name")
// let last = prompt("Last name")
//
// function returnFullName(f,l){
//     return f + " " + l
// }
//
// console.log(returnFullName(first,last))


// }