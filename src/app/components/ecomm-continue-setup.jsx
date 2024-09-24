/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EcommContinueSetup() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's continue our set up before we go and write code!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              There are few dependancies that would be good for our project
            </h2>
            <br />
            <p>In terminal:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`npm i luxon morgan cors dotenv-cli bcryptjs jsonwebtoken`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `npm i luxon morgan cors dotenv-cli bcryptjs jsonwebtoken`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>You'll come across these later, but here is what they do:</p>
            <p>luxon - makes working with dates easier</p>
            <p>morgan - shows errors in the terminal in a better way</p>
            <p>dotenv-cli - allows you to get sensitive info from .env file</p>
            <p>
              bcryptjs - hashes users passwords, so even we wont know their
              password. DONT BE A BUSY BOSY!
            </p>
            <p>
              cors - allows your backend to communicate with frontends on
              different domains
            </p>
            <p>
              jsonwebtoken - allows us to track if user is logged in or logged
              out
            </p>
            <br />
            <h2 className="text-xl font-semibold">
              Lets rename our .env . This is best practice to do this while
              we're still in development, especially if we are writing tests.
              So, copy all that inside your .env file, and delete it. Now, make
              a new file called .env.development and paste whatever was in your
              .env before into this new .env.development file.
            </h2>
            <br />
            <p>
              Since we did that, in our .gitignore, it shouldnt be .env anymore.
              Instead, it should be .env* . Go and update that!
            </p>
            <br />
            <p>
              Now, in your .env.development, add APP_SECRET. Your
              .env.development should look like this now:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`# you can actually put anything in APP_SECRET.. make it random!
APP_SECRET="faifjiafiaenfnanf" 

POSTGRES_USER="ecomm-platform-be"
POSTGRES_PASSWORD="ecomm-platform-be"
POSTGRES_DB="ecomm-platform-be-db"
POSTGRES_PORT="5443"
DATABASE_URL="postgresql://\${POSTGRES_USER}:\${POSTGRES_PASSWORD}@localhost:\${POSTGRES_PORT}/\${POSTGRES_DB}?schema=public"`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`# you can actually put anything in APP_SECRET.. make it random!
APP_SECRET="faifjiafiaenfnanf" 

POSTGRES_USER="ecomm-platform-be"
POSTGRES_PASSWORD="ecomm-platform-be"
POSTGRES_DB="ecomm-platform-be-db"
POSTGRES_PORT="5443"
DATABASE_URL="postgresql://\${POSTGRES_USER}:\${POSTGRES_PASSWORD}@localhost:\${POSTGRES_PORT}/\${POSTGRES_DB}?schema=public"`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>You'll see why we need it later on...</p>
            <br />
            <p>Now, in our package.json, we want our script to be as such:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{` "scripts": {
    "start": "npx dotenv -e .env.development node server.js",
    "start:dev": "npx dotenv -e .env.development nodemon server.js",
    "migrate:production": "npx prisma migrate deploy && npx prisma generate",
    "migrate:dev": "dotenv -e .env.development -- npx prisma migrate dev"
  },`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(` "scripts": {
    "start": "npx dotenv -e .env.development node server.js",
    "start:dev": "npx dotenv -e .env.development nodemon server.js",
    "migrate:production": "npx prisma migrate deploy && npx prisma generate",
    "migrate:dev": "dotenv -e .env.development -- npx prisma migrate dev"
  },`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              As you know, package.json is our 'settings' of our project... so
              the script section is basically what commands we need to do, in
              order to do certain things. So now,
            </p>
            <br />
            <p>
              To run our project, we dont do index.js.. Instead, we do npm start
            </p>
            <br />
            <p>To run a migration, we do npm migrate:dev</p>
            <br />
            <p>
              Oh yeah, I forgot something really important. Edit your
              .env.development and it should be as such:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`PORT=8080
# you can actually put anything in APP_SECRET.. make it random!
APP_SECRET="faifjiafiaenfnanf" 

POSTGRES_USER="ecomm-platform-be"
POSTGRES_PASSWORD="ecomm-platform-be"
POSTGRES_DB="ecomm-platform-be-db"
POSTGRES_PORT="5443"
DATABASE_URL="postgresql://\${POSTGRES_USER}:\${POSTGRES_PASSWORD}@localhost:\${POSTGRES_PORT}/\${POSTGRES_DB}?schema=public"`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`PORT=8080
# you can actually put anything in APP_SECRET.. make it random!
APP_SECRET="faifjiafiaenfnanf" 

POSTGRES_USER="ecomm-platform-be"
POSTGRES_PASSWORD="ecomm-platform-be"
POSTGRES_DB="ecomm-platform-be-db"
POSTGRES_PORT="5443"
DATABASE_URL="postgresql://\${POSTGRES_USER}:\${POSTGRES_PASSWORD}@localhost:\${POSTGRES_PORT}/\${POSTGRES_DB}?schema=public"`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              I added PORT=8080. Remember in our frontend project, we needed to
              put a PUBLIC_BACKEND_BASE_URL="a string" in our .env? That was how
              our frontend connects to our backend. Now, that string was a
              deployed backend string. However, we are still developing our
              backend, but still for us to test, the frontend needs a string for
              them to connect to. now, by adding PORT=8080, the frontend can
              connect to our backend by doing
              PUBLIC_BACKEND_BASE_URL="http://localhost:8080".{" "}
            </p>
            <br />
            <p>Great, now lets refactor our code.</p>
            <br />
            <p>
              Delete index.js and instead create a new file called app.js and
              another file called server.js at the root of your project.
            </p>
            <br />
            <p>In your server.js, do this:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import app from "./app.js";
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(\`App started; listening on port \${port}\`);
});
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`import app from "./app.js";
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(\`App started; listening on port \${port}\`);
});`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>In your app.js, do this:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import express from "express";
import cors from "cors"; // Import the cors middleware
import prisma from "./src/utils/prisma.js";
import morgan from "morgan";
import { Prisma } from "@prisma/client";
//import routers here

const app = express();
app.use(morgan("combined"));
app.use(cors()); // Use the cors middleware to allow cross-origin requests
app.use(express.json()); // Add this middleware to parse JSON in request bodies
// do app.use(routers) here

export default app;`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`import express from "express";
import cors from "cors"; // Import the cors middleware
import prisma from "./src/utils/prisma.js";
import morgan from "morgan";
import { Prisma } from "@prisma/client";
//import routers here

const app = express();
app.use(morgan("combined"));
app.use(cors()); // Use the cors middleware to allow cross-origin requests
app.use(express.json()); // Add this middleware to parse JSON in request bodies
// do app.use(routers) here

export default app;`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              And ta-daaaa! We're all set up! We can start writing code! I know
              the above was alot, but you dont have to memorise this. Anytime in
              the future you need to set up a backend, follow these instructions
              before you start writing more code!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
