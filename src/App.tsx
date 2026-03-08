/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Last Updated: 2026-03-08 14:15
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Layers, 
  Search, 
  CheckCircle2, 
  Workflow, 
  TrendingUp, 
  Cpu, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  ArrowRight,
  Zap,
  Eye,
  Camera,
  Palette,
  Monitor,
  X,
  Flame,
  Leaf,
  Moon,
  Sun,
  Download
} from 'lucide-react';

// --- Constants ---

const THEMES = [
  { id: 'pro', name: 'Professional Gold', icon: Sparkles, color: '#D4AF37', accent: '#6366F1' },
  { id: 'cyber', name: 'Cyber Neon', icon: Zap, color: '#00FF00', accent: '#FF00FF' },
  { id: 'crimson', name: 'Crimson Fury', icon: Flame, color: '#FFD700', accent: '#DC2626' },
  { id: 'emerald', name: 'Emerald Forest', icon: Leaf, color: '#A8A9AD', accent: '#10B981' },
  { id: 'aurora', name: 'Cosmic Aurora', icon: Moon, color: '#38BDF8', accent: '#A855F7' },
];

// If you have a separate URL for your resume (e.g. from Vercel Blob or GitHub), 
// you can replace the value below with your direct URL string.
const RESUME_URL = `${import.meta.env.BASE_URL}assets/Vishal_Resume.pdf`;

// --- Components ---

const Lightbox = ({ isOpen, image, onClose }: { isOpen: boolean, image: string | null, onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative max-w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative group">
              <img
                src={image}
                alt="Popped out view"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
            </div>
            <button
              onClick={onClose}
              className="absolute -top-14 right-0 md:-right-14 p-3 glass rounded-full text-white hover:text-gold hover:scale-110 transition-all cursor-pointer"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [copied, setCopied] = useState(false);
  const email = "vishals812@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="glass max-w-md w-full p-10 rounded-[2.5rem] relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-silver/50 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center mx-auto mb-8 text-gold">
              <Mail size={40} />
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-4">Send a Message</h3>
            <p className="text-silver/60 mb-8">Choose how you'd like to connect with me.</p>

            <div className="space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center gap-3 w-full py-4 bg-white text-charcoal rounded-2xl font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all group"
              >
                <Zap size={18} className="group-hover:animate-pulse" />
                Open Mail Client
              </a>

              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-3 w-full py-4 glass rounded-2xl font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-all"
              >
                {copied ? <CheckCircle2 size={18} className="text-emerald-400" /> : <Layers size={18} />}
                {copied ? "Email Copied!" : "Copy Email Address"}
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex justify-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 glass rounded-full text-silver/40">
                  <Phone size={16} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-silver/30">+91 8072179167</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 glass rounded-full text-silver/40">
                  <MapPin size={16} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-silver/30">Chennai, India</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ theme, setTheme }: { theme: string, setTheme: (t: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTheme = THEMES.find(t => t.id === theme) || THEMES[0];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold tracking-tighter text-white">
          VISHAL
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-silver/70">
          {['About', 'Work', 'Quality', 'Impact', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover-glow transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="p-2 glass rounded-full text-gold hover:scale-110 transition-transform cursor-pointer flex items-center gap-2"
              title="Change Theme"
            >
              <currentTheme.icon size={18} />
            </button>

            <AnimatePresence>
              {isThemeMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-4 w-48 glass rounded-2xl overflow-hidden shadow-2xl z-[60]"
                >
                  <div className="p-2 space-y-1">
                    {THEMES.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTheme(t.id);
                          setIsThemeMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                          theme === t.id ? 'bg-white/10 text-gold' : 'text-silver/60 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <t.icon size={14} />
                        {t.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <a 
            href={RESUME_URL} 
            download="Vishal_Resume.pdf"
            className="px-5 py-2 glass rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2"
          >
            <Download size={14} />
            Download
          </a>
        </div>
      </div>
      {/* Click outside to close theme menu */}
      {isThemeMenuOpen && (
        <div 
          className="fixed inset-0 z-[-1]" 
          onClick={() => setIsThemeMenuOpen(false)} 
        />
      )}
    </motion.nav>
  );
};

const NeuralBackground = ({ theme }: { theme: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentThemeData = THEMES.find(t => t.id === theme) || THEMES[0];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    let particles: { x: number; y: number; size: number; vx: number; vy: number; color: string }[] = [];
    let shootingStars: { x: number; y: number; length: number; speed: number; opacity: number; angle: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initElements();
    };

    const initElements = () => {
      stars = [];
      particles = [];
      shootingStars = [];
      
      // Layered stars for parallax depth
      const layers = [
        { count: 400, size: 0.8, speed: 0.02, opacity: 0.3 }, // Distant
        { count: 200, size: 1.2, speed: 0.05, opacity: 0.5 }, // Mid
        { count: 50, size: 1.8, speed: 0.1, opacity: 0.8 },  // Near
      ];

      layers.forEach(layer => {
        const count = Math.floor((canvas.width * canvas.height) / (1000000 / layer.count));
        for (let i = 0; i < count; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * layer.size,
            speed: Math.random() * layer.speed + (layer.speed * 0.5),
            opacity: Math.random() * layer.opacity
          });
        }
      });

      const particleCount = 15;
      const themeColors = [currentThemeData.color, currentThemeData.accent, '#FFFFFF', currentThemeData.color];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          color: themeColors[Math.floor(Math.random() * themeColors.length)]
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Stars (Interstellar)
      stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        star.y += star.speed;
        star.x += star.speed * 0.2; // Slight sideways drift
        
        if (star.y > canvas.height) star.y = 0;
        if (star.x > canvas.width) star.x = 0;
        
        star.opacity += (Math.random() - 0.5) * 0.01;
        if (star.opacity < 0.05) star.opacity = 0.05;
        if (star.opacity > 0.8) star.opacity = 0.8;
      });

      // Draw Shooting Stars
      if (Math.random() < 0.01 && shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height * 0.5),
          length: Math.random() * 80 + 20,
          speed: Math.random() * 10 + 5,
          opacity: 1,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2
        });
      }

      shootingStars = shootingStars.filter(ss => {
        ctx.strokeStyle = `rgba(255, 255, 255, ${ss.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x + Math.cos(ss.angle) * ss.length, ss.y + Math.sin(ss.angle) * ss.length);
        ctx.stroke();

        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.02;

        return ss.opacity > 0;
      });

      // Draw Cyberpunk Grid (Minimalist)
      ctx.strokeStyle = `${currentThemeData.color}10`; // Very subtle theme-colored grid
      ctx.lineWidth = 0.5;
      const gridSize = 150;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw Data Nodes (Particles)
      particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.15;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add a tiny core to the node
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Re-init when theme changes

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-bg-primary transition-colors duration-1000">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Cosmic Nebulae */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{ backgroundColor: currentThemeData.accent }}
          className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] blur-[150px] rounded-full animate-fluid mix-blend-screen transition-colors duration-1000" 
        />
        <motion.div 
          animate={{ backgroundColor: currentThemeData.color }}
          className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] blur-[150px] rounded-full animate-fluid-slow mix-blend-screen transition-colors duration-1000" 
        />
      </div>

      {/* Cyberpunk Scanline Effect (Ultra Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.005),rgba(0,0,255,0.01))] bg-[length:100%_4px,3px_100%] pointer-events-none" />

      {/* Film Grain Texture */}
      <div className="absolute inset-0 bg-grain opacity-[0.015] mix-blend-overlay" />
      
      {/* Deep Space Vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 100%)' }} />
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <motion.div 
        style={{ y: y1, opacity }}
        className="max-w-5xl mx-auto px-6 text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 glass rounded-full text-xs font-bold uppercase tracking-[0.3em] text-gold mb-8"
        >
          Generative AI Specialist
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-white mb-6 leading-tight hover-glow cursor-default neon-text"
        >
          Vishal
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-light text-silver/80 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          AI Content Generation Artist | Generative AI Specialist | AI Quality & Evaluation
          <span className="block mt-4 text-base text-silver/60">
            AI professional with 5.5 years of experience contributing to enterprise AI systems across Generative AI, CVML, Alexa, and large-scale AI evaluation workflows.
          </span>
        </motion.p>
        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a 
              href="#work"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-charcoal rounded-full font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all"
            >
              Explore Portfolio
            </motion.a>
            <motion.a 
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Eye size={20} />
              View Resume
            </motion.a>
          </motion.div>
      </motion.div>
      
      {/* Futuristic Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-gold/40">Initiate Scroll</span>
        <div className="relative w-px h-16 bg-white/5 overflow-hidden">
          <motion.div 
            animate={{ y: [-64, 64] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-gold/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

const About = ({ onImageClick }: { onImageClick: (src: string) => void }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gold mb-6">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              At the intersection of <span className="text-gold">Creative AI</span> and <span className="text-silver">Technical Validation</span>.
            </h3>
            <div className="space-y-6 text-lg text-silver/70 leading-relaxed">
              <p>
                I specialize in bridging the gap between artistic vision and machine learning precision. My work focuses on generating high-fidelity AI product imagery, performing meticulous retouching, and establishing rigorous technical quality validation frameworks.
              </p>
              <p>
                With over 5 years in enterprise AI production, I've developed a deep expertise in prompt engineering, CVML annotation, and RLHF model training feedback, ensuring that AI outputs meet the highest standards of realism and aesthetic consistency.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div 
              style={{ y }} 
              className="aspect-square glass glass-hover rounded-3xl overflow-hidden relative group hover-lift cursor-zoom-in"
              onClick={() => onImageClick("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200&h=1200")}
            >
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Futuristic AI Robot" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="p-4 glass rounded-full text-white">
                  <Eye size={24} />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex gap-4 flex-wrap">
                  {['Prompt Engineering', 'CVML', 'RLHF', 'SFT'].map(tag => (
                    <span key={tag} className="px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 glass rounded-2xl flex items-center justify-center animate-bounce">
              <Cpu className="text-gold w-10 h-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContentCreation = ({ onImageClick }: { onImageClick: (src: string) => void }) => {
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  
  const workflows = [
    {
      title: "Lighting Control",
      prompt: "High-end perfume bottle on a dark marble surface, dramatic rim lighting, soft volumetric shadows, 8k resolution.",
      explanation: "Precision control over light source position and intensity to highlight product contours.",
      image: "https://lh3.googleusercontent.com/d/1dXAoqyS_b8x_0uSMUzCh0FGBi6sh87nV"
    },
    {
      title: "Material Realism",
      prompt: "Close-up of brushed titanium watch, intricate mechanical details, realistic texture, soft studio lighting.",
      explanation: "Defining surface properties like roughness, anisotropy, and subsurface scattering for tactile realism.",
      image: "https://lh3.googleusercontent.com/d/1pojFBnDBBVx6epcKDsRHsW1IMlhWEvrN"
    },
    {
      title: "Composition & Angle",
      prompt: "Minimalist architectural structure, low angle shot, clear blue sky, geometric shadows, cinematic composition.",
      explanation: "Using camera-specific terminology to dictate perspective and spatial relationships.",
      image: "https://lh3.googleusercontent.com/d/1_IvtgmS8DnWu1rszgmUHiZCrNDfB7bBL"
    }
  ];

  return (
    <section id="work" className="py-32 bg-navy/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gold mb-6">AI Content Creation</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Prompt Engineering & Workflows</h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            {workflows.map((w, idx) => (
              <button
                key={idx}
                onClick={() => setActiveWorkflow(idx)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 cursor-pointer hover-lift ${
                  activeWorkflow === idx ? 'glass border-gold/50 shadow-[0_10px_30px_-10px_rgba(212,175,55,0.2)]' : 'hover:bg-white/5'
                }`}
              >
                <h4 className={`text-lg font-bold mb-2 ${activeWorkflow === idx ? 'text-gold' : 'text-white'}`}>
                  {w.title}
                </h4>
                <p className="text-sm text-silver/60 line-clamp-2">{w.explanation}</p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWorkflow}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl overflow-hidden"
              >
                <div className="p-8 border-b border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-silver/50">Prompt</span>
                  </div>
                  <p className="font-mono text-sm text-gold italic leading-relaxed">
                    "{workflows[activeWorkflow].prompt}"
                  </p>
                </div>
                <div 
                  className="aspect-video relative group cursor-zoom-in"
                  onClick={() => onImageClick(workflows[activeWorkflow].image)}
                >
                  <img 
                    src={workflows[activeWorkflow].image} 
                    alt={workflows[activeWorkflow].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-8">
                    <div className="w-full flex justify-between items-end">
                      <div className="max-w-xl">
                        <h5 className="text-white font-bold mb-2">Creative Control Explanation</h5>
                        <p className="text-silver/80 text-sm">
                          {workflows[activeWorkflow].explanation}
                        </p>
                      </div>
                      <div className="p-3 glass rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2">
                        <Eye size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Retouching = ({ onImageClick }: { onImageClick: (src: string) => void }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gold mb-6">AI Image Retouching</h2>
            <h3 className="text-4xl font-display font-bold text-white mb-8">Refining the Machine's Vision</h3>
            <ul className="space-y-6">
              {[
                { icon: Palette, title: "Color Correction", desc: "Balancing hues and saturation for natural skin tones and product accuracy." },
                { icon: Zap, title: "Lighting Adjustments", desc: "Fixing inconsistent light sources and enhancing volumetric depth." },
                { icon: Layers, title: "Shadow Corrections", desc: "Ensuring shadows follow physical laws and match scene geometry." },
                { icon: Sparkles, title: "Tone Balancing", desc: "Refining the dynamic range to prevent clipping in highlights or shadows." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 group cursor-default">
                  <div className="mt-1 p-2 glass rounded-lg text-gold group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold group-hover:text-gold transition-colors duration-500">{item.title}</h4>
                    <p className="text-silver/60 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <div 
            ref={containerRef}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize glass glass-hover hover-lift group"
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
          >
            {/* After Image (Retouched) */}
            <img 
              src="https://picsum.photos/seed/product-after/1200/900" 
              alt="After" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Before Image (Raw) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img 
                src="https://picsum.photos/seed/product-after/1200/900" 
                alt="Before" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.4] brightness-[0.8] contrast-[0.9] saturate-[0.8]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white z-10"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center shadow-2xl">
                <ChevronRight className="text-white rotate-180" size={16} />
                <ChevronRight className="text-white" size={16} />
              </div>
            </div>
            
            {/* Pop-out button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onImageClick("https://picsum.photos/seed/product-after/1200/900");
              }}
              className="absolute top-6 right-6 p-3 glass rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:text-gold hover:scale-110 z-20 cursor-pointer"
              title="View Full Image"
            >
              <Eye size={20} />
            </button>

            <div className="absolute bottom-6 left-6 px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-white z-20">Before</div>
            <div className="absolute bottom-6 right-6 px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-white z-20">After</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QualityReview = ({ onImageClick }: { onImageClick: (src: string) => void }) => {
  const issues = [
    {
      title: "Distorted Geometry",
      issue: "Non-Euclidean structural lines in background architecture.",
      strategy: "Regional in-painting with structural guidance prompts.",
      image: "https://picsum.photos/seed/issue1/800/600"
    },
    {
      title: "Lighting Mismatch",
      issue: "Primary light source doesn't match shadow orientation.",
      strategy: "Global relighting using depth-aware diffusion models.",
      image: "https://picsum.photos/seed/issue2/800/600"
    },
    {
      title: "Object Proportion",
      issue: "Unrealistic scale relationship between foreground and background objects.",
      strategy: "Compositional adjustment and scale-invariant retouching.",
      image: "https://picsum.photos/seed/issue3/800/600"
    }
  ];

  return (
    <section id="quality" className="py-32 bg-navy/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gold mb-6">AI Quality Review</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Technical Artifact Detection</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {issues.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass glass-hover rounded-3xl overflow-hidden group hover-lift cyber-border cursor-zoom-in"
              onClick={() => onImageClick(item.image)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 px-2 py-1 bg-red-500/80 text-white text-[8px] font-bold uppercase tracking-widest rounded">Artifact Detected</div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="p-3 glass rounded-full text-white">
                    <Eye size={20} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold block mb-1">Issue Identified</span>
                    <p className="text-sm text-silver/70">{item.issue}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent-blue block mb-1">Correction Strategy</span>
                    <p className="text-sm text-silver/70">{item.strategy}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkflowSection = () => {
  const steps = [
    { title: "Prompt Engineering", icon: Sparkles },
    { title: "Image Generation", icon: Camera },
    { title: "Artifact Detection", icon: Search },
    { title: "Quality Review", icon: CheckCircle2 },
    { title: "Retouching", icon: Palette },
    { title: "Final Approval", icon: Monitor }
  ];

  return (
    <section className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gold mb-20 text-center">AI Workflow</h2>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 glass glass-hover rounded-2xl flex items-center justify-center mb-6 group hover:border-gold/50 transition-all duration-500"
                >
                  <step.icon className="text-silver group-hover:text-gold transition-colors" size={32} />
                </motion.div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white">{step.title}</h4>
                {i < steps.length - 1 && (
                  <div className="mt-4 lg:hidden">
                    <ArrowRight className="text-gold rotate-90" size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  return (
    <section id="impact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Experience", value: "5.5 Years" },
                { label: "AI Models", value: "Large Scale" },
                { label: "Systems", value: "Enterprise" },
                { label: "Quality", value: "High Volume" }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05 }}
                  className="glass glass-hover p-8 rounded-3xl text-center hover-lift"
                >
                  <div className="text-3xl font-display font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gold mb-6">Impact & Contributions</h2>
            <h3 className="text-4xl font-display font-bold text-white mb-8">Delivering Excellence in AI Production</h3>
            <div className="space-y-6 text-silver/70">
              <p className="flex gap-4">
                <TrendingUp className="text-gold shrink-0" />
                <span>Consistent quality delivery in high-volume production environments across Generative AI, CVML, Alexa, and Ring systems.</span>
              </p>
              <p className="flex gap-4">
                <Eye className="text-gold shrink-0" />
                <span>Expertise in human-in-the-loop AI evaluation systems, providing critical feedback for RLHF and SFT model training.</span>
              </p>
              <p className="flex gap-4">
                <Workflow className="text-gold shrink-0" />
                <span>Streamlining visual intelligence workflows to ensure seamless integration between creative vision and technical requirements.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillGroups = [
    { 
      title: "Core AI", 
      icon: Sparkles,
      skills: ["Prompt Engineering", "AI Image Generation", "Generative Image Evaluation"] 
    },
    { 
      title: "Technical", 
      icon: Cpu,
      skills: ["CVML Annotation", "RLHF Model Feedback", "SFT Data Preparation"] 
    },
    { 
      title: "Systems", 
      icon: Workflow,
      skills: ["AI Quality Systems", "Visual Intelligence Workflows"] 
    },
    { 
      title: "Tools", 
      icon: Palette,
      skills: ["Photoshop", "Lightroom", "Stable Diffusion", "Midjourney"] 
    }
  ];

  return (
    <section className="py-32 bg-navy/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gold mb-20 text-center">Expertise & Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover p-8 rounded-3xl group hover-lift"
            >
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform">
                <group.icon size={24} />
              </div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{group.title}</h4>
              <ul className="space-y-4">
                {group.skills.map((skill, j) => (
                  <li key={j} className="text-silver/80 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-gold rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ onMailClick }: { onMailClick: () => void }) => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gold mb-6">Get In Touch</h2>
          <h3 className="text-5xl font-display font-bold text-white mb-12">Let's build the future of AI content.</h3>
          
          <div className="glass-hover p-12 rounded-[3rem] space-y-8 hover-lift">
            <button 
              onClick={onMailClick}
              className="flex items-center justify-center gap-4 text-2xl text-white hover:text-gold transition-colors group w-full cursor-pointer"
            >
              <Mail className="group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all duration-500" />
              <span className="group-hover:tracking-wider transition-all duration-500">vishals812@gmail.com</span>
            </button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-silver/60">
                <Phone size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">+91 8072179167</span>
              </div>
              <div className="flex items-center gap-3 text-silver/60">
                <MapPin size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">Chennai, India</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = ({ onMailClick }: { onMailClick: () => void }) => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-display font-bold tracking-tighter text-white">
          VISHAL
        </div>
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-silver/30">
          © 2026 Vishal | AI Content Generation Artist
        </div>
        <div className="flex gap-6">
          <button onClick={onMailClick} className="cursor-pointer">
            <Mail className="text-silver/30 hover:text-gold transition-colors" size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [theme, setTheme] = useState('pro');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleMailClick = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className={`relative min-h-screen selection:bg-accent/30 selection:text-white theme-${theme}`}>
      <NeuralBackground theme={theme} />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About onImageClick={handleImageClick} />
        <ContentCreation onImageClick={handleImageClick} />
        <Retouching onImageClick={handleImageClick} />
        <QualityReview onImageClick={handleImageClick} />
        <WorkflowSection />
        <Impact />
        <Skills />
        <Contact onMailClick={handleMailClick} />
      </main>
      <Footer onMailClick={handleMailClick} />
      <Lightbox 
        isOpen={!!selectedImage} 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
