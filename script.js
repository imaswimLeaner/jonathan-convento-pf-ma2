// 1. Create an array called petArray with 3 string items in it: "cat", "cow", "dog".
// Answer

var petArray = ['cat', 'cow', 'dog'];

// 2. Console log the value of the second item in petArray.
// Answer

console.log(petArray[1]);

// 3. Add the item "sheep" to petArray using the push method.
// Answer

petArray.push('sheep');

// 4. Console log how many items there are now in petArray using the length method.
// Answer

console.log(petArray.length);

// 5. Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.
// Answer

var catObject = {
	name: 'Cesar',
	colour: 'orange',
	age: 10,
};

// 6. Console log the value of the third property of catObject.
// Answer

console.log(catObject.age);

// 7. Take the value of catObject (the {} part) and place it inside an array called catArray.
// Answer

(petArray['cat'] = {
	name: 'Tom',
	colour: 'brown',
	age: 2,
}),
	
// 8. Loop through catArray and console log each property of each object inside (there will be only 1 object inside).
// Answer

	console.log(petArray['cat'].name);
	console.log(petArray['cat'].colour);
	console.log(petArray['cat'].age);

// 9. Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.
// Answer

function logToConsole(name) {
	console.log(name);
}

// 10. Call the logToConsole function and pass in the value "donkey".
// Answer

var personOne = logToConsole('Donkey');
