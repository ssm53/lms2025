/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Math() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's practice using the Math library
          </h1>
        </div>
        <div className="space-y-8">
          <h2 className="text-xl font-semibold">
            For these challenges, you'd have to search up the official
            Javascript Math library. Try your best with them. It's super
            important in coding to solve problems yourself. That is the best way
            for you to learn.
          </h2>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Click here to check it out!
          </Link>
          <br />
          <h2 className="text-xl font-semibold">Challenge 1</h2>
          <p>
            Write a function that takes an array of numbers and returns the
            maximum number.
          </p>
          <br />

          <h2 className="text-xl font-semibold">Challenge 2</h2>
          <p>
            Write a function that takes a number and returns the square root.
          </p>
          <br />

          <h2 className="text-xl font-semibold">Challenge 3</h2>
          <p>
            Write a function that takes a decimal number and rounds it to the
            nearest integer.
          </p>
          <br />

          <h2 className="text-xl font-semibold">Challenge 4</h2>
          <p>
            Write a function that generates a random number between 0 and 1
            using the Math.random method.
          </p>
          <br />

          <h2 className="text-xl font-semibold">Challenge 5</h2>
          <p>
            Write a function that takes an array of numbers, squares each
            number, and returns the sum of all squares.
          </p>
        </div>
      </div>
    </div>
  );
}
