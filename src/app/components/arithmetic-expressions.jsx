// SIDE BY SIDE R!
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ArithmeticExpressions() {
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Arithmetic Expressions
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724134764/bootcamp-prebootcamp/hgmfrottpyie3hbbfpnd.mp4"
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Exercise</h2>
            <p className="mt-2">
              Ensure that you copy the below and paste it into your index.js
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`/* 
Exercise 1
Scenario: You have a budget for a small event. You start with $1000. Throughout the day, you spend money on different items, and you also receive additional funds. Calculate how much you have left after your expenses and gains.

Start with an initial budget of $1000.
Subtract $150 for food, $200 for venue rental, and $50 for decorations.
Add $100 that you received as a donation.
Calculate and print the remaining budget.
*/



/* 
Exercise 2
Scenario: You are a teacher calculating the average grade of 3 students after a test.

The grades are 78, 85, and 92.
Calculate the total sum of the grades and then the average grade.
Print out the total sum and the average.
*/



/* 
Exercise 3
Scenario: You are a teacher calculating the average grade of 3 students after a test.

The grades are 78, 85, and 92.
Calculate the total sum of the grades and then the average grade.
Print out the total sum and the average.
*/



/* 
Exercise 4: Chocolate Distribution (Division, Modulo)
Scenario: You have 25 chocolates, and you want to divide them equally among 4 friends. Determine how many chocolates each friend gets and how many are left over.

Use division to determine how many chocolates each friend gets.
Use modulo to determine how many chocolates are left over.
*/


`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`/* 
Exercise 1
Scenario: You have a budget for a small event. You start with $1000. Throughout the day, you spend money on different items, and you also receive additional funds. Calculate how much you have left after your expenses and gains.

Start with an initial budget of $1000.
Subtract $150 for food, $200 for venue rental, and $50 for decorations.
Add $100 that you received as a donation.
Calculate and print the remaining budget.
*/



/* 
Exercise 2
Scenario: You are a teacher calculating the average grade of 3 students after a test.

The grades are 78, 85, and 92.
Calculate the total sum of the grades and then the average grade.
Print out the total sum and the average.
*/



/* 
Exercise 3
Scenario: You are a teacher calculating the average grade of 3 students after a test.

The grades are 78, 85, and 92.
Calculate the total sum of the grades and then the average grade.
Print out the total sum and the average.
*/



/* 
Exercise 4: Chocolate Distribution (Division, Modulo)
Scenario: You have 25 chocolates, and you want to divide them equally among 4 friends. Determine how many chocolates each friend gets and how many are left over.

Use division to determine how many chocolates each friend gets.
Use modulo to determine how many chocolates are left over.
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
Exercise 1
Scenario: You have a budget for a small event. You start with $1000. Throughout the day, you spend money on different items, and you also receive additional funds. Calculate how much you have left after your expenses and gains.

Start with an initial budget of $1000.
Subtract $150 for food, $200 for venue rental, and $50 for decorations.
Add $100 that you received as a donation.
Calculate and print the remaining budget.
*/

let budget = 1000; // Initial budget

// Expenses
budget = budget - 150; // Subtract food expense
budget = budget - 200; // Subtract venue rental
budget = budget - 50; // Subtract decorations

// Donation received
budget = budget + 100;

console.log("Remaining budget: $" + budget); // Print remaining budget

/* 
Exercise 2
Scenario: You are a teacher calculating the average grade of 3 students after a test.

The grades are 78, 85, and 92.
Calculate the total sum of the grades and then the average grade.
Print out the total sum and the average.
*/

let grade1 = 78;
let grade2 = 85;
let grade3 = 92;

// Total sum of grades
let totalSum = grade1 + grade2 + grade3;

// Calculate average
let averageGrade = totalSum / 3;

console.log("Total sum of grades: " + totalSum);
console.log("Average grade: " + averageGrade);

/* 
Exercise 3
Scenario: You are a teacher calculating the average grade of 3 students after a test.

The grades are 78, 85, and 92.
Calculate the total sum of the grades and then the average grade.
Print out the total sum and the average.
*/

let shirtPrice = 20;
let shoePrice = 50;

// Calculate total cost
let totalCost = shirtPrice * 3 + shoePrice * 2;

let moneyOnHand = 100;
let moneyToBorrow = totalCost - moneyOnHand;

console.log("Total cost: $" + totalCost);
console.log("Amount to borrow: $" + moneyToBorrow);

/* 
Exercise 4: Chocolate Distribution (Division, Modulo)
Scenario: You have 25 chocolates, and you want to divide them equally among 4 friends. Determine how many chocolates each friend gets and how many are left over.

Use division to determine how many chocolates each friend gets.
Use modulo to determine how many chocolates are left over.
*/

let totalChocolates = 25;
let numberOfFriends = 4;

// Calculate how many each friend gets
let chocolatesPerFriend = Math.floor(totalChocolates / numberOfFriends);

// Calculate how many are left over
let chocolatesLeftOver = totalChocolates % numberOfFriends;

console.log("Each friend gets: " + chocolatesPerFriend + " chocolates.");
console.log("Chocolates left over: " + chocolatesLeftOver);
`}</code>
                </pre>
                <div className="mt-2 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(`/* 
Exercise 1
Scenario: You have a budget for a small event. You start with $1000. Throughout the day, you spend money on different items, and you also receive additional funds. Calculate how much you have left after your expenses and gains.

Start with an initial budget of $1000.
Subtract $150 for food, $200 for venue rental, and $50 for decorations.
Add $100 that you received as a donation.
Calculate and print the remaining budget.
*/

let budget = 1000; // Initial budget

// Expenses
budget = budget - 150; // Subtract food expense
budget = budget - 200; // Subtract venue rental
budget = budget - 50; // Subtract decorations

// Donation received
budget = budget + 100;

console.log("Remaining budget: $" + budget); // Print remaining budget

/* 
Exercise 2
Scenario: You are a teacher calculating the average grade of 3 students after a test.

The grades are 78, 85, and 92.
Calculate the total sum of the grades and then the average grade.
Print out the total sum and the average.
*/

let grade1 = 78;
let grade2 = 85;
let grade3 = 92;

// Total sum of grades
let totalSum = grade1 + grade2 + grade3;

// Calculate average
let averageGrade = totalSum / 3;

console.log("Total sum of grades: " + totalSum);
console.log("Average grade: " + averageGrade);

/* 
Exercise 3
Scenario: You are a teacher calculating the average grade of 3 students after a test.

The grades are 78, 85, and 92.
Calculate the total sum of the grades and then the average grade.
Print out the total sum and the average.
*/

let shirtPrice = 20;
let shoePrice = 50;

// Calculate total cost
let totalCost = shirtPrice * 3 + shoePrice * 2;

let moneyOnHand = 100;
let moneyToBorrow = totalCost - moneyOnHand;

console.log("Total cost: $" + totalCost);
console.log("Amount to borrow: $" + moneyToBorrow);

/* 
Exercise 4: Chocolate Distribution (Division, Modulo)
Scenario: You have 25 chocolates, and you want to divide them equally among 4 friends. Determine how many chocolates each friend gets and how many are left over.

Use division to determine how many chocolates each friend gets.
Use modulo to determine how many chocolates are left over.
*/

let totalChocolates = 25;
let numberOfFriends = 4;

// Calculate how many each friend gets
let chocolatesPerFriend = Math.floor(totalChocolates / numberOfFriends);

// Calculate how many are left over
let chocolatesLeftOver = totalChocolates % numberOfFriends;

console.log("Each friend gets: " + chocolatesPerFriend + " chocolates.");
console.log("Chocolates left over: " + chocolatesLeftOver);
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
