import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion.js";
import { styles } from "../styles.js";

// Technologies
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My tech stack</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-6 mt-10">
        {/* Title */}

        {/* Iterate over each technology */}
        {technologies.map((technology) => (
          <div
            className="flex flex-col items-center gap-3 w-28 h-28"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <p className="">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
