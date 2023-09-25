"use client";

import { motion } from "framer-motion";
import { ProjectModal } from "./ProjectModal";
import Image from "next/image";

interface ProjectItemProps {
  img: string;
  title: string;
  description: string;
  link: string;
  github: string;
  techs?:any
}

const ProjectItem = ({
  img,
  title,
  description,
  link,
  github,
  techs
}: ProjectItemProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="mb-6 border p-4 m-2 mt-[10px] shadow-pink rounded-md hover:shadow-md hover:shadow-[#bc0e5f] transition-shadow duration-300"
    >
      <Image
        className="w-[300px] mx-auto rounded-md   hover:shadow-md transition-shadow duration-300"
        src={img}
        alt="image"
        width="400"
        height="400"
      />
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <a
            className="text-primary hover:underline  hover:text-[#bc0e68] font-bold font-mono transition-text duration-300"
            href={link}
          >
            {title}
          </a>
          <a
            className="text-primary hover:underline  hover:text-[#bc0e68] font-bold font-mono transition-text duration-300"
            href={github}
          >
            GitHub
          </a>
        </div>
        <ProjectModal
          description={description}
          img={img}
          link={link}
          title={title}
          github={github}
          techs={techs}
        />
      </div>
    </motion.div>
  );
};

export default ProjectItem;
