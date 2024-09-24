/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hackerrank() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            I'd like you try these out!
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <span>Challenge yourself with these...really really useful!</span>{" "}
            <Link
              href="https://www.hackerrank.com/dashboard"
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
