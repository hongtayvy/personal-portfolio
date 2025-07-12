import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll('.letter');
      letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.add('animate-slide-up');
        }, index * 100);
      });
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div ref={heroRef} className="absolute inset-0">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform -skew-y-12 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-500/20 to-transparent transform skew-y-12 animate-pulse delay-1000" />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div ref={textRef} className="text-center px-8">
          <h1 className="text-8xl md:text-9xl font-bold tracking-tight mb-6">
            {'VICTOR YANG'.split('').map((letter, index) => (
              <span
                key={index}
                className={`letter inline-block opacity-0 transform translate-y-20 ${
                  letter === ' ' ? 'w-8' : ''
                }`}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
          <div className="text-xl md:text-2xl text-gray-400 tracking-wider opacity-0 animate-fade-in-up delay-1000">
            <span className="block mb-2">Full Stack Engineer</span>
            <span className="text-lg opacity-70">Builder of Digital Experiences</span>
          </div>
          
          <div className="mt-16 opacity-0 animate-fade-in-up delay-2000">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
            <div className="text-xs tracking-widest mt-4 text-gray-500 animate-bounce">
              SCROLL TO EXPLORE
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
};

export default Hero;