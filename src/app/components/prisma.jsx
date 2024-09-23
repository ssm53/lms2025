/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Prisma() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            We will also be using Prisma
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              but what is prisma? (this might be in youe head - shaun, you dont
              need to ask us what is prisma... we cant talk to you dumb dumb)
            </h2>
            <br />
            <p>
              Well, to work with our databases in our node and express project,
              we can use good ol' plain SQL, and manually map the data we get
              into our program, but in my opinion, that's the hard way of doing
              it...it really depends on you, but I prefer using modern
              technologies that make our lives easier.{" "}
            </p>
            <br />
            <p>I use Prisma!!</p>
            <br />
            <p>
              It's called an ORM, and long-story short, it makes working with
              our database much easier.
            </p>
            <br />
            <br />
            <span>
              Go ahead and read the docs... don't spend too much time on it
              though, as it can be a rabbit hole...you will learn more by doing
              in later lessons.
            </span>{" "}
            <Link
              href="https://www.prisma.io/docs/orm/prisma-client/queries/crud"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
