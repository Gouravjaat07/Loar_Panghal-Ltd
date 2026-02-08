import React, { useState, useEffect } from 'react';
import { Camera, ChevronRight, Menu, X } from 'lucide-react';

const LoarPanghalWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }
        
        .font-display {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #e8f0ff 0%, #f5e6ff 50%, #ffe8e8 100%);
        }
        
        .card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .explore-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #4b5563;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .explore-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #1f2937;
          transition: width 0.3s ease;
        }
        
        .explore-link:hover::after {
          width: calc(100% - 1.5rem);
        }
        
        .explore-link:hover {
          color: #1f2937;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(31, 41, 55, 0.3);
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(31, 41, 55, 0.4);
        }
        
        .feature-number {
          font-size: 0.75rem;
          font-weight: 600;
          color: #9ca3af;
          margin-bottom: 0.5rem;
        }
        
        .device-image {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .nav-blur {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.9);
        }
        
        .process-step {
          position: relative;
          padding-left: 1.5rem;
        }
        
        .process-step::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 2px;
        }
        
        .tech-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
        
        @media (max-width: 768px) {
          .tech-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'nav-blur shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-display">Loar Panghal</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#product" className="text-gray-700 hover:text-gray-900 transition-colors">Product</a>
              <a href="#technology" className="text-gray-700 hover:text-gray-900 transition-colors">Technology</a>
              <a href="#applications" className="text-gray-700 hover:text-gray-900 transition-colors">Applications</a>
              <a href="#company" className="text-gray-700 hover:text-gray-900 transition-colors">Company</a>
              <button className="px-6 py-2 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="#product" className="block text-gray-700 hover:text-gray-900">Product</a>
              <a href="#technology" className="block text-gray-700 hover:text-gray-900">Technology</a>
              <a href="#applications" className="block text-gray-700 hover:text-gray-900">Applications</a>
              <a href="#company" className="block text-gray-700 hover:text-gray-900">Company</a>
              <button className="w-full px-6 py-2 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all">
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 gradient-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Long-Distance Riding",
                description: "Maintains comfort during extended rides in extreme temperatures."
              },
              {
                title: "Industrial Operations",
                description: "Protects workers exposed to harsh thermal environments."
              },
              {
                title: "Defense & Security",
                description: "Supports personnel operating in unpredictable climates."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-3 font-display">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <a href="#" className="explore-link">
                  Explore <ChevronRight size={20} />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center fade-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Engineered for the Future of Mobility
            </h1>
            <button className="cta-button text-white px-8 py-4 rounded-full text-lg font-medium">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Advanced Thermal Science Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="gradient-bg rounded-3xl p-12 text-center fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Built on Advanced Thermal Science
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The system integrates embedded electronics, material science, and intelligent control logic to deliver safe, reliable, and adaptive thermal performance.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Use Scenarios */}
      <section id="applications" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-display fade-in">
            Real-World Use Scenarios
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg fade-in">
            Designed to perform reliably across diverse operational environments.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Long-Distance Riding",
                description: "Maintains comfort during extended rides in extreme temperatures."
              },
              {
                title: "Industrial Operations",
                description: "Protects workers exposed to harsh thermal environments."
              },
              {
                title: "Defense & Security",
                description: "Supports personnel operating in unpredictable climates."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold mb-4 font-display">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <a href="#" className="explore-link">
                  Explore <ChevronRight size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Process Section */}
      <section id="technology" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-display fade-in">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              {
                number: "01",
                title: "Sense",
                description: "High-accuracy sensors capture thermal conditions continuously."
              },
              {
                number: "02",
                title: "Analyze",
                description: "Embedded logic evaluates temperature data in real time."
              },
              {
                number: "03",
                title: "Regulate",
                description: "Adaptive output adjusts heating or cooling dynamically."
              },
              {
                number: "04",
                title: "Protect",
                description: "Built-in safety layers prevent thermal overshoot or failure."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 fade-in process-step"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-number">{item.number}</div>
                <h3 className="text-xl font-semibold mb-3 font-display">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section id="product" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Thermal Regulation Device */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-6 font-display">Thermal Regulation Device</h2>
              <p className="text-gray-600 mb-8 text-lg">
                A compact electronic control unit engineered with precision-machined materials and designed for reliable operation in demanding environments.
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-semibold">Operating Range</span>
                  <span className="text-gray-600">-20°C to +55°C</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-semibold">Response Time</span>
                  <span className="text-gray-600">&lt; 200 ms</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-semibold">Power Input</span>
                  <span className="text-gray-600">12V / 24V DC</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-semibold">Ingress Protection</span>
                  <span className="text-gray-600">IP65 Rated</span>
                </div>
              </div>
            </div>

            <div className="fade-in flex justify-center" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gray-900 rounded-3xl p-12 device-image">
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                        <div className="w-24 h-24 bg-gray-900 rounded-full"></div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-blue-400"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-orange-400 rotate-90"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Adaptive Thermal Jacket */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 fade-in flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gray-100 rounded-3xl p-12">
                  <div className="w-64 h-80 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl"></div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl font-bold mb-6 font-display">Adaptive Thermal Jacket</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Ergonomic wearable designed for riders and operators, featuring intelligent thermal zones for sustained comfort.
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-semibold">Material</span>
                  <span className="text-gray-600">Technical Insulated Fabric</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-semibold">Thermal Zones</span>
                  <span className="text-gray-600">Multi-Zone Distribution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-display fade-in">
            Core Capabilities
          </h2>

          <div className="tech-grid">
            {[
              {
                title: "Precision Thermal Sensing",
                description: "Continuously monitors body and ambient temperature in real time."
              },
              {
                title: "Adaptive Control Algorithms",
                description: "Automatically regulates heating and cooling based on conditions."
              },
              {
                title: "Zoned Temperature Distribution",
                description: "Delivers targeted thermal output where it matters most."
              },
              {
                title: "Energy-Optimized Operation",
                description: "Designed for extended use with minimal power consumption."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-8 card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 font-display">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 gradient-bg">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Precision Thermal Control for Real-World Conditions
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            An integrated thermal regulation system designed to maintain human comfort and safety across vehicles and extreme environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cta-button text-white px-8 py-4 rounded-full text-lg font-medium">
              Explore Product
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all">
              Technology Overview →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-2">© 2026 Loar Panghal Private Limited</p>
          <p className="text-gray-500">Advanced Thermal Systems · India</p>
        </div>
      </footer>
    </div>
  );
};

export default LoarPanghalWebsite;