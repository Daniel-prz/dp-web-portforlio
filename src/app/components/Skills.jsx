import React from "react";
import HTML5 from "../svgs/HTML5";
import CSS from "../svgs/CSS";
import Bootstrap from "../svgs/Bootstrap";
import Javascript from "../svgs/Javascript";
import Nextjs from "../svgs/Nextjs";
import Tailwind from "../svgs/Tailwind";
import Firebase from "../svgs/Firebase";

export default function Skills() {
  return (
    <div className="mt-12 md:mr-16 items-center">
      <h3 className="text-2xl mb-4">Skills</h3>
      <ul className="flex gap-1">
        <div className="w-7 flex justify-center items-center">
          <li className="bg-white rounded-sm h-7 w-5 relative">
            <HTML5 />
          </li>
        </div>
        <div className="w-7 flex justify-center items-center">
          <li className="bg-white rounded-sm h-7 w-5 relative">
            <CSS />
          </li>
        </div>

        <li className="bg-white rounded-md h-7 w-7 relative">
          <Bootstrap />
        </li>
        <li className="bg-white rounded-md h-7 w-7 relative">
          <Javascript />
        </li>
        <li className="bg-white rounded-3xl h-7 w-7 relative">
          <Nextjs />
        </li>
        <li>
          <Tailwind />
        </li>
        <li>
          <Firebase />
        </li>
      </ul>
      <ul className="flex gap-2">
        <div className="flex flex-col mb-2">
          <li className="mb-2">
            <p>HTML</p>
            <p>- Semantic HTML5</p>
          </li>
          <li className="mb-2">
            <p>CSS</p>
            <p>- Tailwind</p>
            <p>- Bootstrap</p>
            <p>- React Bootstrap</p>
          </li>
        </div>

        <div className="flex flex-col">
          {" "}
          <li className="mb-2">
            <p>Javascript</p>
            <p>- Next JS</p>
            <p>- React</p>
          </li>
          <li className="mb-2">
            <p>Firebase</p>
            <p>- Firestore</p>
            <p>- Authentication</p>
          </li>
        </div>
      </ul>
    </div>
  );
}
