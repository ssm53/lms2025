/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UsingLibraries() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Libraries
          </h1>
        </div>
        <div className="space-y-8">
          <h2 className="text-xl font-semibold">
            But wait, what is a library?
          </h2>
          <p>
            It's a collection of reusable code modules and components that
            provide specific functionality, are managed through package
            managers, and are necessary for a project's operation.
          </p>
          <br />
          <p>
            If that sounds like 'yadayadayada'. Well, long story short, it
            basically helps us to do some complex stuff. Some things may take us
            a long time to do, but using libraries, it simplifies the process
            and makes the task much easier to do.
          </p>
          <br />
          <p>
            Although there are slight differences, libraries can also be called
            'packages' and sometimes its called 'dependancies'
          </p>
          <br />
          <p>Here is an example of how a library can help us out big time:</p>
          <br />
          {/* // here below ive purposely left the code part blank as I want you to come up with a simple problem where it shows that using Math library is useful */}
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`const testScores = [34, 24,63, 94, 103, 54, 123]
let sum = 0
for (let testScore of testScores) {
  sum += testScore
}`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard
                    .writeText(`const testScores = [34, 24,63, 94, 103, 54, 123]
let sum = 0
for (let testScore of testScores) {
  sum += testScore
}`);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />
          <p>
            Now, that works, but using the{" "}
            <span className="font-bold text-purple-600">Math</span> library, we
            can make our lives much easier...as we can just do this below{" "}
          </p>
          <br />
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`const sum = Math.sum(...testScores)`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `const sum = Math.sum(...testScores)`
                  );
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <p>
            Don't worry, and don't spend time trying to understand what{" "}
            <span className="font-bold text-purple-600">...testScores</span>{" "}
            mean. All you need to know is using the Math library, our job became
            easier.{" "}
          </p>
          <br />
          <h2 className="text-xl font-semibold">Types of libraries</h2>
          <p>
            You see, the Math library is already a part of Javascript. The team
            behind have incorporated with Javascript, and now it is in-built
            whenever we code with Javascript.
          </p>
          <br />
          <p>
            However, there are many libraries/packages/dependacies which we will
            use in lessons to come that are not part of javascript, and for
            these, we need to{" "}
            <span className="font-bold text-purple-600">import</span> it.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
