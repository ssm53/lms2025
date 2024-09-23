/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";

export default function Dates() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Working with Dates in JavaScript
          </h1>
        </div>
        <div className="space-y-8">
          <h2 className="text-xl font-semibold">Introduction to Dates</h2>
          <p>
            JavaScript provides a built-in <code>Date</code> object that allows
            you to work with dates and times. You can create, manipulate, and
            format dates using this object.
          </p>
          <br />
          <h2 className="text-xl font-semibold">Creating a Date</h2>
          <p>Let's start by creating a new date object.</p>
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`
// Create a new date object for the current date and time
const now = new Date();
console.log(now);
              `}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`
const now = new Date();
console.log(now);
                  `);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />
          <h2 className="text-xl font-semibold">Date Methods</h2>
          <p>
            Here are some useful methods you can use with the <code>Date</code>{" "}
            object:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <code>getFullYear()</code> - Get the year.
            </li>
            <li>
              <code>getMonth()</code> - Get the month (0-11).
            </li>
            <li>
              <code>getDate()</code> - Get the day of the month (1-31).
            </li>
            <li>
              <code>getDay()</code> - Get the day of the week (0-6).
            </li>
            <li>
              <code>getHours()</code> - Get the hour (0-23).
            </li>
            <li>
              <code>getMinutes()</code> - Get the minutes (0-59).
            </li>
            <li>
              <code>getSeconds()</code> - Get the seconds (0-59).
            </li>
          </ul>
          <br />
          <h2 className="text-xl font-semibold">Challenges</h2>
          <p>Try solving these challenges to practice working with dates:</p>
          <br />
          <h2 className="text-xl font-semibold">Challenge 1</h2>
          <p>Get the current year and display it in the console.</p>
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`
// Challenge 1
const now = new Date();
const currentYear = now.getFullYear();
console.log("Current Year:", currentYear);
              `}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`
const now = new Date();
const currentYear = now.getFullYear();
console.log("Current Year:", currentYear);
                  `);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />
          <h2 className="text-xl font-semibold">Challenge 2</h2>
          <p>
            Get the current month and display it in the console. Remember,
            months are 0-indexed (0-11).
          </p>
          <br />
          <h2 className="text-xl font-semibold">Challenge 3</h2>
          <p>Get the current day of the month and display it in the console.</p>
          <br />
          <h2 className="text-xl font-semibold">Challenge 4</h2>
          <p>Get the current day of the week and display it in the console.</p>
          <br />
          <h2 className="text-xl font-semibold">Challenge 5</h2>
          <p>
            Create a new date object for January 1, 2000, and display it in the
            console.
          </p>
        </div>
      </div>
    </div>
  );
}
