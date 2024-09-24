/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function IntroToApi() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's look at API's
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">What is an API?</h2>
            <br />
            <p>
              An API (Application Programming Interface) is a set of rules and
              protocols that allows different software applications to
              communicate with each other. It defines the methods and data
              formats that applications use to request and exchange information.
            </p>{" "}
            <br />
            <h2 className="text-xl font-semibold">Key points</h2>
            <p>
              Interface: Think of an API as a bridge or interface between two
              different systems, such as a web application and a server.
            </p>
            <br />
            <p>
              Requests and Responses: An API allows one system to send a request
              to another system and receive a response. For example, a weather
              app might use an API to request current weather data from a
              weather service.
            </p>
            <br />
            <p>
              Endpoints: APIs have specific URLs (endpoints) that define where
              the requests should be sent.
            </p>
            <br />
            <p>
              Methods: Common HTTP methods used in APIs include GET (retrieve
              data), POST (send data), PUT (update data), and DELETE (remove
              data).
            </p>
            <br />
            <p>
              Formats: APIs typically communicate using data formats like JSON
              (JavaScript Object Notation) or XML (eXtensible Markup Language).
            </p>
            <br />
            <p>
              Again, dont worry if its consfusing. It will make sense later on.
            </p>
            <h2 className="text-xl font-semibold">Consume API's in Node</h2>
            <br />
            <p>
              As said above, we can request information from an api, and then
              get a response.
            </p>
            <br />
            <h2 className="text-xl font-semibold">Making a http request</h2>
            <p>In order to make a request, we can use the fetch function.</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
const res = fetch("https://whatevertheendpointis"
console.log(res)
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
const res = fetch("https://whatevertheendpointis"
console.log(res)
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              From the above, we are making a request using the fetch function
              to a specific API endpoint. We make requests to either get
              information or update information. In our example, it is a mock
              endpoint.
            </p>
            <br />
            <p>
              But yeah, what is an endpoint? An endpoint is part of an API. You
              can think of an endpoint to an API just like what a address is to
              a house. If we want to write a letter to a house, we should direct
              the letter to its address. So if we want to make a request to an
              API, we should direct the request to that API's endpoint.{" "}
            </p>
            <br />
            <p>
              In our example, the endpoint of that API is
              https://whatevertheendpointis{" "}
            </p>
            <h2 className="text-xl font-semibold">API response</h2>
            <br />
            <p>
              After we make a request to the API, the api will return a
              response!{" "}
            </p>
            <br />
            <p>
              The response will always be in .json format. Basically think of
              .json format as the language of API's.
            </p>
            <br />
            <p>
              Once we get the response, we decode that json format using a
              simple method of .json(), and ta-daaaa that json format now
              becomes a datatype which we are familiar with... objects!
            </p>
            <br />
            <h2 className="text-xl font-semibold">Example</h2>
            <p>
              Let's say an API has information about students and their test
              scores, and we want to know about it. The API has an endpoint of
              "https://whatever"
            </p>
            <br />
            <p>
              So, we send a request using fetch function to "https://whatever"
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
const res = fetch("https://whatever"
console.log(res)
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
const res = fetch("https://whatever"
console.log(res)
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <p>
              The API will then give a response in json formt. We store that
              reponse in the variable res, and we console.log it out.
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
{
"name": "Shaun,
"score": 99
}
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
{
"name": "Shaun,
"score": 99
}
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <p>
              From here, we get the information from the API in json format,
              which we will then convert to an object, and we can start using
              that information.
            </p>
            <br />
            <p>
              But if we made the request like we did above, we would not
              actually get the response properly.
            </p>
            <br />
            <p>
              The fetch function is an async function, so we always need to use
              await fetch("https://whatever")
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
