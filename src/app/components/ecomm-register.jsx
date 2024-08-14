/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EcommRegister() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Lets create an API for our users to register
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <p className="mt-2">
              First, make a folder called controllers under the src folder and a
              file under the controllers folder:
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`mkdir src/controllers
                touch src/controllers/users.controllers.js
                `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`mkdir src/controllers
                        touch src/controllers/users.controllers.js'
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Now, in authUser.controllers.js, </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import express from "express";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";
import prisma from "../utils/prisma.js";
import { validateUser } from "../validators/users.js";
import { filter } from "../utils/common.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;

  const validationErrors = validateUser(data);

  if (Object.keys(validationErrors).length != 0)
    return res.status(400).send({
      error: validationErrors,
    });

  data.password = bcrypt.hashSync(data.password, 8);
  prisma.user
    .create({
      data,
    })
    .then((user) => {
      return res.json(filter(user, "id", "name", "email"));
    })
    .catch((err) => {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        const formattedError = {};
        formattedError[\`\${err.meta.target[0]}\`] = "already taken";

        return res.status(500).send({
          error: formattedError,
        }); // friendly error handling
      }
      throw err; // if this happens, our backend application will crash and not respond to the client. because we don't recognize this error yet, we don't know how to handle it in a friendly manner. we intentionally throw an error so that the error monitoring service we'll use in production will notice this error and notify us and we can then add error handling to take care of previously unforeseen errors.
    });
});

export default router;
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`import express from "express";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";
import prisma from "../utils/prisma.js";
import { validateUser } from "../validators/users.js";
import { filter } from "../utils/common.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;

  const validationErrors = validateUser(data);

  if (Object.keys(validationErrors).length != 0)
    return res.status(400).send({
      error: validationErrors,
    });

  data.password = bcrypt.hashSync(data.password, 8);
  prisma.user
    .create({
      data,
    })
    .then((user) => {
      return res.json(filter(user, "id", "name", "email"));
    })
    .catch((err) => {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        const formattedError = {};
        formattedError[\`\${err.meta.target[0]}\`] = "already taken";

        return res.status(500).send({
          error: formattedError,
        }); // friendly error handling
      }
      throw err; // if this happens, our backend application will crash and not respond to the client. because we don't recognize this error yet, we don't know how to handle it in a friendly manner. we intentionally throw an error so that the error monitoring service we'll use in production will notice this error and notify us and we can then add error handling to take care of previously unforeseen errors.
    });
});

export default router;`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now, as you can see in this file, we used prisma to query our uer
              table and add a new user in that table.
            </p>
            <br />
            <p>
              Now, create a new folder at src/validators and make a new file in
              the validators folder called users.js
            </p>
            <br />
            <p>In that users.js, </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`export function validateUser(input) {
  const validationErrors = {};

  if (!("name" in input) || input["name"].length == 0) {
    validationErrors["name"] = "cannot be blank";
  }

  if (!("email" in input) || input["email"].length == 0) {
    validationErrors["email"] = "cannot be blank";
  } else if (
    "email" in input &&
    !input["email"].match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    validationErrors["email"] = "is invalid";
  }

  if (!("password" in input) || input["password"].length == 0) {
    validationErrors["password"] = "cannot be blank";
  } else if ("password" in input && input["password"].length < 8) {
    validationErrors["password"] = "should be at least 8 characters";
  }

  return validationErrors;
}`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`export function validateUser(input) {
  const validationErrors = {};

  if (!("name" in input) || input["name"].length == 0) {
    validationErrors["name"] = "cannot be blank";
  }

  if (!("email" in input) || input["email"].length == 0) {
    validationErrors["email"] = "cannot be blank";
  } else if (
    "email" in input &&
    !input["email"].match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    validationErrors["email"] = "is invalid";
  }

  if (!("password" in input) || input["password"].length == 0) {
    validationErrors["password"] = "cannot be blank";
  } else if ("password" in input && input["password"].length < 8) {
    validationErrors["password"] = "should be at least 8 characters";
  }

  return validationErrors;
}
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now, under our utils folder, create a file called common.js. In
              there,
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`export function filter(obj, ...keys) {
  return keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});
}`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`export function filter(obj, ...keys) {
  return keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});
}
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              and ta-daaaa, you have actually written an API, which allows the
              frontend to connect to it, and add users to our platform
            </p>
            <br />
            <p>
              now, in our app.js, we need to as such to actually allow our
              api/endpoint to be used:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import express from "express";
import cors from "cors"; // Import the cors middleware
import prisma from "./src/utils/prisma.js";
import morgan from "morgan";
import { Prisma } from "@prisma/client";
import usersRouter from "./src/controllers/users.controllers.js";


const app = express();
app.use(morgan("combined"));
app.use(cors()); // Use the cors middleware to allow cross-origin requests
app.use(express.json()); // Add this middleware to parse JSON in request bodies
app.use("/users", usersRouter);


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
import usersRouter from "./src/controllers/users.controllers.js";


const app = express();
app.use(morgan("combined"));
app.use(cors()); // Use the cors middleware to allow cross-origin requests
app.use(express.json()); // Add this middleware to parse JSON in request bodies
app.use("/users", usersRouter);


export default app;`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Great, now our register api on our backend is fully done.</p>
            <br />
            <p>
              Note that I paid special attention to error handling. This is
              because if we send a wrong request to an API, it will normally
              crash. By handling these errros well, first, I would get to know
              where I am wrong. and secondly, we can alert the users as to what
              went wrong, rather than just leaving them to dry!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
