// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";

export default function HtmlAndCssBasics() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            HTML and CSS Basics
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724133813/bootcamp-prebootcamp/evygy3ig2m8ipxfshhx7.mp4"
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
