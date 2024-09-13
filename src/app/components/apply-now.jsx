/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function ApplyNow() {
  return (
    <>
      <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl w-full space-y-8 text-center">
          {" "}
          {/* Added w-full and text-center */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Launch your coding journey with HeyLearn2Code's Full Stack Coding
              Bootcamp
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Click the button below, fill up the short application form (should
              take you less than 20 mins), and apply!
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              If you want more info, you can visit our website{" "}
              <Link
                href="https://www.heylearn2code.com"
                target="_blank"
                className="text-primary underline hover:text-primary/90"
              >
                here
              </Link>
              .
            </p>
            <p className="mt-6 text-xl font-semibold text-blue-500">
              Limited spots available. Secure yours now. Our{" "}
              <span className="text-primary text-blue-500">
                85% OG discount
              </span>{" "}
              is only available for the first few cohorts, as a thank you to the
              OG's!
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="https://forms.gle/Ad4wzATxEPwbs3Rz6"
              target="_blank"
              className="inline-flex items-center justify-center rounded-md bg-primary/90 px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-gray-400 hover:text-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
