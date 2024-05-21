"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsActive(!isActive); // Toggle isActive

    // No need to return anything here
  };
  const dropdownContent = (
    <div className={`dropdown-content ${isActive ? "active" : ""}`}>
      <Link target="blank" href="https://github.com/Daniel-prz">
        GitHub
      </Link>
      <Link
        target="blank"
        href="https://www.linkedin.com/in/daniel-perez-416b2628a/"
      >
        LinkedIn
      </Link>
    </div>
  );
  return (
    <div className="flex md:flex-row flex-col items-center ">
      <div className="flex flex-col mt-8 ml-14 w-full">
        <h1 className="text-4xl ml-20 mb-2 mt-4 cursor-pointer">
          Daniel Perez
        </h1>
        <h2 className="text-xl ml-24 cursor-pointer">Software Developer</h2>
      </div>
      <ul className="flex flex-row text-xl justify-around md:justify-between w-full mt-12 md:mr-24">
        <li>
          <Link className="hover:underline" href="/">
            Home
          </Link>
        </li>{" "}
        <li>
          <Link className="hover:underline" href="#projects">
            Projects
          </Link>
        </li>
        <li className="dropdown">
          <button className="dropbtn hover:underline" onClick={toggleDropdown}>
            Links
          </button>
          {dropdownContent}
        </li>
      </ul>
    </div>
  );
}
