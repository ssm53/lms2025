/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeadingAndParagraph() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's look at the heading and paragraph tags!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">Paragraph tag</h2>
            {/* <p>
              The{" "}
              <span className="font-bold text-purple-600">
                {"<title></title>"}
              </span>{" "}
              tag is used to give a name to your app. This will be shown on the
              browser tab at the top. For example, if you app's name is
              Facebook, you probably want your title to be Facebook.
            </p> */}
            <p>
              In general, as its name suggest, you normally write text using
              this tag. For example:
            </p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
<p>I want to write some text here</p>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
<p>I want to write some text here</p>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Heading tag</h2>
            {/* <p>
              The{" "}
              <span className="font-bold text-purple-600">
                {"<title></title>"}
              </span>{" "}
              tag is used to give a name to your app. This will be shown on the
              browser tab at the top. For example, if you app's name is
              Facebook, you probably want your title to be Facebook.
            </p> */}
            <p>
              This is another way to write text, but this comes with different
              sizes. For example, you can see "Heading tag" above is bigger than
              this text. That is cause I used{" "}
              <span className="font-bold text-purple-600">{"<p></p>"}</span> for
              this text and{" "}
              <span className="font-bold text-purple-600">{"<h2></h2>"}</span>{" "}
              for Heading tag.
            </p>
            <br />
            <p>
              The size is biggest for h1 and gets smaller for the subsequent
              heading tags (h1-h6). For example:
            </p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
 <h1>This is the biggest</h1>
    <h2>This is 2nd biggest</h2>
    <h3>This is 3rd biggest</h3>
    <h4>yadayadayada</h4>
    <h5>yadayadayada</h5>
    <h6>yadayadayada</h6>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
 <h1>This is the biggest</h1>
    <h2>This is 2nd biggest</h2>
    <h3>This is 3rd biggest</h3>
    <h4>yadayadayada</h4>
    <h5>yadayadayada</h5>
    <h6>yadayadayada</h6>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>This would look like this:</p>
            {/* here i want to put an image */}
            <div className="relative w-full h-64">
              <Image
                src="/heading-example.png"
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
