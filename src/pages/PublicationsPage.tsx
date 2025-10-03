import { ThemeToggle } from "@/components/ThemeToggle";
import { Dock } from "@/components/Dock";
import { Publications } from "@/components/sections/Publications";

const PublicationsPage = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <Publications />

      <Dock />
      <div className="h-32" />
    </div>
  );
};

export default PublicationsPage;
