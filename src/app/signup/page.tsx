"use client";

import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <Navbar />
      <main className="pt-32 pb-20 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md glass border-white/10 rounded-3xl p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold mb-2 text-gradient">Start Your Journey</h1>
            <p className="text-white/50">Create your free MKJCOIN account</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-semibold">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1E6BFF] transition-colors" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-[#1E6BFF] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-semibold">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1E6BFF] transition-colors" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-[#1E6BFF] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-semibold">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1E6BFF] transition-colors" />
                <input
                  type="password"
                  placeholder="Minimum 8 characters"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-[#1E6BFF] transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 px-1 pt-2">
              <input type="checkbox" className="w-4 h-4 rounded bg-white/5 border-white/10 text-[#1E6BFF]" />
              <span className="text-[10px] text-white/40 font-medium">I agree to the <span className="text-white font-bold">Terms of Service</span> and <span className="text-white font-bold">Privacy Policy</span>.</span>
            </div>

            <Link href="/dashboard" className="w-full py-4 bg-gradient-to-r from-[#1E6BFF] to-[#FF4FA3] text-white font-bold rounded-2xl hover:shadow-[0_0_20px_rgba(30,107,255,0.4)] transition-all flex items-center justify-center gap-2 group mt-4">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-center text-xs text-white/40 mt-8">
              Already have an account? <Link href="/login" className="text-[#1E6BFF] hover:underline font-bold">Log in</Link>
            </p>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
