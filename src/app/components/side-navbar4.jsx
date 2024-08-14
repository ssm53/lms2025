/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

export default function SideNavbar4() {
  return (
    <nav className="flex flex-col items-start gap-6 bg-background px-4 py-6 sm:w-56 h-screen">
      <Link
        href="#"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Databases & SQL
      </Link>
      <Link
        href="/databases/intro-to-databases"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Intro to databases
      </Link>
      <Link
        href="/databases/types-of-relationships"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Types of relationships
      </Link>
      <Link
        href="/databases/sql"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        SQL
      </Link>
      <Link
        href="/databases/docker"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Docker
      </Link>
    </nav>
  );
}
