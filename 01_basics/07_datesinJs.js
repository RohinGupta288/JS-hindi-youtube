//Dates
let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp); //returns the miliseconds
// console.log(myCreatedDate.getTime());//ms from Jan1st1970 to myCreatedDate

// console.log(Date.now()/1000);//returns the seconds but there are decimals
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

//`${newDate.getDate()} and the time is...`

newDate.localeString('default', {
    weekday : "long"
})