/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Promise() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Enough with the yadayadayada and let's write code
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">Simple Example</h2>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
console.log("Hello");
setTimeout(() => {console.log("World!");}, 10);
console.log("Goodbye!");
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
console.log("Hello");
setTimeout(() => {console.log("World!");}, 10);
console.log("Goodbye!");
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              It was the same with me, but I'm sure you thought we would get:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
Hello
World!
Goodbye!
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
Hello
World!
Goodbye!
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>But instead, we got:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
Hello
Goodbye!
World!
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
Hello
Goodbye!
World!
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              From the above code, setTimeout() is a function which says to run
              this function only after a certain number of seconds, in our
              example it was 10 seconds. So, as we go from the top, first, Hello
              was printed out. Then it wanted to print World!, but due to the
              setTimeout function, that can only happen after 10 seconds. So
              Javascript said screw this, I am asynchronous and went ahead to
              print out Goodbye! first as it's faster. Then only it printed out
              Goodbye!
            </p>
            <br />
            <h2 className="text-xl font-semibold">
              But we don't want this to always happen
            </h2>
            <p>Let's look at an example</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
let myName = "";
console.log("Hello");
setTimeout(() => {
  myName = "John";
}, 10);
console.log(\`Goodbye, \${myName}!\`);
    `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
let myName = "";
console.log("Hello");
setTimeout(() => {
  myName = "John";
}, 10);
console.log(\`Goodbye, \${myName}!\`);
        `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>We want the program to print out:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
Hello
Goodbye, John!
    `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
Hello
Goodbye, John!
        `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>But instead, we got:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
Hello
Goodbye, !
    `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
Hello
Goodbye, !
        `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              This happens cause the line 4 got executed before we managed to
              assigned the variable name to John. Hence, when line 4 was
              executed, the variable name was still assigned to ""{" "}
            </p>
            <br />
            <p>
              With these sorta scenarios, we want to tell Javascript - Hey man,
              I know you can be asynchronous, but for this scenario, I NEED YOU
              to be synchronous. Of course we cant communicate with Javascript
              as such, but good news, we can do a few things to force Javascript
              to be synchronous
            </p>
            <br />
            <h2 className="text-xl font-semibold">Promises</h2>
            <p>So, to solve the above, we can use promises as such:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
console.log("Hello");

function handleTimeout(resolve, reject) {
  setTimeout(() => resolve("John"), 10);
}

new Promise(handleTimeout)
  .then((myName) => console.log(\`Goodbye, \${myName}!\`));
    `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
console.log("Hello");

function handleTimeout(resolve, reject) {
  setTimeout(() => resolve("John"), 10);
}

new Promise(handleTimeout)
  .then((myName) => console.log(\`Goodbye, \${myName}!\`));
        `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Don't worry if its abit the syntax is abit confusing</p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
