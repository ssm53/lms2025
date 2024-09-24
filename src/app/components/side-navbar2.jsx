/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/further-essentials/lesson-plan", label: "Lesson Plan" },
  { href: "/further-essentials/mac-os", label: "MacOS SetUp" },
  { href: "/further-essentials/windows", label: "Windows SetUp" },
  {
    href: "/further-essentials/using-the-terminal",
    label: "Using the Terminal",
  },
  {
    href: "/further-essentials/set-up-a-project-like-a-pro",
    label: "Set Up a Project like a Pro",
  },
  { href: "/further-essentials/keep-organised", label: "Let's Keep Organised" },
  {
    href: "/further-essentials/using-vscode-terminal",
    label: "Using VS Code's Terminal",
  },
  {
    href: "/further-essentials/further-on-strings",
    label: "Further on Strings",
  },
  {
    href: "/further-essentials/easier-way-to-loop-through-array",
    label: "Easier Way to Loop through Array",
  },
  {
    href: "/further-essentials/further-on-type-conversion",
    label: "Further On Type Conversion",
  },
  { href: "/further-essentials/arrow-functions", label: "Arrow Functions" },
  { href: "/further-essentials/classes", label: "Classes" },
  { href: "/further-essentials/variable-scope", label: "Variable Scope" },
  {
    href: "/further-essentials/floating-point-error",
    label: "Floating Point Error",
  },
  { href: "/further-essentials/using-libraries", label: "Using Libraries" },
  { href: "/further-essentials/math", label: "Math" },
  { href: "/further-essentials/spread-and-rest", label: "Spread & Rest" },
  { href: "/further-essentials/map", label: "Map" },
  { href: "/further-essentials/errors", label: "Errors" },
  { href: "/further-essentials/best-practices", label: "Best Practices" },
  { href: "/further-essentials/dates", label: "Dates" },
  {
    href: "/further-essentials/concurrency-and-parallelism",
    label: "Concurrency & Parallelism",
  },
  { href: "/further-essentials/promise", label: "Promise" },
  { href: "/further-essentials/async-await", label: "Async-Await" },
  { href: "/further-essentials/intro-to-api", label: "Intro to API's" },
  { href: "/further-essentials/news-gatherer-app", label: "News Gatherer App" },
  { href: "/further-essentials/news-api", label: "News API" },
];

export default function SideNavbar2() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-start gap-2 bg-background py-6 sm:w-[16rem] h-screen border-r border-gray-200 pt-0">
      <Link
        href="#"
        className="text-lg font-semibold text-primary w-full bg-[#eeeeee] py-2 px-6"
        prefetch={false}
      >
        Further Essentials
      </Link>
      <div className="flex flex-col items-start bg-background py-6 sm:w-full h-screen border-gray-200 px-6 pt-0 overflow-auto">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`w-full text-[15px] leading-[19px]   ${
              pathname === link.href
                ? "text-black font-medium"
                : "text-muted-foreground font-normal"
            } hover:text-foreground py-2`}
            prefetch={false}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
