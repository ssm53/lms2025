/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Classes() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Classes
          </h1>
        </div>
        <div className="space-y-8">
          <h2 className="text-xl font-semibold">
            You have learnt about objects.
          </h2>
          <p>Let's revise it once more.</p>
          <p>
            Objects are a group of properties and methods. Properties of an
            object are what an object has, and methods are what an object can do
          </p>
          <br />
          <p>Let's create an object for a motorcycle.</p>
          <br />
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`let motorbike = {
  brand: "Yamaha",
  year: 2005,
  colour: "red",

  ride: function() {
    console.log("you are riding the bike")
  },

  brake: () => console.log("you are hitting the brakes")
};`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`let motorbike = {
  brand: "Yamaha",
  year: 2005,
  colour: "red",

  ride: function() {
    console.log("you are riding the bike")
  },

  brake: () => console.log("you are hitting the brakes")
};`);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />
          <p>
            To access the properties and methods, we use{" "}
            <span className="font-bold text-purple-600">'.'</span>{" "}
          </p>
          <br />
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`let bikeBrand = motorbike.brand
let bikeBrake = motorbike.brake()`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`let bikeBrand = motorbike.brand
let bikeBrake = motorbike.brake()`);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />
          <p>
            To access methods, we must always use '.' but for properties, we can
            also use{""} <span className="font-bold text-purple-600">'[]'</span>
            .For example,{" "}
          </p>
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`let bikeBrand = motorbike["brand"];`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `let bikeBrand = motorbike["brand"];`
                  );
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />

          <p>
            Now this is all nice and dandy but what if we have more than 1
            motorbike... let's say we have 3, each having its own properties and
            methods! This is what we need to do
          </p>
          <br />
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`let motorbike1 = {
  brand: "Yamaha",
  year: 2005,
  colour: "red",

  ride: function () {
    console.log("you are riding the bike");
  },

  brake: () => console.log("you are hitting the brakes"),
};

let motorbike2 = {
  brand: "Honda",
  year: 2008,
  colour: "green",

  ride: function () {
    console.log("you are riding nicely dude!");
  },

  brake: () => console.log("you are hitting the brakes and slowin down"),
};

let motorbike3 = {
  brand: "Ducati",
  year: 1999,
  colour: "yellow",

  ride: function () {
    console.log("you are riding the bike while enoying the sunset");
  },

  brake: () => console.log("you are hitting the brakes hard!"),
};`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`let motorbike1 = {
  brand: "Yamaha",
  year: 2005,
  colour: "red",

  ride: function () {
    console.log("you are riding the bike");
  },

  brake: () => console.log("you are hitting the brakes"),
};

let motorbike2 = {
  brand: "Honda",
  year: 2008,
  colour: "green",

  ride: function () {
    console.log("you are riding nicely dude!");
  },

  brake: () => console.log("you are hitting the brakes and slowin down"),
};

let motorbike3 = {
  brand: "Ducati",
  year: 1999,
  colour: "yellow",

  ride: function () {
    console.log("you are riding the bike while enoying the sunset");
  },

  brake: () => console.log("you are hitting the brakes hard!"),
};`);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />
          <p>
            As you can see, this can become quite lenghty and... well annoying!
          </p>
          <br />
          <p>And this is where classes come in. </p>
          <br />
          <p>
            We can organize the attributes (properties) and behaviours
            (functions) all into a single template and easily make new objects
            with those attributes and behaviours easily.
          </p>
          <br />
          <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
            <pre className="text-sm text-[#d4d4d4]">
              <code>{`class Motorbike {
  constructor (brand, year, colour, ride, brake) {
    this.brand = brand
    this.year = year
    this.colour = colour
    this.rideMessage = rideMessage
    this.brakeMessage = brakeMessage
  }

  ride() {
    console.log(this.rideMessage)
  }

  brake() {
    console.log(this.brakeMessage)
  }
}

let motorbike1 = Motorbike("Yamaha", 2005, "red", "you are riding the bike", "you are hitting the brakes")
let motorbike2 = Motorbike("Honda", 2008, "green", "you are riding nicely dude!", "you are hitting the brakes and slowin down")
let motorbike3 = Motorbike("Ducati", 1999, "yellow", "you are riding the bike while enoying the sunset", "you are hitting the brakes hard!")

// to access the properties and methods
motorbike1.ride()
let bikeBrand3 = motorbike3.brand
console.log()`}</code>
            </pre>
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(`class Motorbike {
  constructor (brand, year, colour, ride, brake) {
    this.brand = brand
    this.year = year
    this.colour = colour
    this.rideMessage = rideMessage
    this.brakeMessage = brakeMessage
  }

  ride() {
    console.log(this.rideMessage)
  }

  brake() {
    console.log(this.brakeMessage)
  }
}

let motorbike1 = Motorbike("Yamaha", 2005, "red", "you are riding the bike", "you are hitting the brakes")
let motorbike2 = Motorbike("Honda", 2008, "green", "you are riding nicely dude!", "you are hitting the brakes and slowin down")
let motorbike3 = Motorbike("Ducati", 1999, "yellow", "you are riding the bike while enoying the sunset", "you are hitting the brakes hard!")

// to access the properties and methods
motorbike1.ride()
let bikeBrand3 = motorbike3.brand
console.log()`);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <br />
          <p>
            Now, we can create as many motorbike objects as we want...isnt this
            more simple?
          </p>
          <br />
          <p>
            You can think of classes as a template to write different objects
            which have the same type of properties and methods
          </p>
          <br />
          <p>
            Waaaaiiit, did you notice the{" "}
            <span className="font-bold text-purple-600">this</span> keyword? In
            short, in JavaScript, this is a special keyword that refers to the
            object or context in which the current code is being executed.
          </p>
          <br />
          <p>
            Classes might be a lil but confusing for you now, but dont worry,
            you dont have to memorise it. I just wanted you to know that it
            exists for now.
          </p>
        </div>
      </div>
    </div>
  );
}
