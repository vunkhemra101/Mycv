import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ currentLang, setCurrentLang }) {
  const [isOpen, setIsOpen] = useState(false);

  // ១. ទិន្នន័យ Logo និង បញ្ជី Menu ជា ២ ភាសា
  const translations = {
    EN: {
      logo: "Portfolio.",
      menu: [
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Services', id: 'services' },
        { name: 'Contact', id: 'contact' },
      ]
    },
    KH: {
      logo: "ប្រវត្តិរូបសង្ខេប.", 
      menu: [
        { name: 'អំពីខ្ញុំ', id: 'about' },
        { name: 'ជំនាញ', id: 'skills' },
        { name: 'គម្រោង', id: 'projects' },
        { name: 'សេវាកម្ម', id: 'services' },
        { name: 'ទំនាក់ទំនង', id: 'contact' },
      ]
    }
  };

  const content = translations[currentLang] || translations.EN;
  const navLinks = content.menu;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* ================= LOGO SECTION ================= */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-khmer"
        >
          {content.logo}
        </motion.span>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link, index) => (
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={link.id}
              href={`#${link.id}`}
              className="text-slate-300 hover:text-cyan-400 transition-colors relative group py-2 font-khmer"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full" />
            </motion.a>
          ))}

          {/* ប៊ូតុងប្តូរភាសា (Desktop View) */}
          <button
            onClick={() => setCurrentLang(currentLang === 'EN' ? 'KH' : 'EN')}
            className="ml-2 border border-slate-800 bg-slate-900/50 px-3 py-1.5 rounded-sm text-xs font-mono font-bold text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center gap-2 cursor-pointer"
          >
            {currentLang === 'EN' ? (
              <span className="flex items-center gap-2">
                {/* SVG ទង់ជាតិកម្ពុជា 🇰🇭 (Desktop) */}
                <svg className="w-5 h-3.5 rounded-sm shadow-sm" viewBox="0 0 256 160" xmlns="http://www.w3.org/2000/svg">
                  <rect width="256" height="160" fill="#032EA1"/>
                  <rect y="40" width="256" height="80" fill="#E61A22"/>
                  <g fill="#FFFFFF" transform="translate(128, 80) scale(0.48)">
                    <path d="M -40,30 L -40,20 L -30,20 L -30,-5 L -20,-5 L -20,-15 L -15,-15 L -15,5 L -5,5 L -5,-25 L 5,-25 L 5,5 L 15,5 L 15,-15 L 20,-15 L 20,-5 L 30,-5 L 30,20 L 40,20 L 40,30 Z"/>
                    <path d="M 0,-25 L -5,-15 L 5,-15 Z M 0,-33 L -2,-25 L 2,-25 Z"/>
                    <path d="M -17.5,-15 L -21,-7 L -14,-7 Z M -17.5,-22 L -19,-15 L -16,-15 Z"/>
                    <path d="M 17.5,-15 L 14,-7 L 21,-7 Z M 17.5,-22 L 16,-15 L 19,-15 Z"/>
                    <rect x="-45" y="30" width="90" height="5"/>
                  </g>
                </svg>
                KH
              </span>
            ) : (
              <span className="flex items-center gap-2">
                {/* SVG ទង់ជាតិអាមេរិក 🇺🇸 (Desktop) */}
                <svg className="w-5 h-3.5 rounded-sm shadow-sm" viewBox="0 0 741 390">
                  <rect width="741" height="390" fill="#B22234"/>
                  <path d="M0 30h741M0 90h741M0 150h741M0 210h741M0 270h741M0 330h741" stroke="#FFF" strokeWidth="30"/>
                  <rect width="296" height="210" fill="#3C3B6E"/>
                  <g fill="#FFF">
                    <circle cx="30" cy="20" r="4"/><circle cx="90" cy="20" r="4"/><circle cx="150" cy="20" r="4"/><circle cx="210" cy="20" r="4"/>
                    <circle cx="60" cy="40" r="4"/><circle cx="120" cy="40" r="4"/><circle cx="180" cy="40" r="4"/>
                    <circle cx="30" cy="60" r="4"/><circle cx="90" cy="60" r="4"/><circle cx="150" cy="60" r="4"/><circle cx="210" cy="60" r="4"/>
                  </g>
                </svg>
                EN
              </span>
            )}
          </button>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="flex items-center gap-4 md:hidden">
          {/* ប៊ូតុងប្តូរភាសា (Mobile View - កែពណ៌ឆ្នូតត្រូវ ១០០%) */}
          <button
            onClick={() => setCurrentLang(currentLang === 'EN' ? 'KH' : 'EN')}
            className="border border-slate-800 bg-slate-900/50 px-2.5 py-1.5 rounded-sm text-xs font-mono font-bold text-cyan-400 flex items-center gap-2 cursor-pointer"
          >
            {currentLang === 'EN' ? (
              <span className="flex items-center gap-1.5">
                {/* SVG ទង់ជាតិកម្ពុជា 🇰🇭 (Mobile) */}
                <svg className="w-4 h-2.5 rounded-xs shadow-sm" viewBox="0 0 256 160" xmlns="http://www.w3.org/2000/svg">
                  <rect width="256" height="160" fill="#032EA1"/>
                  <rect y="40" width="256" height="80" fill="#E61A22"/>
                  <g fill="#FFFFFF" transform="translate(128, 80) scale(0.42)">
                    <path d="M -40,30 L -40,20 L -30,20 L -30,-5 L -20,-5 L -20,-15 L -15,-15 L -15,5 L -5,5 L -5,-25 L 5,-25 L 5,5 L 15,5 L 15,-15 L 20,-15 L 20,-5 L 30,-5 L 30,20 L 40,20 L 40,30 Z"/>
                    <path d="M 0,-25 L -5,-15 L 5,-15 Z M 0,-33 L -2,-25 L 2,-25 Z"/>
                    <path d="M -17.5,-15 L -21,-7 L -14,-7 Z M -17.5,-22 L -19,-15 L -16,-15 Z"/>
                    <path d="M 17.5,-15 L 14,-7 L 21,-7 Z M 17.5,-22 L 16,-15 L 19,-15 Z"/>
                    <rect x="-45" y="30" width="90" height="5"/>
                  </g>
                </svg>
                KH
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                {/* SVG ទង់ជាតិអាមេរិក 🇺🇸 (Mobile) */}
                <svg className="w-4 h-2.5 rounded-xs shadow-sm" viewBox="0 0 741 390">
                  <rect width="741" height="390" fill="#B22234"/>
                  <path d="M0 30h741M0 90h741M0 150h741M0 210h741M0 270h741M0 330h741" stroke="#FFF" strokeWidth="30"/>
                  <rect width="296" height="210" fill="#3C3B6E"/>
                  <g fill="#FFF">
                    <circle cx="30" cy="25" r="5"/><circle cx="90" cy="25" r="5"/><circle cx="150" cy="25" r="5"/><circle cx="210" cy="25" r="5"/>
                    <circle cx="60" cy="55" r="5"/><circle cx="120" cy="55" r="5"/><circle cx="180" cy="55" r="5"/>
                    <circle cx="30" cy="85" r="5"/><circle cx="90" cy="85" r="5"/><circle cx="150" cy="85" r="5"/><circle cx="210" cy="85" r="5"/>
                  </g>
                </svg>
                EN
              </span>
            )}
          </button>

          {/* ប៊ូតុងបើក Hamburger Menu លើ Mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-cyan-400 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-lg px-4 py-4 space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="block text-slate-300 hover:text-cyan-400 text-base font-medium py-2 font-khmer"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}