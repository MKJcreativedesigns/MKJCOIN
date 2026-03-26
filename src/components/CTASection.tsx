"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-12 md:p-20 text-center border-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1E6BFF]/20 to-[#FF4FA3]/20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Start Trading with <br /> MKJCOIN Today
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Join millions of users already trusting MKJCOIN for their digital asset management. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="px-8 py-4 rounded-full bg-white text-[#0B0E14] font-bold text-lg hover:bg-white/90 transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center">
                Create Account
              </Link>
              <Link href="/login" className="px-8 py-4 rounded-full border border-white text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center">
                Sign In
              </Link>
            </div>
            <p className="text-white/40 text-sm mt-6">It only takes 3 minutes to start.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
