import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const technicalSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "Git & GitHub",
    "PostgreSQL & Prisma",
    "Express.js",
    "REST API",
    "Responsive Design"
  ];

  const softSkills = [
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Adaptability",
    "Creativity",
    "Time Management",
    "Independence",
    "Analytical Thinking"
  ];

  return (
    <section id="skills" className="min-h-screen bg-[#21363b] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My Skills
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-[#505721] bg-white p-1">
            <button
              onClick={() => setActiveTab("technical")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "technical"
                  ? "bg-[#505721] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab("soft")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "soft"
                  ? "bg-[#505721] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Soft Skills
            </button>
            <button
              onClick={() => setActiveTab("languages")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "languages"
                  ? "bg-[#505721] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Languages
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="animate-fadeIn">
          {activeTab === "technical" && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#505721] p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all text-center border-2 border-[#a3a380]"
                >
                  <p className="text-lg font-semibold text-white">{skill}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "soft" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#505721] p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all text-center border-2 border-[#a3a380]"
                >
                  <p className="text-lg font-semibold text-white">{skill}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "languages" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#505721] p-8 rounded-lg shadow-md hover:shadow-xl transition-all text-center border-2 border-[#a3a380]">
                <p className="text-2xl font-bold text-white mb-2">Swedish</p>
                <p className="text-gray-300">Very good in speech and writing</p>
              </div>
              <div className="bg-[#505721] p-8 rounded-lg shadow-md hover:shadow-xl transition-all text-center border-2 border-[#a3a380]">
                <p className="text-2xl font-bold text-white mb-2">Arabic</p>
                <p className="text-gray-300">Native language</p>
              </div>
              <div className="bg-[#505721] p-8 rounded-lg shadow-md hover:shadow-xl transition-all text-center border-2 border-[#a3a380]">
                <p className="text-2xl font-bold text-white mb-2">English</p>
                <p className="text-gray-300">Good knowledge</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;