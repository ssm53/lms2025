"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNavbar3() {
  const pathname = usePathname();

  const links = [
    { href: "#", label: "Frontend" },
    { href: "/frontend/intro", label: "Intro" },
    { href: "/frontend/head-tag", label: "Head Tag" },
    { href: "/frontend/tag-anatomy", label: "Tag Anatomy" },
    { href: "/frontend/heading-and-paragraph", label: "Heading and Paragraph" },
    { href: "/frontend/anchor-and-image-tag", label: "Anchor and Image" },
    { href: "/frontend/div", label: "Div Tag" },
    { href: "/frontend/inline-and-block", label: "Inline and Block Tags" },
    { href: "/frontend/additional-tags", label: "Addiitonal Tags" },
    { href: "/frontend/css", label: "CSS" },
    { href: "/frontend/css-box-model", label: "CSS Box Model" },
    { href: "/frontend/css-colour", label: "CSS Colour" },
    { href: "/frontend/css-sizing", label: "CSS Sizing" },
    {
      href: "/frontend/style-your-first-website",
      label: "Style Your First Website",
    },
    { href: "/frontend/css-positioning", label: "CSS Positioning" },
    { href: "/frontend/dom-manipulation", label: "DOM manipulation" },
    { href: "/frontend/further-dom-methods", label: "Further DOM Methods" },
    { href: "/frontend/interactivity", label: "Interactivity" },
    { href: "/frontend/what-is-sveltekit", label: "What is Sveltekit?" },
    { href: "/frontend/sveltekit-tutorial", label: "Sveltekit Tutorial" },
    { href: "/frontend/sveltekit-tutorial-2", label: "Sveltekit Tutorial 2" },
    {
      href: "/frontend/tailwind-daisyui-demo",
      label: "Tailwind and DaisyUI Demo",
    },
    { href: "/frontend/events-platform", label: "Build an events platform!" },
    { href: "/frontend/set-up", label: "Set Up" },
    { href: "/frontend/api-reminder", label: "Reminder of APIs" },
    { href: "/frontend/events-env", label: "Privacy matters" },
    { href: "/frontend/events-home-page", label: "Lets do our homepage" },
    {
      href: "/frontend/events-user-register",
      label: "Allow users to register",
    },
    { href: "/frontend/events-user-sign-in", label: "Allow users to sign in" },
    {
      href: "/frontend/events-post-event",
      label: "Allow users to post events!",
    },
    {
      href: "/frontend/events-see-specific-event",
      label: "Allow users to see specific events!",
    },
    { href: "/frontend/events-logout", label: "Allow users to logout!" },
    { href: "/frontend/events-challenges", label: "Challenges" },
  ];

  return (
    <nav className="flex flex-col items-start gap-2 bg-background py-6 sm:w-[16rem] h-screen border-r border-gray-200 pt-0">
      <Link
        href="#"
        className="text-lg font-semibold text-primary w-full bg-[#eeeeee] py-2 px-6"
        prefetch={false}
      >
        Frontend
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
