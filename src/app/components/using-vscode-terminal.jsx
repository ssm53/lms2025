/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";

export default function UsingVsCodeTerminal() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            This is how to use VS Code's Terminal
          </h1>
        </div>
        <div className="space-y-8">
          <h2 className="text-xl font-semibold">
            Here are the takeaways from the video below:
          </h2>
          <br />
          <p className="mt-2 text-muted-foreground">
            1. To set up a project or lesson and get it on VS Code, always use
            your computer's terminal{" "}
          </p>

          <p className="mt-2 text-muted-foreground">
            2. Once we have opened our project on VS Code, we should go to the
            top and look for{" "}
            <span className="font-bold text-purple-600">Terminal</span>. We
            click it, and then choose{" "}
            <span className="font-bold text-purple-600">New Terminal</span>.
          </p>

          <p className="mt-2 text-muted-foreground">
            3. Now, you'll see VS Code's terminal open at the bottom. Now, once
            you have written some code, in previous lessons, to check the result
            of a <span className="font-bold text-purple-600">console.log</span>,
            we used{" "}
            <span className="font-bold text-purple-600">live server</span>.
            However, it is easier to check the results on VS Code's terminal.
          </p>

          <p className="mt-2 text-muted-foreground">
            4. Assuming our javascript file is called index.js, we do that by
            typing{" "}
            <span className="font-bold text-purple-600">node index.js</span> in
            VS Code's terminal. If the file name was something else, e.g.
            index2.js, then we would type{" "}
            <span className="font-bold text-purple-600">node index2.js</span>.
            We use index.js 99% of the time. You should that too.
          </p>

          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724132702/bootcamp-further-essentials/aeljhxq2h2nvw47cqksj.mp4"
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {/* <div className="flex justify-center">
            <ReactPlayer src="/public/intro-bootcamp-video3.mp4" width="100%" />
          </div> */}
          {/* <div>
            <h2 className="text-xl font-semibold">
              Here are general principles to follow:
            </h2>
            <p className="mt-2">
              1. You don't need to memorise at all. Understanding is the
              important bit here. This is not your high school exam.
            </p>{" "}
            <br />
            <p>
              2. Google and Youtube is your best friend. If you are unsure of
              something, research it there. This is a crucial skill for
              developers.
            </p>{" "}
            <br />
            <p>
              3. You learn the most by doing projects, eventhough you don't have
              enough knowledge to do it yet. The best learning is learning on
              the fly... trust me
            </p>
            <br />
            <p>
              4. If you are stuck, that is good. That means you're learning!
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
