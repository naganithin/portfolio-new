import { Mail, Github, Linkedin, Twitter, Globe, Coins, Send } from "lucide-react";
import { FaEthereum, FaTelegram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiResearchgate } from "react-icons/si";


const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "naganithinsydney@gmail.com",
    href: "mailto:naganithinsydney@gmail.com",
  },
  {
    icon: FaXTwitter,
    label: "X (Twitter)",
    value: "@Nithin_naga",
    href: "https://x.com/nithin_naga",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "naganithing",
    href: "https://linkedin.com/in/naganithing",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "naganithin",
    href: "https://github.com/naganithin",
  },
  {
    icon: SiResearchgate,
    label: "ResearchGate",
    value: "Naga-Nithin",
    href: "https://www.researchgate.net/profile/Naga-Nithin",
  },
  {
    icon: FaEthereum,
    label: "Ethereum",
    value: "contractswizard.eth",
    href: "https://etherscan.io/address/0x09D5d68C83D5db131233CE12e85EDfBEEAf6c5ea",
  },
  {
    icon: FaTelegram,
    label: "Telegram",
    value: "@Nithinnnaga",
    href: "https://t.me/Nithinnaga",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-4 py-20 bg-muted/30 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, collaborations, 
            or just chatting about blockchain technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contactLinks.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphic rounded-xl p-6 hover:scale-105 transition-transform group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-secondary group-hover:scale-110 transition-transform">
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center glassmorphic rounded-2xl p-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground mb-6">
            Looking for a dedicated blockchain developer to bring your Web3 vision to life?
          </p>
          <a
            href="mailto:naganithinsydney@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Send Me a Message
          </a>
        </div>
      </div>
    </section>
  );
};
