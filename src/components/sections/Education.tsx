import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  return (
    <div className="py-16">
      <h3 className="text-3xl font-bold mb-8 text-center gradient-text">
        Education & Certifications
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Education */}
        <div className="glassmorphic rounded-xl p-6 animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-secondary">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-1 text-foreground">
                SRM University AP
              </h4>
              <p className="text-muted-foreground mb-1">
                B.Tech in Computer Science and Engineering
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span>2019 – 2023</span>
                <span>GPA: 8.26/10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div
          className="glassmorphic rounded-xl p-6 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-secondary to-accent">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-2 text-foreground">
                Certifications
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Blockchain and its Applications – IIT Kharagpur, 2022</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Blockchain Specialization – University at Buffalo (SUNY), 2022</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Blockchain Revolution Specialization – INSEAD, 2022</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
