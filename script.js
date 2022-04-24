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

/* 4. Calculate the sum of numbers within an array
