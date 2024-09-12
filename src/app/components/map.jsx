/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Map() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Intro to Maps
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <p className="mt-2">
              In JavaScript, a Map is a collection of key-value pairs where both
              keys and values can be of any data type. Maps are often preferred
              over objects when dealing with key-value pairs for several
              reasons.
            </p>{" "}
            <br />
            <p>Long story short, its like objects, but its better!</p>
            <h2 className="text-xl font-semibold">Example</h2>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`// Create a new Map
const fruits = new Map();

// Add some key-value pairs
fruits.set("apple", 10);
fruits.set("banana", 5);
fruits.set("orange", 8);

// Accessing values
console.log(fruits.get("apple"));  // Output: 10
console.log(fruits.get("banana")); // Output: 5

// Check the size of the Map
console.log(fruits.size);  // Output: 3

// Check if a key exists
console.log(fruits.has("orange"));  // Output: true

// Output:
// apple: 10
// banana: 5
// orange: 8

// Deleting a key-value pair
fruits.delete("banana");
console.log(fruits.size);  // Output: 2`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`// Create a new Map
const fruits = new Map();

// Add some key-value pairs
fruits.set("apple", 10);
fruits.set("banana", 5);
fruits.set("orange", 8);

// Accessing values
console.log(fruits.get("apple"));  // Output: 10
console.log(fruits.get("banana")); // Output: 5

// Check the size of the Map
console.log(fruits.size);  // Output: 3

// Check if a key exists
console.log(fruits.has("orange"));  // Output: true

// Output:
// apple: 10
// banana: 5
// orange: 8

// Deleting a key-value pair
fruits.delete("banana");
console.log(fruits.size);  // Output: 2`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">
              Why maps are better than objects
            </h2>
            <p>
              Flexible Keys: Maps allow any type of key, including objects and
              functions.
            </p>
            <p>
              Reliable Iteration: Maps maintain insertion order, making
              iteration predictable.
            </p>
            <p>
              Convenient Methods: Maps have built-in methods{" "}
              <span className="font-bold text-purple-600">
                (set, get, has, delete)
              </span>{" "}
              for easy manipulation.
            </p>
            <p>
              Size Property: Maps provide the number of key-value pairs with the
              size property, simplifying management.
            </p>
            <br />
            <h2 className="text-xl font-semibold">
              But you know... we still use more of objects than maps!
            </h2>
            <p>
              This is cause objects are easily converted to json, and this is
              useful for API requests etc. We will get to that later!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
