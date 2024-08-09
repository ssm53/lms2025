/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

export default function SideNavbar3() {
  return (
    <nav className="flex flex-col items-start gap-6 bg-background px-4 py-6 sm:w-56 h-screen">
      <Link
        href="#"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Frontend
      </Link>
      <Link
        href="/frontend/intro"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Intro
      </Link>
      <Link
        href="/frontend/head-tag"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Head Tag
      </Link>
      <Link
        href="/frontend/tag-anatomy"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Tag Anatomy
      </Link>
      <Link
        href="/frontend/heading-and-paragraph"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Heading and Paragraph
      </Link>
      <Link
        href="/frontend/anchor-and-image-tag"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Anchor and Image
      </Link>
      <Link
        href="/frontend/div"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Div Tag
      </Link>
      <Link
        href="/frontend/inline-and-block"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Inline and Block Tags
      </Link>
      <Link
        href="/frontend/additional-tags"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Addiitonal Tags
      </Link>
    </nav>
  );
}
