import React from "react"
import Hero from "./sections/Hero";
import Summary from "./sections/Summary";
import Skills from "./sections/Skills"
import Projects from "./sections/Projects";
import SocialMedia from "./sections/Social Media";
import WorkExperience from "./sections/Work Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials"
import LifeQuote from "./sections/Life Quote";

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