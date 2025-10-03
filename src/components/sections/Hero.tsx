import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-2xl opacity-30 animate-pulse"></div>
            <img
              src={profileImage}
              alt="Naga Nithin G"
              className="relative w-40 h-40 rounded-full border-4 border-card shadow-[var(--shadow-card)] object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
          Naga Nithin G
        </h1>
        
        <h4 className="text-2xl md:text-2xl font-semibold mb-6 gradient-text">
          Blockchain Developer || Smart Contract Developer || Solidity Engineer
        </h4>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
           Blockchain Developer with 3+ years of experience building secure smart contracts and dApps on Ethereum-compatible chains. Skilled in Solidity, IPFS, zk-SNARKs, and Layer 2 scaling. Proven track record in delivering production-ready DeFi and tokenization platforms with a focus on security, audit readiness, and gas optimization. Experienced in AI/LLM integrations, RWA tokenization, and compliant on/off-ramp solutions across multiple B2B Web3 products.</p>

        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};
