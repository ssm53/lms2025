/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

export default function SideNavbar6() {
  return (
    <nav className="flex flex-col items-start gap-6 bg-background px-4 py-6 sm:w-56 h-screen">
      <Link
        href="#"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        NextJS
      </Link>
      <Link
        href="/nextjs/intro-to-nextjs"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Intro to NextJS
      </Link>
    </nav>
  );
}
