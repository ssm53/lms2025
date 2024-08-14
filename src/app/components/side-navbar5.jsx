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
        Backend
      </Link>
      <Link
        href="/backend/fullstack-web-app"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Fullstack Web App
      </Link>
      <Link
        href="/backend/express"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        ExpressJS
      </Link>
      <Link
        href="/backend/prisma"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Prisma
      </Link>
      <Link
        href="/backend/build-an-ecommerce-platform"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Build an E-commerce Platform
      </Link>
      <Link
        href="/backend/ecomm-setup"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Let's set it up!
      </Link>
      <Link
        href="/backend/ecomm-connect-to-db"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Set up and connect to DB
      </Link>
      <Link
        href="/backend/ecomm-initialise-git"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Initialise Git
      </Link>
      <Link
        href="/backend/ecomm-continue-setup"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Continue our set up
      </Link>
      <Link
        href="/backend/ecomm-register"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Allow users to register
      </Link>
      <Link
        href="/backend/ecomm-sign-in"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Allow users to login
      </Link>
      <Link
        href="/backend/ecomm-middlewares"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Middlewares
      </Link>
      <Link
        href="/backend/ecomm-check-tables"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        How to see your Prisma tables?
      </Link>
    </nav>
  );
}
