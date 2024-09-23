"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/pre-bootcamp/welcome", label: "Welcome" },
  { href: "/pre-bootcamp/general-tips", label: "General Tips" },
  { href: "/pre-bootcamp/intro-to-coding", label: "Intro To Coding" },
  { href: "/pre-bootcamp/variables", label: "Variables" },
  { href: "/pre-bootcamp/datatypes", label: "3 Data Types" },
  {
    href: "/pre-bootcamp/change-datatypes-and-const",
    label: "Changing Data Types & const vs let",
  },
  {
    href: "/pre-bootcamp/arithmetic-expressions",
    label: "Arithmetic Expressions",
  },
  {
    href: "/pre-bootcamp/naming-variables-and-user-input",
    label: "Naming Variables and User Input",
  },
  { href: "/pre-bootcamp/exercise-1", label: "Exercise 1" },
  { href: "/pre-bootcamp/intro-to-functions", label: "Intro to Functions" },
  {
    href: "/pre-bootcamp/functions-with-variables",
    label: "Functions with Variables",
  },
  { href: "/pre-bootcamp/html-and-css-basics", label: "HTML and CSS Basics" },
  { href: "/pre-bootcamp/your-first-app", label: "Your First App!" },
  { href: "/pre-bootcamp/if-statements", label: "If statements" },
  {
    href: "/pre-bootcamp/strict-equality-operator",
    label: "Strict Equality Operator",
  },
  { href: "/pre-bootcamp/and-or-operators", label: "And & OR operator" },
  { href: "/pre-bootcamp/not-operator", label: "Not Operator" },
  { href: "/pre-bootcamp/while-loop", label: "While Loop" },
  { href: "/pre-bootcamp/for-loop", label: "For Loop" },
  {
    href: "/pre-bootcamp/loop-through-an-array",
    label: "Loop Through An Array",
  },
  { href: "/pre-bootcamp/objects", label: "Objects" },
];

export default function SideNavbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-start gap-2 bg-background py-6 sm:w-[16rem] h-screen border-r border-gray-200 pt-0">
      <Link
        href="#"
        className="text-lg font-semibold text-primary w-full bg-[#eeeeee] py-2 px-6"
        prefetch={false}
      >
        Essentials
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
