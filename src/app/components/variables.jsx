/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Variables() {
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Variables
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724134546/bootcamp-prebootcamp/qss5bw4zb7sy459y7a6u.mp4"
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
                <code>{`// 1. Write a comment for this code

// write your comment here
console.log("I am doing my first challenge");

// 2. Write a multi-line comment for this code below (research how to write multi-line comments on javascript)

// write your comment here
console.log("I just reserached how to write multi-line comments on Javascript");

// 3.  You are Picasso and you run an art class. You have 10 students. Declare a variable for that number of students and assign the appropriate value to it.

// 4. You are still Picasso, and you know that you have 10 students. However, you are unsure of how many students have tried doing art before. Declare a variable for this (note that we are unsure of the value, so dont assign a value to it yet)

// 5. Now, let's assume you know how many studetns have done art before, and that number is 5. Now, assign the appropriate value to the variable you declared in question 4. I then want you to print this out in the console (by using console.log), and then check it out on the browser using live server.`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`// 1. Write a comment for this code

// write your comment here
console.log("I am doing my first challenge");

// 2. Write a multi-line comment for this code below (research how to write multi-line comments on javascript)

// write your comment here
console.log("I just reserached how to write multi-line comments on Javascript");

// 3.  You are Picasso and you run an art class. You have 10 students. Declare a variable for that number of students and assign the appropriate value to it.

// 4. You are still Picasso, and you know that you have 10 students. However, you are unsure of how many students have tried doing art before. Declare a variable for this (note that we are unsure of the value, so dont assign a value to it yet)

// 5. Now, let's assume you know how many studetns have done art before, and that number is 5. Now, assign the appropriate value to the variable you declared in question 4. I then want you to print this out in the console (by using console.log), and then check it out on the browser using live server.`);
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
                  <code>{`// 1. Write a comment for this code

// Printing out 'I am doing my first challenge' in console
console.log("I am doing my first challenge");

// 2. Write a multi-line comment for this code below (research how to write multi-line comments on javascript)

/* 
This is a multi-line comment.
The code below logs a message to the console.
It confirms that we have researched how to write multi-line comments in JavaScript.
*/
console.log("I just reserached how to write multi-line comments on Javascript");

// 3.  You are Picasso and you run an art class. You have 10 students. Declare a variable for that number of students and assign the appropriate value to it.

let numberOfStudents = 10;

// 4. You are still Picasso, and you know that you have 10 students. However, you are unsure of how many students have tried doing art before. Declare a variable for this (note that we are unsure of the value, so dont assign a value to it yet)

let numberOfStudentsWhoHaveDoneArt;

// 5. Now, let's assume you know how many studetns have done art before, and that number is 5. Now, assign the appropriate value to the variable you declared in question 4. I then want you to print this out in the console (by using console.log), and then check it out on the browser using live server.

numberOfStudentsWhoHaveDoneArt = 5;
console.log(numberOfStudentsWhoHaveDoneArt);`}</code>
                </pre>
                <div className="mt-2 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard
                        .writeText(`// 1. Write a comment for this code

// Printing out 'I am doing my first challenge' in console
console.log("I am doing my first challenge");

// 2. Write a multi-line comment for this code below (research how to write multi-line comments on javascript)

/* 
This is a multi-line comment.
The code below logs a message to the console.
It confirms that we have researched how to write multi-line comments in JavaScript.
*/
console.log("I just reserached how to write multi-line comments on Javascript");

// 3.  You are Picasso and you run an art class. You have 10 students. Declare a variable for that number of students and assign the appropriate value to it.

let numberOfStudents = 10;

// 4. You are still Picasso, and you know that you have 10 students. However, you are unsure of how many students have tried doing art before. Declare a variable for this (note that we are unsure of the value, so dont assign a value to it yet)

let numberOfStudentsWhoHaveDoneArt;

// 5. Now, let's assume you know how many studetns have done art before, and that number is 5. Now, assign the appropriate value to the variable you declared in question 4. I then want you to print this out in the console (by using console.log), and then check it out on the browser using live server.

numberOfStudentsWhoHaveDoneArt = 5;
console.log(numberOfStudentsWhoHaveDoneArt);`);
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
