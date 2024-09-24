/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CssBoxModel() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's take a look at the all important Box Model
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-xl font-semibold">
              This is super important. As long as you understand this about
              boxes, it'll be abit hard to go wrong with sizing. We'll get into
              padding and margin in later lessons, but yeah let's look at what a
              box model looks like.
            </p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/box-model-example.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Content refers to the thing we want to show on screen and is
              inside the box!
            </p>
            <br />
            <p>Padding is between border and content</p>
            <br />
            <p>Border is well... the border of the container.</p>
            <br />
            <p>Margin is the space between the border and the next content</p>
            <br />

            <h2 className="text-xl font-semibold">Example</h2>
            <p>Assume your index.html is as such:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Your description goes here" />
    <title>Facebook</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- this is without any margin -->
    <span>I dont want there to be space next to this</span>
    <span>Hello</span><br/>
    <!-- this is with margin (note the space between elements) -->
    <span id="span-space">I want there to be space next to me</span>
    <span>Hello again</span><br/>
    <!-- this is button without padding -->
    <button>Click me</button>
    <!-- this is button with padding (note the space between the content and the border) -->
    <button id="button-padding">Click me again!</button>

    <script src="index.js"></script>
  </body>
</html>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Your description goes here" />
    <title>Facebook</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- this is without any margin -->
    <span>I dont want there to be space next to this</span>
    <span>Hello</span><br/>
    <!-- this is with margin (note the space between elements) -->
    <span id="span-space">I want there to be space next to me</span>
    <span>Hello again</span><br/>
    <!-- this is button without padding -->
    <button>Click me</button>
    <!-- this is button with padding (note the space between the content and the border) -->
    <button id="button-padding">Click me again!</button>

    <script src="index.js"></script>
  </body>
</html>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>And assume, in our styles.css is as such:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
#span-space {
  margin-right: 50px;
}

#button-padding {
  padding: 50px;
}
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
#span-space {
  margin-right: 50px;
}

#button-padding {
  padding: 50px;
}
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              I'd like you to try the above out yourselves, but note the
              difference of the two spans and the two buttons with and without
              margin/padding.
            </p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/margin-padding-example.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
