/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function InlineAndBlock() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Inline vs Block Elements
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">What are block elements?</h2>
            <p>
              Block elements/tags are basically ones which take up the whole
              space horizontally. Most tags are block elements. For example:
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
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
  <p>Hello</p>
    <p>This is a </p>
    <p>block element</p>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
   <p>Hello</p>
    <p>This is a </p>
    <p>block element</p>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              You can see that although each p tag doesnt actually need all of
              the horizontal space as the words were not long, it still takes up
              all of the horizontal space, and because of that the next p tag
              gets shown vertically below the previous p tag:
            </p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/block-example.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />

            <h2 className="text-xl font-semibold">In-line tags/elements</h2>
            <p>
              On the other hand, in-line elements don't take all of the
              horizontal space, and only take up as much space as they need. Not
              many tags are as such. One example of is a{" "}
              <span className="font-bold text-purple-600">span</span> tag. For
              example:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
  <span>this is a span element.</span>
    <span>I only take enough space for myself</span>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
  <span>this is a span element.</span>
    <span>I only take enough space for myself</span>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>This will be shown as such:</p>
            <div className="relative w-full h-64">
              <Image
                src="/span-example.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
