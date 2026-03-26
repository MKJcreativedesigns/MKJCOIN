"use client";

import { motion } from 'framer-motion';
import { Mail, MessageSquare, User, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending form 
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Our Team</h1>
            <p className="text-white/60 text-lg">We're here to help. Send us a message and we'll reply as soon as possible.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass border-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#1E6BFF]/20 flex items-center justify-center mx-auto mb-4 text-[#1E6BFF]">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-white/50 mb-2">For general inquiries</p>
              <a href="mailto:voiceofayomide@gmail.com" className="text-[#1E6BFF] hover:underline font-bold text-sm">voiceofayomide@gmail.com</a>
            </div>
            
            <div className="glass border-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4 text-green-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-white/50 mb-2">Instant messaging support</p>
              <a href="https://wa.me/2349035030048" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline font-bold text-sm">+234 903 503 0048</a>
            </div>

            <div className="glass border-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#FF4FA3]/20 flex items-center justify-center mx-auto mb-4 text-[#FF4FA3]">
                <User className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Social Config</h3>
              <p className="text-sm text-white/50 mb-2">Follow our latest news</p>
              <a href="https://twitter.com/haryormhidey123" target="_blank" rel="noopener noreferrer" className="text-[#FF4FA3] hover:underline font-bold text-sm">@haryormhidey123</a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Message Sent Successfully!</h2>
                <p className="text-white/50">Thank you for reaching out. Our team will get back to you shortly at voiceofayomide@gmail.com.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-semibold">First Name</label>
                    <input required type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#1E6BFF] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-semibold">Last Name</label>
                    <input required type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#1E6BFF] transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-semibold">Email Address</label>
                  <input required type="email" placeholder="name@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#1E6BFF] transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-semibold">Message</label>
                  <textarea required rows={5} placeholder="How can we help you today?" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#1E6BFF] transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#1E6BFF] to-[#FF4FA3] text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(30,107,255,0.4)] transition-all flex items-center justify-center gap-2 group">
                  <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
