import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// Hero
const Hero = () => {
  return (
    <section className="relative !h-[calc(100vh-80px)] w-full mx-auto">
      <div
        className={`${styles.paddingX} pt-24 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Title */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* About Me */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Chandresh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Dedicated front-end developer with 5 years'
            <br className="sm:block hidden" />
            expertise crafting seamless digital experiences.
            <br className="sm:block hidden" />
            Let's connect for innovative collaborations
            <br className="sm:block hidden" />
            and transformative projects.
          </p>
        </div>
      </div>

      {/* Canvas */}
      {/*505*/}
      <div className="flex h-[calc(100vh-405px)] md:h-[calc(100vh-505px)]  w-full items-start justify-start">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
