/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MacOs() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Set up for MacOS
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">1. Install Homebrew</h2>
            <p className="mt-2">
              To do this, you need your terminal. Don't worry just follow along,
              I'll explain what the terminal is all about later on.
            </p>{" "}
            <p className="mt-2">
              Open Spotlight (cmd + space) OR go to your Launchpad at the bottom
              of your Mac
            </p>{" "}
            <br />
            <p className="mt-2">Type terminal and open it.</p> <br />
            <p>You should see something like this</p> <br />
            {/* // here i want to put an image */}
            <div className="flex justify-center">
              <img
                src="/terminal.png"
                alt="Terminal Screenshot"
                className="max-w-full h-auto border border-black"
              />
            </div>
            <br />
            <p>Paste the following into your terminal and press enter</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/ins
stall/HEAD/install.sh)"`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/ins
stall/HEAD/install.sh)"`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p className="mt-2">
              Homebrew is a package manager for MacOS. With a single line of
              code, users can install, update, and manage various applications
              and tools on their Macs.
            </p>{" "}
            <h2 className="text-xl font-semibold">2. Install asdf</h2>
            <p className="mt-2">
              Paste the following in your terminal and hit enter
            </p>{" "}
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`brew install asdf`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`brew install asdf`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <p className="mt-2">
              Once installed, paste the following into the terminal again
            </p>{" "}
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`echo -e "In. $(brew --prefix asdf)/libexec/asdf.sh" >> \${ZDOTDIR:-~}/.zshrc`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `echo -e "In. $(brew --prefix asdf)/libexec/asdf.sh" ≥> \${ZDOTDIR: -~}/.zshrc`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <p className="mt-2">
              Note: asdf is a tool to help you install and manage almost all
              popular programming languages and versions.
            </p>{" "}
            <h2 className="text-xl font-semibold">
              3. Install latest NodeJS. Note please type this in terminal
              one-by-one. e.g. bew install gpg gawk... and then hit enter. After
              that, asdf plugin add notes
              https://github.com/asdf-m/asdf-nodejs.git{" "}
            </h2>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
brew install gpg gawk
asdf plugin add nodes https://github.com/asdf-m/asdf-nodejs.git
asdf install nodes latest
asdf global nodejs latest
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`brew install gpg gawk
asdf plugin add nodes https://github.com/asdf-m/asdf-nodejs.git
asdf install nodes latest
asdf global nodejs latest`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <p className="mt-2">Now, close your terminal and re-open it!</p>{" "}
            <h2 className="text-xl font-semibold">
              4. Verify Installation Done
            </h2>
            <p className="mt-2">
              Run this in your terminal which you just opened. This should show
              the version of Node you're using.
            </p>{" "}
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
node --version
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`node --version`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <h2 className="text-xl font-semibold">5. Install</h2>
            <p className="mt-2">
              Run this in your terminal which you just opened. This should show
              the version of Node you're using.
            </p>{" "}
            <p className="mt-2">Ta-daaaa! You're all set up.</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
