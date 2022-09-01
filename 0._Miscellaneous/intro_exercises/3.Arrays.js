// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a", "b", "c"];
// show b in the console 

console.log("Exercise 1: "+ letters[1]);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it without touching the line above.  
friends.push("Jens","Yes","Bobo");
console.log("Exercise 2: "+ friends);


// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 
console.log("Exercise 3: "+ significantMathNumbers.indexOf(1729));



// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket
diet.splice(2,0,"hamburger","soda","pizza");
console.log("Exercise 4: " ,diet);





// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 
const arr  = ['apple', 'orange', 'banana', 'tomato'];
let popped = arr.pop();

console.log(popped); // "tomato"
console.log("Exercise 5: " ,arr); // ["apple", "orange", "banana"]





// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  
const arrNumber = [1,2,3,4];

const arrNumberCopy = [];

for (i = 0; i < arrNumber.length; i++) {
    arrNumberCopy[i] = arrNumber[i];
  }
  console.log("Exercise 6: " , arrNumberCopy);





// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b
for (let i = 0; i < lettersExpanded.length; i++) {
    console.log("Exercise 7: " ,lettersExpanded[i]); // here i represents index
  }



// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];
const discardedNumbers = [];
for (let i = 0; i < numbers.length; i++) {

    if(numbers[i] <= 6 && numbers[i] >= 0) {
       discardedNumbers.push(i);
        
    }
}


console.log("Exercise 8: " ,discardedNumbers);

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

// --------------------------------------


