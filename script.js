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

// 5. Create a function that reverses an array
function reverseArray (myArray) {
    let array = myArray.reverse();
    console.log(array);
    return array;
}
reverseArray([1,2,3]); // 3,2,1
reverseArray([5,6,8,3,2,3,8,4,9]); // 9, 4, 8, 3, 2, 3, 8, 6, 5

// 6. Sort an array from lowest to highest
var numArray = [500, 104, 5, 77, 98];
numArray.sort(function(a, b) {
  return a - b;
});
console.log(numArray);

// 7. Create a function that filters out negative numbers
/* In this challenge, you'll have a function that takes an 
array as an input and returns an array. But if all 
goes according to plan, it'll remove the negative numbers. 
This is another example of a task that'll be useful when 
combing through data and looking for clever ways to eliminate "bad data." */
function removeNeg (numberArray) {
    let newArray = numberArray;
    for(let i = 0; i < numberArray.length; i++) {
        if(numberArray[i]<0){
            newArray[i] = 0;
        }
        else{
            newArray[i] = numberArray[i];
        }
        console.log(newArray[i]);
    }
}
removeNeg([-2,-4, -6, 8]);

// 8. Remove the spaces found in a string
let text = "                Heres   lots                        of      whitespace  .   ";
let result = text.replaceAll(' ','');
console.log(result);