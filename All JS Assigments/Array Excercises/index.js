
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

//● Use push to add a nested array [5, 6] to an existing array.

let arr1 = [3,4];
let arr2 = [5,6];
arr1.push(arr2)
console.log(arr1);




