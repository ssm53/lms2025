/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EventsPlatform() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Lets build a big daddy project.... an event management platform!
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              This will be really impressive to put in your portfolio... so try
              your best with this!
            </h2>
            <br />
            <p>We will be building an event management platform.</p>
            <br />
            <span>You can check it out.</span>{" "}
            <Link
              href="https://events-platform-4be.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <p>
              This is a platform which allows event managers to market their
              events for public to see.
            </p>
            <br />
            <p>
              Users can then view all the avaialble events and attend one of
              them if they wanted to.
            </p>
            <br />
            <p>You'll learn so much here.. Im so exited for you!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
