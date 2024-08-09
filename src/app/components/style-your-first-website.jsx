/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function StyleYourFirstWebsite() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Alright, enough theory for now, and let's style your first website!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-xl font-semibold">
              I want you to style this website!
            </p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/style-first-website-example.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <h2 className="text-xl font-semibold">Some things you need:</h2>
            <br />
            <p>
              <strong>Imageurl:</strong>
              https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3YTOj5R0pHt6OlAc3udH7CWEsex23oVEdw&s{" "}
              {""}
              <br />
              Save it on your computer and then upload it into your project
              directory.
            </p>
            <br />
            <p>
              <strong>Navbar and Footer Color:</strong> #4b0082 (Indigo).
            </p>
            <br />
            <p>
              <strong>Body Background Color:</strong> #f0f8ff (AliceBlue).
            </p>
            <br />
            Try your best with it! Let's go!
          </div>
        </div>
      </div>
    </div>
  );
}
