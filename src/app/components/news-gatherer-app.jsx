/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NewsGathererApp() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Lets build a project using API's!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              We will get news information about a certain topic and print it
              out in console.
            </h2>
            <br />
            <h2 className="text-xl font-semibold">Set Up using Node</h2>
            <br />
            <p>
              First, ensure that you are in your bootcamp-projects directory
              which you would have set up earlier in the course.
            </p>
            <br />
            <p>Now, follow the commands below:</p>

            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
mkdir news-gathering-app # create a directory called news-gathering-app
cd news-gathering-app # change directory into news-gathering-app
asdf local nodes 19.4.0 # sets the nodes version for this particular project by creating a file
npm init
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
mkdir news-gathering-app # create a directory called news-gathering-app
cd news-gathering-app # change directory into news-gathering-app
asdf local nodejs 19.4.0 # sets the nodes version for this particular project by creating a file
npm init
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              We will be asked to configure our project. Just keep pressing
              Enter on your keyboard until the end.
            </p>
            <br />
            <p>
              This is what you should see. It might not be exactly the same but
              it should roughly be the same:
            </p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help init\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg>\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (news-gathering-app) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/shaunshanilmenezes/Desktop/bootcamp-projects/news-gathering-app/package.json:

{
  "name": "news-gathering-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) 
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help init\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg>\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (news-gathering-app) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/shaunshanilmenezes/Desktop/bootcamp-projects/news-gathering-app/package.json:

{
  "name": "news-gathering-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) 
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Next, we want to open this up on VS code, and so we type code .
            </p>
            <br />
            <p>
              Once we got it up on VS code, we can close our computer's
              terminal, and we should open up VS code's terminal. Now in there,
              type{" "}
              <span className="font-bold text-purple-600">touch index.js</span>{" "}
              to create an index.js file
            </p>
            <br />
            <p>Great, now we got our project set up.</p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
