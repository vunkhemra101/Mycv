import React from 'react';
import { motion } from 'framer-motion';
import { image } from 'framer-motion/client';


function ProjectCard({ project, content, index }) {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-xl border border-slate-800/80 bg-slate-900/40 overflow-hidden backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
    >
      {/* ផ្នែករូបភាព Poster ចាប់ព្រឹត្តិការណ៍ Touch លើ Mobile និង Hover លើ Desktop */}
      <div
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setTimeout(() => setIsTouched(false), 100)} // លុបផ្ទាំងខ្មៅ និងប៊ូតុងចេញវិញភ្លាមពេលដកម្រាមដៃ
        onMouseLeave={() => setIsTouched(false)} // ធានាថាបាត់ទៅវិញដូចគ្នាពេលដក Mouse ចេញលើ Desktop
        className="relative h-48 bg-slate-950 flex items-center justify-center border-b border-slate-900 overflow-hidden cursor-pointer select-none"
      >
        {/* ផ្ទាំងងងឹត Overlay */}
        <div
          className={`absolute inset-0 z-10 transition-all duration-300 bg-gradient-to-t from-slate-950 to-transparent
            ${isTouched ? 'bg-black/50 opacity-100' : 'opacity-70'} 
            md:group-hover:bg-black/40`}
        />

        {/* រូបភាព Poster គម្រោង */}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out 
            ${isTouched ? 'scale-110' : 'scale-100'} 
            md:group-hover:scale-110`}
        />

        {/* ប៊ូតុងអក្សរ View Project (លោតបាត់ភ្លាមៗតាមកម្លាំងម្រាមដៃប៉ះ) */}
        <span
          className={`absolute z-20 text-white font-medium text-sm bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800 backdrop-blur-sm shadow-xl transition-all duration-300 pointer-events-none
            ${isTouched ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} 
            md:group-hover:opacity-100 md:group-hover:scale-100 font-khmer`}
        >
          {content.viewProject}
        </span>
      </div>

      {/* ផ្នែកព័ត៌មានលម្អិត និងប៊ូតុងលីង */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <h3 className={`text-xl font-bold text-white transition-colors font-sans ${isTouched ? 'text-cyan-400' : ''} md:group-hover:text-cyan-400`}>
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed font-khmer text-justify">
            {project.description}
          </p>

          {/* TAGS TECH STACK */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs bg-slate-950 border border-slate-800 text-cyan-400/80 px-2 py-1 hover:text-cyan-200/80 rounded-xl font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ប៊ូតុងលីងទៅកាន់ Codebase និង Live View */}
        <div className="flex gap-4 pt-6 border-t border-slate-800/60 mt-6">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 rounded-xl border border-slate-800 bg-slate-950/50 hover:bg-slate-950 text-xs text-slate-300 hover:text-cyan-400 transition duration-200 font-khmer"
          >
            {content.btnCode}
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-xs text-slate-950 font-bold transition duration-200 font-khmer shadow-lg shadow-cyan-500/10"
          >
            {content.btnLive}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
export default function Projects({ currentLang }) {
  const translations = {
    EN: {
      sectionTitle: "Featured Projects",
      btnCode: "Codebase",
      btnLive: "Live View",
      projects: [
        {
          title: 'Frontend ProductShoes',
          description: 'This is my website that talks about shoes. The feature is that it can add edited items, and this website cannot be taken as a path. I just created it to test my ability to learn code.',
          tags: ['React', 'Tailwind', 'Context API'],
          image: 'https://i.pinimg.com/736x/5d/c9/b1/5dc9b1eba455a6a187194165a03cde31.jpg',
          codeLink: 'https://github.com/itkmeng87-lang/Products_website.git',
          liveLink: 'https://products-website-seven.vercel.app/',
        },
        {
          title: 'Dashboard UI',
          description: 'This is my website that discusses student management before the administrator. The feature is that it can view student and user data, and its just a command, and in the future, I may be able to make it work.This cannot be taken as a path I was just created to test the ability to learn my code.',
          tags: ['Next.js', 'TypeScript', 'Tailwind'],
          image: 'https://i.pinimg.com/1200x/42/30/c9/4230c9ab73533e939356e0cf8297fdc8.jpg',
          codeLink: 'https://github.com/itkmeng87-lang/DashboardUI.git',
          liveLink: 'https://dashboard-ui-nine-sigma.vercel.app/',
        }
      ]
    },
    KH: {
      sectionTitle: "គម្រោងលេចធ្លោ",
      btnCode: "កូដប្រភព",
      btnLive: "មើលផ្ទាល់",
      projects: [
        {
          title: 'Frontend ProductShoes',
          description: 'នេះគឺជាគេហទំព័ររបស់ខ្ញុំដែលនិយាយអំពីស្បែកជើង។ លក្ខណៈពិសេសគឺថាវាអាចបន្ថែមធាតុដែលបានកែសម្រួល ហើយគេហទំព័រនេះមិនអាចយកជាផ្លូវកាបានទេ ខ្ញុំគ្រាន់តែបង្កើតឡើងដើម្បីតេស្តសម្ថភាព ក្នុងការរៀនកូដរបស់ខ្ញុំ។',
          tags: ['React', 'Tailwind', 'Context API'],
          image: 'https://i.pinimg.com/736x/5d/c9/b1/5dc9b1eba455a6a187194165a03cde31.jpg',
          codeLink: 'https://github.com/itkmeng87-lang/Products_website.git',
          liveLink: 'https://products-website-seven.vercel.app/',
        },
        {
          title: 'Frontend Dashboard UI',
          description: 'នេះគឺជាគេហទំព័ររបស់ខ្ញុំដែលនិយាយអំពីការគ្រប់គ្រងសិស្ស នឹងអែតមីត។ លក្ខណៈពិសេសគឺថាអាចមើលទិន្នន័យរបស់សិស្ស អ្នកប្រើប្រាស់ ហើយគ្រាន់តែជាគុំរូមួយហើយថ្ងៃមុខខ្ញុំអាចនឹងធ្វើវាអោយដំណើរការបាន។នេះមិនអាចយកជាផ្លូវកាបានទេ ខ្ញុំគ្រាន់តែបង្កើតឡើងដើម្បីតេស្តសម្ថភាព ក្នុងការរៀនកូដរបស់ខ្ញុំ។',
          tags: ['Next.js', 'TypeScript', 'Tailwind'],
          image: 'https://i.pinimg.com/1200x/42/30/c9/4230c9ab73533e939356e0cf8297fdc8.jpg',
          codeLink: 'https://github.com/itkmeng87-lang/DashboardUI.git',
          liveLink: 'https://dashboard-ui-nine-sigma.vercel.app/',
        }
      ]
    }
  };

  const content = translations[currentLang] || translations.EN;
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-24 border-t border-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-3 mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white font-khmer">
          {content.sectionTitle}
        </h2>
        <div className="w-12 h-1 bg-cyan-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {content.projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={project.title}
            className="group relative rounded-xl border border-slate-800/80 bg-slate-900/40 overflow-hidden backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
          >
            <div className="group h-48 bg-slate-950 flex items-center justify-center border-b border-slate-900 relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10 opacity-70 transition-colors duration-300 group-hover:bg-black/40" />

              <img
                src={project.image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <span className="absolute z-20 text-white font-medium text-sm bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800 backdrop-blur-sm shadow-xl opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                View projects
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-khmer">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-slate-950 border border-slate-800 text-cyan-400/80 px-2 py-1 hover:text-cyan-200/80 rounded-xl">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-slate-800/60 mt-6">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-md border border-slate-800 bg-slate-950/50 hover:bg-slate-950 text-xs text-slate-300 hover:text-cyan-400 transition duration-200 font-khmer"
                >
                  {content.btnCode}
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-md bg-cyan-500 hover:bg-cyan-600 text-xs text-slate-950 transition duration-200 font-khmer "
                >
                  {content.btnLive}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}