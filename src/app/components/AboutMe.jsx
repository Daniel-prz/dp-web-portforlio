import React from "react";
import Bio from "./Bio";
import Skills from "./Skills";

export default function AboutMe() {
  return (
    <div className="flex md:flex-row flex-col items-center">
      <Bio />
      <Skills />
    </div>
  );
}
