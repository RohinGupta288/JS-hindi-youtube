let score =true;
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber=Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
"33"->33
"33abc"->NaN(Not a Number)
"Rohin"->NaN
true->1 and false->0
*/
let isLoggedIn="rohin";
let booleanIsLoggedIn=Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

/*
1->true
3->true
0->false
""->false
"rohin"->true
*/

let str1="hello";
let str2=" Rohin";
//let str3=str1+str2;
//let str3;
//console.log(str3);
// console.log(str3=str1 + str2);
/*
we can re-assign a new value to a variable inside console.log(), but we cant declare a new variable inside it
*/

// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2**2);
// console.log(2%2);

//console.log("1" + 2 + 2);  //=>122
//console.log(1 + 2 + "2");  //=>32
console.log(+true);  //=>1
console.log(+false); //=>0
console.log(+"");    //=>0
console.log(+"abc"); //=>NaN

