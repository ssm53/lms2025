/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AnchorAndImageTag() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's look at the anchor and image tag
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">Anchor tag</h2>
            <p>
              Okay, so anchor tag basically allow text to be clicked, and when
              clicked, it redirects the user to a link. Let's say we want to
              create a link to direct users to Google.
            </p>
            {/* <p>
              The{" "}
              <span className="font-bold text-purple-600">
                {"<title></title>"}
              </span>{" "}
              tag is used to give a name to your app. This will be shown on the
              browser tab at the top. For example, if you app's name is
              Facebook, you probably want your title to be Facebook.
            </p>
            <br /> */}
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4] overflow-auto">
                <code>{`
 <a href="https://www.google.com/">Go to Google</a>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
 <a href="https://www.google.com/">Go to Google</a>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              You should try the above. If you need reminding, type the above in
              vscode in your index.html, and then live server. Ok, so anyways,
              once that link is clicked, you see it goes to Google, but on the
              same tab. What if we want to redirect users to Google, but open up
              Google on a seperate tab? Try and research how to do it... it's
              actually super ez!
            </p>
            <br />
            <h2 className="text-xl font-semibold">Image tag</h2>
            <p>
              First of all, image tags are self closing are as written as such:
            </p>
            {/* <p>
              The{" "}
              <span className="font-bold text-purple-600">
                {"<title></title>"}
              </span>{" "}
              tag is used to give a name to your app. This will be shown on the
              browser tab at the top. For example, if you app's name is
              Facebook, you probably want your title to be Facebook.
            </p>
            <br /> */}
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4] overflow-auto">
                <code>{`
  <img src="" alt="whatever-alt"/>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
  <img src="" alt="whatever-alt"/>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <p>Hey, but what were the src and alt from the above?</p>
            <h2 className="text-xl font-semibold">src in the image tag</h2>
            <p>
              So the src basically says the source of the image, and we have to
              put the source as a string. Now, there are two ways we can do
              this.
            </p>
            <h2 className="text-xl font-semibold">
              Let's say we want to use an image online
            </h2>
            <p>
              Okay, so go to Google and find an image. Right click on that image
              and open image in new tab. On that new tab, at the top of your
              browser, you will see the link to that image. Now, this will be
              the source of your image. Images which we get online may have very
              long url's. For example:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4] overflow-auto">
                <code>{`
  <img src="data:image/png;base64,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" alt="whatever-alt"/>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
  <img src="data:image/png;base64,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" alt="whatever-alt"/>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">
              Let's say we want to use our own image
            </h2>
            <p>
              Okay, so for this, we need to first upload our image into our
              project directory. Let's say I have an iamge called
              'heading-example.png'. I will drag and drop that image into vs
              code at the root of my project. So, now my VS code will look like
              this:
            </p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/image-example.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Great, now we can get back to the source of the image. This time,
              instead of inputting a url as the source of the image, we put the
              location of our image in our project as the source. So, at the
              moment, our image is in the root of our project. So, the source
              will be as such:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4] overflow-auto">
                <code>{`
 <img src="./heading-example.png" alt="whatever-alt" />
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
  <img src="./heading-example.png" alt="whatever-alt" />
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              You might be slightly confused as to what './' or '.' or '/'
              means? Try and research this for yourself. In short, it gets you
              to the location of a file or folder in your proejct directory.
            </p>
            <br />
            <h2 className="text-xl font-semibold">The alt attribute</h2>
            <p>
              For some reason, if the image fails to load, we can have a
              fallback to have a short description of our image to tell them
              what it was about. This is what we put in the alt attribute. So
              form our exmaple above, we have an heading-example.png. So our alt
              could be something like "example of an image"
            </p>
            <br />
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4] overflow-auto">
                <code>{`
 <img src="./heading-example.png" alt="example of headings" />
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
  <img src="./heading-example.png" alt="example of headings" />
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Height and Width</h2>
            <p>Images can also have height and width attributes.</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
  <img src="./heading-example.png" alt="whatever-alt" width="300px" height="300px" />
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
   <img src="./heading-example.png" alt="whatever-alt" width="300px" height="300px" />
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Beware! Working with image sizing can be a pain in the ***! So, if
              you are actually using an image and you want that image to be 300
              x 300 px, ensure that when you upload that image to vscode, the
              image is already sized at 300 x 300 px. If not, it can be hard to
              style it.
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
