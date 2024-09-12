/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EventsEnv() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            We must keep sensitive information private!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              Normally, the url to an app's backend should be private, and hence
              we should store it in our .env file.
            </h2>
            <p className="mt-2">
              Go ahead and make a new file called .env at the root of your
              project.
            </p>{" "}
            <br />
            <p>In .env,</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`PUBLIC_BACKEND_BASE_URL = 'https://events-platform-be-y7vg.onrender.com'`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`PUBLIC_BACKEND_BASE_URL = 'https://events-platform-be-y7vg.onrender.com'
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now, in order to use our backendurl in other files, we will need
              to import it as such in other files:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
