// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
};

console.log("Exercise 1: " + alienMessage.message);

// Log the message 

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const id = {
	name:"Jens",
	 age:29}

console.log("Exercise 2: Name: " + id.name + " age: " + id.age);

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {

	isAllowed: true

};

// make a rule called isAllowed and let the value be true

console.log("Exercise 3: "+stackOverflow.isAllowed);

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {
	description: "The best song in the world."
	
	
}

delete thisSong.description;
thisSong.about = "Just a tribute.";


// remove the property "description" and add a property called "about" that should say "Just a tribute." 

console.log("Exercise 4: " + thisSong.description +": thisSong.description. "+ "about: " + thisSong.about);
// --------------------------------------


