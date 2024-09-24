/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AsyncAwait() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Async-Await
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <p>There is another way to handle this. We use async and await.</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
console.log("Hello");

const name = await new Promise((resolve, reject) => {
  setTimeout(() => resolve("John"), 10);
});

console.log(\`Goodbye, \${myName}!\`);
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
console.log("Hello");

const name = await new Promise((resolve, reject) => {
  setTimeout(() => resolve("John"), 10);
});

console.log(\`Goodbye, \${myName}!\`);
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Caveat</h2>
            <p>
              Try running the example above. You will realise that it doesn't
              work in Nodes. To make it work, change your filename from index.
              js to index.mjs and run node index.mis. We will get to the reason
              why mjs instead of js in the module lesson. But for now, just
              remember, in NodeS projects (not browser projects), if you want to
              use top-level await aka await that is not wrapped within an async
              function, you need to use mjs instead of . js. There will be an
              alternate way to use js and still have top-level await work. We
              will get to it in a future lesson, I Promise (please laugh at this
              programming pun).
            </p>
            <br />
            <h2 className="text-xl font-semibold">
              Wrapping logic in a function
            </h2>

            <p>
              Let's say we wanted the code to be resuable, we could have done
              this:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
console. log("Hello");
async function getName () {
  return await new Promise((resolve, reject) => {
    setTimeout(() => resolve("John"), 10)
});
}
const name = await getName ()
console. log (\`Goodbye, \${myName}!\`);
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
console. log("Hello");
async function getName () {
  return await new Promise((resolve, reject) => {
    setTimeout(() => resolve("John"), 10)
});
}
const name = await getName ()
console. log (\`Goodbye, \${myName}!\`);
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              First, we move the logic into a function called getName Then we
              annotate the function as async to let JS know that this is an
              asynchronous function and will return a promise. Then we call
              const name = await getName(), to actually wait for the function to
              execute and return a value. If we did const name = getName()
              (without the await), name variable will be assigned a promise
              instead of the actual value since we are not waiting for the
              function to execute completely first.
            </p>

            <br />
            <h2 className="text-xl font-semibold">WHy use async-await?</h2>
            <br />
            <p>
              Rather than using . then, we use await. The example we worked
              through does not yet make it very apparent but using await is way
              nicer because of reduced code chaining. In very complex code, it
              can look like this:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  });
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  });
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Super duper annoying!</p>
            <br />
            <p>So, using async-await, its much easier and will look as such:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
const result = await new Promise(function (resolve, reject) {
  setTimeout (() => resolve(1), 1000);
})
  console.log(result)
  console.log(result * 2)
  console.log(result * 2 * 2)
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
const result = await new Promise(function (resolve, reject) {
  setTimeout (() => resolve(1), 1000);
})
  console.log(result)
  console.log(result * 2)
  console.log(result * 2 * 2)
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Easier isnt it?</p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
