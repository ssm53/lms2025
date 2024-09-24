/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Css() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            What is CSS?
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-xl font-semibold">
              Well, as we already know, CSS is used to style our websites! You
              also know that we should write in your styles.css file. If you are
              unsure about any of this, I suggest to go back and watch the video
              about the basics of HTML and CSS.
            </p>
            <h2 className="text-xl font-semibold">CSS Selectors</h2>
            <h2 className="text-xl font-semibold">
              Select by tag name (we have gone through this)
            </h2>
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
    <p>Hello, I want to be styled</p>
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
    <p>Hello, I want to be styled</p>
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
            <p>
              Then, in our styles.css, we can choose and style these tags as
              such:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
 body {
  background-color: blue;
}

p {
  color: yellow;
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
  background-color: blue;
}

p {
  color: yellow;
}
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Select by ID (#)</h2>
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
    <h1 id="first-heading">This is the first heading</h1>
    <h2 id="second-heading">This is the second heading</h2>
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
    <h1 id="first-heading">This is the first heading</h1>
    <h2 id="second-heading">This is the second heading</h2>
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
            <p>
              Then, in our styles.css, we can choose and style these id's as
              such:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
#first-heading {
  color: blue;
}

#second-heading {
  color: yellow;
}
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
#first-heading {
  color: blue;
}

#second-heading {
  color: yellow;
}
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Select by class (.)</h2>
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
    <h1 class="big-heading">Title</h1>
    <h2 class="small-heading">The enchante forest</h2>
    <h1 class="big-heading">Author</h1>
    <h2 class="small-heading">JK Rowling</h2>
    
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
    <h1 class="big-heading">Title</h1>
    <h2 class="small-heading">The enchante forest</h2>
    <h1 class="big-heading">Author</h1>
    <h2 class="small-heading">JK Rowling</h2>
    
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
            <p>
              Then, in our styles.css, we can choose and style these id's as
              such:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
.big-heading {
  color: blue;
}

.small-heading {
  color: yellow;
}
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
.big-heading {
  color: blue;
}

.small-heading {
  color: yellow;
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
              In general, we use classes for html tags when there are HTML
              elements which will have the same styling. This is easier than
              selecting by ID's.
            </p>
            {/* <div className="relative w-full h-64">
              <Image
                src="/lists-example.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <br />
            <h2 className="text-xl font-semibold">
              Great, now that you know how to use css selectors, let's look at
              an example of how you'd style a box.
            </h2>
            <p>Assume part of your index.html is as such:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
 <div id="box">I am a box</div>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
 <div id="box">I am a box</div>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Let's style this box in our styles.css</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
#box {
  width: 500px;
  height: 500px;
  background-color: rgb(255, 255, 255);
  color: #2c45ec;
  border: 1px solid black;
  border-radius: 2px;
}
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
#box {
  width: 500px;
  height: 500px;
  background-color: rgb(255, 255, 255);
  color: #2c45ec;
  border: 1px solid black;
  border-radius: 2px;
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
              There are alot of ways we can style html elements. Its not
              important to know it all, and you will learn by doing!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
