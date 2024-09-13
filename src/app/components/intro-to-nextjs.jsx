/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";

export default function IntroToNextJs() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            To be updated in 3 weeks
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              Hey you! If you are reading this, there is no way you completed
              the material in a few days/weeks! Take it step-by-step, finish the material before hand and return here once you have. This will be updated in 3 weeks.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
