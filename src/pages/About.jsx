import { About, Experience, Feedbacks, Tech } from "../components/index.js";
import React from "react";

const AboutPage = () => (
  <div className="my-7">
    <About />
    <Experience />
    <Tech />
    <Feedbacks />
  </div>
);

export default AboutPage;
