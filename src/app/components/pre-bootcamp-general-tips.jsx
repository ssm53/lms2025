/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";

export default function PreBootcampWelcome() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            General Tips
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
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
              3. More important than Google and Youtube is ChatGPT. Man, it is
              great for learning how to code, but we should not be completely
              dependant on it, especially at the start. There will be exercises
              coming later, and for the exercises I highly recommend that you
              try it out yourself first (as in use that smart brain of yours to
              tackle the challenges). Only after you have properly tried but
              still cant get the answer, then its worth asking ChatGPT on how to
              do it. I cant control how often you use chatGPT, but if you are
              using it straight away to tackle these challenges, even before you
              try it out yourself, you will be missing out on a huge part of
              learning.
            </p>{" "}
            <br />
            <p>
              4. Ensure you dont just watch/read the material. Actually get your
              hands dirty and code it out. This build your muscle memory on the
              important bits. Personally, I made this mistake early on when I
              learnt to code, so I hope you dont do the same.
            </p>
            <br />
            <p>
              5. If you are stuck, that is good. That means you're learning!
              Trust me, you will get stuck hahahaha its so frustrating but at
              the same time so rewarding when you solve that error and get
              'unstuck'.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
