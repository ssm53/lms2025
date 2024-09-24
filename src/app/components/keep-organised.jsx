/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";

export default function KeepOrganised() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's Keep Organised
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              You have already created a folder called bootcamp-projects in your
              Desktop folder.
            </h2>
            <p className="mt-2">
              For each project we do (I will tell you if it is a project),
              within the bootcamp-projects folder, you should always create a
              new folder, and then type code . to open vscode, and then write
              your code in there.
            </p>{" "}
            <br />
            <p className="mt-2">
              For our lessons, you should create a folder called
              bootcamp-lessons in your Desktop. For each lesson, it's best to
              create a new folder within that bootcamp-lessons folder, and as
              usual, type code . to open vs code, and write your code in there.
            </p>{" "}
            <br />
            <p>
              To do this, please reference the previous video. I know some of
              you may have not really practiced using the terminal yet, so let
              this be your little practice! hahahah sorry
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
