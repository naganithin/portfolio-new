import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Sustainability Economics",
    location: "Bengaluru, India",
    role: "Blockchain Developer",
    duration: "Mar 2023 – Present",
    achievements: [
      "Acted as product lead for blockchain initiatives, guiding architecture, feature prioritization, and integration with DeFi and AI workflows.",
      "Designed and deployed Solidity smart contracts for tokenized marketplaces, staking, and yield modules using ERC-1155 and modular patterns.",
        "Implemented cross-chain USDC on/off-ramp solutions with calldata compression and secure fallback mechanisms.",
      "Collaborated with QA and audit teams to ensure test coverage, formal verification, and gas-optimized smart contracts using Hardhat and Foundry.",
    ],
  },
  {
    company: "EnigmaSoft Technologies",
    location: "Goa, India",
    role: "Solidity Developer",
    duration: "Aug 2022 – Mar 2023",
    achievements: [
      "Developed staking modules for ETH 2.0-compliant contracts with modular validator and slashing architecture.",
      "Optimized smart contract gas consumption via storage layout audits and inline Yul assembly.",
      "Enhanced NFT platforms with lazy minting, EIP-2981 royalties, and dynamic IPFS metadata integration.",
      "Performed static analysis and fuzz testing to detect and patch multiple security vulnerabilities.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-fade-in">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="glassmorphic rounded-2xl p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <span className="font-semibold text-primary">{exp.company}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.duration}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
