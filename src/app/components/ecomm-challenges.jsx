/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EcommChallenges() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Great, now you've seen how to write some APIs.
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              Ensure you have gone through all of the code before this and have
              understood it. If not, please analyse and understand all of the
              previous code.
            </h2>
            <br />
            <p>
              Please remember to git add . and git commit -m "before challenges"
              before you attempt these challenges. If you mess up the code, you
              can always return to this point and have a clean start. Please do
              this!
            </p>
            <br />
            <p>
              Write out the frontend code yourself. Reference what we did in our
              frontend project. It will be super helpful.
            </p>
            <p>Here are further things I want you to do:</p>
            <h2 className="text-xl font-semibold">
              Implement navbar together with the correct login/logout showing.
              (frontend)
            </h2>
            <br />
            <h2 className="text-xl font-semibold">
              Make sure you dont get logged out when you refresh (frontend)
            </h2>
            <br />
            <h2 className="text-xl font-semibold">
              Allow users to upload images they want to sell, together with its
              details - title, description and price and store it in the
              backend. Ensure that your price is a number...BUT FOR NOW LEAVE
              OUT THE IMAGE. So, basically allow users to upload the title,
              description and price of the image.
            </h2>
            <ul>
              <li>Start with the backend then do the frontend.</li>
              <li>
                Note that you will have to create a new table in our prisma
                schema, but this table should be linked with our user model.
              </li>
              <li>
                Only users who are logged in can do this (use auth middleware).
                I have already shown you part of the code for this in the
                previous lesson.
              </li>
            </ul>
            <br />
            <h2 className="text-xl font-semibold">
              Now check your table (like how we thought you earlier), and see if
              you implemented upload correctly.
            </h2>
            <ul>
              <li>If yes, great, great, now go to the AWS section.</li>
              <li>If not, try it again!</li>
            </ul>
            <br />
            <h2 className="text-xl font-semibold">
              Show all images in our home page
            </h2>
            {/* // NOW TO GET OUR IMAGES
At the moment, we have the key as name in our database, but that wont show the image..
To show images, we need a url.. So we need to create a url for this
So we need aws sdk request presigner… install it and import getsignedurl and getobjectcommand
Then we need to do those stuffs in our endpoint
Then do frontend to get those images (you do this yourself) */}

            <ul>
              <li>Start with backend</li>
              <li>Then do frontend</li>
              <li>
                At the moment, we have the key in our database, but that wont
                show the image. We need a url to show images, so in our
                endppint, we need it a way to create urls for each of our image
                on the go and then pass it to the frontend. Note: we will need
                @aws-sdk request presigner for this, and also getObjectCommand
                in order for our express server to get the image from AWS.
              </li>
              <li>
                Ensure that if there are no images to show, we have notified
                users that there are no images to show
              </li>
            </ul>
            <br />
            <h2 className="text-xl font-semibold">
              Allow users to see their images on a new route called /my-images.
            </h2>
            <ul>
              <li>Start with backend</li>
              <li>Then do frontend</li>
              <li>
                Like the challenge before this, you will need @aws-sdk request
                presigner and getObjectCommand for this.{" "}
              </li>
              <li>
                Ensure that if there are no images to show, we have notified
                users that there are no images to show
              </li>
            </ul>
            <br />
            <h2 className="text-xl font-semibold">
              Allow users to delete their images.
            </h2>
            <ul>
              <li>Start with backend</li>
              <li>Then do frontend</li>
              <li>
                In your my-images page, for every image, you should have a
                delete button.
              </li>
              <li>
                Only users who are logged in can do this... use auth middleware
              </li>
            </ul>
            <br />
            <h2 className="text-xl font-semibold">Allow for stripe payments</h2>
            <ul>
              <li>
                Go to stripe, register, login, then reveal your test key, and
                ensure that you are in test mode.
              </li>
              <li>
                We are implementing 'Checkout'. Search the docs and try to
                implement it yourself.
              </li>
              <li>Remember that your stripe key is sensitive information.</li>
              <li></li>
            </ul>
            <br />
            <h2 className="text-xl font-semibold">
              As usual, alerts and spinners for your frontend.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
