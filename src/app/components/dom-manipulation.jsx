/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function DomManipulation() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's see how we can do DOM manipulation using Javascript!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-xl font-semibold">
              You've already seen a little bit about this actually when we built
              our first program - the counter.
            </p>
            <br />
            <h2 className="text-xl font-semibold">
              How can we select elements from our index.html in our index.js
              using Javascript?
            </h2>
            <br />
            <h2 className="text-xl font-semibold">Query Selector</h2>
            <br />
            <h2 className="text-xl font-semibold">Select an Element by Tag</h2>
            <br />
            <p>Index.js as such:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
<h1>Hello there</h1>
    <p>My name is Shaun</p>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
<h1>Hello there</h1>
    <p>My name is Shaun</p>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <p>
              Now, to select the 'h1' tag and print out its elements, do this:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
const pickH1 = document.querySelector("h1");
console.log(pickH1);
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
const pickH1 = document.querySelector("h1");
console.log(pickH1);
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Select an Element by Id</h2>
            <br />
            <h2 className="text-xl font-semibold">Using query selector</h2>
            <br />
            <p>Index.js as such:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
    <h1 id="greetings">Hello there</h1>

              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
    <h1 id="greetings">Hello there</h1>

                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <p>Now, to select that element, we do this:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
const element = document.querySelector("#greetings");
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
const element = document.querySelector("#greetings");
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <h2 className="text-xl font-semibold">Using getElementById()</h2>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
const element = document.getElementById("greetings");
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
const element = document.getElementById("greetings");
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
