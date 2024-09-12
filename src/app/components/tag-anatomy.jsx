/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TagAnatomy() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's take a cloose look at an anatomy of a tag
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">Opening and Closing Tags</h2>
            <br />
            <p>Most HTML tags have a closing and opening tag.</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
<p>Most tags have an opening and closing tags</p>
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
<p>Most tags have an opening and closing tags</p>
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              From the above, the opening tag is the{" "}
              <span className="font-bold text-purple-600">{"<p>"}</span> and the
              closing tag is the{" "}
              <span className="font-bold text-purple-600">{"</p>"}</span>{" "}
            </p>
            <br />
            <p>
              In between the opening and closing tags is where we put our
              content.
            </p>
            <br />
            <h2 className="text-xl font-semibold">Self closing tags</h2>
            <p>There are some tags which are self-closing. For example:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
 <img src="your-image-link-goes-here" />
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
 <img src="your-image-link-goes-here" />
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              In general, if you are unsure, just assume a HTML tag needs an
              opening and closing tag. Very few are self-closing
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
