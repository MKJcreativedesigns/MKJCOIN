"use client";

import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, User as UserIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 1. Sign up user via Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        }
      }
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    // 2. Insert into our custom public."User" table mapped to our Prisma logic
    if (authData.user) {
      const { error: dbError } = await supabase.from('User').insert([
        {
          id: authData.user.id,
          email: authData.user.email,
          fullName: fullName,
          passwordHash: 'MANAGED_BY_SUPABASE', // Password is secure in auth.users
        }
      ]);
      
      if (dbError) {
        // Technically it might fail if table isn't created yet or RLS blocks it
        console.warn('Could not insert into User table - make sure supabase-schema.sql is run.', dbError);
      }
      
      // Init a default Wallet for USD
      await supabase.from('Wallet').insert([
        { userId: authData.user.id, asset: 'USD', balance: 0.0 }
      ]);
    }

    setLoading(false);
    // Push the user to the dashboard automatically
    router.push('/dashboard');
  };

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

          <form className="space-y-4" onSubmit={handleSignup}>
            <div className="space-y-2">
              <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-semibold">Full Name</label>
              <div className="relative group">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#1E6BFF] transition-colors" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-[#1E6BFF] transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 px-1 pt-2">
              <input required type="checkbox" className="w-4 h-4 rounded bg-white/5 border-white/10 text-[#1E6BFF]" />
              <span className="text-[10px] text-white/40 font-medium">I agree to the <span className="text-white font-bold">Terms of Service</span> and <span className="text-white font-bold">Privacy Policy</span>.</span>
            </div>

            {error && <p className="text-red-400 text-xs mt-2 text-center">{error}</p>}

            <button disabled={loading} type="submit" className="w-full py-4 bg-gradient-to-r from-[#1E6BFF] to-[#FF4FA3] text-white font-bold rounded-2xl hover:shadow-[0_0_20px_rgba(30,107,255,0.4)] transition-all flex items-center justify-center gap-2 group mt-4 disabled:opacity-50">
              {loading ? "Creating Account..." : "Get Started"}
              {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>

            <p className="text-center text-xs text-white/40 mt-8">
              Already have an account? <Link href="/login" className="text-[#1E6BFF] hover:underline font-bold">Log in</Link>
            </p>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
