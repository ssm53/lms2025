/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function DataTypes() {
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            3 Important Data Types
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724134353/bootcamp-prebootcamp/a9piratswtgnfb9brc7a.mp4"
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
              <pre className="text-sm text-[#d4d4d4] overflow-auto">
                <code>{`// 1. You are still Picasso and you called you art class Be Like Picasso. Declare this as a variable and ensure that it is a string. After that, double-check the typeof that variable and print the type in our console.



// 2. Now, you have an assistane called Picasso Junior. Do the same as above but instead of using double quotes, use single quotes. (research on how to write string with single quotes)



// 3. You will not have any exams for your class. Declare this as a variable. Think which type of data would be suitable here. Again, print out the typeof in your console



// 4. You will be running your class for 6 months. Declare this as a variable in months. Think which type of data would be suitable here. Again, print out the typeof in your console



// 5. Declare the number 84 as 1) a string and 2) as a number. Again, print out the typeof in your console for each of the variables.`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`// 1. You are still Picasso and you called you art class Be Like Picasso. Declare this as a variable and ensure that it is a string. After that, double-check the typeof that variable and print the type in our console.



// 2. Now, you have an assistane called Picasso Junior. Do the same as above but instead of using double quotes, use single quotes. (research on how to write string with single quotes)



// 3. You will not have any exams for your class. Declare this as a variable. Think which type of data would be suitable here. Again, print out the typeof in your console



// 4. You will be running your class for 6 months. Declare this as a variable in months. Think which type of data would be suitable here. Again, print out the typeof in your console



// 5. Declare the number 84 as 1) a string and 2) as a number. Again, print out the typeof in your console for each of the variables.`);
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
                  <code>{`// 1. You are still Picasso and you called you art class Be Like Picasso. Declare this as a variable and ensure that it is a string. After that, double-check the typeof that variable and print the type in our console.

let className = "Be Like Picasso";
console.log(typeof className);

// 2. Now, you have an assistane called Picasso Junior. Do the same as above but instead of using double quotes, use single quotes. (research on how to write string with single quotes)

let nameOfAssistant = "Picasso Junior";
console.log(typeof nameOfAssistant);
// here, you learn that you can write string using single quotes as well. There are no differences between the two of them. In this bootcamp, we mainly use the method of double quotes.

// 3. You will not have any exams for your class. Declare this as a variable. Think which type of data would be suitable here. Again, print out the typeof in your console

let haveExams = false;
console.log(typeof haveExams);

// 4. You will be running your class for 6 months. Declare this as a variable in months. Think which type of data would be suitable here. Again, print out the typeof in your console

let lengthOfClass = 6;
console.log(typeof lengthOfClass);

// 5. Declare the number 84 as 1) a string and 2) as a number. Again, print out the typeof in your console for each of the variables.

let string84 = "84";
let number84 = 84;
console.log(typeof string84);
console.log(typeof number84);`}</code>
                </pre>
                <div className="mt-2 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard
                        .writeText(`// 1. You are still Picasso and you called you art class Be Like Picasso. Declare this as a variable and ensure that it is a string. After that, double-check the typeof that variable and print the type in our console.

let className = "Be Like Picasso";
console.log(typeof className);

// 2. Now, you have an assistane called Picasso Junior. Do the same as above but instead of using double quotes, use single quotes. (research on how to write string with single quotes)

let nameOfAssistant = "Picasso Junior";
console.log(typeof nameOfAssistant);
// here, you learn that you can write string using single quotes as well. There are no differences between the two of them. In this bootcamp, we mainly use the method of double quotes.

// 3. You will not have any exams for your class. Declare this as a variable. Think which type of data would be suitable here. Again, print out the typeof in your console

let haveExams = false;
console.log(typeof haveExams);

// 4. You will be running your class for 6 months. Declare this as a variable in months. Think which type of data would be suitable here. Again, print out the typeof in your console

let lengthOfClass = 6;
console.log(typeof lengthOfClass);

// 5. Declare the number 84 as 1) a string and 2) as a number. Again, print out the typeof in your console for each of the variables.

let string84 = "84";
let number84 = 84;
console.log(typeof string84);
console.log(typeof number84);`);
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
