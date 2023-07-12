// React Screening :: Problem 3

/* 
Question:

Using Javascript, Write a program that prints the number from 1 to 100.
But for multiples of three print “Fizz” instead of the number &amp; for the multiples of five print “Buzz”.
However, for numbers which are multiples of both three and five print “ FizzBuzz” instead.

*/

//Step Breakdown

//1. Writing a program that prints number from 1 to 100.
let el = "";
const ul = document.getElementById("numbers");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    el += `<li>FizzBuzz</li>`;
    console.log("FizzBuzz"); //Showing results in console
  } else if (i % 3 === 0) {
    el += `<li>Fizz</li>`;
    console.log("Fizz"); //Showing results in console
  } else if (i % 5 === 0) {
    el += `<li>Buzz</li>`;
    console.log("Buzz"); //Showing results in console
  } else {
    el += `<li>${i}</li>`;
    console.log(i); //Showing results in console
  }
}

ul.innerHTML = el; //Printing the numbers in the DOM here.
