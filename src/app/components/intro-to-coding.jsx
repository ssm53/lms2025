/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function IntroToCoding() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Intro To Coding
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724132242/bootcamp-prebootcamp/hroxzjyqkhpxwnak3drz.mp4"
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {/* <div className="flex justify-center">
            <ReactPlayer src="/public/intro-bootcamp-video3.mp4" width="100%" />
          </div> */}
          <div>
            <h2 className="text-xl font-semibold">
              How to download VS Code for Windows (the above video showed how to
              do in on Mac)
            </h2>
            <br />
            <p className="mt-2">
              From the video above, from 03:30 to 04:30 , I show how to download
              VS code for Mac.{" "}
            </p>{" "}
            <br />
            <span>
              For you to download VSCode on Windows, I'd like you to watch this
              video until 05: 40.
            </span>{" "}
            <Link
              href="https://www.youtube.com/watch?v=naL0cZNQh1g&ab_channel=GeekyScript"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <p className="mt-2">
              After you have done that, then you can return to my video above
              and start back from 04:30.
            </p>{" "}
            <br />
            <h2 className="text-xl font-semibold">
              What are Extensions on VSCode?
            </h2>
            <br />
            <p className="mt-2">
              Long story short, extensions makes it easier to code. Think of
              auto-correct on your phone. When you type out something slightly
              wrong, it automatically corrects it for you and makes your life
              easier. That is just one example, but yeah, extensions do the same
              thing for us when we are coding.
            </p>{" "}
            <br />
            <h2 className="text-xl font-semibold">
              What are comments on VSCode?
            </h2>
            <br />
            <p className="mt-2">
              First of all, comments is NOT code. Instead, comments are written
              to explain code and narrate what you are trying to do with this
              code. This will be helpful for you (when you want to look back at
              your code) and will help other people understand your code. You
              will see later on how important this will be.
            </p>{" "}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
