//arrays

const myArr = [0, 1, 2, 3, 4, 5];
//arrays are resizeable, they can store any data types
// console.log(myArr[0]);

const myArr2 = new Array(1,2,3,4,5);

//Array methods

// myArr.push(6)//adds elements at the end of the array
// myArr.pop()//removes the last element from the array
// myArr.unshift(0)//adds element to the beginning of the array
// myArr.shift()//removes the first element of the array

// console.log(myArr.includes(9));//returns boolean datatype
// console.log(myArr.indexOf(4));//returns 3, if element is not in the array, then it returns -1

const newArr = myArr.join();//newArr is a string
// console.log(myArr);
// console.log(newArr);//it is now a string
// console.log(typeof newArr);


//slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)//includes 1, 2 but not third index
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)//includes 1, 2 and also third index
console.log("C", myArr); //splice alters the original array and 
                         //and leaves only that part which is not in the arguments
            
console.log(myn2);
