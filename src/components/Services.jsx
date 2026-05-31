import React from 'react';
import { motion } from 'framer-motion';

export default function Services({ currentLang }) {
  const translations = {
    EN: {
      sectionTitle: "SERVICES",
      items: [
        { title: 'Frontend Development', desc: 'Crafting responsive, high-performance web systems using React, clean CSS workflows, and micro-animations.', icon: '💻' },
        { title: 'Backend Systems', desc: 'Designing secure application logic, database integrations, and optimized web endpoint architectures.', icon: '⚙️' },
        { title: 'UI/UX Design Systems', desc: 'Prototyping systematic layout models focusing strictly on typography hierarchy and structural grids.', icon: '📐' },
        { title: 'Web Application Dev', desc: 'Deploying end-to-end applications designed explicitly for long-term scalability and business performance.', icon: '🚀' },
      ]
    },
    KH: {
      sectionTitle: "សេវាកម្ម",
      items: [
        { title: 'ការអភិវឌ្ឍន៍ Frontend', desc: 'បង្កើតប្រព័ន្ធគេហទំព័រដែលមានល្បឿនលឿន និងទម្រង់ Responsive ដោយប្រើប្រាស់ React, CSS ស្ដង់ដារ និងចលនា micro-animations។', icon: '💻' },
        { title: 'ប្រព័ន្ធ Backend', desc: 'រៀបចំ Logic នៃកម្មវិធីប្រកបដោយសុវត្ថិភាព ការភ្ជាប់ទៅកាន់ Database និងការរចនារចនាសម្ព័ន្ធ API ដ៏មានប្រសិទ្ធភាព។', icon: '⚙️' },
        { title: 'ប្រព័ន្ធរចនា UI/UX', desc: 'បង្កើតគំរូប្លង់គេហទំព័រជាប្រព័ន្ធ ដោយផ្ដោតសំខាន់លើឋានានុក្រមអក្សរ (Typography) និងទម្រង់ Grid រៀបរយច្បាស់លាស់។', icon: '📐' },
        { title: 'ការបង្កើតកម្មវិធី Web App', desc: 'បង្កើត និងដាក់ដំណើរការកម្មវិធីគេហទំព័រពេញលេញ (End-to-End) ដែលរៀបចំឡើងសម្រាប់ដំណើរការបានយូរអង្វែង និងពង្រីកទំហំបានងាយស្រួល។', icon: '🚀' },
      ]
    }
  };

  const content = translations[currentLang] || translations.EN;

  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-24 border-t border-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-3 mb-16"
      >
        <h2 className="text-3xl  tracking-tight text-white">
          {content.sectionTitle}
        </h2>
        <div className="w-12 h-1 bg-cyan-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.items.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            key={service.title}
            className="p-6 rounded-xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4 ">
              <div className="text-3xl bg-slate-950 w-12  m-auto h-12 rounded-lg flex items-center justify-center border border-slate-800">
                {service.icon}
              </div>
              <h3 className="text-lg mt-3 text-center  text-white">
                {service.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}