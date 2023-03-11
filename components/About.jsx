import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 dark:text-gray-50">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // I am just a passerby Developer
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-50 italic">
            Hi there! I'm a passionate learner and developer always looking for
            new challenges.
          </p>
          <p className="py-2 lg:pr-40 text-gray-600 dark:text-gray-50">
            I am a Creative thinker as well, coding and developing my way to
            success. Currently developing with Next.js and Tailwind, but I'm
            always exploring new technologies and ideas, always looking for new
            projects to work on!
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-50 italic">
            Let's build something amazing together!
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer dark:text-gray-50">
              Check out my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-0 hover:scale-105 hover:shadow-gray-400 ease-in duration-300">
          <Image
            className="rounded-xl h-80 dark:hidden"
            src="/assets/aboutlight.png"
            alt="/"
            width="400"
            height="50"
          />
          <Image
            className="hidden dark:block rounded-xl h-80"
            src="/assets/aboutdark.png"
            alt="/"
            width="400"
            height="50"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
