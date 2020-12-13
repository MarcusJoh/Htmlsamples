/*
if (condition) {
//  block of code to be executed if the condition is true
}





 */

// this is always true
if (1 < 18) {
	console.log("Yes1");
}

var a = 1;
var b = 18;

// so is this
if (a < b) {
	console.log("Yes2");
	a = 20;
}

// but not now
if(a < b) {
	console.log("No?");
}




/*
Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false

----
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

*/




if (a < b) {
  console.log("Still no");
  } else if (a ==20) {
  console.log("Here we are");
  }


  
  if (a < b) {
  console.log("Still no");
  } else if (a ==21) {
  console.log("not here");
  } else {
	  console.log("here at last");
	  
  }
  



