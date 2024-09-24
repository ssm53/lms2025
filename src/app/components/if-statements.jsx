// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function IfStatements() {
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            If statements
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724133550/bootcamp-prebootcamp/ge7uadeqvgvgmzhrwukd.mp4"
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
Exercise 1: Driving Eligibility
Scenario: You are writing code to check if someone is old enough to drive.

Write a program that takes a person's age and checks if they are old enough to drive (assume the minimum age to drive is 18).
If they are 18 or older, print "You are allowed to drive." Otherwise, print "You are not old enough to drive."
*/


/* 
Exercise 2: Even or Odd
Scenario: You need to check if a number is even or odd.

Write a program that takes a number and checks whether it is even or odd.
Print "The number is even" if the number is divisible by 2. Otherwise, print "The number is odd."
*/


/* 
Exercise 3: Grading System
Scenario: You are building a grading system for a school.

Write a program that takes a student's score and assigns a grade based on the following rules:
If the score is 90 or above, print "A"
If the score is 80 to 89, print "B"
If the score is 70 to 79, print "C"
If the score is 60 to 69, print "D"
If the score is below 60, print "F"
*/


/* 
Exercise 4: Login System
Scenario: You are creating a login system where users must enter the correct username and password to gain access.

Write a program that checks if the entered username is "admin" and the password is "1234".
If both are correct, print "Login successful." If either is wrong, print "Login failed."
*/


/* 
Exercise 5: Temperature Check
Scenario: You are writing a program that checks the current temperature and suggests clothing based on it.

Write a program that takes a temperature value and suggests:
If it's below 10 degrees, print "Wear a jacket."
If it's between 10 and 20 degrees, print "Wear a sweater."
If it's above 20 degrees, print "No jacket needed."
*/


`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`/* 
Exercise 1: Driving Eligibility
Scenario: You are writing code to check if someone is old enough to drive.

Write a program that takes a person's age and checks if they are old enough to drive (assume the minimum age to drive is 18).
If they are 18 or older, print "You are allowed to drive." Otherwise, print "You are not old enough to drive."
*/


/* 
Exercise 2: Even or Odd
Scenario: You need to check if a number is even or odd.

Write a program that takes a number and checks whether it is even or odd.
Print "The number is even" if the number is divisible by 2. Otherwise, print "The number is odd."
*/


/* 
Exercise 3: Grading System
Scenario: You are building a grading system for a school.

Write a program that takes a student's score and assigns a grade based on the following rules:
If the score is 90 or above, print "A"
If the score is 80 to 89, print "B"
If the score is 70 to 79, print "C"
If the score is 60 to 69, print "D"
If the score is below 60, print "F"
*/


/* 
Exercise 4: Login System
Scenario: You are creating a login system where users must enter the correct username and password to gain access.

Write a program that checks if the entered username is "admin" and the password is "1234".
If both are correct, print "Login successful." If either is wrong, print "Login failed."
*/


/* 
Exercise 5: Temperature Check
Scenario: You are writing a program that checks the current temperature and suggests clothing based on it.

Write a program that takes a temperature value and suggests:
If it's below 10 degrees, print "Wear a jacket."
If it's between 10 and 20 degrees, print "Wear a sweater."
If it's above 20 degrees, print "No jacket needed."
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
Exercise 1: Driving Eligibility
Scenario: You are writing code to check if someone is old enough to drive.

Write a program that takes a person's age and checks if they are old enough to drive (assume the minimum age to drive is 18).
If they are 18 or older, print "You are allowed to drive." Otherwise, print "You are not old enough to drive."
*/

let age = 17;

if (age >= 18) {
  console.log("You are allowed to drive.");
} else {
  console.log("You are not old enough to drive.");
}

/* 
Exercise 2: Even or Odd
Scenario: You need to check if a number is even or odd.

Write a program that takes a number and checks whether it is even or odd.
Print "The number is even" if the number is divisible by 2. Otherwise, print "The number is odd."
*/
let number = 7;

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

/* 
Exercise 3: Grading System
Scenario: You are building a grading system for a school.

Write a program that takes a student's score and assigns a grade based on the following rules:
If the score is 90 or above, print "A"
If the score is 80 to 89, print "B"
If the score is 70 to 79, print "C"
If the score is 60 to 69, print "D"
If the score is below 60, print "F"
*/

let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

/* 
Exercise 4: Login System
Scenario: You are creating a login system where users must enter the correct username and password to gain access.

Write a program that checks if the entered username is "admin" and the password is "1234".
If both are correct, print "Login successful." If either is wrong, print "Login failed."
*/

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful.");
} else {
  console.log("Login failed.");
}

/* 
Exercise 5: Temperature Check
Scenario: You are writing a program that checks the current temperature and suggests clothing based on it.

Write a program that takes a temperature value and suggests:
If it's below 10 degrees, print "Wear a jacket."
If it's between 10 and 20 degrees, print "Wear a sweater."
If it's above 20 degrees, print "No jacket needed."
*/

let temperature = 15;

if (temperature < 10) {
  console.log("Wear a jacket.");
} else if (temperature <= 20) {
  console.log("Wear a sweater.");
} else {
  console.log("No jacket needed.");
}
`}</code>
                </pre>
                <div className="mt-2 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(`/* 
Exercise 1: Driving Eligibility
Scenario: You are writing code to check if someone is old enough to drive.

Write a program that takes a person's age and checks if they are old enough to drive (assume the minimum age to drive is 18).
If they are 18 or older, print "You are allowed to drive." Otherwise, print "You are not old enough to drive."
*/

let age = 17;

if (age >= 18) {
  console.log("You are allowed to drive.");
} else {
  console.log("You are not old enough to drive.");
}

/* 
Exercise 2: Even or Odd
Scenario: You need to check if a number is even or odd.

Write a program that takes a number and checks whether it is even or odd.
Print "The number is even" if the number is divisible by 2. Otherwise, print "The number is odd."
*/
let number = 7;

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

/* 
Exercise 3: Grading System
Scenario: You are building a grading system for a school.

Write a program that takes a student's score and assigns a grade based on the following rules:
If the score is 90 or above, print "A"
If the score is 80 to 89, print "B"
If the score is 70 to 79, print "C"
If the score is 60 to 69, print "D"
If the score is below 60, print "F"
*/

let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

/* 
Exercise 4: Login System
Scenario: You are creating a login system where users must enter the correct username and password to gain access.

Write a program that checks if the entered username is "admin" and the password is "1234".
If both are correct, print "Login successful." If either is wrong, print "Login failed."
*/

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful.");
} else {
  console.log("Login failed.");
}

/* 
Exercise 5: Temperature Check
Scenario: You are writing a program that checks the current temperature and suggests clothing based on it.

Write a program that takes a temperature value and suggests:
If it's below 10 degrees, print "Wear a jacket."
If it's between 10 and 20 degrees, print "Wear a sweater."
If it's above 20 degrees, print "No jacket needed."
*/

let temperature = 15;

if (temperature < 10) {
  console.log("Wear a jacket.");
} else if (temperature <= 20) {
  console.log("Wear a sweater.");
} else {
  console.log("No jacket needed.");
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
