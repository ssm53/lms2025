// SIDE BY SIDE R!
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function IntroToFunctions() {
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Intro to Functions
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724133983/bootcamp-prebootcamp/n5xeg5xmzovjk15rx9ij.mp4"
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
Exercise 1: Greeting Message
Scenario: You are creating a website that greets users every time they visit the site. Instead of writing the greeting code multiple times, you will create a function to handle it.

Write a function called greetUser that prints "Hello, welcome to our site!".
Call the function 3 times.
*/


/* 
Exercise 2: Simple Math Functions
Scenario: You are building a calculator. To avoid writing the same operations repeatedly, create functions for simple math operations.

Write a function called addNumbers that prints the sum of 10 and 5.
Write a function called multiplyNumbers that prints the product of 6 and 3.
Call each function once.
*/



/* 
Exercise 3: Repeated Message
Scenario: You are working on a system that reminds employees to take a break every hour. Instead of writing the reminder multiple times, create a function to handle it.

Write a function called remindBreak that prints "It's time to take a break!".
Call the function 5 times to simulate reminders.
*/


`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`/* 
Exercise 1: Greeting Message
Scenario: You are creating a website that greets users every time they visit the site. Instead of writing the greeting code multiple times, you will create a function to handle it.

Write a function called greetUser that prints "Hello, welcome to our site!".
Call the function 3 times.
*/


/* 
Exercise 2: Simple Math Functions
Scenario: You are building a calculator. To avoid writing the same operations repeatedly, create functions for simple math operations.

Write a function called addNumbers that prints the sum of 10 and 5.
Write a function called multiplyNumbers that prints the product of 6 and 3.
Call each function once.
*/



/* 
Exercise 3: Repeated Message
Scenario: You are working on a system that reminds employees to take a break every hour. Instead of writing the reminder multiple times, create a function to handle it.

Write a function called remindBreak that prints "It's time to take a break!".
Call the function 5 times to simulate reminders.
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
Exercise 1: Greeting Message
Scenario: You are creating a website that greets users every time they visit the site. Instead of writing the greeting code multiple times, you will create a function to handle it.

Write a function called greetUser that prints "Hello, welcome to our site!".
Call the function 3 times.
*/

function greetUser() {
  console.log("Hello, welcome to our site!");
}

// Call the function three times
greetUser();
greetUser();
greetUser();

/* 
Exercise 2: Simple Math Functions
Scenario: You are building a calculator. To avoid writing the same operations repeatedly, create functions for simple math operations.

Write a function called addNumbers that prints the sum of 10 and 5.
Write a function called multiplyNumbers that prints the product of 6 and 3.
Call each function once.
*/

function addNumbers() {
  console.log(10 + 5); // Sum of 10 and 5
}

function multiplyNumbers() {
  console.log(6 * 3); // Product of 6 and 3
}

// Call the functions
addNumbers();
multiplyNumbers();

/* 
Exercise 3: Repeated Message
Scenario: You are working on a system that reminds employees to take a break every hour. Instead of writing the reminder multiple times, create a function to handle it.

Write a function called remindBreak that prints "It's time to take a break!".
Call the function 5 times to simulate reminders.
*/

function remindBreak() {
  console.log("It's time to take a break!");
}

// Call the function five times
remindBreak();
remindBreak();
remindBreak();
remindBreak();
remindBreak();
`}</code>
                </pre>
                <div className="mt-2 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(`/* 
Exercise 1: Greeting Message
Scenario: You are creating a website that greets users every time they visit the site. Instead of writing the greeting code multiple times, you will create a function to handle it.

Write a function called greetUser that prints "Hello, welcome to our site!".
Call the function 3 times.
*/

function greetUser() {
  console.log("Hello, welcome to our site!");
}

// Call the function three times
greetUser();
greetUser();
greetUser();

/* 
Exercise 2: Simple Math Functions
Scenario: You are building a calculator. To avoid writing the same operations repeatedly, create functions for simple math operations.

Write a function called addNumbers that prints the sum of 10 and 5.
Write a function called multiplyNumbers that prints the product of 6 and 3.
Call each function once.
*/

function addNumbers() {
  console.log(10 + 5); // Sum of 10 and 5
}

function multiplyNumbers() {
  console.log(6 * 3); // Product of 6 and 3
}

// Call the functions
addNumbers();
multiplyNumbers();

/* 
Exercise 3: Repeated Message
Scenario: You are working on a system that reminds employees to take a break every hour. Instead of writing the reminder multiple times, create a function to handle it.

Write a function called remindBreak that prints "It's time to take a break!".
Call the function 5 times to simulate reminders.
*/

function remindBreak() {
  console.log("It's time to take a break!");
}

// Call the function five times
remindBreak();
remindBreak();
remindBreak();
remindBreak();
remindBreak();
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
