import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaTelegram } from "react-icons/fa";
import ContactForm from '../client/ContactForm'; //

export default function Contact({ currentLang }) {
  const translations = {
    EN: {
      sectionTitle: "GET IN TOUCH",
      channelsTitle: "Direct Channels",
      connectTitle: "Connect Externally",
      labelName: "Identity",
      labelEmail: "Email Endpoint",
      labelMsg: "Project Scope",
      placeName: "Your Name",
      placeEmail: "Your Email",
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
    <section id="contact" className="max-w-6xl mx-auto px-4 py-24 border-t border-slate-900 ">
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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-4xl mx-auto items-start">
        <div className="md:col-span-5 space-y-6">
          <div className="p-5 rounded-xl border border-slate-800/60 bg-slate-900/20 backdrop-blur-sm">
            <h4 className="text-slate-500 text-xs uppercase tracking-wider mb-1">
              {content.channelsTitle}
            </h4>
            <p className="text-white font-medium text-sm">vunkhemra06@gamil.com</p>
            <p className="text-slate-400 text-xs mt-1">+885 966 011 051</p>
          </div>
          <div className="p-5 rounded-xl border border-slate-800/60 bg-slate-900/20 backdrop-blur-sm">
            <h4 className="text-slate-500 text-center text-xs uppercase tracking-wider mb-2">
              {content.connectTitle}
            </h4>
            <div className="flex gap-4 justify-center text-xs text-cyan-500">
              <a href="https://github.com/itkmeng87-lang" target="_blank" rel="noreferrer" className="flex gap-2 hover:text-cyan-600">
                <FaGithub className='mt-0.5' /> GitHub
              </a>
              <a href="https://www.facebook.com/share/18D7ry5Hnd/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex gap-2 hover:text-cyan-600">
                <FaFacebook className='mt-0.5' /> Facebook
              </a>
              <a href="https://t.me/vunkhemra" target="_blank" rel="noreferrer" className="flex gap-2 hover:text-cyan-600">
                <FaTelegram className='mt-0.5' /> Telegram
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <ContactForm text={content} currentLang={currentLang} />
        </div>
      </div>
    </section>
  );
}