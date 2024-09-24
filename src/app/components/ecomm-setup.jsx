/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EcommSetup() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's set it up!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              Remember that all our projects should be built in the
              bootcamp-projects folder on your laptop?
            </h2>
            <p className="mt-2">
              Great, now go to that directory using your terminal. Now, once
              you're there, type this line by line in your terminal:
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`mkdir ecomm-platform-be
cd ecomm-platform-be
npm init -y
npm install express
touch index.js`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`mkdir ecomm-platform-be
cd ecomm-platform-be
npm init -y
npm install express
touch index.js`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Now, open it up on VS Code using 'code .'</p>
            <br />
            <p>Now, go to your package.json, and add this:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`{
  "name": "ecomm-platform-be",
  "version": "1.0.0",
  "description": "",
  "type": "module", // added this.. it allows for ES6 javascript syntax. now delete this comment
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2"
  }
}`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`{
  "name": "ecomm-platform-be",
  "version": "1.0.0",
  "description": "",
  "type": "module", // added this.. it allows for ES6 javascript syntax. now delete this comment
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2"
  }
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>In our index.js,</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import express from "express";
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(\`Example app listening on port \${port}\`);
});`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`import express from "express";
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(\`Example app listening on port \${port}\`);
});`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now, start the server, by running node index.js in your VS code
              terminal, and go to that link - http://localhost:8080
            </p>
            <br />
            <p>It should say "Hello World!"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
