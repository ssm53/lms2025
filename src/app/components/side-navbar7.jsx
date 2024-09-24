/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "#", label: "Typescript, Langchain and AI" },
  { href: "/ai/intro-to-typescript", label: "Intro to Typescript" },
];

export default function SideNavbar7() {
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
            className={`w-full text-[15px] leading-[19px] ${
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
