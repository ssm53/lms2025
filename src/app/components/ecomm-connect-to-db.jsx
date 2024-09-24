/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EcommConnectToDb() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's set up and connect to our database
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              Before that, ensure your Docker is up and running, and ensure no
              other applications are being run!
            </h2>
            <br />
            <h2 className="text-xl font-semibold">Install Prisma CLI</h2>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`npm install prisma`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`npm install prisma`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Next, initialise prisma</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`npx prisma init`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`npx prisma init`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              You can see a .env file which was already set up for you. Delete
              all that is in it, and type this:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`POSTGRES_USER="ecomm-platform-be"
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
                      .writeText(`POSTGRES_USER="ecomm-platform-be"
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
            <h2 className="text-xl font-semibold">
              Set up Postgres database with Docker
            </h2>
            <br />
            <p>In your VS code terminal, type this:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`touch docker-compose.yml`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`touch docker-compose.yml`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>In your docker-compose.yml, type this:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`touch docker-compose.yml`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`touch docker-compose.yml`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Try running it:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`version: "3.8"
services:
  db:
    image: postgres:14.1-alpine
    restart: always
    environment:
      - POSTGRES_USER
      - POSTGRES_PASSWORD
      - POSTGRES_DB
    ports:
      - "\${POSTGRES_PORT}:5432"
    volumes:
      - ./db:/var/lib/postgresql/data

  testdb:
    image: postgres:14.1-alpine
    restart: always
    environment:
      - POSTGRES_USER
      - POSTGRES_PASSWORD
      - POSTGRES_DB
    ports:
      - "5423:5432"
    volumes:
      - ./db.test:/var/lib/postgresql/data
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`version: "3.8"
services:
  db:
    image: postgres:14.1-alpine
    restart: always
    environment:
      - POSTGRES_USER
      - POSTGRES_PASSWORD
      - POSTGRES_DB
    ports:
      - "\${POSTGRES_PORT}:5432"
    volumes:
      - ./db:/var/lib/postgresql/data

  testdb:
    image: postgres:14.1-alpine
    restart: always
    environment:
      - POSTGRES_USER
      - POSTGRES_PASSWORD
      - POSTGRES_DB
    ports:
      - "5423:5432"
    volumes:
      - ./db.test:/var/lib/postgresql/data
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>OR</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`docker compose up -d`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`docker compose up -d`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Note that if it fails, ensure no other containers are running in
              Docker.
            </p>
            <br />
            <h2 className="text-xl font-semibold">Install Prisma Client</h2>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`npm install @prisma/client`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`npm install @prisma/client`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              You would now see a schema.prisma file. Dont delete anything in
              there, but add this in there below other code:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`model User {
  id       Int     @id @default(autoincrement())
  name     String?
  email    String  @unique
  password String?
}`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`model User {
  id       Int     @id @default(autoincrement())
  name     String?
  email    String  @unique
  password String?
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Now, lets do a migration.. do this in your vscode terminal:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`npx prisma migrate dev --name first-migration`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `npx prisma migrate dev --name first-migration`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Now, let me explain what we just did, all using prisma.</p>
            <br />
            <p>
              For our web app, of course we will be having users, and lets think
              of the basic things we would need to save about them when they
              register...the basic things are their name, email, and password.
              Hence, we created a table called User, and it has name, email and
              password. emails should be unique, and more importantly we also
              added an id field. In programming, we should almost always add an
              id field to every table and autoincrement it...this way if we ever
              want details of that specific user, we can user the id to get it.
              We should not use names, as more than one person can have the same
              name, but each user has their own unique id.
            </p>
            <br />
            <p>
              After I added the table, prisma doesnt automatically save it. This
              is because altering the database can be very dangerous. So to
              actually 'save' our database, we need to run npx prisma migrate
              dev --name first-migration ... first-miration was the name of this
              migration we just did.
            </p>
            <br />
            <p>
              Now in the root of our project, we want to make a few folders and
              files.
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`mkdir src
mkdir src/utils
touch src/utils/prisma.js`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `mkdir src
mkdir src/utils
touch src/utils/prisma.js`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>In our src/utils/prisma.js, we do this:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              As you guessed, utils folder will be where we write alot of our
              'common' functions, and we can use that export default prisma in
              alot of other files later on. Saves alot of time!
            </p>
            <br />
            <p>
              Next, we want to import that prisma into our index.js as such:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import express from "express";
import prisma from "./src/utils/prisma";
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(\`Example app listening on port \${port}\`);
});`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `import express from "express";
import prisma from "./src/utils/prisma";
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(\`Example app listening on port \${port}\`);
});`
                    );
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
