/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SveltekitTutorial() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's have a short into to what sveltekit is all about... note -
            this page will be abit long, but I want everything to be in one
            place for you. It'll be easier for you to reference this.
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              How to set up a Sveltekit project?
            </h2>
            <p className="mt-2">
              First, ensure that you are in your bootcamp-projects folder in
              your Desktop. If not, go to that directory with your terminal.
            </p>{" "}
            <br />
            <p className="mt-2">
              Now, once you're in that directory, as per the documentation, run
              this in your terminal:
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`npm create svelte@latest svelte-tutorial`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `npm create svelte@latest svelte-tutorial`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Now, you will be asked a few questions:</p>
            <br />
            <p>For 'OK to proceed?', type and enter y</p>
            <br />
            <p>For 'which Svelte App template?', choose 'Skeleton project'</p>
            <br />
            <p>For 'Add type checking with Typescript?', choose No.</p>
            <br />
            <p>
              For 'Select additional options (use arrow keys/space bar)?', we
              want ESLint and Prettier. So, at 'ESLint for code linting', press
              your spacebar. This selects ESLint. Now, press your down arrow,
              and press the spacebar to say yes for 'Add Prettier for Code
              Formatting'.
            </p>
            <br />
            <p>Your terminal should now look like this:</p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/set-up-sveltekit-example.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              This basically creates a Sveltekitp project, called
              svelte-tutorial in the bootcamp-projects folder
            </p>
            <br />
            <p>Now next, do this in your terminal:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`asdf install nodejs 16.19.0
cd svelte-tutorial
asdf local nodejs 16.19.0`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`asdf install nodejs 16.19.0
cd svelte-tutorial
asdf local nodejs 16.19.0
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now we want to open our project up on VS code, so we do this in
              the terminal: code .
            </p>
            <br />
            <p>You should now see something like this - </p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/open-sveltekit-project-vscode.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now, in this bootcamp, we are focusing on client-side rendering..
              there is also server-side rendering, but we are not focusing on
              that in this bootcamp
            </p>
            <br />
            <p>
              Create a file at{" "}
              <span className="font-bold text-purple-600">
                src/routes/+layout.js
              </span>{" "}
              and put this in there:{" "}
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`export const ssr = false;`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`export const ssr = false; 
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now that you're on VS code, open up your terminal on VS code. In
              that terminal, run:{" "}
              <span className="font-bold text-purple-600">npm install</span>{" "}
            </p>
            <br />
            <p>
              Great, now you should have it all set up. Now, in that terminal,
              run:{" "}
              <span className="font-bold text-purple-600">npm run dev</span>{" "}
            </p>
            <br />
            <p>
              You would see this link in your terminal -{" "}
              <span className="font-bold text-purple-600">
                http://localhost:5173/
              </span>{" "}
              -{" "}
            </p>
            <br />
            <p>
              Click that link or go to your browser, and paste that link in. You
              should now see something like this:
            </p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/sveltekit-welcome.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>Graet, that is how you set up a sveltekit project!</p>
            <br />
            <h2 className="text-xl font-semibold">
              Now, let's set up Tailwind and DaisyUI
            </h2>
            <br />
            <p>
              Tailwind is a framework, and it basically makes styling much
              easier, as CSS can be a pain in the ***. Also, we will install
              DaisyUI. DaisyUI creates great components (e.g. button/forms) for
              us to use out of the box. You will see how this can be helpful
              later.
            </p>
            <br />
            <p>You can check them out on Google!</p>
            <br />
            <h2 className="text-xl font-semibold">
              Now, let's set up Tailwind
            </h2>
            <br />
            <span> Follow these instructions from step2 onwards - </span>
            <Link
              href="https://tailwindcss.com/docs/guides/sveltekit"
              className="underline"
            >
              here
            </Link>
            <br />
            <h2 className="text-xl font-semibold">Now, let's set up DaisyUI</h2>
            <br />
            <span> Follow these instructions - </span>
            <Link
              href="https://daisyui.com/docs/install/"
              className="underline"
            >
              here
            </Link>
            <br />
            <p>
              Great, you've done some tedious work and got a sveltekit project
              up and running together with TailwindCSS and DaisyUI... like a
              pro!
            </p>
            <br />
            <p>
              You dont need to remember any of this... next time you're building
              a project, you can just reference our step by step guide above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
