// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function VariableScope() {
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Variable Scope
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724132510/bootcamp-further-essentials/fousnurgexysusmakd1n.mp4"
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
Exercise 1: Global vs Local Variables
In the code below, there is a variable message declared both globally and locally within a function. Determine what will be logged to the console and explain why.

let message = "Global message";

function displayMessage() {
  let message = "Local message";
  console.log(message);
}

displayMessage();
console.log(message);
*/


/* 
Exercise 2: Modifying Global Variables
In this exercise, you will modify a global variable inside a function. Consider the code:

let count = 0;

function increment() {
  count += 1;
  console.log("Inside function:", count);
}

increment();
increment();
console.log("Outside function:", count);

Task: Run the code and explain how the global variable count is affected when modified inside the function.
*/


/* 
Exercise 3: Function Scope
In the following code, there are two variables with the same name declared inside different functions. Predict the output and explain why.

function outer() {
  let scope = "Outer scope";

  function inner() {
    let scope = "Inner scope";
    console.log(scope);
  }

  inner();
  console.log(scope);
}

outer();

Task: Explain the relationship between the scope variables in the outer and inner functions and why the values differ when logged.
*/

`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`/* 
Exercise 1: Global vs Local Variables
In the code below, there is a variable message declared both globally and locally within a function. Determine what will be logged to the console and explain why.

let message = "Global message";

function displayMessage() {
  let message = "Local message";
  console.log(message);
}

displayMessage();
console.log(message);
*/


/* 
Exercise 2: Modifying Global Variables
In this exercise, you will modify a global variable inside a function. Consider the code:

let count = 0;

function increment() {
  count += 1;
  console.log("Inside function:", count);
}

increment();
increment();
console.log("Outside function:", count);

Task: Run the code and explain how the global variable count is affected when modified inside the function.
*/


/* 
Exercise 3: Function Scope
In the following code, there are two variables with the same name declared inside different functions. Predict the output and explain why.

function outer() {
  let scope = "Outer scope";

  function inner() {
    let scope = "Inner scope";
    console.log(scope);
  }

  inner();
  console.log(scope);
}

outer();

Task: Explain the relationship between the scope variables in the outer and inner functions and why the values differ when logged.
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
Exercise 1: Global vs Local Variables
In the code below, there is a variable message declared both globally and locally within a function. Determine what will be logged to the console and explain why.

let message = "Global message";

function displayMessage() {
  let message = "Local message";
  console.log(message);
}

displayMessage();
console.log(message);
*/

// ANSWER
/* 
// Output:
Local message
Global message
*/

/* Explanation:

The message variable declared inside the displayMessage function is local to that function. So, when console.log(message) is called inside the function, it logs "Local message".
Outside the function, the global message variable is logged, which still holds the value "Global message", since the local message inside the function does not affect the global one.
*/

/* 
Exercise 2: Modifying Global Variables
In this exercise, you will modify a global variable inside a function. Consider the code:

let count = 0;

function increment() {
  count += 1;
  console.log("Inside function:", count);
}

increment();
increment();
console.log("Outside function:", count);

Task: Run the code and explain how the global variable count is affected when modified inside the function.
*/

// ANSWER
/* 
// Output:
Inside function: 1
Inside function: 2
Outside function: 2

*/

/* Explanation:

The variable count is declared globally.
Each time the increment() function is called, it modifies the global count variable by incrementing it. The updated value is then logged both inside the function and later outside the function.
Since count is global, changes made inside the function are reflected globally.
*/

/* 
Exercise 3: Function Scope
In the following code, there are two variables with the same name declared inside different functions. Predict the output and explain why.

function outer() {
  let scope = "Outer scope";

  function inner() {
    let scope = "Inner scope";
    console.log(scope);
  }

  inner();
  console.log(scope);
}

outer();

Task: Explain the relationship between the scope variables in the outer and inner functions and why the values differ when logged.
*/

// ANSWER
/* 
// Output:
Inner scope
Outer scope


*/

/* Explanation:
The variable scope is declared both in the outer function and the inner function.
Inside the inner function, the local scope variable is declared, which shadows the scope variable from the outer function. So, when console.log(scope) is called inside inner, it logs "Inner scope".
After the inner function is called, the outer function logs its own scope variable, which is "Outer scope".
This demonstrates that variables declared inside a function are limited to that function's scope and do not affect variables in an outer scope.
*/
`}</code>
                </pre>
                <div className="mt-2 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(`/* 
Exercise 1: Global vs Local Variables
In the code below, there is a variable message declared both globally and locally within a function. Determine what will be logged to the console and explain why.

let message = "Global message";

function displayMessage() {
  let message = "Local message";
  console.log(message);
}

displayMessage();
console.log(message);
*/

// ANSWER
/* 
// Output:
Local message
Global message
*/

/* Explanation:

The message variable declared inside the displayMessage function is local to that function. So, when console.log(message) is called inside the function, it logs "Local message".
Outside the function, the global message variable is logged, which still holds the value "Global message", since the local message inside the function does not affect the global one.
*/

/* 
Exercise 2: Modifying Global Variables
In this exercise, you will modify a global variable inside a function. Consider the code:

let count = 0;

function increment() {
  count += 1;
  console.log("Inside function:", count);
}

increment();
increment();
console.log("Outside function:", count);

Task: Run the code and explain how the global variable count is affected when modified inside the function.
*/

// ANSWER
/* 
// Output:
Inside function: 1
Inside function: 2
Outside function: 2

*/

/* Explanation:

The variable count is declared globally.
Each time the increment() function is called, it modifies the global count variable by incrementing it. The updated value is then logged both inside the function and later outside the function.
Since count is global, changes made inside the function are reflected globally.
*/

/* 
Exercise 3: Function Scope
In the following code, there are two variables with the same name declared inside different functions. Predict the output and explain why.

function outer() {
  let scope = "Outer scope";

  function inner() {
    let scope = "Inner scope";
    console.log(scope);
  }

  inner();
  console.log(scope);
}

outer();

Task: Explain the relationship between the scope variables in the outer and inner functions and why the values differ when logged.
*/

// ANSWER
/* 
// Output:
Inner scope
Outer scope


*/

/* Explanation:
The variable scope is declared both in the outer function and the inner function.
Inside the inner function, the local scope variable is declared, which shadows the scope variable from the outer function. So, when console.log(scope) is called inside inner, it logs "Inner scope".
After the inner function is called, the outer function logs its own scope variable, which is "Outer scope".
This demonstrates that variables declared inside a function are limited to that function's scope and do not affect variables in an outer scope.
*/
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
