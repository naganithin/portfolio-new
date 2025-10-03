import { ExternalLink } from "lucide-react";
import hashVaultImg from "@/assets/project-hashvault.png";
import hashChatImg from "@/assets/project-hashchat.png";
import hashSubImg from "@/assets/project-hashsub.png";
import hashClaimImg from "@/assets/project-hashclaim.png";
import gudaImg from "@/assets/guda.jpeg"; // Add a placeholder image for GUDA

const projects = [
  {
    title: "GUDA",
    subtitle: "Global Utility of Digital Assets",
    description: "A crypto on/off-ramp platform enabling seamless fiat-crypto conversions and Web3 payments.",
    image: gudaImg,
    demo: "https://guda.app",
  },
  {
    title: "HashVault",
    subtitle: "Decentralized Password Manager",
    description: "AES-GCM + Argon2 encryption with IPFS metadata; Fleek-hosted frontend and Ethereum-auth.",
    image: hashVaultImg,
    demo: "https://youtube.com/watch?v=9B9k420xiUI",
  },
  {
    title: "HashChat",
    subtitle: "Private Chat dApp",
    description: "Secure chat with libp2p + IPFS backend; AI moderation and multi-wallet login support.",
    image: hashChatImg,
    demo: "https://youtube.com/watch?v=o1BAq-57U78",
  },
  {
    title: "HashSub",
    subtitle: "Auto-Pay Subscriptions",
    description: "Recurring payment system with smart contracts on Polygon; token-gated content access.",
    image: hashSubImg,
    demo: "https://youtube.com/watch?v=o1BAq-57U78",
  },
  {
    title: "HashClaim",
    subtitle: "Copyright Claim System",
    description: "Validator-based arbitration and zk-hash content verification for IP protection.",
    image: hashClaimImg,
    demo: "https://youtube.com/watch?v=dJFYE79cIOk",
  },
  
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-4 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-fade-in">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glassmorphic rounded-2xl overflow-hidden hover:scale-105 transition-transform animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    {project.title === "GUDA" ? "Visit Website" : "Watch Demo"} <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
