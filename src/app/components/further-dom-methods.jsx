/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function FurtherDomMethods() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's look further into DOM methods.. but this time
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              I want you to do your own research...
            </h2>
            <br />
            <h2 className="text-xl font-semibold">
              DOM Methods to research... these are commonly used
            </h2>
            <ol>
              <li>.createElement()</li>
              <li>.innerHTML</li>
              <li>.innerText</li>
              <li>.classList</li>
            </ol>
            <br />
            <h2 className="text-xl font-semibold">
              Look further into '.classList'. This method has some useful
              properties:
            </h2>
            <br />
            <ol>
              <li>add</li>
              <li>remove</li>
              <li>contains</li>
              <li>toggle</li>
              <li>replace</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
