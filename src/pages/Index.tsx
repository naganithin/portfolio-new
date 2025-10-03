import { ThemeToggle } from "@/components/ThemeToggle";
import { Dock } from "@/components/Dock";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Publications } from "@/components/sections/Publications";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Theme Toggle - Fixed Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section with Skills and Education */}
      <div className="relative">
        <Hero />
        <div className="max-w-6xl mx-auto px-4">
          <Skills />
          <Education />
        </div>
      </div>

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Publications Section */}
      <Publications />

      {/* Contact Section */}
      <Contact />

      {/* Bottom Dock Navigation */}
      <Dock />

      {/* Bottom Padding for Dock */}
      <div className="h-32" />
    </div>
  );
};

export default Index;
