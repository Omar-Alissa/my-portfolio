
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-[#21363b] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#505721] p-8 rounded-xl shadow-xl border-2 border-[#a3a380]">
              <h3 className="text-2xl font-bold mb-8 text-center">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-4 bg-[#21363b] rounded-lg hover:scale-105 transition-all">
                  <div className="bg-[#a3a380] p-4 rounded-lg flex-shrink-0">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a href="mailto:omarissa179@gmail.com" className="text-lg hover:text-[#a3a380] transition-colors font-medium">
                      omarissa179@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-4 bg-[#21363b] rounded-lg hover:scale-105 transition-all">
                  <div className="bg-[#a3a380] p-4 rounded-lg flex-shrink-0">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <a href="tel:+46765856550" className="text-lg hover:text-[#a3a380] transition-colors font-medium">
                      +46 765856550
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-4 bg-[#21363b] rounded-lg hover:scale-105 transition-all">
                  <div className="bg-[#a3a380] p-4 rounded-lg flex-shrink-0">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-400 text-sm mb-1">GitHub</p>
                    <a href="https://github.com/Omar-Alissa" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#a3a380] transition-colors font-medium">
                      github.com/Omar-Alissa
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;