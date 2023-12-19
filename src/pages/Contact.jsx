import { Contact, StarsCanvas } from "../components/index.js";
import React from "react";

const ContactPage = () => (
  <div className="min-h-[1109px] sm:mt-0 xl:h-[calc(100vh-86px)]">
    <Contact />
    <StarsCanvas />
  </div>
);

export default ContactPage;
