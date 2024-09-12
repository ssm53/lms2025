/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FurtherOnStrings() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's look further into strings!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">How to write strings?</h2>
            <p className="mt-2">
              As y'all know, we need to use double quotes -{" "}
              <span className="font-bold text-purple-600">"hello"</span> in
              order for it to be a string. <br />
              But we can also use single quotes -{" "}
              <span className="font-bold text-purple-600">'hello'</span> <br />
              There are no differences between the two, and is just a
              preference.
            </p>{" "}
            <br />
            <h2 className="text-xl font-semibold">
              How to combine two strings?
            </h2>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
let string1 = "I want to go to the beach"
let string2 = "it is so far away"

// now, combine both to show "I want to go to the beach but it is so far away"
// Go on to google to find out how to do that!
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
let string1 = "I want to go to the beach"
let string2 = "it is so far away"

// now, from those two strings, print out "I want to go to the beach but it is so far away"
// Go on to google to find out how to do that!
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <h2 className="text-xl font-semibold">
              How to put variables into strings?
            </h2>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
let testScore = 99
let student = "John"
// now I want to print out John has a test score of 90.
// Try abd find out how to do this. 
// Hint1: note that testScore is a number and student is a string
// Hint2: we need to use string literals.
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
let testScore = 99
let student = "John"
// now I want to print out John has a test score of 90.
// Try abd find out how to do this. 
// Hint1: note that testScore is a number and student is a string
// Hint2: we need to use string literals.
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">String methods!</h2>
            <p>
              Side note: you can think of strings like an array. You know in
              arrays, each element has an index. This is the same for strings.
              Each alphabet or space in a string has its own index.
            </p>
            <h2 className="text-xl font-semibold">
              How to get a length of a string
            </h2>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
// TRY THIS FOR YOURSELF

let string1 = "Shaun Menezes";
let lengthOfString = string1.length;
console.log(lengthOfString);

let string2 = "I want to go to the beach"
let lengthOfString2 = string2.length
console.log(lengthOfString2)
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
// TRY THIS FOR YOURSELF

let string1 = "Shaun Menezes";
let lengthOfString = string1.length;
console.log(lengthOfString);

let string2 = "I want to go to the beach"
let lengthOfString2 = string2.length
console.log(lengthOfString2)
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">
              Extracting String Characters
            </h2>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
let string1 = "HELLO WORLD";
let char = string1.charAt(0);
console.log(char);

let string2 = "HELLO WORLD"
let char2 = string2[0]
console.log(char2)
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
let string1 = "HELLO WORLD";
let char = string1.charAt(0);
console.log(char);

let string2 = "HELLO WORLD"
let char2 = string2[0]
console.log(char2)
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Slice method for strings</h2>
            <p>
              Slice extracts part of a string and returns the extracted part as
              a new string. This methods takes two parameteres - start position
              and end position. However, note that the end position is not
              included. Try it out below:
            </p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
let students = "Shaun, Kyle, Adam";
let slicedStudents = students.slice(7, 11);
console.log(slicedStudents);

let string1 = "I want to go to Alaska";
let slicedString1 = string1.slice(1, 6);
console.log(slicedString1);
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
let students = "Shaun, Kyle, Adam";
let slicedStudents = students.slice(7, 11);
console.log(slicedStudents);

let string1 = "I want to go to Alaska";
let slicedString1 = string1.slice(1, 6);
console.log(slicedString1);
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Further on slicing</h2>
            <p>
              If we have the first parameter, but omit the second parameter,
              slice will slice the string from the starting position till the
              end of the string.
            </p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
let students = "Shaun, Kyle, Adam";
let slicedStudents = students.slice(7);
console.log(slicedStudents);
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
let students = "Shaun, Kyle, Adam";
let slicedStudents = students.slice(7);
console.log(slicedStudents);
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              If a parameter is negative, the position is counted from the end
              of the string. So we count it from the back, but this time, it
              starts from 1!
            </p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
let students = "Shaun, Kyle, Adam";
let slicedStudents = students.slice(-4);
console.log(slicedStudents);

let students2 = "Ryan, Samantha, Douglas";
let slicedStudents2 = students2.slice(-9);
console.log(slicedStudents2);

let students3 = "Bruno, Betty, Sandra";
let slicedStudents3 = students3.slice(-13, -8);
console.log(slicedStudents3);
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
let students = "Shaun, Kyle, Adam";
let slicedStudents = students.slice(-4);
console.log(slicedStudents);

let students2 = "Ryan, Samantha, Douglas";
let slicedStudents2 = students2.slice(-9);
console.log(slicedStudents2);

let students3 = "Bruno, Betty, Sandra";
let slicedStudents3 = students3.slice(-13, -8);
console.log(slicedStudents3);
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Upper and Lower Case</h2>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
let students = "SHAUN, SASHA, SHANE";
let studentsLowerCase = students.toLowerCase();
console.log(studentsLowerCase)

let medals = "gold, silver, bronze"
let medalsUpperCase = medals.toUpperCase()
console.log(medalsUpperCase)
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
let students = "SHAUN, SASHA, SHANE";
let studentsLowerCase = students.toLowerCase();
console.log(studentsLowerCase)

let medals = "gold, silver, bronze"
let medalsUpperCase = medals.toUpperCase()
console.log(medalsUpperCase)
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">
              Convert String into an Array
            </h2>
            <p>We use the split method!</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
let string1 = "I want to go home";
// here we are splitting the string every time there is an empty space
let stringSplit1 = string1.split(" "); 
console.log(stringSplit1);

let string2 = "Shaun, Sasha, Shane";
// we split it at every comma
let stringSplit2 = string2.split(","); 
console.log(stringSplit2);
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
let string1 = "I want to go home";
// here we are splitting the string every time there is an empty space
let stringSplit1 = string1.split(" "); 
console.log(stringSplit1);

let string2 = "Shaun, Sasha, Shane";
// we split it at every comma
let stringSplit2 = string2.split(","); 
console.log(stringSplit2);
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
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
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
