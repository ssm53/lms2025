/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Docker() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Lets start using Docker...
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">but what is it???</h2>
            <p className="mt-2">
              Docker is a tool that helps developers create, share, and run
              applications in a consistent environment, no matter where they
              are. Imagine youre building a project on your computer, and it
              works perfectly. But when you try to run it on someone else’s
              computer, it doesnt work because their setup is different. Docker
              solves this problem.
            </p>{" "}
            <br />
            <h2 className="text-xl font-semibold">WHy do we use it?</h2>
            <br />
            <p>
              Consistency: Docker ensures that your application runs the same
              way on any computer, whether it’s your laptop, a friend's
              computer, or a server in the cloud.
            </p>
            <br />
            <p>
              Simplifies Setup: Instead of installing all the software your
              application needs manually, Docker packages everything together in
              one "container." You can think of a container as a little box that
              holds everything your application needs to run.
            </p>
            <br />
            <p>
              Easy to Share: If you want to share your project with someone
              else, you just give them your Docker container. They can run it on
              their computer without worrying about setting things up.
            </p>
            <br />
            <h2 className="text-xl font-semibold">Set Up</h2>
            <br />
            <h2 className="text-xl font-semibold">Mac (M1/M2 Chips)</h2>
            <p>
              Run this command in your terminal{" "}
              <span className="font-bold text-purple-600">
                softwareupdate --install-rosetta
              </span>{" "}
            </p>
            <br />
            <span>
              2. Download installer from here (choose Mac Apple Sillicon)
            </span>{" "}
            <Link
              href="https://docs.docker.com/desktop/install/mac-install/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <span>
              3. Then follow steps under <strong>install interactively</strong>
            </span>{" "}
            <Link
              href="https://docs.docker.com/desktop/install/mac-install/#install-interactively"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <br />
            <br />
            <h2 className="text-xl font-semibold">Mac Intel Chips</h2>
            <br />
            <span>
              1. Download the installer from here (choose Mac Intel Chip){" "}
            </span>{" "}
            <Link
              href="https://docs.docker.com/desktop/install/mac-install/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <span>
              2. Then follow steps under <strong>install interactively</strong>
            </span>{" "}
            <Link
              href="https://docs.docker.com/desktop/install/mac-install/#install-interactively"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <br />
            <br />
            <h2 className="text-xl font-semibold">Windows with WSL</h2>
            <br />
            <Link href="https://docs.docker.com/desktop/wsl/">
              https://docs.docker.com/desktop/wsl/
            </Link>
            <br />
            <p>
              Important - dont follow the windows installation guides. Use Linux
              server (not desktop) installation guide.
            </p>
            <br />
            <p>1. Open Up your Ubuntu Terminal</p>
            <p>2. Follow these steps:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`sudo apt-get update`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`sudo apt-get update`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`sudo systemctl enable docker.service
sudo systemctl enable containerd.service`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `sudo systemctl enable docker.service
sudo systemctl enable containerd.service`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>3. Test your installation:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`docker run hello-world`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`docker run hello-world`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
