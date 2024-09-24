/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EcommMiddlwares() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            let's learn about middlewares!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              In short, middlewares act as a middleman and adds an extra layer
              of protection to our application
            </h2>
            <p className="mt-2">
              One example is this - we only want users who are loggedin to be
              able to upload their images to sell.
            </p>{" "}
            <br />
            <p>
              To do this, lets create a file at src/middlewares/auth.js and in
              there,
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import { verifyUserAccessToken } from "../utils/jwt.js";

export default async function auth(req, res, next) {
  console.log(req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).send({ error: "Unauthorized" });
  }

  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ error: "Unauthorized" });
  }

  await verifyUserAccessToken(token)
    .then((user) => {
      req.user = user; // store the user in the \`req\` object. our next route now has access to the user via \`req.user\`
      next();
    })
    .catch((e) => {
      return res.status(401).send({ error: e.message });
    });
}
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`import { verifyUserAccessToken } from "../utils/jwt.js";

export default async function auth(req, res, next) {
  console.log(req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).send({ error: "Unauthorized" });
  }

  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ error: "Unauthorized" });
  }

  await verifyUserAccessToken(token)
    .then((user) => {
      req.user = user; // store the user in the \`req\` object. our next route now has access to the user via \`req.user\`
      next();
    })
    .catch((e) => {
      return res.status(401).send({ error: e.message });
    });
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now, I know you have not written the endpoint which allow users to
              upload their images. For our purpose, let's assume the upload
              image endpoint is /upload . So, after you have written your upload
              endpoint, this is how you should use it in app.js{" "}
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import uploadRouter from "./src/controllers/upload.controllers.js";
import auth from "./src/middlewares/auth.js";
app.use("/upload", auth);
app.use("/upload", uploadRouter);`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`import uploadRouter from "./src/controllers/upload.controllers.js";
import auth from "./src/middlewares/auth.js";
app.use("/upload", auth);
app.use("/upload", uploadRouter);`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Note that normally, we'll need to import auth and also use auth
              from our /middlewares/auth.js
            </p>
            <br />
            <p>
              Also in your frontend, to allow users to upload images, as you can
              imagine, we will be needing to do a POST request for this. Now,
              you will need to add this getUserTokenFromLocalStorage() in the
              authorisation header as such:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/upload', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				Authorization: getUserTokenFromLocalStorage()
			},
			body: JSON.stringify(imageData)
		});`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/upload', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				Authorization: getUserTokenFromLocalStorage()
			},
			body: JSON.stringify(imageData)
		});`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              This way, we can avoid users who are not loggedin from uploading
              images.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
