// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AndOrOperators() {
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility

  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            AND & OR operators
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724133346/bootcamp-prebootcamp/mvqaefotnb9h1t1eivht.mp4"
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
Exercise 1: Check Multiple Conditions
Scenario: You are designing a login system that checks if both the username and password are correct.

Declare two variables: username with the value "admin" and password with the value "12345".
Write a condition using the && operator to check if both the username is "admin" and the password is "12345".
Print "Login successful" if both conditions are true; otherwise, print "Login failed."
*/

/* 
Exercise 2: Discount Eligibility
Scenario: A store offers a discount to customers who meet one of two criteria: they are either a member of the store's loyalty program or their total purchase amount is more than $100.

Declare two variables: isMember (boolean) and purchaseAmount (number).
Write a condition using the || operator to check if either the customer is a member or their purchase is more than $100.
Print "Discount applied" if either condition is true; otherwise, print "No discount."
*/

/* 
Exercise 3: Age and Permission Check
Scenario: You are building an age verification system to allow users to access adult content, but they also need permission if under 18.

Declare two variables: age (number) and hasPermission (boolean).
Write a condition using both && and || operators to check if the user is either 18 or older or they are under 18 and have permission.
Print "Access granted" if the condition is true; otherwise, print "Access denied."
*/

`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`/* 
Exercise 1: Check Multiple Conditions
Scenario: You are designing a login system that checks if both the username and password are correct.

Declare two variables: username with the value "admin" and password with the value "12345".
Write a condition using the && operator to check if both the username is "admin" and the password is "12345".
Print "Login successful" if both conditions are true; otherwise, print "Login failed."
*/

/* 
Exercise 2: Discount Eligibility
Scenario: A store offers a discount to customers who meet one of two criteria: they are either a member of the store's loyalty program or their total purchase amount is more than $100.

Declare two variables: isMember (boolean) and purchaseAmount (number).
Write a condition using the || operator to check if either the customer is a member or their purchase is more than $100.
Print "Discount applied" if either condition is true; otherwise, print "No discount."
*/

/* 
Exercise 3: Age and Permission Check
Scenario: You are building an age verification system to allow users to access adult content, but they also need permission if under 18.

Declare two variables: age (number) and hasPermission (boolean).
Write a condition using both && and || operators to check if the user is either 18 or older or they are under 18 and have permission.
Print "Access granted" if the condition is true; otherwise, print "Access denied."
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
Exercise 1: Check Multiple Conditions
Scenario: You are designing a login system that checks if both the username and password are correct.

Declare two variables: username with the value "admin" and password with the value "12345".
Write a condition using the && operator to check if both the username is "admin" and the password is "12345".
Print "Login successful" if both conditions are true; otherwise, print "Login failed."
*/

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login successful");
} else {
  console.log("Login failed");
}

/* 
Exercise 2: Discount Eligibility
Scenario: A store offers a discount to customers who meet one of two criteria: they are either a member of the store's loyalty program or their total purchase amount is more than $100.

Declare two variables: isMember (boolean) and purchaseAmount (number).
Write a condition using the || operator to check if either the customer is a member or their purchase is more than $100.
Print "Discount applied" if either condition is true; otherwise, print "No discount."
*/

let isMember = true;
let purchaseAmount = 80;

if (isMember || purchaseAmount > 100) {
  console.log("Discount applied");
} else {
  console.log("No discount");
}

/* 
Exercise 3: Age and Permission Check
Scenario: You are building an age verification system to allow users to access adult content, but they also need permission if under 18.

Declare two variables: age (number) and hasPermission (boolean).
Write a condition using both && and || operators to check if the user is either 18 or older or they are under 18 and have permission.
Print "Access granted" if the condition is true; otherwise, print "Access denied."
*/

let age = 16;
let hasPermission = true;

if (age >= 18 || (age < 18 && hasPermission)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

`}</code>
                </pre>
                <div className="mt-2 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(`/* 
Exercise 1: Check Multiple Conditions
Scenario: You are designing a login system that checks if both the username and password are correct.

Declare two variables: username with the value "admin" and password with the value "12345".
Write a condition using the && operator to check if both the username is "admin" and the password is "12345".
Print "Login successful" if both conditions are true; otherwise, print "Login failed."
*/

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login successful");
} else {
  console.log("Login failed");
}

/* 
Exercise 2: Discount Eligibility
Scenario: A store offers a discount to customers who meet one of two criteria: they are either a member of the store's loyalty program or their total purchase amount is more than $100.

Declare two variables: isMember (boolean) and purchaseAmount (number).
Write a condition using the || operator to check if either the customer is a member or their purchase is more than $100.
Print "Discount applied" if either condition is true; otherwise, print "No discount."
*/

let isMember = true;
let purchaseAmount = 80;

if (isMember || purchaseAmount > 100) {
  console.log("Discount applied");
} else {
  console.log("No discount");
}

/* 
Exercise 3: Age and Permission Check
Scenario: You are building an age verification system to allow users to access adult content, but they also need permission if under 18.

Declare two variables: age (number) and hasPermission (boolean).
Write a condition using both && and || operators to check if the user is either 18 or older or they are under 18 and have permission.
Print "Access granted" if the condition is true; otherwise, print "Access denied."
*/

let age = 16;
let hasPermission = true;

if (age >= 18 || (age < 18 && hasPermission)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
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
