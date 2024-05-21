"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import LinkedIn from "../svgs/LinkedIn";
import GitHub from "../svgs/GitHub";

export default function SendEmail() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  emailjs.init({
    publicKey: "NEXT_PUBLIC_KEY",
    // Do not allow headless browsers
    blockHeadless: true,

    limitRate: {
      // Set the limit rate for the application
      id: "app",
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("SERVICE_ID", "TEMPLATE_ID", form.current, {
        publicKey: "NEXT_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          closeModal();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <button
        className="italic text-xl contact-me hover:underline"
        onClick={openModal}
      >
        Contact Me
      </button>
      {showModal && (
        <div className="custom-modal">
          <div className="custom-modal-content">
            <span className="custom-close" onClick={closeModal}>
              &times;
            </span>
            <form className="email-form" ref={form} onSubmit={sendEmail}>
              <label>Name:</label>
              <input
                className="email-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Email:</label>
              <input
                className="email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Message:</label>
              <textarea
                className="message-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button className="email-input send" type="submit">
                Send Email
              </button>
              <p className="italic text-lg mb-8">
                ...altenatively, simply email me at dan.84.pz@gmail.com
              </p>
              <ul className="flex flex-row justify-around gap-x-24 mb-2">
                <li className="flex items-center">
                  <Link
                    className="footer-link form-link"
                    href="https://github.com/Daniel-prz"
                    title="GitHub"
                  >
                    <GitHub />
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    className="footer-link form-link"
                    href="https://www.linkedin.com/in/daniel-perez-416b2628a/"
                    title="LinkedIn"
                  >
                    <LinkedIn />
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
