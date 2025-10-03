import { Code2, Database, Blocks, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Smart Contracts",
    icon: Code2,
    skills: ["Solidity", "Hardhat", "Foundry", "Ethers.js", "Web3.js"],
  },
  {
    title: "Blockchain",
    icon: Blocks,
    skills: ["Ethereum", "Polygon", "Optimism", "Arbitrum", "EVM Chains"],
  },
  {
    title: "Storage & Data",
    icon: Database,
    skills: ["IPFS", "The Graph", "Subgraphs", "Chainlink Oracles"],
  },
  {
    title: "Zero Knowledge",
    icon: Shield,
    skills: ["zk-SNARKs", "o1js", "circom"],
  },
];

export const Skills = () => {
  return (
    <div className="py-16">
      <h3 className="text-3xl font-bold mb-8 text-center gradient-text">
        Skills & Expertise
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="glassmorphic rounded-xl p-6 hover:scale-105 transition-transform animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary">
                <category.icon className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                {category.title}
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
