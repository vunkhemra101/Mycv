import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilecv from '../assets/profileCV.jpg';

export default function Hero({ currentLang }) {
  const content = {
    EN: {
      welcome: "WELCOME TO MY PORTFOLIO",
      intro: "MY NAME IS",
      name: "Vun Khemra",
      desc: "My name is Vun Khemara. I am a first-year Computer Science student at the Royal University of Phnom Penh, and I am currently studying a Full Stack course at the ETEC Center. My dream is to become a highly skilled Full Stack Web Developer capable of building efficient, high-performance web systems.",
      btnTouch: "Get In Touch",
      btnCv: "Download CV"
    },
    KH: {
      welcome: "សូមស្វាគមន៍មកកាន់ប្រវត្តិរូបសង្ខេបរបស់ខ្ញុំ",
      intro: "ខ្ញុំបាទឈ្មោះ",
      name: "វុន ខេមរ៉ា",
      desc: "ខ្ញុំបាទឈ្មាះ​​ វុ​ន ខេមរ៉ា​ ​​ជានិស្សិតឆ្នាំទី១ផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រនៅសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ​ ដែលបច្ចប្បន្នខ្ញុំកំពុងសិក្សាលើវគ្គ​ Full Stack​ នៅមជ្ឈមណ្ឌលអ៊ីតិច​។ ហើយក្ដីស្រមៃរបស់ខ្ញុំចង់ក្លាយជា​​ Full Stack Web Developer មួយរូបដែលមានជំនាញល្អ ដើម្បីកសាងប្រព័ន្ធគេហទំព័រទាំងមូល អោយមានប្រសិទ្ធភាពខ្ពស់។",
      btnTouch: "ទាក់ទងខ្ញុំ",
      btnCv: "ទាញយក CV"
    }
  };

  const currentContent = content[currentLang];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 75;

  useEffect(() => {
    let ticker = setTimeout(() => {
      const fullText = currentContent.name;
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(ticker);
  }, [displayText, isDeleting, currentLang]);

  return (
    <section className="max-w-5xl mx-auto px-4 pt-20 pb-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <div className="  flex  items-center md:gap-15 gap-10  px-3 py-2  rounded-xl border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs  tracking-wider">
          <span className="w-6  h-1​ rounded-full  py-3 bg-cyan-400 animate-pulse" />
          <div className='text-sm '>{currentContent.welcome}</div>
        </div>
        <div className='text-3xl font-bold '>{currentContent.intro}{' '}</div>
        <h1 className="text-3xl  sm:text-4xl  md:text-4xl  tracking-tight text-white min-h-[48px] sm:min-h-[60px] md:min-h-[72px]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 inline-flex select-none">
            {displayText}
            <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity }} className="text-cyan-400 ml-1">|</motion.span>
          </span>
        </h1>

        <p className="text-sm text-justify md:text-xl text-slate-400 max-w-xl leading-relaxed">
          {currentContent.desc}
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <a href="#contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600  rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-200 transform hover:-translate-y-0.5">
            {currentContent.btnTouch}
          </a>
          <a href="#" className="px-6 py-3 border border-slate-700 hover:border-cyan-500/50 bg-slate-900/40 text-slate-300 hover:text-cyan-400 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 backdrop-blur-sm">
            {currentContent.btnCv}
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full flex-1 flex justify-center px-4 md:px-0"
      >
        <div className="relative group w-full max-w-[280px] sm:max-w-[320px]">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 blur-xl group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative w-full aspect-[3/4] rounded-2xl bg-slate-900 border border-slate-800/80 overflow-hidden flex items-center justify-center">
            <img className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500" src={profilecv} alt="Vun Khemra" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}