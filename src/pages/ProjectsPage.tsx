import { ThemeToggle } from "@/components/ThemeToggle";
import { Dock } from "@/components/Dock";
import { Projects } from "@/components/sections/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <Projects />

      <Dock />
      <div className="h-32" />
    </div>
  );
};

export default ProjectsPage;
