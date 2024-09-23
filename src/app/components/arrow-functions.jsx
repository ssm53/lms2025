/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ArrowFunctions() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Arrow Functions
          </h1>
        </div>
        <div className="space-y-8">
          <h2 className="text-xl font-semibold">
            You have learnt how to write a function
          </h2>
          <p>For example,</p>
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`function sum(a, b) {
  return a + b;
}`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`function sum(a, b) {
  return a + b;
}`);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />

          <p> Now, this can be written in a simpler way</p>
          <br />
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`let sum = (a, b) => a + b;`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`let sum = (a, b) => a + b;`);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />
          <p>Let's take a look at another example</p>
          <br />
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`function isNegative(number) {
  return number <= 0;
}`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`function isNegative(number) {
  return number <= 0;
}`);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />

          <p>The equivalent would be:</p>
          <br />
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`let isNegative = (number) => number <= 0;`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `let isNegative = (number) => number <= 0;`
                  );
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />

          <p>
            Note that for arrow functions we need to declare a variable using{" "}
            <span className="font-bold text-purple-600">let</span> and
            everything after the arrow is considered to be returned, so we dont
            need to use{" "}
            <span className="font-bold text-purple-600">return</span>
          </p>
          <br />
          <p>
            Arrow functions are new and is part of{" "}
            <span className="font-bold text-purple-600">
              ES6 Javascript syntax
            </span>
            .
          </p>
          <br />
          <span>You can read more about it in this article.</span>
          <Link
            href="https://www.w3schools.com/js/js_es6.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Click here!
          </Link>
        </div>
      </div>
    </div>
  );
}
