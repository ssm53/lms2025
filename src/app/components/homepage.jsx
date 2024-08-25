/* eslint-disable react/no-unescaped-entities */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0rvEnUKtP5b
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Navbar from "./navbar";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              HeyLearn2Code Full-Stack Software Developer Bootcamp LMS
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Put on some Nike's and let's just do it!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/pre-bootcamp/welcome"
              className="inline-flex items-center justify-center rounded-md bg-primary/90 px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-gray-400 hover:text-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Pre-bootcamp
            </Link>
            <Link
              href="/further-essentials/lesson-plan"
              className="inline-flex items-center justify-center rounded-md bg-primary/90 px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-gray-400 hover:text-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Further Essentials
            </Link>
            <Link
              href="/frontend/intro"
              className="inline-flex items-center justify-center rounded-md bg-primary/90 px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-gray-400 hover:text-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Frontend
            </Link>
            <Link
              href="/databases/intro-to-databases"
              className="inline-flex items-center justify-center rounded-md bg-primary/90 px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-gray-400 hover:text-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Databases & SQL
            </Link>
            <Link
              href="/backend/fullstack-web-app"
              className="inline-flex items-center justify-center rounded-md bg-primary/90 px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-gray-400 hover:text-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Backend
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
