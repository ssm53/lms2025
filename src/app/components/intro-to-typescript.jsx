/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";

export default function IntroToTypescript() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            To be updated in 3 weeks
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              Hey you! If you are reading this, there is no way you completed
              the material in a few days/weeks! Take it step-by-step, finish the
              material before hand and return here once you have. This will be
              updated in 3 weeks.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
