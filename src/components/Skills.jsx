import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiExpress } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

export default function Skills({ currentLang }) {
  const translations = {
    EN: {
      title: "TECHNICAL STACK",
      subtitle: "Select a stack to view specific language competencies.",
      categories: {
        frontend: { title: 'Frontend Development', icon: '🌐' },
        backend: { title: 'Backend Development', icon: '⚙️' }
      }
    },
    KH: {
      title: "ជំនាញបច្ចេកទេស",
      subtitle: "ជ្រើសរើសផ្នែកបច្ចេកវិទ្យាដើម្បីមើលកម្រិតនៃជំនាញនីមួយៗ។",
      categories: {
        frontend: { title: 'ការអភិវឌ្ឍន៍ផ្នែកខាងមុខ', icon: '🌐' },
        backend: { title: 'ការអភិវឌ្ឍន៍ផ្នែកខាងក្រោយ', icon: '⚙️' }
      }
    }
  };

const skillDetails = {
  frontend: [
    { name: 'HTML & CSS', level: 95, color: 'from-orange-500 to-amber-400', icon: <div className="flex gap-1"><FaHtml5 className="text-orange-500" /><FaCss3Alt className="text-blue-500" /></div> },
    { name: 'JavaScript (ES6+)', level: 85, color: 'from-yellow-500 to-amber-300', icon: <FaJsSquare className="text-yellow-400" /> },
    { name: 'React.js', level: 80, color: 'from-cyan-500 to-blue-500', icon: <FaReact className="text-cyan-400 animate-[spin_8s_linear_infinite]" /> }, // ថែម animate ឱ្យរង្វង់ React វិលតិចៗ
    { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-cyan-400', icon: <SiTailwindcss className="text-cyan-400" /> },
  ],
  backend: [
    { name: 'Node.js / Express', level: 75, color: 'from-green-500 to-emerald-400', icon: <div className="flex gap-1"><FaNodeJs className="text-green-500" /><SiExpress className="text-slate-400" /></div> },
    { name: 'Python', level: 70, color: 'from-blue-500 to-yellow-400', icon: <FaPython className="text-blue-400" /> },
    { name: 'C / C++', level: 80, color: 'from-indigo-500 to-purple-500', icon: <TbBrandCpp className="text-indigo-400" /> },
    { name: 'Git / GitHub', level: 80, color: 'from-slate-600 to-slate-400', icon: <div className="flex gap-1"><FaGitAlt className="text-orange-600" /><FaGithub className="text-white" /></div> },
  ]
};

  const content = translations[currentLang] || translations.EN;
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-24 border-t border-slate-900">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl  tracking-tight text-white">
            {content.title}
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-400">
            {content.subtitle}
          </p>
        </div>
        <div className="relative w-64">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-5 py-3 rounded-full border border-slate-800 bg-slate-900/60 backdrop-blur-md text-sm  text-slate-200 hover:border-cyan-500/50 transition-all duration-200"
          >
            <span className="flex items-center gap-2">
              <span>{content.categories[activeCategory].icon}</span>
              {content.categories[activeCategory].title}
            </span>
            <svg 
              className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 left-0 mt-2 z-30 rounded-2xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl p-2 shadow-xl shadow-black/40 space-y-1"
              >
                {Object.keys(content.categories).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveCategory(key);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left text-sm transition-all ${
                      activeCategory === key 
                        ? 'bg-cyan-500/10 text-cyan-400 font-semibold' 
                        : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-base">{content.categories[key].icon}</span>
                    {content.categories[key].title}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="bg-slate-900/20 backdrop-blur-md border border-slate-800/60 p-6 sm:p-8 rounded-[2rem]">
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="wait">
            {skillDetails[activeCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-5 rounded-[1.5rem] border border-slate-800/80 bg-slate-900/40 hover:border-slate-700 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold gap-2 flex text-slate-200 group-hover:text-cyan-400 transition-colors">
                    <span className='mt-0.5'>{skill.icon}</span>{skill.name}
                  </span>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-cyan-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-950 h-3 rounded-full p-[2px] overflow-hidden border border-slate-800/50">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

    </section>
  );
}