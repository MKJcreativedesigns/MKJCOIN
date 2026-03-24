"use client";

import { motion } from 'framer-motion';
import { Smartphone, Download, Check } from 'lucide-react';

export default function AppSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#1E6BFF]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Crypto in your <span className="text-gradient">pocket</span>
            </h2>
            <p className="text-white/60 text-lg">
              Manage your portfolio, track live prices, and execute trades instantly with the MKJCOIN mobile app. Available for iOS and Android.
            </p>
            
            <ul className="space-y-4 my-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white/80">Real-time price alerts</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white/80">One-tap crypto purchases</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white/80">Biometric security lock</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white text-[#0B0E14] font-bold hover:bg-white/90 transition-all">
                <Download className="w-5 h-5" />
                Download App
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            className="relative perspective-1000 hidden md:block"
          >
            {/* Abstract Mobile App Mockup */}
            <div className="w-[300px] h-[600px] bg-[#0B0E14] rounded-[3rem] border-8 border-[#333] shadow-2xl relative mx-auto overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-6 bg-[#333] rounded-b-xl flex items-center justify-center w-1/2 mx-auto" />
              <div className="p-6 h-full flex flex-col bg-gradient-to-b from-[#1E6BFF]/10 to-[#0B0E14]">
                <div className="flex justify-between items-center mb-10 mt-6">
                  <h4 className="font-heading font-bold text-xl">Portfolio</h4>
                  <Smartphone className="w-6 h-6 text-white/50" />
                </div>
                <p className="text-white/50 text-sm mb-1">Total Balance</p>
                <h2 className="text-4xl font-bold font-heading mb-8">$14,204.50</h2>
                
                <div className="space-y-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="bg-white/5 p-4 rounded-2xl flex justify-between items-center isolate relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 hover:opacity-100 transition-opacity" />
                      <div className="flex gap-3 items-center relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#1E6BFF]/20" />
                        <div>
                          <p className="font-bold text-sm">Crypto {i}</p>
                          <p className="text-xs text-white/50">0.024</p>
                        </div>
                      </div>
                      <div className="text-right relative z-10">
                        <p className="font-bold text-sm">$1,200</p>
                        <p className="text-xs text-green-400">+5.4%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
