// SIDE BY SIDE R!
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ChangeDataTypesAndConst() {
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Changing Variable into Different Data Types and Const vs Let
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724134452/bootcamp-prebootcamp/iw0rttoukks0ufhget6t.mp4"
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
                <code>{`// 1. Declare a string variable


// 2. Change it to a number


// 3. Change it to a boolean


// 4. Declare a const variable


// 5. Try to change the const variable (this should give an error)


// 6. Declare a let variable


// Change the let variable successfully


// 7. Declare variables of different types


// 8. Check and print their types`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`// 1. Declare a string variable


// 2. Change it to a number


// 3. Change it to a boolean


// 4. Declare a const variable


// 5. Try to change the const variable (this should give an error)


// 6. Declare a let variable


// Change the let variable successfully


// 7. Declare variables of different types


// 8. Check and print their types`);
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
                  <code>{`// 1. Declare a string variable
let myVariable = "Hello, world!";
console.log(myVariable); 

// 2. Change it to a number
myVariable = 42;
console.log(myVariable); 

// 3. Change it to a boolean
myVariable = true;
console.log(myVariable); 

// 4. Declare a const variable
const constantValue = 10;
console.log(constantValue); 

// 5. Try to change the const variable (this should give an error)
constantValue = 20; 

// 6. Declare a let variable
let changingValue = false;
console.log(changingValue); 

// Change the let variable successfully
changingValue = true;
console.log(changingValue); 


// 7. Declare variables of different types
let aString = "Learn to code!";
let aNumber = 100;
let aBoolean = true;

// 8. Check and print their types
console.log(typeof aString); 
console.log(typeof aNumber); 
console.log(typeof aBoolean);`}</code>
                </pre>
                <div className="mt-2 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard
                        .writeText(`// 1. Declare a string variable
let myVariable = "Hello, world!";
console.log(myVariable); 

// 2. Change it to a number
myVariable = 42;
console.log(myVariable); 

// 3. Change it to a boolean
myVariable = true;
console.log(myVariable); 

// 4. Declare a const variable
const constantValue = 10;
console.log(constantValue); 

// 5. Try to change the const variable (this should give an error)
constantValue = 20; 

// 6. Declare a let variable
let changingValue = false;
console.log(changingValue); 

// Change the let variable successfully
changingValue = true;
console.log(changingValue); 


// 7. Declare variables of different types
let aString = "Learn to code!";
let aNumber = 100;
let aBoolean = true;

// 8. Check and print their types
console.log(typeof aString); 
console.log(typeof aNumber); 
console.log(typeof aBoolean);`);
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
