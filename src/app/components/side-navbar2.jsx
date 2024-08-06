"use client";
import Link from "next/link";

export default function SideNavbar2() {
  return (
    <nav className="flex flex-col items-start gap-6 bg-background px-4 py-6 sm:w-56 h-screen">
      <Link
        href="#"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Further Essentials
      </Link>
      <Link
        href="/further-essentials/lesson-plan"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Lesson Plan
      </Link>
      <Link
        href="#"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Set Up
      </Link>
      <Link
        href="/further-essentials/mac-os"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        MacOS
      </Link>
      <Link
        href="/further-essentials/windows"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Windows
      </Link>
      <Link
        href="/further-essentials/using-the-terminal"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Using the Terminal
      </Link>
      <Link
        href="/further-essentials/set-up-a-project-like-a-pro"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Set Up a Project like a Pro
      </Link>
    </nav>
  );
}
