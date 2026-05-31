import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm({ text, currentLang }) {
  const [formData, setFormData] = useState({
    identity: '', 
    email: '',     
    projectScope: '' 
  });
  
  const [showToast, setShowToast] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const TELEGRAM_BOT_TOKEN = '8445881677:AAHfA7bfLmev9EkOA8iHMYPR-zNm6lyHjgo'; 
  const TELEGRAM_CHAT_ID = '1822911898'; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.identity || !formData.email || !formData.projectScope) {
      alert(currentLang === 'KH' ? "សូមបំពេញព័ត៌មានឱ្យបានគ្រប់គ្រាន់!" : "Please fill out all fields!");
      return;
    }
    //Message

    const telegramMessage = `
📩 *New Message From Portfolio*
──────────────────────
👤 *Identity:* ${formData.identity}
📧 *Email:* ${formData.email}
📝 *Project Scope:* ${formData.projectScope}
🕒 *Timestamp:* ${new Date().toLocaleTimeString()}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        setStatusMessage(currentLang === 'KH' 
          ? `✉️ សារពីលោក/អ្នក ត្រូវបានបញ្ជូនទៅ Telegram ជោគជ័យ!` 
          : `✉️ Message transmitted successfully to Telegram!`
        );
        setShowToast(true);
        setFormData({ identity: '', email: '', projectScope: '' }); 
      } else {
        setStatusMessage(currentLang === 'KH' ? '❌ មានបញ្ហាក្នុងការបញ្ជូនសារ!' : '❌ Failed to transmit message!');
        setShowToast(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage(currentLang === 'KH' ? '❌ មិនអាចភ្ជាប់ទៅ Telegram បានទេ!' : '❌ Connection error!');
      setShowToast(true);
    }

    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="w-full bg-[#0d111c]/60 border border-slate-800/60 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="block text-[11px]  tracking-widest text-slate-400 uppercase">
            {text.labelName}
          </label>
          <input
            type="text"
            name="identity"
            value={formData.identity}
            onChange={handleChange}
            placeholder={text.placeName}
            className="w-full bg-[#06080f]/80 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors "
          />
        </div>
        <div className="space-y-2">
          <label className="block text-[11px]  tracking-widest text-slate-400 uppercase">
            {text.labelEmail}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={text.placeEmail}
            className="w-full bg-[#06080f]/80 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors "
          />
        </div>
        <div className="space-y-2">
          <label className="block text-[11px]  tracking-widest text-slate-400 uppercase">
            {text.labelMsg}
          </label>
          <textarea
            name="projectScope"
            rows="4"
            value={formData.projectScope}
            onChange={handleChange}
            placeholder={text.placeMsg}
            className="w-full bg-[#06080f]/80 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none  resize-none transition-colors"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#00bcd4] hover:bg-[#00acc1] active:scale-[0.99] text-slate-950 font-medium text-sm py-3.5 rounded-xl transition-all cursor-pointer tracking-wider uppercase "
        >
          {text.btnSubmit}
        </button>
      </form>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-6 right-6 z-50 bg-[#0d111c] border border-cyan-500/30 px-5 py-3.5 rounded-xl shadow-lg flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs  text-slate-300 font-khmer">{statusMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}   