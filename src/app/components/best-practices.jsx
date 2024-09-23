/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BestPractices() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's look at coding conventions and best practices!
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              You might not realise it just yet, but these conventions are super
              important, especially if you are working in a team. You can write
              great code, but if it is not easily understandable by your
              colleagues, it will lose alot of its value.
            </h2>
            <p className="mt-2">
              Many employers care alot about this. They really really do. So,
            </p>{" "}
            <br />
            <span>
              Please visit both these links below. Go through what they said,
              and make sure you understand it.
            </span>{" "}
            <br />
            <Link
              href="https://www.w3schools.com/js/js_conventions.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <Link
              href="https://www.w3schools.com/js/js_best_practices.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              And here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
