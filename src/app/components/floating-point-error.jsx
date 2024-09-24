/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FloatingPointError() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Floating Point Error
          </h1>
        </div>
        <div className="space-y-8">
          <h2 className="text-xl font-semibold">
            Sometimes doing arithmetic expression in Jaavscipt is weird....
          </h2>
          <p>
            In VS code, try and do this calculation below and see what it prints
            out:
          </p>
          <br />
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`let x = 0.2 * 0.2;
console.log(x);`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`let x = 0.2 * 0.2;
console.log(x);`);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />
          <p>
            You might have noticed that the answer is not what you think it is..
          </p>
          <br />
          <p>This is known as a floating point error.</p>
          <br />
          <p>
            I'd like you to research how to solve this error yourself, without
            using any external libraries!
          </p>
          <br />
          <p>
            We have to pay careful attention when dealing with decimals,
            especially if we're dealing with money.
          </p>
        </div>
      </div>
    </div>
  );
}
