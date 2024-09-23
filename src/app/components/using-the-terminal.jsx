/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function UsingTheTerminal() {
  const [showAnswer, setShowAnswer] = useState(false); // State to toggle the answer visibility

  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Using the terminal
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              What in the world is the terminal?
            </h2>
            <p>
              Alright, firstly, you can say terminal in many different ways e.g.{" "}
              <span className="font-bold text-purple-600">
                terminal / command line / prompt / console.
              </span>{" "}
              All these terminologies got me confused when I first started
              coding, so yeah do remember that they are all the same. For our
              bootcamp, we will call it{" "}
              <span className="font-bold text-purple-600">terminal.</span>
            </p>
            <br />
            <p>
              Let's imagine that you want to edit your CV, which you probably
              saved in your Documents or Dektop folder on your computer. So you
              know, you get on your computer, then you go to your Documents or
              Desktop. There you can see that your CV is saved there. You then
              click on it, and it opens up your CV. Maybe instead of opening
              your CV, you want to delete it? Maybe instead of that, you want to
              move your CV file from your Document folder to the Desktop folder?
              This is how the average consumer interact with their computer.
            </p>
            <br />
            <p>
              {" "}
              The terminal can do all of the above, and yeah the terminal is
              basically used to interact with your computer.
            </p>
            <br />
            <p>
              As an aspiring dev, it is best to learn to use the terminal. It
              might be slightlyyyy confusing at the start, but it makes life
              much easier later on.
            </p>
            <br />
            <p>
              The terminal can be used to download packages and all (like you
              did earlier with asdf, vs code and all), but yeah I'll get to what
              packages are all about later.
            </p>
            <br />
            <br />
            <h2 className="text-xl font-semibold">
              I've got a small challenge for you!
            </h2>
            <br />
            <p>
              If you have your terminal already open, please close it, and
              repoen your terminal. Now, once you've opened it, type{" "}
              <span className="font-bold text-purple-600">ls</span>. Now, you
              will see a list of the different folder or files you have e.g.
              Documents/Applications/Desktop etc. In your head, pick one of it.
              Now, do this{" "}
              <span className="font-bold text-purple-600">
                cd your file name{" "}
              </span>{" "}
              If you chose Documents, then it should be{" "}
              <span className="font-bold text-purple-600">cd Documents </span>
            </p>{" "}
            <br />
            <p>Try and figure out what we just did?</p> <br />
            <br />
            <br />
            <h2 className="text-xl font-semibold">
              What are folders and what are files?
            </h2>
            <br />
            <h2 className="text-xl font-semibold">
              Folders (also can be called directory)
            </h2>
            <br />
            <p>
              Analogy: Think of folders as the manila folders you use to
              organize papers in a filing cabinet.
            </p>{" "}
            <br />
            <p>
              Explanation: Folders help you keep your files organized. They can
              hold other folders and files, just like a real folder can hold
              papers and even other smaller folders.
            </p>
            <br />
            <p>
              Example: On your computer, you might have a folder called
              "Documents" where you keep all your important papers, and inside
              that, you might have another folder called "Invoices" where you
              keep all your bills.
            </p>
            <br />
            <br />
            <h2 className="text-xl font-semibold">Files</h2>
            <br />
            <p>
              Analogy: Files are like the individual papers you put inside those
              manila folders.
            </p>{" "}
            <br />
            <p>
              Explanation: Files are where the actual information is stored.
              Each file has a specific purpose, like a document you write, a
              picture you take, or a song you download.
            </p>
            <br />
            <p>
              Example: Inside your "Documents" folder, you might have a file
              called "Resume.docx" which is your resume, or "Vacation.jpg" which
              is a photo from your holiday.
            </p>
            <br />
            <br />
            <h2 className="text-xl font-semibold">List of command lines</h2>
            <br />
            <p>
              Close and re-open your terminal. Try and play around with these
              commands bellow! Follow it line by line and see the output.
            </p>
            <br />
            {/* here i want to put the table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Command</th>
                    <th className="px-4 py-2 border">Explanation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">pwd</td>
                    <td className="px-4 py-2 border">
                      Print working directory
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">ls</td>
                    <td className="px-4 py-2 border">
                      List directory contents
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-2 border">cd file-name</td>
                    <td className="px-4 py-2 border">
                      Change directory. Note that 'file-name' should be replaced
                      with your own file name
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-2 border">cd ..</td>
                    <td className="px-4 py-2 border">
                      used to move up one directory level in the file system
                      hierarchy
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-2 border">pwd</td>
                    <td className="px-4 py-2 border">
                      Print working directory
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">ls</td>
                    <td className="px-4 py-2 border">
                      List directory contents
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <p>
              Noice! You are now a junior master at navigating using the
              terminal
            </p>
            <br />
            <h2 className="text-xl font-semibold">
              Here's a list of commands you should know
            </h2>
            <br />
            <p>YOU DONT NEED TO MEMORISE THIS!</p>
            <br />
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Command</th>
                    <th className="px-4 py-2 border">Explanation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">ls</td>
                    <td className="px-4 py-2 border">
                      List directory contents
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">cd</td>
                    <td className="px-4 py-2 border">Change directory</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">pwd</td>
                    <td className="px-4 py-2 border">
                      Print working directory
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">mkdir</td>
                    <td className="px-4 py-2 border">Make a new directory</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">rm</td>
                    <td className="px-4 py-2 border">
                      Remove a file or directory
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">touch</td>
                    <td className="px-4 py-2 border">Create a new file</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">cp</td>
                    <td className="px-4 py-2 border">
                      Copy files or directories
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">mv</td>
                    <td className="px-4 py-2 border">
                      Move or rename files or directories
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">echo</td>
                    <td className="px-4 py-2 border">
                      Print text to the terminal
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">cat</td>
                    <td className="px-4 py-2 border">
                      Concatenate and display files
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">grep</td>
                    <td className="px-4 py-2 border">
                      Search for text in files
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">chmod</td>
                    <td className="px-4 py-2 border">
                      Change file permissions
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">chown</td>
                    <td className="px-4 py-2 border">Change file owner</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">find</td>
                    <td className="px-4 py-2 border">
                      Search for files in a directory hierarchy
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">man</td>
                    <td className="px-4 py-2 border">
                      Display the manual page for a command
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <span>Watch this video to get familiar with the terminal</span>{" "}
            <Link
              href="https://www.youtube.com/watch?v=5XgBd6rjuDQ&ab_channel=JesseShowalter"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>{" "}
            <br />
            <h2 className="text-xl font-semibold">Exercise</h2>
            <p className="mt-2">
              Ensure that you copy the below and paste it into your index.js
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`/* 
Exercise 1: Navigate to a Directory
Scenario: Practice using the cd command.

Open your terminal.
Use the cd command to navigate to the Documents folder on your system.
Once you're inside the Documents folder, print the current directory using the pwd command.
*/

/* 
Exercise 2: List Files and Directories
Scenario: Explore the ls command.

While inside the Documents folder, use the ls command to list all the files and directories.
Try using the ls -l command to see more details about the files.
*/

/* 
Exercise 3: Create a New Directory
Scenario: Practice the mkdir command.

In your terminal, navigate back to your home directory.
Create a new directory called TerminalPractice using the mkdir command.
Verify that the directory was created by using the ls command.
*/

/* 
Exercise 4: Create a New File
Scenario: Practice using the touch command.

Navigate into the TerminalPractice directory you just created.
Use the touch command to create a new file called notes.txt.
List the contents of the TerminalPractice directory to confirm the file was created.
*/

/* 
Exercise 5: Remove a File
Scenario: Practice using the rm command.

Inside the TerminalPractice directory, create a new file called temp.txt using the touch command.
Now, use the rm command to delete the temp.txt file.
List the contents of the directory to confirm that the file has been deleted.
*/

/* 
Exercise 6: Copy a File
Scenario: Practice using the cp command.

In the TerminalPractice directory, create a file called backup.txt.
Use the cp command to create a copy of backup.txt and name it backup_copy.txt.
Verify the files by listing the directory contents.
*/

/* 
Exercise 7: Move a File
Scenario: Practice using the mv command.

Inside the TerminalPractice directory, create a new file called move_me.txt.
Use the mv command to move move_me.txt to the Documents folder.
Go to the Documents folder to verify that the file was moved.
*/

/* 
Exercise 8: View the Contents of a File
Scenario: Practice using the cat command.

In the TerminalPractice directory, create a new file called greetings.txt.
Add the text "Hello, World!" to the file using a text editor or by echoing the text into the file.
Use the cat command to display the contents of the file in the terminal.
*/
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`/* 
Exercise 1: Navigate to a Directory
Scenario: Practice using the cd command.

Open your terminal.
Use the cd command to navigate to the Documents folder on your system.
Once you're inside the Documents folder, print the current directory using the pwd command.
*/

/* 
Exercise 2: List Files and Directories
Scenario: Explore the ls command.

While inside the Documents folder, use the ls command to list all the files and directories.
Try using the ls -l command to see more details about the files.
*/

/* 
Exercise 3: Create a New Directory
Scenario: Practice the mkdir command.

In your terminal, navigate back to your home directory.
Create a new directory called TerminalPractice using the mkdir command.
Verify that the directory was created by using the ls command.
*/

/* 
Exercise 4: Create a New File
Scenario: Practice using the touch command.

Navigate into the TerminalPractice directory you just created.
Use the touch command to create a new file called notes.txt.
List the contents of the TerminalPractice directory to confirm the file was created.
*/

/* 
Exercise 5: Remove a File
Scenario: Practice using the rm command.

Inside the TerminalPractice directory, create a new file called temp.txt using the touch command.
Now, use the rm command to delete the temp.txt file.
List the contents of the directory to confirm that the file has been deleted.
*/

/* 
Exercise 6: Copy a File
Scenario: Practice using the cp command.

In the TerminalPractice directory, create a file called backup.txt.
Use the cp command to create a copy of backup.txt and name it backup_copy.txt.
Verify the files by listing the directory contents.
*/

/* 
Exercise 7: Move a File
Scenario: Practice using the mv command.

Inside the TerminalPractice directory, create a new file called move_me.txt.
Use the mv command to move move_me.txt to the Documents folder.
Go to the Documents folder to verify that the file was moved.
*/

/* 
Exercise 8: View the Contents of a File
Scenario: Practice using the cat command.

In the TerminalPractice directory, create a new file called greetings.txt.
Add the text "Hello, World!" to the file using a text editor or by echoing the text into the file.
Use the cat command to display the contents of the file in the terminal.
*/
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <h2 className="text-xl font-semibold">Answer</h2>
            <Button onClick={() => setShowAnswer(!showAnswer)}>
              {showAnswer ? "Hide Answer" : "See Answer"}
            </Button>
            <br />
            {/* The answer is hidden by default and shown when 'showAnswer' is true */}
            {showAnswer && (
              <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
                <pre className="text-sm text-[#d4d4d4]">
                  <code>{`/* 
Exercise 1: Navigate to a Directory
Scenario: Practice using the cd command.

Open your terminal.
Use the cd command to navigate to the Documents folder on your system.
Once you're inside the Documents folder, print the current directory using the pwd command.
*/

// Answer (this should be typed in your terminal line by line)
cd ~/Documents
pwd


/* 
Exercise 2: List Files and Directories
Scenario: Explore the ls command.

While inside the Documents folder, use the ls command to list all the files and directories.
Try using the ls -l command to see more details about the files.
*/

// Answer (this should be typed in your terminal line by line)
ls
ls -l


/* 
Exercise 3: Create a New Directory
Scenario: Practice the mkdir command.

In your terminal, navigate back to your home directory.
Create a new directory called TerminalPractice using the mkdir command.
Verify that the directory was created by using the ls command.
*/


// Answer (this should be typed in your terminal line by line)
cd ~
mkdir TerminalPractice
ls


/* 
Exercise 4: Create a New File
Scenario: Practice using the touch command.

Navigate into the TerminalPractice directory you just created.
Use the touch command to create a new file called notes.txt.
List the contents of the TerminalPractice directory to confirm the file was created.
*/


// Answer (this should be typed in your terminal line by line)
cd TerminalPractice
touch notes.txt
ls


/* 
Exercise 5: Remove a File
Scenario: Practice using the rm command.

Inside the TerminalPractice directory, create a new file called temp.txt using the touch command.
Now, use the rm command to delete the temp.txt file.
List the contents of the directory to confirm that the file has been deleted.
*/

// Answer (this should be typed in your terminal line by line)
touch temp.txt
rm temp.txt
ls


/* 
Exercise 6: Copy a File
Scenario: Practice using the cp command.

In the TerminalPractice directory, create a file called backup.txt.
Use the cp command to create a copy of backup.txt and name it backup_copy.txt.
Verify the files by listing the directory contents.
*/

// Answer (this should be typed in your terminal line by line)
touch backup.txt
cp backup.txt backup_copy.txt
ls


/* 
Exercise 7: Move a File
Scenario: Practice using the mv command.

Inside the TerminalPractice directory, create a new file called move_me.txt.
Use the mv command to move move_me.txt to the Documents folder.
Go to the Documents folder to verify that the file was moved.
*/

// Answer (this should be typed in your terminal line by line)
touch move_me.txt
mv move_me.txt ~/Documents
cd ~/Documents
ls


/* 
Exercise 8: View the Contents of a File
Scenario: Practice using the cat command.

In the TerminalPractice directory, create a new file called greetings.txt.
Add the text "Hello, World!" to the file using a text editor or by echoing the text into the file.
Use the cat command to display the contents of the file in the terminal.
*/

// Answer (this should be typed in your terminal line by line)
touch greetings.txt
echo "Hello, World!" > greetings.txt
cat greetings.txt

`}</code>
                </pre>
                <div className="mt-2 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(`/* 
Exercise 1: Navigate to a Directory
Scenario: Practice using the cd command.

Open your terminal.
Use the cd command to navigate to the Documents folder on your system.
Once you're inside the Documents folder, print the current directory using the pwd command.
*/

// Answer (this should be typed in your terminal line by line)
cd ~/Documents
pwd


/* 
Exercise 2: List Files and Directories
Scenario: Explore the ls command.

While inside the Documents folder, use the ls command to list all the files and directories.
Try using the ls -l command to see more details about the files.
*/

// Answer (this should be typed in your terminal line by line)
ls
ls -l


/* 
Exercise 3: Create a New Directory
Scenario: Practice the mkdir command.

In your terminal, navigate back to your home directory.
Create a new directory called TerminalPractice using the mkdir command.
Verify that the directory was created by using the ls command.
*/


// Answer (this should be typed in your terminal line by line)
cd ~
mkdir TerminalPractice
ls


/* 
Exercise 4: Create a New File
Scenario: Practice using the touch command.

Navigate into the TerminalPractice directory you just created.
Use the touch command to create a new file called notes.txt.
List the contents of the TerminalPractice directory to confirm the file was created.
*/


// Answer (this should be typed in your terminal line by line)
cd TerminalPractice
touch notes.txt
ls


/* 
Exercise 5: Remove a File
Scenario: Practice using the rm command.

Inside the TerminalPractice directory, create a new file called temp.txt using the touch command.
Now, use the rm command to delete the temp.txt file.
List the contents of the directory to confirm that the file has been deleted.
*/

// Answer (this should be typed in your terminal line by line)
touch temp.txt
rm temp.txt
ls


/* 
Exercise 6: Copy a File
Scenario: Practice using the cp command.

In the TerminalPractice directory, create a file called backup.txt.
Use the cp command to create a copy of backup.txt and name it backup_copy.txt.
Verify the files by listing the directory contents.
*/

// Answer (this should be typed in your terminal line by line)
touch backup.txt
cp backup.txt backup_copy.txt
ls


/* 
Exercise 7: Move a File
Scenario: Practice using the mv command.

Inside the TerminalPractice directory, create a new file called move_me.txt.
Use the mv command to move move_me.txt to the Documents folder.
Go to the Documents folder to verify that the file was moved.
*/

// Answer (this should be typed in your terminal line by line)
touch move_me.txt
mv move_me.txt ~/Documents
cd ~/Documents
ls


/* 
Exercise 8: View the Contents of a File
Scenario: Practice using the cat command.

In the TerminalPractice directory, create a new file called greetings.txt.
Add the text "Hello, World!" to the file using a text editor or by echoing the text into the file.
Use the cat command to display the contents of the file in the terminal.
*/

// Answer (this should be typed in your terminal line by line)
touch greetings.txt
echo "Hello, World!" > greetings.txt
cat greetings.txt

`);
                    }}
                  >
                    Copy
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
