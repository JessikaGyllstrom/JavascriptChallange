//CODE ACADEMY CHALLANGE

// 1: Print all even numbers from 0 - 10
for(i = 0; i < 11; i++) {
    console.log(i);
}
// 2: Print a table containing multiplication tables
let number = 1;

for (let i = 1; i <= 10; i++) {
    console.log(number + " * " + i + " = " + number * i);
}
/* 3. Create a length converter function
Let's start with a conversion from kilometers to miles. 
The function should include the input in kilometers and 
return the answer in miles.*/
function kmToMiles(km) {
    let miles = km / 1.609;
    let milesRounded = Math.floor(miles*1000)/1000;
    return milesRounded;
}
console.log(kmToMiles(5)); // 3.107
console.log(kmToMiles(74)); // 45.991

/* 4. Calculate the sum of numbers within an array */
let array = [-1,-2,-3,-5,-2,-8,-9,-1];
let sum = 0;
for(let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log(sum);
/* Bonus intermediate challenge: Create a function 
that can return the sum of a particular column or 
row number in a table. */ 

let nestedArray = [[1,2,3],[4,5,6],[7,8,9]];
let total = 0;
function sumOfRow(rowNum) {
    for(var i = 0; i < nestedArray[rowNum].length; i++) {
        total = total + nestedArray[rowNum][i];
        console.log(nestedArray[rowNum][i]);
    }
    return total;
}
console.log(sumOfRow(1));

let sumCol = 0;
function sumOfColumn(colNum) {
    for(var i = 0; i < nestedArray[colNum].length; i++) {
        sumCol = sumCol + nestedArray[i][colNum];
    }
    return sumCol;
}
console.log(sumOfColumn(0));
