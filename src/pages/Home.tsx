import { ThemeToggle } from "@/components/ThemeToggle";
import { Dock } from "@/components/Dock";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="relative">
        <Hero />
        <div className="max-w-6xl mx-auto px-4">
          <Skills />
          <Education />
        </div>
      </div>

      <Dock />
      <div className="h-32" />
    </div>
  );
};

export default Home;
