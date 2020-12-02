/*
JavaScript has three kinds of variable declarations.
var
    Declares a variable, optionally initializing it to a value.
let
    Declares a block-scoped, local variable, optionally initializing it to a value.
const
    Declares a block-scoped, read-only named constant. 
*/



//strings

var aString="I am a string";
var bString='I am also a string';


var bStingButBig= bString.toUpperCase();
console.log( bStingButBig );


//numbers
var number=42;


// not a number, but we can make it one
var a = "42";
var b = Number( a );

console.log( a );	// "42"
console.log( b );	// 42


//boolean

var aBool=true; 
var bBool=false;

console.log(aBool);




// arreys are groups of variables

var places = ["Sweden", "Norway", "Canada"];
var numbers = [1, 2, 3];

// to print them in the console you need to target it with [posistion]
// posistion is the place in the arrey, 0-2 in both the arreys here
console.log(places[0]);
console.log(numbers[2]);


// get the length of an arrey
var prices = [2, 4, 15,23,5,0];

console.log(prices.length);


//changing values in an array
prices[2] = 18;
console.log(prices);





// adding to the last with Push


 numbers = [2, 4, 15];

 numbers.push(99);


console.log(numbers);

// remove from the last with Pop
 numbers.pop();
console.log(numbers);

//Can be empty 
var emptyArrey = [];
emptyArrey.length = 3;
console.log(emptyArrey); // [undefined, undefined, undefined]

















