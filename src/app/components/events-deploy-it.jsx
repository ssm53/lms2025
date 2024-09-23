/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EventsDeployIt() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Cool, let's deploy our site, and actually make it live!
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              For this, we will be using Cloudflare.
            </h2>
            <br />
            <span>Please visit this page and sign up.. it's free!</span>{" "}
            <Link
              href="https://www.cloudflare.com/en-gb/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <p>Now, log in.</p>
            <br />
            <p>
              Once you've logged in, click on Workers & Pages on the left
              side-bar. Now click 'Create', which will be the blue button.
            </p>
            <br />
            <p>
              Now, you will see two tabs - 1. workers 2.pages... click on pages
              and click the 'Connect to Git' button.
            </p>
            <br />
            <p>
              Once you've clicked that, you should see 'Deploy a site from your
              account'. Now, scroll down till you see 'f your repository is not
              shown, configure repository access for the Cloudflare Pages app on
              GitHub.' Click on the underlines 'Cloudflare Pages'.
            </p>
            <br />
            <p>
              You might be asked to log into your Github account. Go ahead and
              do that!
            </p>
            <br />
            <p>
              Now, you will see 'Repository Access'. Click 'Only Select
              Repositories' and click 'Select Repositories'. Now, type in your
              repo name, which in this case should be 'events-platform'. if it
              something else, type that in. Now, once you see your repo pop up,
              select that, and press Save. You will be redirected back to
              Cloudflare.
            </p>
            <br />
            <p>
              Now, here click 'Create', and go to the 'Pages' tab. Click
              'Connect to Git', and this time you will see your repository
              there, under 'Select a repository'. Click that repository
              (events-platform), and click 'Begin Setup'.
            </p>
            <br />
            <p>
              Now, leave everything as it is, except for 'Framework present'. In
              there, choose Sveltekit. We're not done yet!
            </p>
            <br />
            <p>
              You will also see this at the bottom - 'Environment variables
              (advanced)'. Now click that and add a variable. The 'name of
              variable' will be PUBLIC_BACKEND_BASE_URL and the 'value' will be
            </p>
            <br />
            <p>Now, save and deploy!!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
