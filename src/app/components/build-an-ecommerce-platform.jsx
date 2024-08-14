/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BuildAnEcommercePlatform() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's build an E-commerce platform! A full-stack one, with a
            frontend and a backend!
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">1. Install Homebrew</h2>
            <p className="mt-2">Let's call this 'E-Commerce'</p> <br />
            <p>
              In this web app, users can browse around and look for things to
              buy. We will be using Stripe for this
            </p>
            <br />
            <p>
              Users can also upload items that they want to sell, for others to
              buy if they want to.
            </p>
            <br />
            <p>We'll also be using AWS to store images..</p>
            <br />
            <p>
              After building this, you'd know how to build a full-stack app from
              A-Z.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
