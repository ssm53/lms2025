/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SpreadAndRest() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Spread and Rest Syntax
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <p className="mt-2">
              Spread Syntax{" "}
              <span className="font-bold text-purple-600">(...)</span>. The
              spread syntax allows you to expand elements of an iterable (like
              an array or object) into individual elements. It's very useful for
              combining arrays or objects and for function arguments.
            </p>{" "}
            <br />
            <h2 className="text-xl font-semibold">
              Using Spread syntax with arrays
            </h2>
            <p className="mt-2">1. Combining Arrays</p> <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p className="mt-2">2. Copying Arrays</p> <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">
              Using Spread syntax with objects
            </h2>
            <p className="mt-2">2. Combining objects</p> <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // { a: 1, b: 2, c: 3, d: 4 }

`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // { a: 1, b: 2, c: 3, d: 4 }
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p className="mt-2">2. Copying objects</p> <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // { a: 1, b: 2 }

`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // { a: 1, b: 2 }

`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">
              Using Spread syntax with functions
            </h2>
            <p className="mt-2">1. Passing Arguments</p> <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`const numbers = [1, 2, 3];
const add = (a, b, c) => a + b + c;
console.log(add(...numbers)); // 6
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`const numbers = [1, 2, 3];
const add = (a, b, c) => a + b + c;
console.log(add(...numbers)); // 6


`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">
              Rest Syntax (...) The rest syntax allows you to represent an
              indefinite number of elements as an array. It's often used in
              function parameters to capture all arguments passed to the
              function.
            </h2>
            <br />
            <h2 className="text-xl font-semibold">
              Using Rest syntax with functions
            </h2>
            <p className="mt-2">1. Capturing Remaining Arguments</p> <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Summary</h2>
            <p className="mt-2">
              Spread Syntax{" "}
              <span className="font-bold text-purple-600">(...)</span>: Used to
              expand elements of an array or object.
            </p>
            <p className="mt-2">
              Rest Syntax{" "}
              <span className="font-bold text-purple-600">(...)</span>: Used to
              collect elements into an array.
            </p>
            <p className="mt-2">
              By understanding and using the spread and rest syntax, you can
              write cleaner, more concise, and flexible code in JavaScript.
            </p>{" "}
            <br />
            <h2 className="text-xl font-semibold">
              Destructuring using spread syntax
            </h2>
            <p className="mt-2">
              Destructuring using spread syntax allows you to extract parts of
              an object or array into separate variables while keeping the rest
              of the elements
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              In this example, first and second get the first two elements of
              the numbers array, and rest gets the remaining elements.
            </p>
            <br />
            <h2 className="text-xl font-semibold">
              Restructuring Nested Objects
            </h2>
            <p className="mt-2">
              Restructuring nested objects using spread syntax can help you
              manage and modify complex data structures more easily.
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`const user = {
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
  }
};

const updatedUser = {
  ...user,
  address: {
    ...user.address,
    city: "New City"
  }
};

console.log(updatedUser);
/*
{
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "New City",
    country: "USA"
  }
}
*/

`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`const user = {
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
  }
};

const updatedUser = {
  ...user,
  address: {
    ...user.address,
    city: "New City"
  }
};

console.log(updatedUser);
/*
{
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "New City",
    country: "USA"
  }
}
*/

`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <p>
              In this example, updatedUser keeps all properties of the user
              object but updates the city property within the address object.
              The spread syntax allows us to copy the existing properties while
              making the necessary modifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
