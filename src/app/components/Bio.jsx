import Link from "next/link";
import React from "react";
import SendEmail from "./SendEmail";

export default function Bio() {
  return (
    <div className="flex flex-col  w-3/5 mt-12 ml-24 items-center">
      <div className="flex flex-col">
        <h3 className="text-4xl italic md:pr-20 md:ml-8 mb-4">Hello </h3>
        <p className="text-xl md:pr-36 mb-4">...and Welcome to my Portfolio</p>
      </div>

      <p className="bio-p text-lg">
        My name is Daniel Perez, and I am an up and coming junior software/web
        developer based in NYC. I am currently attending online coding bootcamp
        <Link
          className="inline pl-2 hover:underline"
          target="blank"
          href="https://codex.academy/"
        >
          Codex Academy
        </Link>
        .
      </p>
      <SendEmail />
    </div>
  );
}
