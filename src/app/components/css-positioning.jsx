/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CssPositioning() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's take a look at CSS positioning!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-xl font-semibold">
              For this, I think it's best if you watch these videos below.
            </p>
            <br />
            <span>Learn about CSS positioning</span>{" "}
            <Link
              href="https://www.youtube.com/watch?v=MxEtxo_AaZ4&t=312s"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <br />
            <span>Learn about flex box.</span>{" "}
            <Link
              href="https://www.youtube.com/watch?v=phWxA89Dy94"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <br />
            <p>
              Dont worry too much about CSS and its styling and positioning. We
              are not aiming to be designers, and hence, Javascript is much much
              more important. However, you should be aware of the basics of it
              and I want you to just have brief knowledge of certain aspects.
            </p>{" "}
            <br />
            <p>
              Oh, and one more thing I want you to know about are responsive
              designs. At the moment, we are viewing everything from a
              computer/laptop screen, and we style according to that. However,
              styling for computer/laptop screens will not mean that it will
              look the same on a mobile screen. For this, we need to implemen
              respnsiveness. This is abit advanced, and because we are not
              aiming to be designers, we are not going to cover it.
            </p>
            <br />
            <p>
              In the real world, you can outsource styling to a stylist which
              you can find on Upwork or Fiverr. You'd be surprised, stylist
              arent paid that much, and so its not too expensive to outsource.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
