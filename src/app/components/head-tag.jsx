/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeadTag() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's look at the head tag
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              Long story short, its the settings of your HTML document and you
              put whatever information which you dont want users to see in here.
            </h2>
            <br />
            <h2 className="text-xl font-semibold">Title</h2>
            <p>
              The{" "}
              <span className="font-bold text-purple-600">
                {"<title></title>"}
              </span>{" "}
              tag is used to give a name to your app. This will be shown on the
              browser tab at the top. For example, if you app's name is
              Facebook, you probably want your title to be Facebook.
            </p>
            <br />
            <h2 className="text-xl font-semibold">Meta tags</h2>
            <p>
              This is used to give information about your website. Let's say
              your app is Facebook, you probably want to say something like -
              "we connect people from all over the world". This is super
              important for SEO. Google will actually take a look at your meta
              description, and accordingly rank it on the search engine. So,
              ensure to give your app a proper description.
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
<meta name="description" content="Your description goes here">
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
<meta name="description" content="Your description goes here">
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              In general, your head tag of your HTML document should look like
              this:
            </p>
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
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
