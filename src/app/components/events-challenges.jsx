/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EventsChallenges() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Now, I want you to test your knowledge!
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
            <h2 className="text-xl font-semibold">
              Here are all the APIs that I have written in my backend, which
              you'll need to send a request to. Try testing it out with a requst
              and console.log the responses, so you see what format of data you
              are working with. This is crucial when dealing with APIs.
            </h2>
            <br />
            <p>
              It goes without saying, if I say my api endpoint is "/get-event",
              that means, to connect to it, you'll have to do
              PUBLIC_BACKEND_BASE_URL + "/get-event"... just like what we've
              been doing so far.
            </p>
            <h2 className="text-xl font-semibold">1. "/get-event/:id"</h2>
            <p>
              This allows us to do a a GET request and get information about
              that event with a specific id
            </p>
            <p>
              When doing your request, ensure that you replace :id with
              something suitable.
            </p>
            <br />

            <h2 className="text-xl font-semibold">2. "/edit-event/:id"</h2>
            <p>
              This allows us to do a a PATCH request and update a certain event
              with that specific id.
            </p>
            <p>
              When doing your request, ensure that you replace :id with
              something suitable.
            </p>
            <br />
            <h2 className="text-xl font-semibold">3. "/my-events/userId"</h2>
            <p>
              This allows us to do a a GET request and get all events posted by
              that user which has a certain userId.
            </p>
            <p>
              When doing your request, ensure that you replace userId with
              something suitable.
            </p>
            <br />

            <p>Now, here is what I want you to do next:</p>
            <br />
            <h2 className="text-xl font-semibold">
              1. Users who posted events might need to edit their posting. We
              need to allow for that.
            </h2>
            <p>
              Hint: have a 'Edit' button at the specific job page, only if the
              user who posted that specific job is accessing this page. Also,
              the forms should be prepopulated.{" "}
            </p>
            <br />
            <h2 className="text-xl font-semibold">
              2. Ussers who posted jobs might want to see all of the jobs they
              posted in a single page.
            </h2>
            <p>Hint: Do a '/my-events' route </p>
            <br />
            <h2 className="text-xl font-semibold">
              3. Style and implement a navbar
            </h2>
            <p>Hint: think about what layout.svelte does.</p>
            <br />
            <h2 className="text-xl font-semibold">
              4. Implement logout functionality. If we are logged in, show
              logout on navbar. But if we are logged out, show login on navbar
            </h2>
            <p>
              Hint: use stores. Its best to write in one file -
              src/stores/store.js
            </p>
            <br />
            <h2 className="text-xl font-semibold">
              5. Ensure that when we are logged in, and if we refresh the page,
              we are not logged out
            </h2>
            <p>
              Hint: think about what layout.svelte does..and we need a function
              to check if we are logged in.
            </p>
            <br />
            <h2 className="text-xl font-semibold">
              6. Implement alerts for where suitable (e.g. when we successfully
              log in or not)
            </h2>
            <p>
              Hint: i've no hints for this, as there are many ways to do this.
            </p>
            <br />
            <h2 className="text-xl font-semibold">
              7. Implement a spinner while waiting for our request to get a
              response.
            </h2>
            <p>
              Hint: the spinner should stop when we have got a request back,
              whether the status is good or bad.
            </p>
            <br />
            <p>
              I'm always here and happy to to give you hints, to guide you and
              to spark ideas in your head.... just not to give you answers
              straight up.
            </p>
            <br />
            <p>All the best!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
