import React from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Building in Progress
          </p>
          <h1 className="py-4 text-gray-700 dark:text-gray-100">
            Hi, I'm <span className="text-[#5651e5]"> Ayush</span>
          </h1>

          <h1 className="py-2 text-gray-700 dark:text-gray-100">
            A Front-end Web Developer
          </h1>
          <p className="py-4 text-gray-600 dark:text-gray-400 sm:max-w-[70%] m-auto">
            “If there’s one thing you learn by working on a lot of different Web
            sites, it’s that almost any design idea–no matter how appallingly
            bad–can be made usable in the right circumstances, with enough
            effort.”
          </p>
          <p className="py-4 text-gray-600 dark:text-gray-400 sm:max-w-[70%] m-auto">
            "A New Generation Emerges from this point"
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 dark:text-white">
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
              <a href="https://github.com/Ayush200230" target="_blank" alt="/">
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
  );
};

export default Main;
