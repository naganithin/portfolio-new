import { Home, Briefcase, FolderOpen, BookOpen, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface DockItem {
  id: string;
  icon: React.ElementType;
  label: string;
  href: string;
}

const dockItems: DockItem[] = [
  { id: "home", icon: Home, label: "Home", href: "/" },
  { id: "experience", icon: Briefcase, label: "Experience", href: "/experience" },
  { id: "projects", icon: FolderOpen, label: "Projects", href: "/projects" },
  { id: "publications", icon: BookOpen, label: "Publications", href: "/publications" },
  { id: "contact", icon: Mail, label: "Contact", href: "/contact" },
];

export const Dock = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (href: string) => {
    navigate(href);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div className="glassmorphic rounded-2xl px-4 py-3 shadow-[var(--shadow-dock)]">
        <div className="flex items-end gap-2">
          {dockItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.href)}
              className={`dock-item-hover group relative flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                location.pathname === item.href 
                  ? "bg-card" 
                  : "bg-card/50 hover:bg-card"
              }`}
              aria-label={item.label}
            >
              <item.icon className={`h-6 w-6 ${
                location.pathname === item.href 
                  ? "text-primary" 
                  : "text-foreground"
              }`} />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-card px-3 py-1 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap shadow-lg">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
