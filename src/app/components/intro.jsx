/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";

export default function Intro() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
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
