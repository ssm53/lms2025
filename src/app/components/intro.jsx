/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";

export default function Intro() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's look at HTML and CSS in this section!
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              It's best if you go back a few steps and rewatch our HTML and CSS
              basics video.
            </h2>
            <p className="mt-2">
              In summary, HTML and CSS is responsible to show content on the
              browser. HTML shows the basic stuff, and CSS adds styling to it!
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
