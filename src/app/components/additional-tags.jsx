/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AdditionalTags() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's look at other additional tags!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-xl font-semibold">
              So here's the thing, there are many many html tags and it can
              never end, but here are a few more important tags.
            </p>
            <h2 className="text-xl font-semibold">Lists</h2>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
 <ol>
      My fav footballers
      <li>Gerrard</li>
      <li>Kevin De bruyne</li>
      <li>Messi</li>
      <li>Beckham</li>
      <li>Van Dijk</li>
    </ol>

    <ul>
      My most hated footballers
      <li>Ronaldo</li>
      <li>Nani</li>
      <li>Mahrez</li>
    </ul>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
 <ol>
      My fav footballers
      <li>Gerrard</li>
      <li>Kevin De bruyne</li>
      <li>Messi</li>
      <li>Beckham</li>
      <li>Van Dijk</li>
    </ol>

    <ul>
      My most hated footballers
      <li>Ronaldo</li>
      <li>Nani</li>
      <li>Mahrez</li>
    </ul>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Ordrered lists will be ordered by numbers, and unordered is
              ordered by bullet points. This will show as such:
            </p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/lists-example.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />

            <h2 className="text-xl font-semibold">Video tag</h2>
            <p>
              Note that the src and alt attribute for videos are done the same
              way as image tag.
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
 <video src="same-as-image" alt="same-as-image"></video>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
<video src="same-as-image" alt="same-as-image"></video>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Forms</h2>
            <p>
              Note that you will be working with forms alot. A label is used to
              name the part of the form, and input tags are used to get user
              inputs. There can be diff types of input tags which are related to
              the type of user input we want.
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
  <form>
      <label>Username</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <input type="checkbox" />
      <span>Stay logged in?</span>
      <button>Log in</button>
    </form>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
 <form>
      <label>Username</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <input type="checkbox" />
      <span>Stay logged in?</span>
      <button>Log in</button>
    </form>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>This will show as such:</p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/form-example.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <h2 className="text-xl font-semibold">Tables</h2>
            <br />
            <p>Please go and check out how to do tables using HTML.</p>
            <br />
            <h2 className="text-xl font-semibold">Break tags</h2>
            <br />
            <p>
              Lets say we want to write text, but after a certain point, we want
              to go to the next line <br />
              like this.
              <br />
              and this.
              <br />
              For these, we need to use{" "}
              <span className="font-bold text-purple-600">{"<br></br>"}</span> .
              Go ahead and research it!
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
