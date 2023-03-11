import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ThemeToggle from "@/components/Themetoggle";

const Navbar = () => {
  const onButtonClick = () => {
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };

  const { theme, setTheme } = useTheme();

  const [nav, setNav] = useState(false);
  const [shadow, setshadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setshadow(true);
      } else {
        setshadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={
        shadow
          ? "fixed bg-[#ecf0f3] dark:bg-gray-900 w-full h-20 shadow-xl dark:shadow-gray-800 z-[100]"
          : "fixed bg-[#ecf0f3] dark:bg-gray-900 w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Link href="/">
          <Image
            className={
              nav
                ? "hidden"
                : "dark:rounded-full dark:shadow-lg dark:shadow-gray-800"
            }
            /*className={"dark:rounded-full dark:shadow-lg dark:shadow-gray-400"}*/
            src="/assets/favicon.ico"
            alt="/"
            width="70"
            height="50"
          />
        </Link>

        <div>
          <ul className="hidden md:flex dark:text-gray-50">
            <li>
              {/*<button
                aria-label="Toggle Dark Mode"
                className="ml-10 text-sm p-1 uppercase hover:border-b text-gray-100"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                Mode
              </button>*/}
              <ThemeToggle />
            </li>
            <li>
              <button
                onClick={onButtonClick}
                className="ml-10 text-sm p-1 uppercase hover:border-b border-b-black border-opacity-5 border-b-2 text-gray-100"
              >
                Resume
              </button>
            </li>

            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/certificate">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Certificate
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden dark:text-gray-50">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-gray-900 p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  onClick={() => setNav(false)}
                  className="dark:rounded-full dark:shadow-lg dark:shadow-gray-800"
                  src="/assets/favicon.ico"
                  width="87"
                  height="35"
                  alt="/"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg dark:shadow-gray-800 p-3 cursor-pointer dark:text-gray-50"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="flex border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 dark:text-gray-50">
                Ayush's Portfolio
              </p>
              <ul className="flex">
                <li>
                  {/*<button
                    aria-label="Toggle Dark Mode"
                    className="mt-4 text-sm p-1 hover:border-b"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    Mode
                  </button>*/}
                  <div className="mt-3 ">
                    <ThemeToggle />
                  </div>
                </li>
                <li className="py-4">
                  <button
                    onClick={onButtonClick}
                    className="ml-2 text-sm p-1 hover:border-b"
                  >
                    Resume
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase dark:text-gray-50">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#certificate">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Certificate
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  contact
                </li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#4a4ada]">
                Coding Time
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] dark:text-gray-50">
                <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://www.linkedin.com/in/ayush-garg-b4a407228"
                    target="_blank"
                    alt="/"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://github.com/Ayush200230"
                    target="_blank"
                    alt="/"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="mailto:humbleayush30@gmail.com">
                    <SiGmail />
                  </a>
                </div>
                {/*<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                  </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
