import Link from "next/link";
import React from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w=full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full dark:text-gray-50">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4 ">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Ayush Garg</h2>
                <p className="italic">Front-end Developer</p>

                <p className="py-4 pt-12">
                  Do you have some interesting projects with you, Wanna work on
                  them with me?
                </p>
                <p className="py-2">
                  Fill the given form and I will reach out to you.
                </p>
              </div>

              <div>
                <p className="uppercase pt-16 ">Connect with Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://www.linkedin.com/in/ayush-garg-b4a407228"
                      target="_blank"
                      alt="/"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://github.com/Ayush200230"
                      target="_blank"
                      alt="/"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="mailto:humbleayush30@gmail.com">
                      <SiGmail />
                    </a>
                  </div>
                  {/*<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
  </div>*/}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 "
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 "
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 dark:shadow-gray-800">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size="30" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
