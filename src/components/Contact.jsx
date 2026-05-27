import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact({ currentLang }) {
  const [form, setForm] = useState({ name: '', email: '', msg: '' });

  // ១. រៀបចំខ្លឹមសារអក្សរទាំងអស់នៅក្នុង Form ជា ២ ភាសា
  const translations = {
    EN: {
      sectionTitle: "Get In Touch",
      channelsTitle: "Direct Channels",
      connectTitle: "Connect Externally",
      labelName: "Identity",
      labelEmail: "Email Endpoint",
      labelMsg: "Project Scope",
      placeName: "John Doe",
      placeEmail: "john@example.com",
      placeMsg: "Describe the deployment guidelines",
      btnSubmit: "Transmit Message"
    },
    KH: {
      sectionTitle: "ទំនាក់ទំនងខ្ញុំ",
      channelsTitle: "បណ្តាញផ្ទាល់",
      connectTitle: "បណ្តាញសង្គមខាងក្រៅ",
      labelName: "ឈ្មោះ / អត្តសញ្ញាណ",
      labelEmail: "អាសយដ្ឋានអ៊ីមែល",
      labelMsg: "ខ្លឹមសារសារ / ទំហំគម្រោង",
      placeName: "បញ្ចូលឈ្មោះរបស់អ្នក",
      placeEmail: "ឈ្មោះអ៊ីមែល",
      placeMsg: "រៀបរាប់ពីព័ត៌មាន ឬគម្រោងដែលអ្នកចង់ពិភាក្សា",
      btnSubmit: "ផ្ញើសារចេញ"
    }
  };

  const content = translations[currentLang] || translations.EN;

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-24 border-t border-slate-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-3 mb-16"
      >
        {/* ប្តូរចំណងជើងផ្នែកទំនាក់ទំនងតាមភាសា */}
        <h2 className="text-3xl font-bold tracking-tight text-white">
          {content.sectionTitle}
        </h2>
        <div className="w-12 h-1 bg-cyan-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-4xl mx-auto items-start">
        {/* ផ្នែកព័ត៌មានទំនាក់ទំនងខាងឆ្វេង */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-5 rounded-xl border border-slate-800/60 bg-slate-900/20 backdrop-blur-sm">
            <h4 className="text-slate-500  text-xs uppercase tracking-wider mb-1">
              {content.channelsTitle}
            </h4>
            <p className="text-white font-medium text-sm">vunkhemra06@gamil.com</p>
            <p className="text-slate-400 text-xs mt-1"> +885 966 011 051</p>
          </div>
          <div className="p-5 rounded-xl border border-slate-800/60 bg-slate-900/20 backdrop-blur-sm">
            <h4 className="text-slate-500 text-xs uppercase tracking-wider mb-2">
              {content.connectTitle}
            </h4>
            <div className="flex gap-4 text-xs  text-cyan-400">
              <a href="#" className="hover:underline">GitHub</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Twitter</a>
            </div>
          </div>
        </div>

        {/* ផ្នែក Form បញ្ចូលសារខាងស្តាំ */}
        <form onSubmit={(e) => e.preventDefault()} className="md:col-span-7 space-y-4 p-6 rounded-xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-md">
          <div>
            <label className="block  text-[11px] uppercase tracking-wider text-slate-400 mb-1">
              {content.labelName}
            </label>
            <input 
              type="text" 
              value={form.name} 
              onChange={(e) => setForm({...form, name: e.target.value})} 
              required 
              className="w-full bg-slate-950 border border-slate-800/80 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 transition text-sm" 
              placeholder={content.placeName} 
            />
          </div>
          <div>
            <label className="block  text-[11px] uppercase tracking-wider text-slate-400 mb-1">
              {content.labelEmail}
            </label>
            <input 
              type="email" 
              value={form.email} 
              onChange={(e) => setForm({...form, email: e.target.value})} 
              required 
              className="w-full bg-slate-950 border border-slate-800/80 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 transition text-sm" 
              placeholder={content.placeEmail} 
            />
          </div>
          <div>
            <label className="block  text-[11px] uppercase tracking-wider text-slate-400 mb-1">
              {content.labelMsg}
            </label>
            <textarea 
              rows="4" 
              value={form.msg} 
              onChange={(e) => setForm({...form, msg: e.target.value})} 
              required 
              className="w-full bg-slate-950 border border-slate-800/80 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 transition text-sm resize-none" 
              placeholder={content.placeMsg} 
            />
          </div>
          
          {/* ប៊ូតុងផ្ញើសារ */}
          <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950  py-2.5 rounded-lg text-sm tracking-wide transition duration-150">
            {content.btnSubmit}
          </button>
        </form>
      </div>
    </section>
  );
}