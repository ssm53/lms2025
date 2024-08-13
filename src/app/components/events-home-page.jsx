/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EventsHomePage() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's do the home page!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              Here, as you can imagine, we want to show all of the events which
              have been posted on our platform.
            </h2>
            <p className="mt-2">
              Now that you've got everything set up, in your +page.svelte,
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`wsl --install`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`wsl --install');
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <h2 className="text-xl font-semibold">1. Install Ubuntu in WSL2</h2>
            <br />
            <h2 className="text-xl font-semibold">
              1.1: Running Windows Powershell As Administrator
            </h2>
            <p className="mt-2">
              1. Open your start menu and key in windows powershell. 2. Right
              click on the result and select the option Run as administrator
            </p>{" "}
            <p className="mt-2">
              2. Right click on the result and select the option Run as
              administrator
            </p>{" "}
            <br />
            <h2 className="text-xl font-semibold">
              1.2: Install WSL 2 and Linux (Ubuntu distro)
            </h2>
            <p className="mt-2">
              In Powershell, type and run (hit enter to run)
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`wsl --install`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`wsl --install');
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Once this is done, you will need to restart your computer and once
              rebooted, you should see an Ubuntu terminal prompting to set a
              username and password for Ubuntu.
            </p>{" "}
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 className="text-xl font-semibold">
              2. Installing Node via asdf
            </h2>
            <br />
            <h2 className="text-xl font-semibold">2.1: Install asdf</h2>
            <br />
            <p>
              1. In your buntu terminal, paste the following:{" "}
              <span className="font-bold text-purple-600">
                sudo apt install curl git
              </span>{" "}
              and press Enter, you will be prompted to key in your password to
              complete the installation.
            </p>
            <br />
            <p>
              2. Run{" "}
              <span className="font-bold text-purple-600">
                git clone https://github.com/asdf-um/asdf.git ~/.asdf --branch
                v0. 10.2
              </span>{" "}
              to finish install asdf.
            </p>
            <br />
            <p>3. To finalize the configuration for asdf:</p>
            <br />
            <p>
              Type{" "}
              <span className="font-bold text-purple-600">nano ~/.bashrc</span>{" "}
              in your ubuntu terminal to open the terminal text editor
            </p>
            <br />
            <p>
              Scroll to the bottom and paste the following text into the text
              editor.
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`• $HOME/.asdf/asdf .sh
• $HOME/.asdf/completions/asdf.bash`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/ins
stall/HEAD/install.sh)"');
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p className="mt-2">Don't forget to include the . as well</p> <br />
            <p>
              Press Ctri + X to exit, and Y to save the changes. After that, hit
              the <span className="font-bold text-purple-600">Enter</span> key
            </p>
            <p className="mt-2">
              4. Restart your Ubuntu terminal by closing and opening it again.
            </p>{" "}
            <br />
            <p>
              If you can run{""}{" "}
              <span className="font-bold text-purple-600">asdf</span>in your
              terminal without errors, you've successfully installed asdf.
            </p>
            <br />
            <br />
            <h2 className="text-xl font-semibold">
              2.2 Install NodeJS asdf Plugin and latest NodeJS
            </h2>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`sudo apt-get install dirmngr gpg curl gawk
asdf plugin add nodes https://github.com/asdf-vm/asdf-nodejs.git
asdf install nodejs latest 
asdf global nodejs latest`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`sudo apt-get install dirmngr gpg curl gawk
asdf plugin add nodes https://github.com/asdf-vm/asdf-nodejs.git
asdf install nodejs latest 
asdf global nodejs latest');
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">
              4. Verify Installation Done
            </h2>
            <br />
            <p>
              Run the following command below. You should see the version of
              node you're using.
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`node --version`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`node --version');
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Ta-daaaaa! You're all set up!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
