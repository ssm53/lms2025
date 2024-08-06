/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SetUpAProjectLikeAPro() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Set Up a Project Like a Pro!
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div className="flex justify-center">
            <video
              controls
              className="max-w-full h-auto"
              src="/setup-project-like-a-pro.mp4"
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
