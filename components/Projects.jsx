import React from "react";
import Image from "next/image";
import project from "../public/assets/development.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Testing 1 "
            backgroundImg={project}
            projectUrl="/testing1"
          />
          <ProjectItem
            title="Testing 2 "
            backgroundImg={project}
            projectUrl="/testing2"
          />
          <ProjectItem
            title="Testing 3 "
            backgroundImg={project}
            projectUrl="/testing3"
          />
          <ProjectItem
            title="Testing 4 "
            backgroundImg={project}
            projectUrl="/testing4"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
