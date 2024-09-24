// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";

export default function SvelteTutorial2() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Lets look further into Svelte
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          {/* here i want to put that video */}
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724131609/bootcamp-frontend/yurjeyawglgdulzzw6ee.mp4"
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724131723/bootcamp-frontend/kgq99am4n6l8wxx3mqeu.mp4"
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="https://res.cloudinary.com/ds2hlirwr/video/upload/v1724132037/bootcamp-frontend/eigbaneljlkz9ki7ikwv.mp4"
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
