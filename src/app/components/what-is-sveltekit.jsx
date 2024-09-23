/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhatIsSveltekit() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            What is Sveltekit
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              Long story short, it makes it MUCH easier to code!
            </h2>
            <p className="mt-2">
              You remember previous lessons where there was an index.js,
              index.html and styles.css? It might not seem like many files but
              if your code gets bigger, it can get quite tedious. Also,
              Sveltekit has some functionalities which I will show you in the
              upcoming lessons that make coding much easier.
            </p>{" "}
            <br />
            <p className="mt-2">
              Sveltekit is a framework... just like NextJS, Vue or Angular.
            </p>{" "}
            <br />
            <span>
              Visit this page and have a look at what sveltekit is all
              about..dont worry if you get confused, I will guide you along in
              the next lessons.
            </span>{" "}
            <Link
              href="https://kit.svelte.dev/docs/introduction"
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
