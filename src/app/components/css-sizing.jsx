/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CssSizing() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's look at CSS Sizing.
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">Fixed Size</h2>
            <p className="text-xl font-semibold">
              With this, the size of the element will always stay the same no
              matter what!
            </p>
            <br />
            <p>Example:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
#myButton {
  width: 50px;
  height: 100px;
}
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
#myButton {
  width: 50px;
  height: 100px;
}
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">
              View height and View Width (vh and vw)
            </h2>
            <p className="text-xl font-semibold">
              This is a nice way to change the size of an element based on the
              size of the screen (large/medium/small screen).
            </p>
            <br />
            <p>Example:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
body {
  width: 100vw;
  height: 100vh;
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
  width: 100vw;
  height: 100vh;
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
              Try the above yourself. Then try resizing your browser (minimise
              it), and you will see that the size of that element changing.
            </p>
            <br />
            <p>
              This is very useful when we are trying to create a container which
              will take up all of the page. Let's say only we want it to take up
              half of the width - we can just do 50vw... or if we want it to be
              half the height, it can be 50vh
            </p>
            <br />
            <h2 className="text-xl font-semibold">% width and height</h2>
            <p className="text-xl font-semibold">
              This is another useful way to size elements. This way is based
              upon the element's parent container's size.
            </p>
            <br />
            <p>Example:</p>
            <p>
              Assume your index.html is as such, where we have a div within a
              div:
            </p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
 <div id="big-container">
      <div id="small-container"></div>
    </div>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
 <div id="big-container">
      <div id="small-container"></div>
    </div>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>In styles.css, we have this:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
 #big-container {
  width: 100vw;
  height: 100vh;
  background-color: black;
}

#small-container {
  width: 50%;
  height: 50%;
  background-color: blue;
}
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
 #big-container {
  width: 100vw;
  height: 100vh;
  background-color: black;
}

#small-container {
  width: 50%;
  height: 50%;
  background-color: blue;
}
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />

            <p>Try the above yourself and see what you get on the browser!</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
