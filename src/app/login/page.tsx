"use client";

import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Chrome, Github } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    router.push('/dashboard');
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    });
  };

  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <Navbar />
      <main className="pt-32 pb-20 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md glass border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1E6BFF]/20 blur-[50px] rounded-full" />
          
          <div className="text-center mb-8 relative z-10">
            <h1 className="text-3xl font-heading font-bold mb-2">Welcome Back</h1>
            <p className="text-white/50">Enter your details to access your portfolio</p>
          </div>

          <form className="space-y-4 relative z-10" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-semibold">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1E6BFF] transition-colors" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-[#1E6BFF] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-semibold">Password</label>
                <Link href="/login/forgot-password" className="text-[10px] text-[#1E6BFF] hover:underline uppercase tracking-wider font-bold">Forgot?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1E6BFF] transition-colors" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-[#1E6BFF] transition-all"
                />
              </div>
            </div>

            {error && <p className="text-red-400 text-xs mt-2 text-center">{error}</p>}

            <button disabled={loading} type="submit" className="w-full py-4 mt-6 glass bg-white/5 font-bold hover:bg-white/10 border-white/20 rounded-2xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50">
              {loading ? "Signing In..." : "Sign In"}
              {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-[#0B0E14] px-2 text-white/40 font-semibold uppercase">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={signInWithGoogle} className="flex items-center justify-center gap-2 py-3 glass border-white/10 rounded-xl hover:bg-white/5 transition-all text-xs font-semibold cursor-pointer">
                <Chrome className="w-4 h-4" />
                Google
              </button>
              <button type="button" onClick={signInWithGithub} className="flex items-center justify-center gap-2 py-3 glass border-white/10 rounded-xl hover:bg-white/5 transition-all text-xs font-semibold cursor-pointer">
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
