/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function NewsApi() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's continue with the project...
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">News API</h2>
            <br />
            <span>I'd like you go to the home page of News API.</span>{" "}
            <Link
              href="https://newsapi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
            <br />
            <p>
              News API provides API's which have information about news articles
              surrounding different topics.
            </p>
            <br />
            <p>
              Later on, we will be creating our own API's but for now, in this
              project, I want you to get information from NewsAPI's API and
              print it out in the console.
            </p>
            <br />
            <p>
              Now, sign up for News API (its free!). After you have registered,
              you will see that they have generated an API key for you.
            </p>
            <br />
            <p>Copy that API key and paste it in your index.js file as such:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
const apiKey = replace-all-of-this-and-put-your-api-key-here
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
const apiKey = replace-all-of-this-and-put-your-api-key-here
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              What we did works, but it isnt optimal. API keys, just like
              passwords should be private to you, and only you. However, our
              index.js file can be accessed by other people, and if they do
              access our index.js file, they can get access to our API key. That
              can be really dangerous. So, we want to make our API key hidden.
            </p>
            <br />
            <p>
              For that, let's make a{" "}
              <span className="font-bold text-purple-600">.env</span> file at
              the root of our project.{" "}
            </p>
            <br />
            <p>
              So, go to VS code's terminal, and type{" "}
              <span className="font-bold text-purple-600">touch .env</span>{" "}
            </p>
            <br />
            <p>Now, in our .env file, type this:</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
const API_KEY=replace-all-of-this-and-put-your-api-key-here
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
const API_KEY=replace-all-of-this-and-put-your-api-key-here
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>Now, delete the apiKey variable in your index.js.</p>
            <p>
              It is convention to write all our sensitive information inside our
              .env files. But wait, this does not mean its private yet!
            </p>
            <br />
            <p>
              Now, in the root of your project, create a .gitignore file by
              typing{" "}
              <span className="font-bold text-purple-600">
                touch .gitignore
              </span>{" "}
              in VS code's terminal.
            </p>
            <br />
            <p>
              {" "}
              .gitignore file is used to state which files are private and
              should not be seen by others. In our case, our API key is private
              and is written in the .env file. So, we want our .env file to be
              private. Type{" "}
              <span className="font-bold text-purple-600">.env</span> in your
              .gitignore file. This would ensure nobody except you has access to
              your api keys.
            </p>
            <br />
            <p>
              In your index.js file, this is where you will be writing all your
              code. Although our API key is written in .env, we will still need
              to access that API key in our index.js file.
            </p>
            <br />
            <p>
              To do this, we need to install a package called{" "}
              <span className="font-bold text-purple-600">dotenv</span> .
              Remember in earlies lessons, we used the Math package to do
              calculations for us to make our lives easier. dotenv is also a
              package which makes our lives easier, but we need to install it
              because unlike the Math package, dotenv is not in-built into
              Javascript.{" "}
            </p>
            <br />
            <p>
              So, type{" "}
              <span className="font-bold text-purple-600">
                npm install dotenv
              </span>{" "}
              in your terminal.{" "}
            </p>
            <br />
            <p>
              We will be making requests to News API's using the fetch function,
              and unfortunately that is not in-built in javascript too, so we
              need to install it.
            </p>
            <br />
            <p>
              Type{" "}
              <span className="font-bold text-purple-600">
                npm install node-fetch
              </span>{" "}
              in your terminal and that will install the fetch function into
              your project.{" "}
            </p>
            <br />
            <p>
              Next, you might have noticed that you have a file called{" "}
              <span className="font-bold text-purple-600">package.json</span>.{" "}
              This file is our configuration file (basically settings for our
              project.) We want to use ES6 Javascript, which is basically the
              new syntax version for Javascript. In there, under descriptions,
              we should type{" "}
              <span className="font-bold text-purple-600">
                "type": "module",
              </span>
              . Dont forget to add a coma to the description line!
            </p>
            <br />
            <p>
              Now, we have installed node-fetch and dotenv into our project. In
              order to use them in our index.js file, we need to import them.
              So, in your index.js file at the most top, type this:
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config();
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config();
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now, remember we said that we need access to the API key in our
              index.js file?
            </p>
            <br />
            <p>
              Using the dotenv package which we installed and imported in
              index.js, it is now so easy. In index.js, type this:
            </p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
const apiKey = process.env.API_KEY;
              `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
const apiKey = process.env.API_KEY;
                    `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Now, our api key is stored in the apiKey variable in index.js, but
              others wont know the content of this variable.
            </p>
            <br />
            <p>
              In index.js, copy and paste this code below all the other code:
            </p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
async function fetchData() {
 // this is where you will fetch data from News API and console.log the results
}

fetchData(); // call fetchData function to actually print out the results in console.
    `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
async function fetchData() {
 // this is where you will fetch data from News API and console.log the results
}

fetchData(); // call fetchData function to actually print out the results in console.
        `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Challenge</h2>
            <p>
              I'd like you to go through News API's documentation and try to
              figure out how we can send a request to their 'Everything'
              endpoint and get information about articles about "football"
            </p>
            <h2 className="text-xl font-semibold">Stretch Challenge</h2>
            <p>For every article you got, only print out it's title.</p>
            <br />
            <p>
              Super nice! You have officially built a program using API's. This
              is relatively advanced!
            </p>
            {/* // THIS IS THE ANSWER
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`
import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config();

const apiKey = process.env.API_KEY;
const query = "football";

const apiUrl = \`https://newsapi.org/v2/everything?q=\${query}&apiKey=\${apiKey}\`;

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

fetchData();

async function fetchData2() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    const allArticles = data.articles;
    for (let article of allArticles) {
      console.log(article.title);
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

fetchData2();
    `}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`
import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config();

const apiKey = process.env.API_KEY;
const query = "football";

const apiUrl = \`https://newsapi.org/v2/everything?q=\${query}&apiKey=\${apiKey}\`;

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

fetchData();

async function fetchData2() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    const allArticles = data.articles;
    for (let article of allArticles) {
      console.log(article.title);
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

fetchData2();
        `);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div> */}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
