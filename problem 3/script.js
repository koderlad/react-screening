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

for (let i = 0; i < 100; i++) {
  el += `<li>${i + 1}</li>`;
  console.log(i + 1); //Showing results in console
}

ul.innerHTML = el; //Printing the numbers in the DOM here.
