
//      ====Array Exercises====

//       ====push method====
// ● Add multiple elements to an array using push and return the updated array

// let arr = ["Saeed","Ali","Kamil","Jerry"];
// console.log(arr);

// arr.push("Khan","Sufiyan","Mushtaque");

// console.log(arr);

// ● Create a function that adds numbers from 1 to 10 to an empty array using push.

// const addNums = ()=>{
//     let arr = [];

//     for(let i = 1; i<=10;i++){
//         arr.push(i)
//     }
//     console.log(arr); 
// }

// addNums()

//● Use push to add a nested array [5, 6] to an existing array.

// let arr1 = [3,4];

// let arr2 = [5,6];

// arr1.push(arr2)

// console.log(arr1);

//result [ 3, 4, [ 5, 6 ] ]

// ● Write a function that uses push to add a string to an array and then logs the new length
// of the array.

const addStr = () =>{
    let arrStr = ["Jerry","Saeed","Ali"];
    //before
    console.log(arrStr.length);

    arrStr.push("Kamil");
    //after
    console.log(arrStr.length);
}
addStr()

//● Simulate a stack by adding items with push and removing the last item later

let myArr = [];
myArr.push("Saeed","Jerry");
//before
console.log(myArr);
myArr.pop()
// after
console.log(myArr);
