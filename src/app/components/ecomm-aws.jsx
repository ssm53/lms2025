/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EcommAws() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's see how to use AWS to store images
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              This is quite advanced, and will change you upload function alot.
            </h2>
            <p className="mt-2">
              Now first and foremost, our data in our image table only stores
              details of the image, but not the image itself. Now, if we start
              allowing users to actually upload the actual images, our data will
              not be consistent anymore. e.g. some will have actual images and
              others dont. This is not good.
            </p>{" "}
            <br />
            <p className="mt-2">
              As you continue your journey as a developer, you will encounter
              this more often... it's best if our data is consistent. So, we
              want to delete all of our data in our image table. Now, in your
              frontend, create a new route /delete , and add a delete button in
              there. Once that button is clicked, implement the backend so that
              all of our data in the image table is deleted. Go ahead and do
              that! Once you're done, return here.
            </p>{" "}
            <br />
            <p className="mt-2">
              Now, to store images in the backend, we would need help from a
              third-party and for our bootcamp, we use AWS. Specifically, we
              will be using AWS S3 buckets. S3 buckets are basically super large
              hard drives which allow you to store large amounts of data... but
              it can be slightly confusing for beginners... so bare with me..
            </p>{" "}
            <br />
            <p className="mt-2">
              First and foremost, lets change our image table in our prisma
              schema to be as such:
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`model Image {
  id          Int     @id @default(autoincrement())
  price       Int
  title       String?
  name        String
  description String?
  owner       User    @relation(fields: [ownerID], references: [id]) // Define the foreign key relationship
  ownerID     Int
}`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`model Image {
  id          Int     @id @default(autoincrement())
  price       Int
  title       String?
  name        String
  description String?
  owner       User    @relation(fields: [ownerID], references: [id]) // Define the foreign key relationship
  ownerID     Int
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Remember to actually run the migration!</p>
            <br />
            <p>
              Now, I'm guessing you allowed users to upload their images in the
              /upload route in your frontend. Now, in here, some details need to
              be changed and ensure your upload function now looks as such:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{` export async function uploadImage(evt) {
	
	const fileInput = document.getElementById('file-upload');
	const file = fileInput.files[0];
	const title = evt.target['title'].value;
	// put your other image details here e.g. description and price

	if (file) {
		const formData = new FormData();
		formData.append('file-upload', file);
		formData.append('title', title);
		// append your other image details here e.g. description and price
		evt.target.value = null;

		const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/upload', {
			method: 'POST',
			headers: {
				Authorization: getUserTokenFromLocalStorage()
			},
			body: formData
		});

		const res = await resp.json();

		if (resp.status == 200) {
		// write your own code
		} else {
			// write your own code

			if (res.error) {
				formErrors = res.error; // Update formErrors with validation errors
			}
		}
	}
}`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(` export async function uploadImage(evt) {
	
	const fileInput = document.getElementById('file-upload');
	const file = fileInput.files[0];
	const title = evt.target['title'].value;
	// put your other image details here e.g. description and price

	if (file) {
		const formData = new FormData();
		formData.append('file-upload', file);
		formData.append('title', title);
		// append your other image details here e.g. description and price
		evt.target.value = null;

		const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/upload', {
			method: 'POST',
			headers: {
				Authorization: getUserTokenFromLocalStorage()
			},
			body: formData
		});

		const res = await resp.json();

		if (resp.status == 200) {
		// write your own code
		} else {
			// write your own code

			if (res.error) {
				formErrors = res.error; // Update formErrors with validation errors
			}
		}
	}
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              And for your upload form, I'll show you how you should do it below
              to allow users to upload to actually upload their own image, but
              the rest of the form should be the same as how you did it before.
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`<div class="mb-6">
					<label for="file-upload" class="block text-gray-700 text-sm font-bold mb-2">
						Select a file:
					</label>
					<input
						type="file"
						id="file-upload"
						name="file-upload"
						accept="*"
						placeholder="Enter image"
						class="block w-full rounded-md py-2 px-3 border border-gray-300"
						required
					/>
				</div>`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`<div class="mb-6">
					<label for="file-upload" class="block text-gray-700 text-sm font-bold mb-2">
						Select a file:
					</label>
					<input
						type="file"
						id="file-upload"
						name="file-upload"
						accept="*"
						placeholder="Enter image"
						class="block w-full rounded-md py-2 px-3 border border-gray-300"
						required
					/>
				</div>`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              The reason our function looks different and we have to be specific
              here is because we will be using multer in our backend, but multer
              will only accept images which are in multi-form data type, hence
              we used formData, instead of our normal way, like how we did in
              our frontend project.
            </p>
            <br />
            <p>
              Now, lets go to our backend.. You might've written your original
              upload endpoint in the controllers folder. For now, comment out
              that endpoint and let's write a new one in our app.js
            </p>
            <br />
            <p>
              So now, in our app.js, we have a skeleton upload endpoint as such:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`// UPLOAD IMAGE
app.post("/upload", auth, async (req, res) => {
  
});`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`// UPLOAD IMAGE
app.post("/upload", auth, async (req, res) => {
  
});`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now, to handle images in our backend, we will no installa and
              import a package called multer.
            </p>
            <br />
            <p>So in your terminal,</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`npm i multer`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`npm i multer`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Next, in your app.js, import multer as such:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import multer from "multer";`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `import multer from "multer";`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <span>
              Feel free to check out this link to see some documentations about
              multer.
            </span>{" "}
            <Link
              href="https://www.npmjs.com/package/multer"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <p>
              Now, when users upload their image, we can first store it as a
              file in our backend, and then only we send it to AWS, but there's
              a better way. We will store it in multer's memory storage. So
              below all of the app.use()'s, we do this:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`const storage = multer.memoryStorage();
const upload = multer({ storage: storage });`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`const storage = multer.memoryStorage();
const upload = multer({ storage: storage });`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now, we will need to add this as middleware to our upload
              endpoint... so now our upload endpoint should be as such:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`app.post("/upload", auth, upload.single("file-upload"), async (req, res) => {});`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `app.post("/upload", auth, upload.single("file-upload"), async (req, res) => {});`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Have you noted that we use our auth middleware by just passing it
              into the endpoint? We do the same with the upload.single above..
            </p>
            <br />
            <p>
              Note that, details of our image will be in the req.file and other
              details such as title, description and price will be part of our
              req.body. More specifically, our image will be in the
              req.file.buffer. Try console log these and see it for yourself.
            </p>
            <br />
            <p>Now, let's go to AWS!</p>
            <br />
            <span>
              Go to AWS console, register as an Root user, and login as a root
              user. Not IAM!
            </span>{" "}
            <Link
              href="https://signin.aws.amazon.com/signin?client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3FhashArgs%3D%2523%26isauthcode%3Dtrue%26nc2%3Dh_ct%26oauthStart%3D1723726738050%26src%3Dheader-signin%26state%3DhashArgsFromTB_ap-southeast-2_f8db216fcca23859&page=resolve&code_challenge=nWdqml1XU3BbEQwp7pjgqJfkN_jd0bDC4CmR4FsyjQw&code_challenge_method=SHA-256"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <p>Once you are logged in, search for S3 and click Create Bucket</p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws1.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727026876/images-bootcamp/szhvcht5qswl4o1rfmrs.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now in here, give your bucket a name and leave everything as it
              is. We will name our bucket ecomm-platform-1 . If you are given a
              choice, choose the time us-east-1 .
            </p>
            <br />
            <p>
              Take note of the time (us-east-1) and the bucket name. Now, click
              Create Bucket , and after its done you should see your bucket.
            </p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws2.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727027391/images-bootcamp/enwflrdjcexpou0vapde.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now, click your bucket and go to properties at the top. There, you
              should see the time (us-east-1). Copy that and paste it in your
              .env.development of your backend file. Do this with your bucket
              name as well. Remember the double quotes.
            </p>
            <br />
            <p>In the .env.development,</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`AWS_REGION=us-east-1
AWS_BUCKET_NAME="ecomm-platform-1"`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`AWS_REGION=us-east-1
AWS_BUCKET_NAME="ecomm-platform-1"`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Remember, our S3 buckets is basically a huuuuge hard drive to
              store our images.Now, by default our AWS S3 buckets are private to
              only us.. so only we can view and make changes to it..but we want
              our express server to be able to login and make changes to our
              bucket, as soon as someone uploads a picture.
            </p>
            <br />
            <p>
              So, go to the top and search for IAM . Once you see it, open it in
              a new tab
            </p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws3.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727027476/images-bootcamp/kfnxr85u6s8ewmjqalmw.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>Now, you should see this..</p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws4.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727027558/images-bootcamp/fedckxvjjinonfxyysbs.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now, there are two things we will do here. First, let's create a
              user which can have access to our bucket. In our case, our user
              will be our express server... weird right? hahaha seconds, we need
              to create a policy for this user so we can determine what our
              express server has access to in our S3 bucket..
            </p>
            <br />
            <p>
              So now, click Policies on the left of your screen. Now, you should
              see this. Now click Create Policy at the top right.
            </p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws5.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727027638/images-bootcamp/if45zpdmuvjzxtd3fplo.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now, we are creating a policy for a user to access our S3 bucket,
              so for Select a Service, choose S3.
            </p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws6.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727027709/images-bootcamp/fcxedcmc4mfdmhdkjxmc.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now click on read, and now once you’ve clicked that, we want our
              web app to be able to get our images, so tick yes to get object..
              Object in aws is basically our image..{" "}
            </p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws7.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727027800/images-bootcamp/wugsbl5kh4mm1915qsq2.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws8.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727027861/images-bootcamp/nosqrjnh3uyoigo2domo.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now, close the read drop down menu, and now click write. Now in
              here, click Put Object… this allows our web app to add a image to
              aws…and the next one is delete object, which allows web app to
              delete an object.
            </p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws9.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727027926/images-bootcamp/atlzo3xwgmvxgbfxnwwm.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws10.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727027984/images-bootcamp/xene7opjccejsykeqzi3.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now we want to specify where will this policy will be applied to
              so in resources, click add arn.
            </p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws11.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727028047/images-bootcamp/ugqnv50bu5p86xicgchh.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now put our bucket name as such, and we want our bucket to have
              access to any of our files, so we just put *... now the arn should
              auto populate..now click add ARN’s..
            </p>
            <br />
            <p>Now click Next at the bottom…</p>
            <br />
            <p>
              Now in here, create a name for your policy… we did it as such...
              now leave everything else as it is.. Scroll down and click create
              policy.{" "}
            </p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws12.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727028119/images-bootcamp/cx8te0mr81vqngpepjlj.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Great, we’e created a poicy for this new user.. But we havent
              created our new user(our web app)…
            </p>
            <br />
            <p>
              So, now on the left, click Users on the left..and click Create
              User.
            </p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws13.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727028188/images-bootcamp/oo2xpd4mxhwscc0c48tj.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now for this user, it can actually be a real person who will need
              to put their login details fo them to get access, our it can be an
              application (our web app).. We go with the latter..
            </p>
            <br />
            <p>Now give it a name and click Next.</p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws14.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727028257/images-bootcamp/lpxyyxjq1abwwj8me2o3.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now we want to attach our policy we created earlier to our user…
              so click ‘attach policies directly’.
            </p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws15.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727028331/images-bootcamp/soxpgscpdwtrejqytcc4.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now search for your policy called ecomm-platform-1-policy-1, and
              select it. Now scroll down, and click Next...And then leave
              everything else as it is and, click Create User.
            </p>
            <br />
            <p>
              Now wait for it to be created, and you wil see your user there.
              Select it and open it in a new tab. You should see this
            </p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws16.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727028418/images-bootcamp/ciahrkobcvkv02kmic5t.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now on the right side, click Create Access Key. Now in here, click
              third party service
            </p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws17.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727028470/images-bootcamp/cs7gkg9njfw2tk3fk7vz.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>You will get this warning.. Click I understand, and type next</p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws18.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727028831/images-bootcamp/lhplcjgkiw9a5lqrmydc.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now, you will come to tags… leave it blank and click Create access
              key
            </p>
            <br />
            <p>
              You will come here... make sure to copy the access key, and secret
              access key and put it in your .env.development… make sure youhave
              copied into there.. You cant do this twice.
            </p>
            <br />
            {/* <div className="relative w-full h-64">
              <Image
                src="/aws19.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div> */}
            <div className="relative w-full h-64">
              <Image
                src="https://res.cloudinary.com/ds2hlirwr/image/upload/v1727028884/images-bootcamp/ykgmes5dk3s9fcioxjqe.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now click Done. If you didnt view it, you might reach a warning…
              just click ok cause weve already copied it. And nice, we’ve
              created a user(web app) which has programmatic access keys to our
              aws, and we attach a policy to that user to only be able to view,
              add and delete images…
            </p>
            <br />
            <p>So, our .env.development should look as such:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`AWS_KEY_ACCESS_ID="AKIAWAGFATTTWNG3KQNX"
AWS_SECRET_ACCESS_KEY="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"
AWS_REGION=us-east-1
AWS_BUCKET_NAME="ecomm-platform-1"`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`AWS_KEY_ACCESS_ID="AKIAWAGFATTTWNG3KQNX"
AWS_SECRET_ACCESS_KEY="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"
AWS_REGION=us-east-1
AWS_BUCKET_NAME="ecomm-platform-1"`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <span>Now, go to this site.</span>{" "}
            <Link
              href="https://www.npmjs.com/package/@aws-sdk/client-s3"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <p>
              We need this S3 client to be able to send the images from our
              memory storage in multer to our AWS S3 bucket. Now, install this
              package as such:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`npm install @aws-sdk/client-s3`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `npm install @aws-sdk/client-s3`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Also, install dot env as such: </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`npm i dotenv`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`npm i dotenv`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Add this to our app.js</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import { S3Client } from "@aws-sdk/client-s3"; // aws`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `import { S3Client } from "@aws-sdk/client-s3"; // aws`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Under all of our app.use() and all, add this:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`// .env stuff
import dotenv from "dotenv";
dotenv.config();`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `// .env stuff
import dotenv from "dotenv";
dotenv.config();`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now, get all those aws credentials from our .env.development as
              such:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`const aws_key_access_id = process.env.AWS_KEY_ACCESS_ID;
const aws_secret_access_key = process.env.AWS_SECRET_ACCESS_KEY;
const aws_region = process.env.AWS_REGION;
const aws_bucket_name = process.env.AWS_BUCKET_NAME;`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `const aws_key_access_id = process.env.AWS_KEY_ACCESS_ID;
const aws_secret_access_key = process.env.AWS_SECRET_ACCESS_KEY;
const aws_region = process.env.AWS_REGION;
const aws_bucket_name = process.env.AWS_BUCKET_NAME;`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now we want to configure our s3 client based on these variables…
              so we do the s3 variable
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`const s3 = new S3Client({
  credentials: {
    accessKeyId: aws_key_access_id,
    secretAccessKey: aws_secret_access_key,
  },
  region: aws_region,
});`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `const s3 = new S3Client({
  credentials: {
    accessKeyId: aws_key_access_id,
    secretAccessKey: aws_secret_access_key,
  },
  region: aws_region,
});`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now in order to actually send the image to s3, we need to give it
              a command in our endpoint.. So first import putobjectcommand… then
              put it in our endpoint as command variable, together with params,
              and specify params
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`const data = req.body;
  

  const validationErrors = validateUpload(data);

  if (Object.keys(validationErrors).length != 0)
    return res.status(400).send({
      error: validationErrors,
    });

  const params = {
    Bucket: aws_bucket_name,
    Key: req.file.originalname, // the key is how we can search for the image in our aws later on to get it and show it to isers
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `const data = req.body;
  

  const validationErrors = validateUpload(data);

  if (Object.keys(validationErrors).length != 0)
    return res.status(400).send({
      error: validationErrors,
    });

  const params = {
    Bucket: aws_bucket_name,
    Key: req.file.originalname, // the key is how we can search for the image in our aws later on to get it and show it to isers
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };`
                    );
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Also dont forget to import PutObjectCommand</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import {
  S3Client,
  PutObjectCommand,
} from "@aws-sdk/client-s3"; //aws`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`import {
  S3Client,
  PutObjectCommand,
} from "@aws-sdk/client-s3"; //aws`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Then we need to tell s3 that we’re doing this command. So
              await.s3.command
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`const command = new PutObjectCommand(params);
  await s3.send(command);`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`const command = new PutObjectCommand(params);
  await s3.send(command);`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              But our key needs to be unique… lets say you upload a file named
              ‘cute cartoon.png’ from your laptop, to this, the
              req.file.originalname will be cartoon.png… but if you upload the
              same image or if someone else uploads an image called cartoon.png,
              yours will be overridden, although it was a diff image… so we dont
              want req.file.originalname. an d we want a unique name for our
              key..
            </p>
            <br />
            <p>
              So for this, first we import crypto library, and we do a function,
              which generates a random name - called randomImageName…then, in
              our endpoint we crete a variable imageName and call that function
            </p>
            <br />
            <p>So now, your endpoint should now look like this:</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`// UPLOAD IMAGE
app.post("/upload", auth, upload.single("file-upload"), async (req, res) => {
  const data = req.body;

  const validationErrors = validateUpload(data);

  if (Object.keys(validationErrors).length != 0)
    return res.status(400).send({
      error: validationErrors,
    });

  // const params = {
  //   Bucket: aws_bucket_name,
  //   Key: req.file.originalname, // the key is how we can search for the image in our aws later on to get it and show it to isers
  //   Body: req.file.buffer,
  //   ContentType: req.file.mimetype,
  // };
  const imageName = randomImageName();
  const params = {
    Bucket: aws_bucket_name,
    Key: imageName, // the key is how we can search for the image in our aws later on to get it and show it to isers
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };
  const command = new PutObjectCommand(params);
  await s3.send(command);

  
});`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`// UPLOAD IMAGE
app.post("/upload", auth, upload.single("file-upload"), async (req, res) => {
  const data = req.body;

  const validationErrors = validateUpload(data);

  if (Object.keys(validationErrors).length != 0)
    return res.status(400).send({
      error: validationErrors,
    });

  // const params = {
  //   Bucket: aws_bucket_name,
  //   Key: req.file.originalname, // the key is how we can search for the image in our aws later on to get it and show it to isers
  //   Body: req.file.buffer,
  //   ContentType: req.file.mimetype,
  // };
  const imageName = randomImageName();
  const params = {
    Bucket: aws_bucket_name,
    Key: imageName, // the key is how we can search for the image in our aws later on to get it and show it to isers
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };
  const command = new PutObjectCommand(params);
  await s3.send(command);

  
});`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now great, we are able to store the image in aws, bu we also need
              to store all of our details of the image in our database… all the
              tings lik title, description etc is in our database.. But our
              image is in aws, and we link our database to aws using the key.
              I'd like you to do this yourself using prisma. Reference your
              image table in your schema prisma.
            </p>
            <br />
            <br />
            <p>
              Phew, that is abit tedious but AWS is widely used and is
              considered a great tool to learn.. Trust me, devs will be
              impressed that you actually stored images using AWS!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
