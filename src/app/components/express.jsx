/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Express() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            So... we will be using Node for our backend, but we will also be
            using Express
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">But what is it?</h2>
            <br />
            <p>
              Express is a simple and popular framework for building web
              applications and APIs using Node.js. Think of Express as a tool
              that makes it easier to create the backend of your web app—the
              part that handles things like routing, managing data, and
              connecting to databases.
            </p>
            <br />
            <p>
              So I learnt to code in 2023... with all these technologies built
              on top of javascript... full respect to those old school
              developers... I cant imagine how they built applications without
              using modern technologies like we have.. express is one of them...
              and prisma is one of them too!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
