import React from "react";
import Hero from "./sections/hero";
import Summary from "./sections/summary";
import Skills from "./sections/skills";
import Projects from "./sections/Projects";
import SocialMedia from "./sections/social-media";
import WorkExperience from "./sections/Work Experience";
import Education from "./sections/education";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials";
import LifeQuote from "./sections/life-quote";

// We will create these two pages in a moment
export default function App() {
  return (
    <div>
      <Hero />
      <LifeQuote />
      <Summary />
      {/* <Projects /> */}
      <Skills />
      <SocialMedia />
      <Testimonials />
      <WorkExperience />
      <Education />
      {/* <Contact /> */}
    </div>
  );
}
