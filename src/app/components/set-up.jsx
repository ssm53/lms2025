/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SetUp() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Set Up
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              Go back to your first Svelte Tutorial where you were shown how to
              set up a Sveltekit project together with DaisyUI and Tailwind.
            </h2>
            <br />
            <p>Name of this project - Events Platform</p>
          </div>
        </div>
      </div>
    </div>
  );
}
