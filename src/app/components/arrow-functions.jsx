/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function ArrowFunctions() {
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility

  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Arrow Functions
          </h1>
        </div>
        <div className="space-y-8">
          <h2 className="text-xl font-semibold">
            You have learnt how to write a function
          </h2>
          <p>For example,</p>
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`function sum(a, b) {
  return a + b;
}`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`function sum(a, b) {
  return a + b;
}`);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />
          <p> Now, this can be written in a simpler way</p>
          <br />
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`let sum = (a, b) => a + b;`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`let sum = (a, b) => a + b;`);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />
          <p>Let's take a look at another example</p>
          <br />
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`function isNegative(number) {
  return number <= 0;
}`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`function isNegative(number) {
  return number <= 0;
}`);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />
          <p>The equivalent would be:</p>
          <br />
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`let isNegative = (number) => number <= 0;`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `let isNegative = (number) => number <= 0;`
                  );
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />
          <p>
            Note that for arrow functions we need to declare a variable using{" "}
            <span className="font-bold text-purple-600">let</span> and
            everything after the arrow is considered to be returned, so we dont
            need to use{" "}
            <span className="font-bold text-purple-600">return</span>
          </p>
          <br />
          <p>
            Arrow functions are new and is part of{" "}
            <span className="font-bold text-purple-600">
              ES6 Javascript syntax
            </span>
            .
          </p>
          <br />
          <span>You can read more about it in this article.</span>
          <Link
            href="https://www.w3schools.com/js/js_es6.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Click here!
          </Link>
          <br />
          <h2 className="text-xl font-semibold">Exercise</h2>
          <p className="mt-2">
            Ensure that you copy the below and paste it into your index.js
          </p>{" "}
          <br />
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`/* 
Exercise 1: Convert a Function to an Arrow Function
Convert the following regular function into an arrow function:
function greet(name) {
  return "Hello, " + name + "!";
}
*/


/* 
Exercise 2: Arrow Function with Array Methods
Use an arrow function inside the map method to double the values in this array:
const numbers = [1, 2, 3, 4, 5];

*/



/* 
Exercise 3: Arrow Function with Multiple Parameters
Original task: Write an arrow function that takes three parameters x, y, and z and returns (x * y) + z.
*/`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`/* 
Exercise 1: Convert a Function to an Arrow Function
Convert the following regular function into an arrow function:
function greet(name) {
  return "Hello, " + name + "!";
}
*/


/* 
Exercise 2: Arrow Function with Array Methods
Use an arrow function inside the map method to double the values in this array:
const numbers = [1, 2, 3, 4, 5];

*/



/* 
Exercise 3: Arrow Function with Multiple Parameters
Original task: Write an arrow function that takes three parameters x, y, and z and returns (x * y) + z.
*/`);
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
Exercise 1: Convert a Function to an Arrow Function
Convert the following regular function into an arrow function:
function greet(name) {
  return "Hello, " + name + "!";
}
*/

const greet = (name) => "Hello, " + name + "!";

/* 
Exercise 2: Arrow Function with Array Methods
Use an arrow function inside the map method to double the values in this array:
const numbers = [1, 2, 3, 4, 5];

*/

const doubledNumbers = numbers.map((number) => number * 2);

/* 
Exercise 3: Arrow Function with Multiple Parameters
Original task: Write an arrow function that takes three parameters x, y, and z and returns (x * y) + z.
*/

const calculate = (x, y, z) => (x * y) + z;`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`/* 
Exercise 1: Convert a Function to an Arrow Function
Convert the following regular function into an arrow function:
function greet(name) {
  return "Hello, " + name + "!";
}
*/

const greet = (name) => "Hello, " + name + "!";

/* 
Exercise 2: Arrow Function with Array Methods
Use an arrow function inside the map method to double the values in this array:
const numbers = [1, 2, 3, 4, 5];

*/

const doubledNumbers = numbers.map((number) => number * 2);

/* 
Exercise 3: Arrow Function with Multiple Parameters
Original task: Write an arrow function that takes three parameters x, y, and z and returns (x * y) + z.
*/

const calculate = (x, y, z) => (x * y) + z;`);
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
  );
}
