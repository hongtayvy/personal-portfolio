import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-8 py-20 relative z-10">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-sm tracking-widest text-gray-500 mb-8">
            04 / GET IN TOUCH
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="block">Let's create</span>
            <span className="block text-gray-400">something</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              extraordinary
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project 
            and explore the possibilities together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="group">
              <div className="flex items-center gap-4 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email</div>
                  <div className="text-lg font-medium">yangnv@live.com</div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-center gap-4 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300">
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Phone</div>
                  <div className="text-lg font-medium">(262) 613 - 7951</div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-center gap-4 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300">
                <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Location</div>
                  <div className="text-lg font-medium">Minneapolis, MN</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:scale-100"
                data-cursor="hover"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-20 pt-8 border-t border-gray-800 text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <p className="text-gray-500">
            © 2025 Victor Yang. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;