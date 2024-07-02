const marvel_heros = ["thor", "IronMan", "SpiderMan"]
const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);//first array accepted the second array as a whole single element
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)//concartenates 2 arrays without modifying any of the original arrays
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);
const another_array = [1, 2, 3 , [4, 5, 6], 7, [6, 7, [4,5 ]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array); 



// console.log(Array.isArray("Rohin"))
// console.log(Array.from("Rohin"));//makes an array out of the string

// console.log(Array.from({name: "rohin"}));//returns an empty array as we have to specify(keys/values)//interesting

let score1 = 100
let score2 = 200
let score3 = 300
//in order to make a set of elements into array, we use of

// console.log(Array.of(score1, score2, score3));
