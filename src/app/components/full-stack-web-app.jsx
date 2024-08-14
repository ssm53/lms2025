/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function FullstackWebApp() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let me give you an overview of what a full-stack web app is all
            about
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">Frontend</h2>
            <br />
            <p>
              So the frontend is the part of coding where it relates to the part
              of the app that is shown on screen. That comes with all your
              styling and user experience and what not...also to get data or to
              update data, we use our frontend to send requests to our backend
              code (which we write apis in them) to get data to then be shown on
              screen.
            </p>
            <br />
            <p>
              For our frontend, we used Javascript, Sveltekit, TailwindCSS and
              DaisyUI.
            </p>
            <br />
            <h2 className="text-xl font-semibold">Backend</h2>
            <p>
              Now, the backend is different. Here, we will write our APIs, which
              our frontend can connect to and get data. Our backend will also be
              repsonsible to store data.
            </p>
            <br />
            <p>
              Also, remember for you frontend Events Platform project, at the
              start, you needed to go to your bootcamp-projects folder on your
              computer, and once you were there you needed to create a new
              project using Sveltekit?
            </p>
            <be />
            <p>
              For our purproses, our backend code will not be mixed with the
              frontend code. That means our backend code will be in a completely
              new directory, and hence it'll be on a different VS code project.
            </p>
            <br />
            <p>
              Now, you might be wondering how can we connect the frontend code
              to the backend code if they are on different VS code's(or
              different directories, to be technically correct)? Don't
              worrrrrryyyyy, I'll show it to you later.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
