/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/backend/fullstack-web-app", label: "Fullstack Web App" },
  { href: "/backend/express", label: "ExpressJS" },
  { href: "/backend/prisma", label: "Prisma" },
  {
    href: "/backend/build-an-ecommerce-platform",
    label: "Build an E-commerce Platform",
  },
  { href: "/backend/ecomm-setup", label: "Let's set it up!" },
  { href: "/backend/ecomm-connect-to-db", label: "Set up and connect to DB" },
  { href: "/backend/ecomm-initialise-git", label: "Initialise Git" },
  { href: "/backend/ecomm-continue-setup", label: "Continue our set up" },
  { href: "/backend/ecomm-register", label: "Allow users to register" },
  { href: "/backend/ecomm-sign-in", label: "Allow users to login" },
  { href: "/backend/ecomm-middlewares", label: "Middlewares" },
  {
    href: "/backend/ecomm-check-tables",
    label: "How to see your Prisma tables?",
  },
  { href: "/backend/ecomm-challenges", label: "Challenges" },
  { href: "/backend/ecomm-aws", label: "AWS" },
  { href: "/backend/ecomm-deploy-backend", label: "Deploy backend" },
];

export default function SideNavbar5() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-start gap-2 bg-background py-6 sm:w-[16rem] h-screen border-r border-gray-200 pt-0">
      <Link
        href="#"
        className="text-lg font-semibold text-primary w-full bg-[#eeeeee] py-2 px-6"
        prefetch={false}
      >
        Backend
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
