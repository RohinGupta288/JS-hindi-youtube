// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
/*
comparisons must always be done in same datatypes
*/
console.log("2" > 1); //This will work but this is not advisable
/*
we dont use these comparisons as they create confusion
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

false for all
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);
*/
//strict check (===)
//it checks for both the same value and the same datatype
console.log("2"==2); //return true
console.log("2"===2);//but this returns false
