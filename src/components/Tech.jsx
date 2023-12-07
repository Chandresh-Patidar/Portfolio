import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Technologies
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6">
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
  );
};

export default SectionWrapper(Tech, "");
