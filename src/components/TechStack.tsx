import React, { useEffect, useRef, useState } from 'react';

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "Vue.js", "Next.js", 
  "Express", "MongoDB", "PostgreSQL", "Docker", "AWS", "GraphQL",
  "Tailwind CSS", "Three.js", "WebGL", "Socket.io", "Redis", "Kubernetes"
];

const TechStack: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    if (isVisible) {
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-950 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-sm tracking-widest text-gray-500 mb-8">
            03 / TECH STACK
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="block">Tools of the</span>
            <span className="block text-gray-400">trade</span>
          </h2>
        </div>

        {/* Scrolling tech ticker */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-hidden whitespace-nowrap"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate the array for seamless loop */}
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className={`inline-flex items-center px-8 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full text-xl font-medium whitespace-nowrap transition-all duration-300 hover:bg-gray-800 hover:border-gray-700 hover:scale-105 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${(index % technologies.length) * 100}ms`
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className={`mt-20 grid md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="group p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
              Frontend
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Crafting immersive user experiences with modern frameworks, 
              responsive design, and interactive animations.
            </p>
          </div>
          
          <div className="group p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
              Backend
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Building scalable architectures with robust APIs, 
              databases, and cloud infrastructure.
            </p>
          </div>
          
          <div className="group p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">
              DevOps
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Streamlining deployment pipelines with containerization, 
              automation, and monitoring solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;