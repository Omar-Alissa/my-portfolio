const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#21363b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-400">Omar</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
              I build modern web applications with React, TypeScript, and Node.js. 
              Passionate about creating clean, efficient, and user-friendly solutions.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="bg-[#a3a380] hover:bg-[#505721] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="border-2 border-[#a3a380] hover:bg-[#a3a380] text-[#a3a380] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#a3a380] shadow-2xl bg-[#505721]">
                <img 
                  src="/src/assets/profile.png" 
                  alt="Omar - Full Stack Developer" 
                  className="w-full h-full object-cover object-center scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#a3a380] text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="font-semibold">Available for work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;