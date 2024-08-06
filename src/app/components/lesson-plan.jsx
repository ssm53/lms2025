/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";

export default function LessonPlan() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Lesson Plan
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">Hello to you all!</h2>
            <p className="mt-2">
              Nice one peepe! You've got most of the basics covered, and you're
              in the top 2% which actually knows what coding is all about!
            </p>{" "}
            <br />
            <p className="mt-2">
              In this module, we are going to cover further essentials which you
              will need to know before building projects.
            </p>{" "}
            <br />
            <p>
              As usual, enough with the yapping and let's get straight to it!
            </p>{" "}
            <br />
            <p>Oooiii ooiiii!</p>
            {/* <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`function sayHello() {
  console.log('Hello, world!');
}`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`function sayHello() {
  console.log('Hello, world!');
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div> */}
          </div>
          {/* <div>
            <h2 className="text-xl font-semibold">HTML Structure</h2>
            <p className="mt-2 text-muted-foreground">
              Here's an example of a basic HTML structure:
            </p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>Welcome to My Website</h1>
    <p>This is the main content of the page.</p>
  </main>
  <footer>
    <p>&copy; 2023 My Website. All rights reserved.</p>
  </footer>
</body>
</html>`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>Welcome to My Website</h1>
    <p>This is the main content of the page.</p>
  </main>
  <footer>
    <p>&copy; 2023 My Website. All rights reserved.</p>
  </footer>
</body>
</html>`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
          </div> */}
          {/* <div>
            <h2 className="text-xl font-semibold">CSS Styling</h2>
            <p className="mt-2 text-muted-foreground">
              Here's an example of some basic CSS styles:
            </p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

nav ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

main {
  padding: 2rem;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

nav ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

main {
  padding: 2rem;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
