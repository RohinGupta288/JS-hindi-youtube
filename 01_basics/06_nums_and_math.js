const score = 400

const balance = new Number(100)
//console.log(balance); //[Number: 100]

let anyString = balance.toString();
//console.log(balance.toString());
//console.log(typeof balance); //original type of number remains unchanged
//console.log(typeof anyString);
//console.log(balance.toFixed(2));//gives the number to 2 decimal places

const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(3));//rounds off so that the value has 3 digits


const hundreds = 10000000
//console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++Maths++++++++++++++++++++++

//console.log(Math); //its and object
//console.log(Math.abs(-4)); //return the magnitude

//console.log(Math.round(4.3)); //returns 4
//console.log(Math.ceil(4.3)); //returns 5
//console.log(Math.floor(4.9)); //returns 4
//console.log(Math.max(4,3,5,6));//similarly min functiln
//console.log(Math.random());//gives a random value b/w 0 and 1

const min=10
const max=20
console.log(Math.floor(Math.random() * (max - min + 1))) + min
