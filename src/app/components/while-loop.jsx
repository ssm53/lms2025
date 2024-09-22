// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function WhileLoop() {
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility

  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            While Loop
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724133184/bootcamp-prebootcamp/x9naqnnvvyxv452b0xbt.mp4"
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
Exercise 1: Counting Down
Scenario: You are preparing a countdown for a rocket launch.

Declare a variable count and set it to 10.
Use a while loop to print the countdown from 10 to 1.
After the loop, print "Liftoff!".
Ensure the loop stops when count reaches 1 to avoid an infinite loop.
*/


/* 
Exercise 2: Summing Numbers
Scenario: You want to sum all numbers from 1 to 100.

Declare a variable sum and set it to 0.
Use a while loop to add each number from 1 to 100 to the sum.
Print the total sum once the loop is done.
Avoid infinite loops by stopping at 100.
*/


/* 
Exercise 3: Keep Asking for a Number
Scenario: You want to ask a user for a number greater than 0. If they enter a negative number, you keep asking until they enter a valid number.

Declare a variable userInput and set it to a negative number.
Use a while loop to keep asking for a new number until userInput is greater than 0.
Print "Thank you!" once a valid number is entered.
*/


/* 
Exercise 4: Avoiding Infinite Loop Trap
Scenario: You're simulating a bank account. The balance needs to be above $0 to keep spending.

Declare a variable balance with a value of 100.
Use a while loop to simulate spending $20 each time until the balance is 0 or less.
Print "No more money left!" after the loop finishes.
Avoid creating an infinite loop by ensuring balance is reduced after each iteration.
*/
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`/* 
Exercise 1: Counting Down
Scenario: You are preparing a countdown for a rocket launch.

Declare a variable count and set it to 10.
Use a while loop to print the countdown from 10 to 1.
After the loop, print "Liftoff!".
Ensure the loop stops when count reaches 1 to avoid an infinite loop.
*/


/* 
Exercise 2: Summing Numbers
Scenario: You want to sum all numbers from 1 to 100.

Declare a variable sum and set it to 0.
Use a while loop to add each number from 1 to 100 to the sum.
Print the total sum once the loop is done.
Avoid infinite loops by stopping at 100.
*/


/* 
Exercise 3: Keep Asking for a Number
Scenario: You want to ask a user for a number greater than 0. If they enter a negative number, you keep asking until they enter a valid number.

Declare a variable userInput and set it to a negative number.
Use a while loop to keep asking for a new number until userInput is greater than 0.
Print "Thank you!" once a valid number is entered.
*/


/* 
Exercise 4: Avoiding Infinite Loop Trap
Scenario: You're simulating a bank account. The balance needs to be above $0 to keep spending.

Declare a variable balance with a value of 100.
Use a while loop to simulate spending $20 each time until the balance is 0 or less.
Print "No more money left!" after the loop finishes.
Avoid creating an infinite loop by ensuring balance is reduced after each iteration.
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
Exercise 1: Counting Down
Scenario: You are preparing a countdown for a rocket launch.

Declare a variable count and set it to 10.
Use a while loop to print the countdown from 10 to 1.
After the loop, print "Liftoff!".
Ensure the loop stops when count reaches 1 to avoid an infinite loop.
*/

let count = 10;

while (count > 0) {
  console.log(count);
  count--; // Ensure the count decreases
}
console.log("Liftoff!");

/* 
Exercise 2: Summing Numbers
Scenario: You want to sum all numbers from 1 to 100.

Declare a variable sum and set it to 0.
Use a while loop to add each number from 1 to 100 to the sum.
Print the total sum once the loop is done.
Avoid infinite loops by stopping at 100.
*/

let sum = 0;
let number = 1;

while (number <= 100) {
  sum += number;
  number++; // Ensure the number increases
}
console.log("Total sum:", sum);

/* 
Exercise 3: Keep Asking for a Number
Scenario: You want to ask a user for a number greater than 0. If they enter a negative number, you keep asking until they enter a valid number.

Declare a variable userInput and set it to a negative number.
Use a while loop to keep asking for a new number until userInput is greater than 0.
Print "Thank you!" once a valid number is entered.
*/

let userInput = -1;

while (userInput <= 0) {
  userInput = prompt("Enter a number greater than 0:");
}
console.log("Thank you!");

/* 
Exercise 4: Avoiding Infinite Loop Trap
Scenario: You're simulating a bank account. The balance needs to be above $0 to keep spending.

Declare a variable balance with a value of 100.
Use a while loop to simulate spending $20 each time until the balance is 0 or less.
Print "No more money left!" after the loop finishes.
Avoid creating an infinite loop by ensuring balance is reduced after each iteration.
*/

let balance = 100;

while (balance > 0) {
  console.log("Current balance: $" + balance);
  balance -= 20; // Ensure balance decreases
}
console.log("No more money left!");
`}</code>
                </pre>
                <div className="mt-2 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(`/* 
Exercise 1: Counting Down
Scenario: You are preparing a countdown for a rocket launch.

Declare a variable count and set it to 10.
Use a while loop to print the countdown from 10 to 1.
After the loop, print "Liftoff!".
Ensure the loop stops when count reaches 1 to avoid an infinite loop.
*/

let count = 10;

while (count > 0) {
  console.log(count);
  count--; // Ensure the count decreases
}
console.log("Liftoff!");

/* 
Exercise 2: Summing Numbers
Scenario: You want to sum all numbers from 1 to 100.

Declare a variable sum and set it to 0.
Use a while loop to add each number from 1 to 100 to the sum.
Print the total sum once the loop is done.
Avoid infinite loops by stopping at 100.
*/

let sum = 0;
let number = 1;

while (number <= 100) {
  sum += number;
  number++; // Ensure the number increases
}
console.log("Total sum:", sum);

/* 
Exercise 3: Keep Asking for a Number
Scenario: You want to ask a user for a number greater than 0. If they enter a negative number, you keep asking until they enter a valid number.

Declare a variable userInput and set it to a negative number.
Use a while loop to keep asking for a new number until userInput is greater than 0.
Print "Thank you!" once a valid number is entered.
*/

let userInput = -1;

while (userInput <= 0) {
  userInput = prompt("Enter a number greater than 0:");
}
console.log("Thank you!");

/* 
Exercise 4: Avoiding Infinite Loop Trap
Scenario: You're simulating a bank account. The balance needs to be above $0 to keep spending.

Declare a variable balance with a value of 100.
Use a while loop to simulate spending $20 each time until the balance is 0 or less.
Print "No more money left!" after the loop finishes.
Avoid creating an infinite loop by ensuring balance is reduced after each iteration.
*/

let balance = 100;

while (balance > 0) {
  console.log("Current balance: $" + balance);
  balance -= 20; // Ensure balance decreases
}
console.log("No more money left!");
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
