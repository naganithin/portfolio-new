import { ExternalLink, FileText } from "lucide-react";
import pubVaccinationImg from "@/assets/pub-vaccination.png";
import pubZkHealthImg from "@/assets/pub-zkhealth.png";
import pubGlucometerImg from "@/assets/pub-glucometer.png";
import pubUbiquitousImg from "@/assets/pub-ubiquitous.png";
import pubBookImg from "@/assets/pub-book.png";

const publications = [
  {
    title: "Building Decentralized Applications with Ethereum and Solidity",
    publisher: "OrangeAva, 2025 (Technical Reviewer)",
    description: "Comprehensive guide to developing decentralized applications using Ethereum blockchain and Solidity smart contracts.",
    image: pubBookImg,
    link: "https://orangeava.in/products/building-decentralized-applications-with-ethereum-and-solidity",
  },
  {
    title: "An Efficient and Secure Mechanism for Ubiquitous Sustainable Computing System",
    publisher: "Springer 2023",
    description: "Research on sustainable computing architecture with enhanced security mechanisms for distributed systems.",
    image: pubUbiquitousImg,
    link: "https://link.springer.com/chapter/10.1007/978-3-031-45882-8_12",
  },
  {
    title: "Blockchain-Based Secure Noninvasive Glucometer and Automatic Insulin Delivery System",
    publisher: "Springer 2023",
    description: "Smart contract-enabled medical device for secure glucose monitoring and automated insulin delivery with blockchain verification.",
    image: pubGlucometerImg,
    link: "https://link.springer.com/chapter/10.1007/978-3-031-45882-8_11",
  },
  {
    title: "zkHealthChain – Blockchain Enabled Supply Chain in Healthcare Using Zero Knowledge",
    publisher: "Springer 2023",
    description: "Novel approach to healthcare supply chain management using zero-knowledge proofs for privacy-preserving data verification.",
    image: pubZkHealthImg,
    link: "https://link.springer.com/chapter/10.1007/978-3-031-45882-8_10",
  },
  {
    title: "Global Vaccination Tracking System using Blockchain and IoT",
    publisher: "IEEE iSES 2021",
    description: "Research on blockchain-based global vaccination tracking integrated with IoT sensors for secure health data management.",
    image: pubVaccinationImg,
    link: "https://ieeexplore.ieee.org/document/9701039/",
  },
  
];

export const Publications = () => {
  return (
    <section id="publications" className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-fade-in">
          Publications & Research
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <div
              key={pub.title}
              className="glassmorphic rounded-xl overflow-hidden hover:scale-105 transition-transform animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <div className="p-2 bg-card/90 rounded-full">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{pub.title}</h3>
                <p className="text-sm text-primary mb-3 font-medium">{pub.publisher}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{pub.description}</p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-semibold"
                >
                  Read More <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
