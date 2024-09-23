/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function TypesOfRelationships() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Now, I'd like you to learn about relationship types in databases.
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <span>
              Watch this short video about relationships. We can go on and on
              about this, but this should be enough for you to go on.
            </span>{" "}
            <Link
              href="https://www.youtube.com/watch?v=C3icLzBtg8I"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <span>This is another good video.</span>{" "}
            <Link
              href="https://www.youtube.com/watch?v=2SYyb6gNpfg"
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
