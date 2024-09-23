/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Interactivity() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's look at how to make a website interactive
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              So far, you have made a static website...that's quite cool
            </h2>
            <br />
            <h2 className="text-xl font-semibold">
              but it'll be cooler if you can make it interactive
            </h2>
            <br />
            <p>
              For example, something happens when you click a button...
              something happens when you submit a form...
            </p>
            <br />
            <p>For this, we need to attach event handlers</p>
            <br />
            <h2 className="text-xl font-semibold">Event Handlers</h2>
            <br />
            <p>
              An event handler is a functions that an HTML element will execute
              when an event is triggered.
            </p>
            <br />
            <p>That sounds like yadayadayada.... what is en event?</p>
            <br />
            <p>
              Well, basically an event normally refers to an action which a user
              has performed (click a button, submit a form etc.)
            </p>
            <br />
            <br />
            <ol>
              <li>click</li>
              <li>submit(submit a form)</li>
              <li>input(fill up a form)</li>
              <li>mouseover(hover over an element)</li>
            </ol>
            <br />
            <p>
              In order for Javascript to responsd to these events, we need to
              attach eventhandlers to that chosen element. Example:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
const selectedDiv = document.querySelector("div");
selectedDiv.onclick = function () {
  // This function right here is the 'Event Handler'
  console.log("Hello World");
};
// This will be how JavaScript will repond when we click on the specified <div›

// OR we can also do this
const selectedDiv = document.querySelector("div");
selectedDiv.addEventListener("click", function () {
  console.log("Hello World");
});
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
const selectedDiv = document.querySelector("div");
selectedDiv.onclick = function () {
  // This function right here is the 'Event Handler'
  console.log("Hello World");
};
// This will be how JavaScript will repond when we click on the specified <div›

// OR we can also do this
const selectedDiv = document.querySelector("div");
selectedDiv.addEventListener("click", function () {
  console.log("Hello World");
});
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">
              We've looked at events, so now let's look at 'event'
            </h2>
            <br />
            <p>
              This is the event which happened due to the event handler getting
              triggered.
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
selectedDiv.onclick = function (e) {
  console.log(e); // e here contains all the information about the event that / has happened
  // You can rename it to whatever you want, it doesn't have to be "e"
};
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
selectedDiv.onclick = function (e) {
  console.log(e); // e here contains all the information about the event that / has happened
  // You can rename it to whatever you want, it doesn't have to be "e"
};
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              it contains informations such as, the element that triggered the
              event (event.target), the type of the event (event. type), the
              time when the event happened (event. timeStamp) and many many
              more. Its actually easier for you to see everything yourself, try
              it out right now!
            </p>
            <br />
            <h2 className="text-xl font-semibold">event.preventDefault()</h2>
            <br />
            <p>
              Some HTML elements will react in a certain way when interacted
              with. For example, anchor tags will send us to another page when
              clicked on, forms will send data and redirect to another page, and
              so on. You can stop these default behaviour by calling
              event.preventDefault function.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
