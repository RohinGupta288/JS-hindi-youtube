const name = "rohin";
const repoCount = 50;

//console.log(name + repoCount + " Value");//dont use this, it is outDated


//This is better
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Rohin")//This is in effect and object where the key is
                                    //the index and the value is the individual char
console.log(gameName[0]);//=> R

console.log(gameName.__proto__);//this gives the prototype of the object gameName
                                //can access them in the console log of the browser

console.log(gameName.length);//=>5
console.log(gameName.toUpperCase());//=> ROHIN(original va,ue of the string is not changed)
console.log(gameName.charAt(/*index*/2));//=>H
console.log(gameName.indexOf('O'));//=>1
const newString = gameName.substring(0, 4);//=>Rohi,(startIndex(include), endIndex(exclude))
const anotherString = gameName.slice(-5, -2)//=>ohi
const newString1 = "   rohin   ";
console.log(newString1);//=>(   rohin   )
console.log(newString1.trim());//(rohin)

const url = "https://rohin.com/rohin%20gupta";
url.raplce('%20', '-');
console.log(url); //OR console.log(url.replace('%20','-'))
console.log(url.includes('roh')); //returns true;

console.log(gameName.split('h'));//prints ["Ro", "in"]

