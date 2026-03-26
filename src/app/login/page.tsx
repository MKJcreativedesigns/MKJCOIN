"use client";

import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <Navbar />
      <main className="pt-32 pb-20 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md glass border-white/10 rounded-3xl p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold mb-2">Welcome Back</h1>
            <p className="text-white/50">Log in to your MKJCOIN account</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-semibold">Email</label>
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
              <div className="flex justify-between items-center">
                <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-semibold">Password</label>
                <button type="button" className="text-[10px] text-[#1E6BFF] hover:underline uppercase tracking-wider font-bold">Forgot?</button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1E6BFF] transition-colors" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-[#1E6BFF] transition-all"
                />
              </div>
            </div>

            <Link href="/dashboard" className="w-full py-4 bg-white text-[#0B0E14] font-bold rounded-2xl hover:bg-white/90 transition-all flex items-center justify-center gap-2 group mt-4">
              Sign In
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex items-center gap-4 my-6">
              <div className="h-px bg-white/5 grow" />
              <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">OR</span>
              <div className="h-px bg-white/5 grow" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex items-center justify-center gap-2 py-3 glass border-white/10 rounded-xl hover:bg-white/5 transition-all text-xs font-semibold">
                <Chrome className="w-4 h-4" />
                Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 py-3 glass border-white/10 rounded-xl hover:bg-white/5 transition-all text-xs font-semibold">
                <Github className="w-4 h-4" />
                GitHub
              </button>
            </div>

            <p className="text-center text-xs text-white/40 mt-8">
              Don't have an account? <Link href="/signup" className="text-[#1E6BFF] hover:underline font-bold">Sign up</Link>
            </p>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
