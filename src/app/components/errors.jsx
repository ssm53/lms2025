/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Errors() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Generally, there are two types of errors
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">1. Syntax Errors</h2>
            <p className="mt-2">
              Especially as you just started coding, you will likely experience
              this alot. Maybe you forgot to close a bracket or you forgot a
              comma..
            </p>{" "}
            <br />
            {/* below here, please give simple example of a syntax error */}
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
console.log("Hello, world!;
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
console.log("Hello, world!;
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Try running this in{" "}
              <span className="font-bold text-purple-600">index.js</span> , and
              you should get this error
            </p>
            <p>You get this cause you forgot the double quotes after the !</p>
            <br />
            <h2 className="text-xl font-semibold">2. Runtime errors</h2>
            <p>
              These errors occur while your program is running. They often
              happen because of unexpected situations, like trying to access a
              variable that doesn't exist.
            </p>
            {/* // give example of run time error and why it happens */}
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
// Runtime Error Example
let num = 10;
console.log(num.toUpperCase());

// Attempting to call toUpperCase on a number
                `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
// Runtime Error Example
let num = 10;
console.log(num.toUpperCase());

// Attempting to call toUpperCase on a number
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">
              Are errors the same thing as bugs?
            </h2>
            <p>
              Nopey nope, errors causes an application not to run. You will
              clearly see errors printed out on the console. Bugs on the other
              hand are a little more tricky. In short, bugs are when your code
              has no errors and hence it runs, but it is not working as you
              intended it to. So, it's a little harder to spot sometimes.
            </p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
// I want to add a and b
// but I do this
function sum(a , b) {
  return a - b
}
                `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
// I want to add a and b
// but I do this
function sum(a , b) {
  return a - b
}
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              As you can see above, I accidentally subtracted b from a instead
              of adding them together. For now, this can be spotted easily as
              its only a few lines of code, but when a code base gets bigger,
              you'd likely run into bugs
            </p>
            <br />
            <p>
              It is inevitable that you will run into bugs when you are building
              something. That's normal, and that's good as after overcoming it,
              that's where you have learnt the most!
            </p>
            <br />
            <h2 className="text-xl font-semibold">How to debug errors?</h2>
            <p>
              These are a few methods, but there is one method which every
              developer uses, and you are very familiar with it too!
            </p>
            <p>
              *drum rolls*{" "}
              <span className="font-bold text-purple-600">(console.log)</span>!
            </p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
let testScores = {
  english: 90,
  malay: 100,
};
// now imagine that that there is 1000 lines of code here

// now cause there so much of code, the developer accidentally though that
 testScores was an array, and tried to use a for loop to loop through it..
for (let testScore of testScores) {
  console.log(testScore);
}
                `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
let testScores = {
  english: 90,
  malay: 100,
};
// now imagine that that there is 1000 lines of code here.

// now cause there so much of code, the developer accidentally though that
 testScores was an array, and tried to
 use a for loop to loop through it..
for (let testScore of testScores) {
  console.log(testScore);
}
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              You can try running this the above in{" "}
              <span className="font-bold text-purple-600">(index.js)</span> and
              you will run into an error as we can't iterate through objects
              using a for loop. In our example, testScores was an object.
            </p>
          </div>
          <br />
          <p>This is how the dev could debug the error</p>
          <br />
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`
let testScores = {
  english: 90,
  malay: 100,
};
// now imagine that that there is 1000 lines of code here

console.log(typeof testScores) 
// this will print out object and let the dev know that we can't iterate it using 
a for loop, and hence the error wont occur,as the dev wont use a for loop to iterate 
through it

                `}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`
let testScores = {
  english: 90,
  malay: 100,
};
// now imagine that that there is 1000 lines of code here

console.log(typeof testScores) 
// this will print out object and let the dev know that we can't iterate it using 
a for loop, and hence the error wont occur,as the dev wont use a for loop to iterate 
through it
 
                    `);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
