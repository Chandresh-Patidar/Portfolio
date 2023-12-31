import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Project Card
const ProjectCard = ({ index, name, description, tags, image }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[526px]"
    >
      <div className="relative w-full h-[230px] ">
        {/* Work image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="flex flex-col justify-between !h-[254px]">
        {/* Work Info */}
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px] overflow-hidden whitespace-nowrap text-overflow-ellipsis">
            {name}
          </h3>
          {description.map((point, i) => (
            <p
              key={`work-point-${i}`}
              className="text-white-100 text-[14px] pl-1 py-1 tracking-wider"
            >
              {point}
            </p>
          ))}
        </div>

        {/* Work Tag */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={index + tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  </motion.div>
);

// Works
const Works = () => {
  return (
    <>
      {/* Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      {/* About */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="empty-4 text-secondary text-[17px]  leading-[30px] text-justify mt-7 lg:mt-10"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Project Card */}
      <div className="my-20 flex flex-col xl:flex-row xl:justify-center items-center gap-7">
        {projects.map((project, i) => (
          <React.Fragment key={`project-${i}`}>
            <ProjectCard index={i} {...project} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
