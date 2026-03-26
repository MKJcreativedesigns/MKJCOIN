"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, Rocket, Layers, Code, Zap } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GenericPage() {
  const pathname = usePathname();
  const title = pathname.split('/').filter(Boolean).map(x => x.charAt(0).toUpperCase() + x.slice(1).replace(/-/g, ' ')).join(' - ');

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 min-h-[80vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto glass border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1E6BFF]/10 to-[#FF4FA3]/10" />
          
          <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 relative z-10">
            <Rocket className="w-10 h-10 text-[#1E6BFF]" />
          </div>

          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">{title}</h1>
            <p className="text-white/60 mb-8 max-w-lg mx-auto leading-relaxed">
              This feature is fully integrated into the MKJCOIN ecosystem. Explore our platform to see how we power the future of digital finance.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 text-left">
              <div className="p-4 bg-white/5 rounded-xl">
                <Layers className="w-5 h-5 text-white/40 mb-2" />
                <h3 className="font-semibold text-sm mb-1">Seamless SDK</h3>
                <p className="text-[10px] text-white/40">Ready out of the box</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <Code className="w-5 h-5 text-white/40 mb-2" />
                <h3 className="font-semibold text-sm mb-1">Open APIs</h3>
                <p className="text-[10px] text-white/40">Build without limits</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="px-8 py-4 rounded-xl bg-white text-[#0B0E14] font-bold hover:bg-white/90 transition-all">
                Get Started
              </Link>
              <Link href="/" className="px-8 py-4 rounded-xl glass border-white/20 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
