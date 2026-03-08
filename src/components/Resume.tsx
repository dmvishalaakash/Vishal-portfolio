import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  CheckCircle2,
  X,
  Download
} from 'lucide-react';

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

const Resume: React.FC<ResumeProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const skills = [
    "Generative AI", "Prompt Engineering", "CVML Annotation", "RLHF Training", 
    "SFT (Supervised Fine-Tuning)", "AI Quality Evaluation", "Python", "SQL",
    "Data Analysis", "Project Management", "Technical Writing", "AI Product Retouching"
  ];

  const experience = [
    {
      role: "Generative AI Specialist",
      company: "Enterprise AI Solutions",
      period: "2021 - Present",
      desc: "Leading high-fidelity AI content generation workflows. Specializing in prompt engineering for product imagery and establishing rigorous RLHF feedback loops for model improvement."
    },
    {
      role: "CVML Data Analyst",
      company: "Tech Vision Corp",
      period: "2019 - 2021",
      desc: "Managed large-scale computer vision datasets. Developed annotation guidelines that improved model accuracy by 15% across multiple product lines."
    },
    {
      role: "AI Operations Associate",
      company: "Global Tech Services",
      period: "2018 - 2019",
      desc: "Contributed to Alexa's natural language understanding workflows. Performed quality audits on voice recognition datasets and identified key areas for model refinement."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl overflow-y-auto p-4 md:p-10"
    >
      <div className="max-w-4xl mx-auto bg-white text-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10"
        >
          <X size={24} className="text-slate-600" />
        </button>

        {/* Header */}
        <div className="bg-slate-900 text-white p-12 md:p-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <h1 className="text-5xl font-display font-bold tracking-tight mb-4">Vishal</h1>
              <p className="text-xl text-gold font-medium uppercase tracking-widest">Generative AI Specialist</p>
            </div>
            <div className="space-y-3 text-slate-300 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <span>vishals812@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <span>+91 8072179167</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-gold" />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-gold" />
                <span>portfolio.vishal.ai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-12 md:p-16 grid md:grid-cols-3 gap-16">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-100 rounded-2xl text-slate-900">
                  <Briefcase size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Professional Experience</h2>
              </div>
              <div className="space-y-10">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-slate-100">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gold rounded-full border-4 border-white" />
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{exp.role}</h3>
                      <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{exp.period}</span>
                    </div>
                    <p className="text-gold font-bold text-sm mb-4 uppercase tracking-widest">{exp.company}</p>
                    <p className="text-slate-600 leading-relaxed">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-100 rounded-2xl text-slate-900">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Education</h2>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl">
                <h3 className="font-bold text-lg mb-1">Bachelor of Engineering</h3>
                <p className="text-slate-600">Anna University, Chennai</p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-100 rounded-2xl text-slate-900">
                  <Code2 size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Core Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-100 rounded-2xl text-slate-900">
                  <Award size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Certifications</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Google AI Professional",
                  "Advanced Prompt Engineering",
                  "Machine Learning Specialization"
                ].map(cert => (
                  <li key={cert} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="p-8 bg-gold/10 rounded-3xl border border-gold/20">
              <h3 className="font-bold text-slate-900 mb-2">Ready to Collaborate?</h3>
              <p className="text-sm text-slate-600 mb-6">I'm always open to discussing new AI projects and creative opportunities.</p>
              <a href="mailto:vishals812@gmail.com" className="block text-center py-3 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Print & Download Helpers */}
      <div className="max-w-4xl mx-auto mt-8 flex justify-center gap-4 no-print">
        <button 
          onClick={() => window.print()}
          className="px-8 py-4 glass rounded-full text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3"
        >
          <Award size={20} />
          Print to PDF
        </button>
        <a 
          href={`${import.meta.env.BASE_URL}assets/Vishal_Resume.pdf`}
          download="Vishal_Resume.pdf"
          className="px-8 py-4 glass rounded-full text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3"
        >
          <Download size={20} />
          Download PDF
        </a>
      </div>
    </motion.div>
  );
};

export default Resume;
