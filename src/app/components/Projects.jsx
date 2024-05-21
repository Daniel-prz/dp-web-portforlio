"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import GitHub from "../svgs/GitHub";
import GitHub2 from "../svgs/GitHub2";

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal and set the selected image
  const openModal = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling of the background content
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
    document.body.style.overflow = ""; // Enable scrolling of the background content
  };
  return (
    <div className="w-full flex flex-col  justify-center items-center">
      <div className=" flex flex-col  justify-center items-center">
        <h3
          id="projects"
          className="projects-header cursor-pointer border-b border-gray-200 text-center w-10/12 pb-3 mb-6 text-2xl"
        >
          Projects
        </h3>
        <ul className="flex flex-col md:flex-row w-full content-center justify-center items-center md:gap-x-24">
          <li className="flex flex-col text-center content-center items-center">
            <Link
              className="text-center text-xl"
              target="blank"
              href="https://daniel-prz.github.io/CapstoneLevel1/"
            >
              <p className="hover:underline">Online Store Website</p>
            </Link>
            <Link
              href="https://github.com/Daniel-prz/CapstoneLevel1"
              target="blank"
            >
              <GitHub2 />
            </Link>
            <div
              className="deployedSite"
              onClick={() => openModal("/images/MusicShop.png")}
            >
              <Image
                alt="Music Shop Image"
                className="fit cursor-pointer"
                fill={true}
                src="/images/MusicShop.png"
                on
              />
            </div>
            <h4 className="mt-2 text-xl bold italic mb-1">Skills used:</h4>
            <ul>
              <li className="cursor-pointer">HTML</li>
              <li className="cursor-pointer">CSS </li>
            </ul>
          </li>

          <li className="flex flex-col text-center content-center items-center mt-11">
            <Link
              className="text-center text-xl"
              target="blank"
              href="https://daniel-prz.github.io/Capstone2/"
            >
              <p className="hover:underline">Coding Quiz Website</p>
            </Link>
            <Link href="https://github.com/Daniel-prz/Capstone2" target="blank">
              <GitHub2 />
            </Link>
            <div
              className="deployedSite"
              onClick={() => openModal("/images/CodeQuiz.png")}
            >
              <Image
                alt="Code Quiz Image"
                className="fit cursor-pointer"
                fill={true}
                src="/images/CodeQuiz.png"
              />
            </div>
            <h4 className="mt-2 text-xl bold italic mb-1">Skills used:</h4>
            <ul>
              <li className="cursor-pointer">HTML</li>
              <li className="cursor-pointer">Sass</li>
              <li className="cursor-pointer">Javascript</li>
              <li className="cursor-pointer">API Integration</li>
            </ul>
          </li>
          <li className="flex flex-col text-center content-center items-center mt-5">
            <Link
              className="text-center text-xl"
              target="blank"
              href="https://musicmarketjs.netlify.app/"
            >
              <p className="hover:underline">Community Website</p>
            </Link>
            <Link
              href="https://github.com/Daniel-prz/level-3-project"
              target="blank"
            >
              <GitHub2 />
            </Link>
            <div
              className="deployedSite"
              onClick={() => openModal("/images/MusicMarket.png")}
            >
              <Image
                alt="Music Market Image"
                className="fit cursor-pointer"
                fill={true}
                src="/images/MusicMarket.png"
              />
            </div>
            <h4 className="mt-2 text-xl bold italic mb-1">Skills used:</h4>
            <ul>
              <li className="cursor-pointer">Next.js</li>
              <li className="cursor-pointer">Tailwind</li>
              <li className="cursor-pointer">API integration</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {/* Display the selected image in the modal */}
            <Image
              alt="Selected Image"
              src={selectedImage}
              layout="responsive"
              width={800}
              height={600}
            />
          </div>
        </div>
      )}
    </div>
  );
}
