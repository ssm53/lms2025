// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function StrictEqualityOperator() {
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility

  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Strict Equality Operator
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724133452/bootcamp-prebootcamp/nuybngh8l0kyexhrkc5f.mp4"
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
Exercise 1: Assign vs Compare
Scenario: You want to check if a variable has been assigned the correct value.

Declare a variable x and assign it a value using the assignment operator =.
Write a condition that checks if x is equal to 10 using ==.
If true, print "x is 10", otherwise print "x is not 10."
*/


/* 
Exercise 2: String Comparison
Scenario: You are creating a system to check user input.

Declare a variable userInput with a value of "5".
Write a condition that compares if userInput is equal to the number 5 using == and === operators.
Print different messages based on whether the input is loosely or strictly equal to 5.
*/


/* 
Exercise 3: Boolean vs Number
Scenario: You need to compare a boolean value with a number.

Declare a variable isTrue and set it to true.
Write a condition that compares if isTrue is equal to the number 1 using == and ===.
Print different results for loose and strict equality.
*/


/* 
Exercise 4: Number as a String
Scenario: You want to see how JavaScript handles number comparisons when they are strings.

Declare a variable num with a value of "100".
Write a condition to check if num is equal to 100 using both == and ===.
Print "Loose equality works" and "Strict equality works" based on the results.
*/

/* 
Exercise 5: Variable Comparison
Scenario: You are comparing two variables to see if they refer to the same value.

Declare two variables a and b. Set a = 5 and b = "5".
Write a condition that checks if a and b are equal using both == and ===.
Print "They are loosely equal" and "They are strictly equal" based on the results.
*/
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`/* 
Exercise 1: Assign vs Compare
Scenario: You want to check if a variable has been assigned the correct value.

Declare a variable x and assign it a value using the assignment operator =.
Write a condition that checks if x is equal to 10 using ==.
If true, print "x is 10", otherwise print "x is not 10."
*/


/* 
Exercise 2: String Comparison
Scenario: You are creating a system to check user input.

Declare a variable userInput with a value of "5".
Write a condition that compares if userInput is equal to the number 5 using == and === operators.
Print different messages based on whether the input is loosely or strictly equal to 5.
*/


/* 
Exercise 3: Boolean vs Number
Scenario: You need to compare a boolean value with a number.

Declare a variable isTrue and set it to true.
Write a condition that compares if isTrue is equal to the number 1 using == and ===.
Print different results for loose and strict equality.
*/


/* 
Exercise 4: Number as a String
Scenario: You want to see how JavaScript handles number comparisons when they are strings.

Declare a variable num with a value of "100".
Write a condition to check if num is equal to 100 using both == and ===.
Print "Loose equality works" and "Strict equality works" based on the results.
*/

/* 
Exercise 5: Variable Comparison
Scenario: You are comparing two variables to see if they refer to the same value.

Declare two variables a and b. Set a = 5 and b = "5".
Write a condition that checks if a and b are equal using both == and ===.
Print "They are loosely equal" and "They are strictly equal" based on the results.
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
Exercise 1: Assign vs Compare
Scenario: You want to check if a variable has been assigned the correct value.

Declare a variable x and assign it a value using the assignment operator =.
Write a condition that checks if x is equal to 10 using ==.
If true, print "x is 10", otherwise print "x is not 10."
*/

let x = 10;

if (x == 10) {
  console.log("x is 10");
} else {
  console.log("x is not 10");
}

/* 
Exercise 2: String Comparison
Scenario: You are creating a system to check user input.

Declare a variable userInput with a value of "5".
Write a condition that compares if userInput is equal to the number 5 using == and === operators.
Print different messages based on whether the input is loosely or strictly equal to 5.
*/

let userInput = "5";

if (userInput == 5) {
  console.log("Loose comparison: userInput is 5");
}

if (userInput === 5) {
  console.log("Strict comparison: userInput is 5");
} else {
  console.log("Strict comparison: userInput is not 5");
}

/* 
Exercise 3: Boolean vs Number
Scenario: You need to compare a boolean value with a number.

Declare a variable isTrue and set it to true.
Write a condition that compares if isTrue is equal to the number 1 using == and ===.
Print different results for loose and strict equality.
*/

let isTrue = true;

if (isTrue == 1) {
  console.log("Loose comparison: isTrue is equal to 1");
}

if (isTrue === 1) {
  console.log("Strict comparison: isTrue is equal to 1");
} else {
  console.log("Strict comparison: isTrue is not equal to 1");
}

/* 
Exercise 4: Number as a String
Scenario: You want to see how JavaScript handles number comparisons when they are strings.

Declare a variable num with a value of "100".
Write a condition to check if num is equal to 100 using both == and ===.
Print "Loose equality works" and "Strict equality works" based on the results.
*/

let num = "100";

if (num == 100) {
  console.log("Loose equality works");
}

if (num === 100) {
  console.log("Strict equality works");
} else {
  console.log("Strict equality fails");
}

/* 
Exercise 5: Variable Comparison
Scenario: You are comparing two variables to see if they refer to the same value.

Declare two variables a and b. Set a = 5 and b = "5".
Write a condition that checks if a and b are equal using both == and ===.
Print "They are loosely equal" and "They are strictly equal" based on the results.
*/

let a = 5;
let b = "5";

if (a == b) {
  console.log("They are loosely equal");
}

if (a === b) {
  console.log("They are strictly equal");
} else {
  console.log("They are not strictly equal");
}
`}</code>
                </pre>
                <div className="mt-2 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(`/* 
Exercise 1: Assign vs Compare
Scenario: You want to check if a variable has been assigned the correct value.

Declare a variable x and assign it a value using the assignment operator =.
Write a condition that checks if x is equal to 10 using ==.
If true, print "x is 10", otherwise print "x is not 10."
*/

let x = 10;

if (x == 10) {
  console.log("x is 10");
} else {
  console.log("x is not 10");
}

/* 
Exercise 2: String Comparison
Scenario: You are creating a system to check user input.

Declare a variable userInput with a value of "5".
Write a condition that compares if userInput is equal to the number 5 using == and === operators.
Print different messages based on whether the input is loosely or strictly equal to 5.
*/

let userInput = "5";

if (userInput == 5) {
  console.log("Loose comparison: userInput is 5");
}

if (userInput === 5) {
  console.log("Strict comparison: userInput is 5");
} else {
  console.log("Strict comparison: userInput is not 5");
}

/* 
Exercise 3: Boolean vs Number
Scenario: You need to compare a boolean value with a number.

Declare a variable isTrue and set it to true.
Write a condition that compares if isTrue is equal to the number 1 using == and ===.
Print different results for loose and strict equality.
*/

let isTrue = true;

if (isTrue == 1) {
  console.log("Loose comparison: isTrue is equal to 1");
}

if (isTrue === 1) {
  console.log("Strict comparison: isTrue is equal to 1");
} else {
  console.log("Strict comparison: isTrue is not equal to 1");
}

/* 
Exercise 4: Number as a String
Scenario: You want to see how JavaScript handles number comparisons when they are strings.

Declare a variable num with a value of "100".
Write a condition to check if num is equal to 100 using both == and ===.
Print "Loose equality works" and "Strict equality works" based on the results.
*/

let num = "100";

if (num == 100) {
  console.log("Loose equality works");
}

if (num === 100) {
  console.log("Strict equality works");
} else {
  console.log("Strict equality fails");
}

/* 
Exercise 5: Variable Comparison
Scenario: You are comparing two variables to see if they refer to the same value.

Declare two variables a and b. Set a = 5 and b = "5".
Write a condition that checks if a and b are equal using both == and ===.
Print "They are loosely equal" and "They are strictly equal" based on the results.
*/

let a = 5;
let b = "5";

if (a == b) {
  console.log("They are loosely equal");
}

if (a === b) {
  console.log("They are strictly equal");
} else {
  console.log("They are not strictly equal");
}
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
