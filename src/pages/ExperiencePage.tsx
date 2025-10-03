import { ThemeToggle } from "@/components/ThemeToggle";
import { Dock } from "@/components/Dock";
import { Experience } from "@/components/sections/Experience";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <Experience />

      <Dock />
      <div className="h-32" />
    </div>
  );
};

export default ExperiencePage;
