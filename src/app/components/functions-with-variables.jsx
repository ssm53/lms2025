// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FunctionsWithVariables() {
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Functions with Variables
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724133898/bootcamp-prebootcamp/su6mrijhx7vtvhn9nvvw.mp4"
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
Exercise 1: Personal Greeting
Scenario: You are creating a personalized greeting for users on a website.

Write a function called greetUser that takes a name as a parameter and returns a message like "Hello, [name]!".
Call the function and store the result in a variable, then print the result.
*/



/* 
Exercise 2: Simple Calculator
Scenario: You are building a simple calculator that can add two numbers.

Write a function called addNumbers that takes two parameters: a and b. The function should return their sum.
Call the function with two numbers, store the result in a variable, and print the result.
*/


/* 
Exercise 3: Temperature Converter
Scenario: You are creating a temperature converter for your app.

Write a function called convertToFahrenheit that takes a Celsius temperature as a parameter and returns the Fahrenheit equivalent.
Use the formula: Fahrenheit = (Celsius * 9/5) + 32.
Call the function with a Celsius value, store the result, and print the Fahrenheit value.
*/



/* 
Exercise 4: Area of a Rectangle
Scenario: You are calculating the area of a rectangle for a project.

Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns the area.
Call the function, store the result in a variable, and print the area.
*/



/* 
Exercise 5: Maximum of Two Numbers
Scenario: You are determining which of two numbers is larger.

Write a function called maxNumber that takes two numbers as parameters and returns the larger number.
Call the function with two numbers, store the result, and print which number is larger.
*/


/* 
Exercise 6: Maximum of Two Numbers
Scenario: You are determining which of two numbers is larger.

Write a function called maxNumber that takes two numbers as parameters and returns the larger number.
Call the function with two numbers, store the result, and print which number is larger.
*/


`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`/* 
Exercise 1: Personal Greeting
Scenario: You are creating a personalized greeting for users on a website.

Write a function called greetUser that takes a name as a parameter and returns a message like "Hello, [name]!".
Call the function and store the result in a variable, then print the result.
*/



/* 
Exercise 2: Simple Calculator
Scenario: You are building a simple calculator that can add two numbers.

Write a function called addNumbers that takes two parameters: a and b. The function should return their sum.
Call the function with two numbers, store the result in a variable, and print the result.
*/


/* 
Exercise 3: Temperature Converter
Scenario: You are creating a temperature converter for your app.

Write a function called convertToFahrenheit that takes a Celsius temperature as a parameter and returns the Fahrenheit equivalent.
Use the formula: Fahrenheit = (Celsius * 9/5) + 32.
Call the function with a Celsius value, store the result, and print the Fahrenheit value.
*/



/* 
Exercise 4: Area of a Rectangle
Scenario: You are calculating the area of a rectangle for a project.

Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns the area.
Call the function, store the result in a variable, and print the area.
*/



/* 
Exercise 5: Maximum of Two Numbers
Scenario: You are determining which of two numbers is larger.

Write a function called maxNumber that takes two numbers as parameters and returns the larger number.
Call the function with two numbers, store the result, and print which number is larger.
*/


/* 
Exercise 6: Maximum of Two Numbers
Scenario: You are determining which of two numbers is larger.

Write a function called maxNumber that takes two numbers as parameters and returns the larger number.
Call the function with two numbers, store the result, and print which number is larger.
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
Exercise 1: Personal Greeting
Scenario: You are creating a personalized greeting for users on a website.

Write a function called greetUser that takes a name as a parameter and returns a message like "Hello, [name]!".
Call the function and store the result in a variable, then print the result.
*/

function greetUser(name) {
  return "Hello, " + name + "!";
}

// Call the function with a name
let greeting = greetUser("John");

console.log(greeting); // Output: Hello, John!

/* 
Exercise 2: Simple Calculator
Scenario: You are building a simple calculator that can add two numbers.

Write a function called addNumbers that takes two parameters: a and b. The function should return their sum.
Call the function with two numbers, store the result in a variable, and print the result.
*/

function addNumbers(a, b) {
  return a + b;
}

// Call the function with two numbers
let sum = addNumbers(8, 12);

console.log("The sum is: " + sum); // Output: The sum is: 20

/* 
Exercise 3: Temperature Converter
Scenario: You are creating a temperature converter for your app.

Write a function called convertToFahrenheit that takes a Celsius temperature as a parameter and returns the Fahrenheit equivalent.
Use the formula: Fahrenheit = (Celsius * 9/5) + 32.
Call the function with a Celsius value, store the result, and print the Fahrenheit value.
*/

function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Call the function with a temperature
let fahrenheit = convertToFahrenheit(25);

console.log("Temperature in Fahrenheit: " + fahrenheit); // Output: 77°F

/* 
Exercise 4: Area of a Rectangle
Scenario: You are calculating the area of a rectangle for a project.

Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns the area.
Call the function, store the result in a variable, and print the area.
*/

function calculateArea(length, width) {
  return length * width;
}

// Call the function with dimensions
let area = calculateArea(5, 10);

console.log("Area of the rectangle: " + area); // Output: 50

/* 
Exercise 5: Maximum of Two Numbers
Scenario: You are determining which of two numbers is larger.

Write a function called maxNumber that takes two numbers as parameters and returns the larger number.
Call the function with two numbers, store the result, and print which number is larger.
*/
function maxNumber(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Call the function with two numbers
let max = maxNumber(15, 10);

console.log("The larger number is: " + max); // Output: 15

/* 
Exercise 6: Maximum of Two Numbers
Scenario: You are determining which of two numbers is larger.

Write a function called maxNumber that takes two numbers as parameters and returns the larger number.
Call the function with two numbers, store the result, and print which number is larger.
*/

function applyDiscount(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * discountPercentage / 100);
}

// Call the function with price and discount percentage
let discountedPrice = applyDiscount(100, 20);

console.log("Discounted price: $" + discountedPrice); // Output: $80

`}</code>
                </pre>
                <div className="mt-2 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(`/* 
Exercise 1: Personal Greeting
Scenario: You are creating a personalized greeting for users on a website.

Write a function called greetUser that takes a name as a parameter and returns a message like "Hello, [name]!".
Call the function and store the result in a variable, then print the result.
*/

function greetUser(name) {
  return "Hello, " + name + "!";
}

// Call the function with a name
let greeting = greetUser("John");

console.log(greeting); // Output: Hello, John!

/* 
Exercise 2: Simple Calculator
Scenario: You are building a simple calculator that can add two numbers.

Write a function called addNumbers that takes two parameters: a and b. The function should return their sum.
Call the function with two numbers, store the result in a variable, and print the result.
*/

function addNumbers(a, b) {
  return a + b;
}

// Call the function with two numbers
let sum = addNumbers(8, 12);

console.log("The sum is: " + sum); // Output: The sum is: 20

/* 
Exercise 3: Temperature Converter
Scenario: You are creating a temperature converter for your app.

Write a function called convertToFahrenheit that takes a Celsius temperature as a parameter and returns the Fahrenheit equivalent.
Use the formula: Fahrenheit = (Celsius * 9/5) + 32.
Call the function with a Celsius value, store the result, and print the Fahrenheit value.
*/

function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Call the function with a temperature
let fahrenheit = convertToFahrenheit(25);

console.log("Temperature in Fahrenheit: " + fahrenheit); // Output: 77°F

/* 
Exercise 4: Area of a Rectangle
Scenario: You are calculating the area of a rectangle for a project.

Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns the area.
Call the function, store the result in a variable, and print the area.
*/

function calculateArea(length, width) {
  return length * width;
}

// Call the function with dimensions
let area = calculateArea(5, 10);

console.log("Area of the rectangle: " + area); // Output: 50

/* 
Exercise 5: Maximum of Two Numbers
Scenario: You are determining which of two numbers is larger.

Write a function called maxNumber that takes two numbers as parameters and returns the larger number.
Call the function with two numbers, store the result, and print which number is larger.
*/
function maxNumber(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Call the function with two numbers
let max = maxNumber(15, 10);

console.log("The larger number is: " + max); // Output: 15

/* 
Exercise 6: Maximum of Two Numbers
Scenario: You are determining which of two numbers is larger.

Write a function called maxNumber that takes two numbers as parameters and returns the larger number.
Call the function with two numbers, store the result, and print which number is larger.
*/

function applyDiscount(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * discountPercentage / 100);
}

// Call the function with price and discount percentage
let discountedPrice = applyDiscount(100, 20);

console.log("Discounted price: $" + discountedPrice); // Output: $80

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
