import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden bg-gray-950 flex items-center"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl">
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="text-sm tracking-widest text-gray-500 mb-8">
              01 / ABOUT
            </div>
            
            <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-12">
              <span className="block">Engineer</span>
              <span className="block text-gray-400">meets</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                storyteller
              </span>
            </h2>
          </div>

          <div className={`grid md:grid-cols-2 gap-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                I craft digital experiences that bridge the gap between 
                technical excellence and human connection.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From concept to deployment, I build full-stack applications 
                that don't just function—they inspire, engage, and transform 
                the way people interact with technology.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="group">
                <div className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  5+
                </div>
                <div className="text-gray-400">Years crafting digital experiences</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  50+
                </div>
                <div className="text-gray-400">Projects brought to life</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-white group-hover:text-green-400 transition-colors">
                  ∞
                </div>
                <div className="text-gray-400">Passion for innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;