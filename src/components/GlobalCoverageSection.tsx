"use client";

import { motion } from 'framer-motion';
import { Globe, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function GlobalCoverageSection() {
  return (
    <section className="py-32 relative bg-[#05060A] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#1E6BFF]/5 to-[#FF4FA3]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            Global scale, <span className="text-gradient">Local experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            Access the crypto market from over 160 countries with our localized payment solutions and multi-currency support.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[2/1] w-full max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden glass border-white/10"
        >
          {/* Stylized world map placeholder - replace with actual map/svg if needed */}
          <div className="absolute inset-0 bg-[#0B0E14]/80 flex items-center justify-center">
            <Globe className="w-64 h-64 text-[#1E6BFF]/20 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-4 h-4 rounded-full bg-[#1E6BFF] ring-4 ring-[#1E6BFF] ring-opacity-50 animate-pulse top-1/4 left-1/4" />
            <div className="absolute w-4 h-4 rounded-full bg-[#FF4FA3] ring-4 ring-[#FF4FA3] ring-opacity-50 animate-pulse top-2/3 left-1/2" />
            <div className="absolute w-4 h-4 rounded-full bg-[#1E6BFF] ring-4 ring-[#1E6BFF] ring-opacity-50 animate-pulse top-1/3 right-1/4" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 glass rounded-2xl hover:bg-white/5 transition-all">
            <h4 className="text-4xl font-heading font-bold text-white mb-2">160+</h4>
            <p className="text-white/50">Supported Countries</p>
          </div>
          <div className="text-center p-6 glass rounded-2xl hover:bg-white/5 transition-all">
            <h4 className="text-4xl font-heading font-bold text-white mb-2">100+</h4>
            <p className="text-white/50">Local Payment Methods</p>
          </div>
          <div className="text-center p-6 glass rounded-2xl hover:bg-white/5 transition-all">
            <h4 className="text-4xl font-heading font-bold text-white mb-2">40+</h4>
            <p className="text-white/50">Fiat Currencies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
