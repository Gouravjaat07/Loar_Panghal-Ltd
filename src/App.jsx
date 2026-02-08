import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrollY > 50 ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">Loar Panghal</div>
            
            {/* Desktop Menu */}
            <div className="nav-menu">
              <a href="#product" className="nav-link">Product</a>
              <a href="#technology" className="nav-link">Technology</a>
              <a href="#applications" className="nav-link">Applications</a>
              <a href="#company" className="nav-link">Company</a>
              <button className="btn-contact">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-nav">
              <a href="#product">Product</a>
              <a href="#technology">Technology</a>
              <a href="#applications">Applications</a>
              <a href="#company">Company</a>
              <button className="btn-contact mobile">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          {/* Top Cards */}
          <div className="hero-cards">
            <div className="hero-card">
              <h3>Long-Distance Riding</h3>
              <p>Maintains comfort during extended rides in extreme temperatures.</p>
              <a href="#" className="link-explore">
                Explore <ChevronRight size={18} />
              </a>
            </div>
            <div className="hero-card">
              <h3>Industrial Operations</h3>
              <p>Protects workers exposed to harsh thermal environments.</p>
              <a href="#" className="link-explore">
                Explore <ChevronRight size={18} />
              </a>
            </div>
            <div className="hero-card">
              <h3>Defense & Security</h3>
              <p>Supports personnel operating in unpredictable climates.</p>
              <a href="#" className="link-explore">
                Explore <ChevronRight size={18} />
              </a>
            </div>
          </div>

          {/* Hero Title */}
          <div className="hero-content">
            <h1 className="hero-title">Engineered for the Future of Mobility</h1>
            <button className="btn-3d">Get in Touch</button>
          </div>
        </div>
      </section>

      {/* Thermal Science */}
      <section className="thermal-section">
        <div className="container">
          <div className="thermal-box">
            <h2>Built on Advanced Thermal Science</h2>
            <p>The system integrates embedded electronics, material science, and intelligent control logic to deliver safe, reliable, and adaptive thermal performance.</p>
          </div>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section id="applications" className="scenarios">
        <div className="container">
          <h2 className="section-title">Real-World Use Scenarios</h2>
          <p className="section-subtitle">Designed to perform reliably across diverse operational environments.</p>

          <div className="scenario-grid">
            <div className="scenario-card">
              <h3>Long-Distance Riding</h3>
              <p>Maintains comfort during extended rides in extreme temperatures.</p>
              <a href="#" className="link-explore">
                Explore <ChevronRight size={18} />
              </a>
            </div>
            <div className="scenario-card">
              <h3>Industrial Operations</h3>
              <p>Protects workers exposed to harsh thermal environments.</p>
              <a href="#" className="link-explore">
                Explore <ChevronRight size={18} />
              </a>
            </div>
            <div className="scenario-card">
              <h3>Defense & Security</h3>
              <p>Supports personnel operating in unpredictable climates.</p>
              <a href="#" className="link-explore">
                Explore <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="technology" className="how-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-num">01</div>
              <h3>Sense</h3>
              <p>High-accuracy sensors capture thermal conditions continuously.</p>
            </div>
            <div className="process-card">
              <div className="process-num">02</div>
              <h3>Analyze</h3>
              <p>Embedded logic evaluates temperature data in real time.</p>
            </div>
            <div className="process-card">
              <div className="process-num">03</div>
              <h3>Regulate</h3>
              <p>Adaptive output adjusts heating or cooling dynamically.</p>
            </div>
            <div className="process-card">
              <div className="process-num">04</div>
              <h3>Protect</h3>
              <p>Built-in safety layers prevent thermal overshoot or failure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section - Device */}
      <section id="product" className="product">
        <div className="container">
          <div className="product-layout">
            <div className="product-info">
              <h2>Thermal Regulation Device</h2>
              <p className="product-desc">A compact electronic control unit engineered with precision-machined materials and designed for reliable operation in demanding environments.</p>

              <div className="specs">
                <div className="spec-row">
                  <span className="spec-label">Operating Range</span>
                  <span className="spec-value">-20°C to +55°C</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Response Time</span>
                  <span className="spec-value">&lt; 200 ms</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Power Input</span>
                  <span className="spec-value">12V / 24V DC</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Ingress Protection</span>
                  <span className="spec-value">IP65 Rated</span>
                </div>
              </div>
            </div>

            <div className="product-visual">
              <div className="device-showcase">
                <div className="device-glow"></div>
                <div className="device-body">
                  <div className="device-inner">
                    <div className="device-dial">
                      <div className="dial-ring"></div>
                      <div className="dial-center"></div>
                      <div className="dial-line blue"></div>
                      <div className="dial-line orange"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Section - Jacket */}
          <div className="product-layout">
            <div className="product-visual">
              <div className="jacket-showcase">
                <div className="jacket-glow"></div>
                <div className="jacket-body">
                  <div className="jacket-shape"></div>
                </div>
              </div>
            </div>

            <div className="product-info">
              <h2>Adaptive Thermal Jacket</h2>
              <p className="product-desc">Ergonomic wearable designed for riders and operators, featuring intelligent thermal zones for sustained comfort.</p>

              <div className="specs">
                <div className="spec-row">
                  <span className="spec-label">Material</span>
                  <span className="spec-value">Technical Insulated Fabric</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Thermal Zones</span>
                  <span className="spec-value">Multi-Zone Distribution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="capabilities">
        <div className="container">
          <h2 className="section-title">Core Capabilities</h2>

          <div className="cap-grid">
            <div className="cap-card">
              <h3>Precision Thermal Sensing</h3>
              <p>Continuously monitors body and ambient temperature in real time.</p>
            </div>
            <div className="cap-card">
              <h3>Adaptive Control Algorithms</h3>
              <p>Automatically regulates heating and cooling based on conditions.</p>
            </div>
            <div className="cap-card">
              <h3>Zoned Temperature Distribution</h3>
              <p>Delivers targeted thermal output where it matters most.</p>
            </div>
            <div className="cap-card">
              <h3>Energy-Optimized Operation</h3>
              <p>Designed for extended use with minimal power consumption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Precision Thermal Control for Real-World Conditions</h2>
            <p>An integrated thermal regulation system designed to maintain human comfort and safety across vehicles and extreme environments.</p>
            <div className="cta-buttons">
              <button className="btn-3d">Explore Product</button>
              <button className="btn-outline">Technology Overview →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-copy">© 2026 Loar Panghal Private Limited</p>
          <p className="footer-tag">Advanced Thermal Systems · India</p>
        </div>
      </footer>
    </div>
  );
};

export default App;