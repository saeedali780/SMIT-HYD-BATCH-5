
//      ====Array Exercises====

//       ====push method====
// ● Add multiple elements to an array using push and return the updated array

let arr = ["Saeed","Ali","Kamil","Jerry"];
console.log(arr);

arr.push("Khan","Sufiyan","Mushtaque");

console.log(arr);

// ● Create a function that adds numbers from 1 to 10 to an empty array using push.

const addNums = ()=>{
    let arr = [];

    for(let i = 1; i<=10;i++){
        arr.push(i)
    }
    console.log(arr); 
}

addNums()



