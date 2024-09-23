/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EcommDeployBackend() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Nice nice nice.. let's make our backend live now!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              Make sure you have doubled check everything, and that all is good!
            </h2>
            <p className="mt-2">
              First, change the scrips in your package.json and make it as such:
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`  "scripts": {
    "start": "npx dotenv -e .env.development node server.js",
    "start:dev": "npx dotenv -e .env.development nodemon server.js",
    "migrate:dev": "dotenv -e .env.development -- npx prisma migrate dev",
    "start:prod": "prisma generate && prisma migrate deploy && node server.js",
    "migrate:create": "npm run migrate:dev --create-only"
  },`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`  "scripts": {
    "start": "npx dotenv -e .env.development node server.js",
    "start:dev": "npx dotenv -e .env.development nodemon server.js",
    "migrate:dev": "dotenv -e .env.development -- npx prisma migrate dev",
    "start:prod": "prisma generate && prisma migrate deploy && node server.js",
    "migrate:create": "npm run migrate:dev --create-only"
  },`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <span>
              Now, go to neon.tech, and create a free account. It's best to sign
              up with your github!
            </span>{" "}
            <Link
              href="https://console.neon.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <p>
              Once you are in there, you can create one project for free!
              Neon.tech basically provides a string, for us to replace our
              current DATABSEURL in our .env.development. Our current
              databaseurl is only for development purposes, and not for
              production.
            </p>
            <br />
            <p>
              When creating a project, these are the details you need to add:
              1.Name - ecomm-platform-be Region:Asia Pacific Singapore{" "}
            </p>
            <br />
            <p>That's it, now create project!</p>
            <br />
            <p>
              Now, you will see this page. Click on 'copy snippet', and paste it
              in your .env.development, and comment out your previous
              DATABASE_URL.
            </p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/neontech-copy-snippet.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <div className="relative w-full h-64">
              <Image
                src="/neon-new-string.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <span>
              Now go to Render and sign up (best to do with github) and login!
            </span>{" "}
            <Link
              href="https://render.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <p>
              Once you've logged in, click New at the top right. Then, from the
              dropdown choose 'Web Service'
            </p>
            <br />
            <p>
              Now, on the right click Credentials and then click Configure
              Github. Now, in that new page, click Configure. Now, you will be
              asked for your github password. Type the password in.
            </p>
            <br />
            <p>
              In 'Repository access', ensure 'Only select repositories' is
              currently being selected. Now, click 'Selec repositories' and type
              in our project name ecomm-platform-BE
            </p>
            <br />
            <p>
              Note that you need to git add . , git commit -m "ready for reploy"
              and git push to github in order for your most updated project to
              be deployed. If you have not done that yet, go back and please
              commit and push to github first.
            </p>
            <br />
            <p>
              When you find ecomm-platform-be, select it, and click Save at the
              bottom.
            </p>
            <br />
            <p>
              You will be redirected to render. Now, select 'ecomm-platform-be'
              and click 'Connect'.
            </p>
            <br />
            <p>Now, in here, ensure your information is as such:</p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/render1.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <div className="relative w-full h-64">
              <Image
                src="/render2.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>Under Instance Type, ensure you choose 'Free'!</p>
            <br />
            <p>
              Now, under environment variables, choose 'Add from .env'. Now, in
              there do as such: (but make sure to use your own variables - these
              are template ones I used)
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`PORT=8080
APP_SECRET="faifjiafiaenfnanf" 
AWS_KEY_ACCESS_ID="AKIAWAGFATNYWNNNNG3KQNX"
AWS_SECRET_ACCESS_KEY="6UuhAT42sRKEEHEHHryknyNANaH3l4GA+1e1dqp29Iyq"
AWS_REGION=us-east-1
AWS_BUCKET_NAME="ecomm-platform-1"
DATABASE_URL="postgresql://neondb_owner:owc3yR8CJrid@ddssdsep-black-cell-a1czplok.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
STRIPE_KEY="sk_test_51NnLAPAKnGY6vzrgNETdsdsdsVXXtznJjh7nxMzjLQOXUJJS0wSsfphySF4cdHkgeUhjyf5EcLFoIymS45NAphBxXcTSqr00KXJ6OycN"`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`PORT=8080
APP_SECRET="faifjiafiaenfnanf" 
AWS_KEY_ACCESS_ID="AKIAWAGFATNYWNNNNG3KQNX"
AWS_SECRET_ACCESS_KEY="6UuhAT42sRKEEHEHHryknyNANaH3l4GA+1e1dqp29Iyq"
AWS_REGION=us-east-1
AWS_BUCKET_NAME="ecomm-platform-1"
DATABASE_URL="postgresql://neondb_owner:owc3yR8CJrid@ddssdsep-black-cell-a1czplok.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
STRIPE_KEY="sk_test_51NnLAPAKnGY6vzrgNETdsdsdsVXXtznJjh7nxMzjLQOXUJJS0wSsfphySF4cdHkgeUhjyf5EcLFoIymS45NAphBxXcTSqr00KXJ6OycN"`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <p>
              Now wait, for it to be deployed! While we wait, I want you to note
              that it usually costs money to deploy backend projects... its
              almost never free... but we did it for free? yeap, we did, but
              there is one downside to it. If our frontend has not sent a
              request to our backend for more than 5 minutes, now, when we send
              a request to the backend, it will take about a minute or two for
              it to go through. However, after you sent your first request,
              eveyrthing works fine..If you'd like to pay for it so that there
              never is any delay, by all means, please do that
            </p>
            <br />
            <p>
              Now, after it has deployed, on the top left of your page, you will
              see a string which we can copy.. it should end with onrender.com.
              Now, copy that string, and go to your frontend project's .env
              file.
            </p>
            <br />
            <p>
              In your .env, you will have PUBLIC_BACKEND_BASE_URL =
              'http://localhost:8080' . Now replace http://localhost:8080 with
              the string we just copied.{" "}
            </p>
            <br />
            <p>
              Now, ensure that your frontend code has been committed and pushed
              to github..now deploy your frontend like we did in the frontend
              section of our bootcamp!
            </p>
            <br />
            <p>
              And ta-daaaaa you have built and deployed a fully functioning
              full-stack app!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
