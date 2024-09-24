/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DivTag() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's look at divs
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              You will be using divs alot!
            </h2>
            <p>
              Divs are important for positiong. Don't worry, you'll learn about
              positioning soon, but yeah, it is important for positioning..
              Let's say we want we want the "Hello World" text below to be on
              the left of the page, but we want everything else we write to be
              on the right of the page. For that, we need to wrap that "hello
              world" in a wrapper or a seperate section. For this, we use divs!
            </p>

            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
 <div>
    <p>hello world</p>
  </div>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
  <div>
    <p>hello world</p>
  </div>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
