//Welcome to the in-class challenge!

let myAlphabet = ['A', 'B', 'C', 'D','E','F','G'];

// 1. What is the length of the array?
// 7

// 2. Write a function called myAlphabetLength which console.logs the length of the array
function myAlphabetLength(){
  console.log(myAlphabet.length);
}

//myAlphabetLength();

// 3. Within the function also use an if-conditional statement that checks if the number of items within the array are less than 4
// push your edits to github!!
function myAlphabetLength(){
  if (myAlphabet.length < 4){
    console.log("less than 4");
  } else{
    console.log("not less than 4");
  }
}

//myAlphabetLength();

// 4. Declare and initialize an array called 'colors' with 5 different string values representing the names of 5 colors of your choosing
// push your edits to github!!
let colors = ['red', 'orange', 'yellow', 'green', 'blue'];

// 5.  Console.log each item in the array
for (i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

// 6. Declare an empty string variable called 'text'. Each time you console.log a color from the above challenge number 2, add your color to this variable.
let text = "";
for (i = 0; i < colors.length; i++){
  text += colors[i] + "<br>";
}

//7. Create a div in the index.html with a unique id called whatever you want. Display the contents of your text variable to this div. Now you should have a list of 5 colors visible on your website.
$("#rainbow").html(text);
