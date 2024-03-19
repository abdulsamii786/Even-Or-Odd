let userInput = +prompt("Please enter a number to check if it is even or odd:");
userInput % 2 == 0
  ? swal.fire("Your number " + userInput + " is even")
  : swal.fire("Your number " + userInput + " is odd");
