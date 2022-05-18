// Pick a string. Your string can have any number of characters.
const my_string = "a";

// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
const ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value);


// loop to print the ASCII value of all characters in a string.
const my_string = "Udacity";

// Iterate using a Loop
for (let i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}
