import Link from "next/link";
import React from "react";
import GitHub from "../svgs/GitHub";
import LinkedIn from "../svgs/LinkedIn";

export default function Footer() {
  return (
    <div className="footer-bg flex justify-center content-center  w-full">
      <ul className="flex flex-row justify-around gap-x-24 mb-2">
        <li className="flex items-center">
          <Link
            className="footer-link"
            href="https://github.com/Daniel-prz"
            title="GitHub"
          >
            <GitHub />
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            className="footer-link"
            href="https://www.linkedin.com/in/daniel-perez-416b2628a/"
            title="LinkedIn"
          >
            <LinkedIn />
          </Link>
        </li>
      </ul>
    </div>
  );
}
