/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CssColour() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's take a look at CSS colours!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-xl font-semibold">
              You've already seen how to choose CSS colours the normal way e.g.
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
body {
  background-color: green;
}

p {
  color: red;
}
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
body {
  background-color: green;
}

p {
  color: red;
}
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <p>
              But this method only gives us access to basic colours e.g. green,
              red, blue... what if we want red, but we want a different shade of
              red from the default?
            </p>
            <br />
            <h2 className="text-xl font-semibold">We use hex code!</h2>
            <br />
            <span>
              A great tool to use is Google Colour Picker. Here you can choose
              the exact colour you want, and it will give you the hex code.
            </span>{" "}
            <Link
              href="https://g.co/kgs/5CpN8XJ"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
body {
  background-color: #57c953;
}

p {
  color: #e62719;
}
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
body {
  background-color: #57c953;
}

p {
  color: #e62719;
}
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Another way is to use rgb</h2>
            <p>
              Here, instead of color, type rgb with parenthesis after that. Now,
              hover over the colour box, and it should show you the colour you
              can choose from. Just click the colour, and vs code will
              automatically show the corect colour codes. e.g.
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
body {
  background-color: rgb(65, 14, 14)
}
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
body {
  background-color: rgb(65, 14, 14)
}
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <span>
              Here's a great tool to help you pick appropriate colours for your
              websites. In general, we shouldnt have more than 3 main colours in
              our website. It will look too cluttered otherwise.
            </span>{" "}
            <Link
              href="https://colorhunt.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
