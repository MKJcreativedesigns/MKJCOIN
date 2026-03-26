"use client";

import { motion } from 'framer-motion';
import { ArrowRight, ArrowRightLeft, ShieldCheck, Globe2 } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Background Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#1E6BFF] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse-glow" />
      <div className="absolute top-40 right-20 w-80 h-80 bg-[#FF4FA3] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#FF4FA3] animate-pulse" />
              <span className="text-sm font-medium text-white/80">The Future of Web3 Payments</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
              Buy, Sell & Manage Crypto <span className="text-gradient">Instantly</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto lg:mx-0 font-light">
              Join millions of users worldwide buying, selling, and managing their digital assets securely with MKJCOIN. Experience Web3 finance without limits.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/buy" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0B0E14] font-bold text-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2 group">
                Buy Crypto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/sell" className="w-full sm:w-auto px-8 py-4 rounded-full glass border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all text-center">
                Sell Crypto
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-heading font-bold text-white">15M+</span>
                <span className="text-sm text-white/50">Trusted Users</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-heading font-bold text-white">160+</span>
                <span className="text-sm text-white/50">Countries</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-heading font-bold text-white">$2B+</span>
                <span className="text-sm text-white/50">Volume</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1E6BFF]/20 to-[#FF4FA3]/20 blur-3xl rounded-full" />
            <div className="relative glass border-white/10 rounded-3xl p-6 sm:p-8 max-w-md mx-auto lg:mr-0 backdrop-blur-2xl shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1E6BFF]/20 flex items-center justify-center border border-[#1E6BFF]/30">
                    <span className="font-bold text-[#1E6BFF] text-xl">B</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Bitcoin</h3>
                    <p className="text-sm text-white/50">BTC</p>
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="font-semibold">$64,320.50</h3>
                  <p className="text-sm text-green-400">+2.45%</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-[#0B0E14]/80 border border-white/5 rounded-2xl p-4">
                  <p className="text-sm text-white/50 mb-1">You pay</p>
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>1,000</span>
                    <span>USD</span>
                  </div>
                </div>
                <div className="flex justify-center -my-6 relative z-10">
                  <div className="w-10 h-10 rounded-full border-4 border-[#1E6BFF]/20 glass flex items-center justify-center">
                    <ArrowRightLeft className="w-4 h-4 text-[#1E6BFF] rotate-90" />
                  </div>
                </div>
                <div className="bg-[#0B0E14]/80 border border-white/5 rounded-2xl p-4">
                  <p className="text-sm text-white/50 mb-1">You get</p>
                  <div className="flex justify-between items-center text-xl font-bold text-[#1E6BFF]">
                    <span>0.0155</span>
                    <span>BTC</span>
                  </div>
                </div>
              </div>

              <Link href="/buy" className="w-full bg-gradient-to-r from-[#1E6BFF] to-[#FF4FA3] text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(30,107,255,0.4)] transition-all text-center block">
                Continue
              </Link>
            </div>
            
            <div className="absolute -bottom-10 -left-10 glass rounded-2xl p-4 flex items-center gap-4 animate-float">
              <ShieldCheck className="w-8 h-8 text-green-400" />
              <div>
                <p className="text-sm font-semibold">Bank-grade Security</p>
                <p className="text-xs text-white/50">SOC 2 Type II Certified</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
