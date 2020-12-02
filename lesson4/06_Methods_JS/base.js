 //there is a lot of built in functions or methods
 
 
 //general ones that you call when needed
 var person = prompt("Please enter your name", "John Doe");
 
 //  alert is one
 alert(person);
 // so is console.log
 console.log(person);
 
 

 
 
 // there is also methods that you can use on stuff
 //like strings
 
 //String Methods
 
 var aString = "ABDCD";
 var stnLgt = aString.length;
 
 //guess what stnLgt has in it
 
 
 // you can find where strings are other in strings
 var str = "Get me out of here!";
var pos = str.indexOf("me"); 

//case matters
//"me" is not the same as "ME"

// if cases are a bother
console.log(str.toUpperCase());
//that we can fix that

// you can do a lot of things with stings
var meIsFree = str.slice(4,6); 

console.log(meIsFree);




// there is also a lot you can do with numbers

//Number Methods



// make the number into a string
var num = 123;
console.log(num);
var numAsString=num.toString();  

console.log(numAsString);

//we can turn it back

var numOnceMore=Number(numAsString); //this is a Global Method , meaning you can use it on most things

console.log(numOnceMore);



