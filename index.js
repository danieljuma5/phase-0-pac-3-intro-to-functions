

/*
// Simple do nothing function
function doNothing() {}

//simple print hello function
function sayHello() {
  console.log("Hello!");
}

sayHello();

//Say hello to Isabel 
function sayHelloToIsabel() {
  console.log("Hello, Isabel!");
}

//say hello to sofia
function sayHelloToSofia() {
  console.log("Hello, Sofia!");
}

//saying hello to Brendan
function sayHelloToBrendan() {
  console.log("Hello, Brendan!");
}

//stacking all our call functions
sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();

//Adding arguments and parameters to our call functions
function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Isabel"); // "Hello, Isabel!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"


//Adding greeting as parameter
function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}
say("Goodbye", "Julio");

//Reversing parameters in function call
say("Julio", "hello");

//Checking to see parameter reversal

function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}

say("Julio", "hello");
*/
//simple add function

function add(x, y) {
  x + y;
}

add(1,2)

console.log(add(1, 2));

/*
//Trying unctions without logging to terminal
function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
}

console.log(say("Hello", "Sofia"))

//Testing output without using return value
function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}

console.log(say("Hello", "Sofia"))


//Logging and adding return
function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
  console.log("I was called!");
}

console.log(say("Howdy", "partner"));

//reversing return and function calls
function say(greeting, firstName) {
  console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}

//Putting what has been learnt into practice
function sayGoodbye() {
  console.log("Say Goodbye")
}
sayGoodbye();
*/
//Adding placeholders to my function
function say(greeting , lastName) {
  console.log(`${greeting},${lastName}`);
  return `${greeting}, ${lastName}!`;
}
 console.log(say("bye","Wandera"));