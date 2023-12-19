import { About, Experience, Feedbacks, Tech } from "../components/index.js";
import React from "react";

const AboutPage = () => (
  <div className="mt-12 sm:mt-0">
    <About />
    <Experience />
    <Tech />
    <Feedbacks />
  </div>
);

export default AboutPage;
