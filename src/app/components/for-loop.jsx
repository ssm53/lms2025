// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AndOrOperators() {
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            For Loops
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724133104/bootcamp-prebootcamp/d4vtth8scsvr1pwiocdd.mp4"
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {/* <div className="flex justify-center">
            <ReactPlayer src="/public/intro-bootcamp-video3.mp4" width="100%" />
          </div> */}
          <div>
            <h2 className="text-xl font-semibold">Exercise</h2>
            <p className="mt-2">
              Ensure that you copy the below and paste it into your index.js
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`/* 
Exercise 1: Print Even Numbers
Scenario: You are tasked with printing all even numbers from 1 to 20.

Write a for loop that starts at 1 and ends at 20.
Inside the loop, print only even numbers.
*/


/* 
Exercise 2: Sum of Numbers
Scenario: You want to calculate the sum of numbers from 1 to 50.

Declare a variable sum and set it to 0.
Use a for loop to iterate from 1 to 50 and add each number to sum.
Print the total sum after the loop ends.
*/


/* 
Exercise 3: Print a Pattern
Scenario: You are generating a pyramid-like pattern for a simple console game.

Use a for loop to print the following pattern:
*
**
***
****
*****
*/


/* 
Exercise 4: Loop Through an Array
Scenario: You have an array of colors and want to display each one.

Declare an array colors = ["red", "blue", "green", "yellow", "purple"].
Write a for loop to iterate through the array and print each color.
*/


/* 
Exercise 5: Factorial of a Number
Scenario: You want to calculate the factorial of a number (e.g., 5! = 5 * 4 * 3 * 2 * 1).

Declare a variable number = 5.
Use a for loop to calculate the factorial of number.
Print the result.
*/
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`/* 
Exercise 1: Print Even Numbers
Scenario: You are tasked with printing all even numbers from 1 to 20.

Write a for loop that starts at 1 and ends at 20.
Inside the loop, print only even numbers.
*/


/* 
Exercise 2: Sum of Numbers
Scenario: You want to calculate the sum of numbers from 1 to 50.

Declare a variable sum and set it to 0.
Use a for loop to iterate from 1 to 50 and add each number to sum.
Print the total sum after the loop ends.
*/


/* 
Exercise 3: Print a Pattern
Scenario: You are generating a pyramid-like pattern for a simple console game.

Use a for loop to print the following pattern:
*
**
***
****
*****
*/


/* 
Exercise 4: Loop Through an Array
Scenario: You have an array of colors and want to display each one.

Declare an array colors = ["red", "blue", "green", "yellow", "purple"].
Write a for loop to iterate through the array and print each color.
*/


/* 
Exercise 5: Factorial of a Number
Scenario: You want to calculate the factorial of a number (e.g., 5! = 5 * 4 * 3 * 2 * 1).

Declare a variable number = 5.
Use a for loop to calculate the factorial of number.
Print the result.
*/
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Answer</h2>
            <Button onClick={() => setShowAnswer(!showAnswer)}>
              {showAnswer ? "Hide Answer" : "See Answer"}
            </Button>
            <br />
            {/* The answer is hidden by default and shown when 'showAnswer' is true */}
            {showAnswer && (
              <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
                <pre className="text-sm text-[#d4d4d4]">
                  <code>{`/* 
Exercise 1: Print Even Numbers
Scenario: You are tasked with printing all even numbers from 1 to 20.

Write a for loop that starts at 1 and ends at 20.
Inside the loop, print only even numbers.
*/

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/* 
Exercise 2: Sum of Numbers
Scenario: You want to calculate the sum of numbers from 1 to 50.

Declare a variable sum and set it to 0.
Use a for loop to iterate from 1 to 50 and add each number to sum.
Print the total sum after the loop ends.
*/

let sum = 0;

for (let i = 1; i <= 50; i++) {
  sum += i;
}
console.log("Total sum:", sum);

/* 
Exercise 3: Print a Pattern
Scenario: You are generating a pyramid-like pattern for a simple console game.

Use a for loop to print the following pattern:
*
**
***
****
*****
*/

for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

/* 
Exercise 4: Loop Through an Array
Scenario: You have an array of colors and want to display each one.

Declare an array colors = ["red", "blue", "green", "yellow", "purple"].
Write a for loop to iterate through the array and print each color.
*/

const colors = ["red", "blue", "green", "yellow", "purple"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

/* 
Exercise 5: Factorial of a Number
Scenario: You want to calculate the factorial of a number (e.g., 5! = 5 * 4 * 3 * 2 * 1).

Declare a variable number = 5.
Use a for loop to calculate the factorial of number.
Print the result.
*/

let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}
console.log("Factorial of 5:", factorial);
`}</code>
                </pre>
                <div className="mt-2 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(`/* 
Exercise 1: Print Even Numbers
Scenario: You are tasked with printing all even numbers from 1 to 20.

Write a for loop that starts at 1 and ends at 20.
Inside the loop, print only even numbers.
*/

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/* 
Exercise 2: Sum of Numbers
Scenario: You want to calculate the sum of numbers from 1 to 50.

Declare a variable sum and set it to 0.
Use a for loop to iterate from 1 to 50 and add each number to sum.
Print the total sum after the loop ends.
*/

let sum = 0;

for (let i = 1; i <= 50; i++) {
  sum += i;
}
console.log("Total sum:", sum);

/* 
Exercise 3: Print a Pattern
Scenario: You are generating a pyramid-like pattern for a simple console game.

Use a for loop to print the following pattern:
*
**
***
****
*****
*/

for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

/* 
Exercise 4: Loop Through an Array
Scenario: You have an array of colors and want to display each one.

Declare an array colors = ["red", "blue", "green", "yellow", "purple"].
Write a for loop to iterate through the array and print each color.
*/

const colors = ["red", "blue", "green", "yellow", "purple"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

/* 
Exercise 5: Factorial of a Number
Scenario: You want to calculate the factorial of a number (e.g., 5! = 5 * 4 * 3 * 2 * 1).

Declare a variable number = 5.
Use a for loop to calculate the factorial of number.
Print the result.
*/

let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}
console.log("Factorial of 5:", factorial);
`);
                    }}
                  >
                    Copy
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
//
