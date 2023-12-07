import React from "react";
import { Footer, Hero as HomePage, Navbar } from "./components";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ResumeNew from "./components/resume/ResumeComponent.jsx";
import { AboutPage, ContactPage, WorkExperiencePage } from "./pages";

// App
const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary min-h-screen">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkExperiencePage />} />
          <Route path="/resume" element={<ResumeNew />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
