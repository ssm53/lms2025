/* eslint-disable react/no-unescaped-entities */
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
      <Link
        href="/further-essentials/keep-organised"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Let's Keep Organised
      </Link>
      <Link
        href="/further-essentials/using-vscode-terminal"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Using VS Code's Terminal
      </Link>
      <Link
        href="/further-essentials/further-on-strings"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Further on Strings
      </Link>
      <Link
        href="/further-essentials/easier-way-to-loop-through-array"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Easier Way to Loop through Array
      </Link>
      <Link
        href="/further-essentials/further-on-type-conversion"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Further On Type Conversion
      </Link>
      <Link
        href="/further-essentials/arrow-functions"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Arrow Functions
      </Link>
      <Link
        href="/further-essentials/classes"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Classes
      </Link>
      <Link
        href="/further-essentials/variable-scope"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Variable Scope
      </Link>
      <Link
        href="/further-essentials/floating-point-error"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Floating Point Error
      </Link>
      <Link
        href="/further-essentials/using-libraries"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Using Libraries
      </Link>
      <Link
        href="/further-essentials/math"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Math
      </Link>
      <Link
        href="/further-essentials/spread-and-rest"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Spread & Rest
      </Link>
      <Link
        href="/further-essentials/map"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Map
      </Link>
      <Link
        href="/further-essentials/errors"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Errors
      </Link>
      <Link
        href="/further-essentials/best-practices"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Best Practices
      </Link>
      <Link
        href="/further-essentials/dates"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Dates
      </Link>
    </nav>
  );
}
