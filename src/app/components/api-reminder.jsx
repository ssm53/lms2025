/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ApiReminder() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Lets refresh your memory about API's again.
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">API's</h2>
            <br />
            <p>
              As you know, we can send a request to api's. We do this to update
              data in an api or to get data from an api. After we send a
              request, the api will give us a response to let us know if our
              request was accepted or not. So yeah, our requests need to be done
              correctly in order for the api to accept our request.
            </p>
            <br />
            <p>
              Before, we worked with news API and that is an API done by an
              external party in order to get thirs party data.
            </p>
            <br />
            <p>
              This time, our APIs are not to get third party information, but
              our API's here will be used to get and update information of our
              Events Platform.
            </p>
            <br />
            <p>
              You'll get to writing API's in our backend development module. For
              now, I have written the API's and have deployed it so you guys can
              connect to it. To connect to an API, you only need you know its
              endpoint.
            </p>
            <br />
            <p>
              Note that when we send a request, an api will give a response
              back... In its response, it will also give a status... 200
              normally means that the request is accepted. 404 normally means
              that we sent a request to the wrong endpoint (e.g. sending mail to
              a wrong address), and 500 means that our request reached that
              endpoint but it was in an incorrect format.
            </p>
            <br />
            <p>
              In this module, a large part of your learning will be on sending
              requests to APIs.
            </p>
            <br />
            <p>
              Note there are several type of requests - GET, POST, PATCH, DELETE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
