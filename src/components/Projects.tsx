import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Neural Commerce",
    category: "E-commerce Platform",
    description: "AI-powered shopping experience with personalized recommendations and dynamic pricing.",
    tech: ["React", "Node.js", "TensorFlow", "MongoDB"],
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Quantum Analytics",
    category: "Data Visualization",
    description: "Real-time analytics dashboard with interactive 3D data visualizations and predictive modeling.",
    tech: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Nexus Collaboration",
    category: "Team Platform",
    description: "Next-generation workspace with real-time collaboration and immersive video conferencing.",
    tech: ["Next.js", "Socket.io", "WebRTC", "Redis"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-green-500 to-teal-500"
  }
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-12" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-sm tracking-widest text-gray-500 mb-8">
            02 / SELECTED WORK
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-20">
            <span className="block">Featured</span>
            <span className="block text-gray-400">projects</span>
          </h2>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transform transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              data-cursor="hover"
            >
              <div
                className="relative h-96 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-60 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                  <div>
                    <div className="text-sm tracking-wider opacity-80 mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-4xl font-bold mb-4 transform transition-transform duration-500 group-hover:translate-x-2">
                      {project.title}
                    </h3>
                  </div>

                  <div className="transform transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-lg mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors">
                        <ExternalLink size={16} />
                        Live Demo
                      </button>
                      <button className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors">
                        <Github size={16} />
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${selectedProject.color} opacity-60 mix-blend-multiply rounded-t-2xl`} />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                  <ExternalLink size={16} />
                  Live Demo
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <Github size={16} />
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;