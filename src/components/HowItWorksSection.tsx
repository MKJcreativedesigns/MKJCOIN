"use client";

import { motion } from 'framer-motion';
import { UserPlus, UserCheck, Bitcoin, ArrowRightLeft } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    icon: <UserPlus className="w-6 h-6 text-white" />,
    title: "Create Account",
    description: "Sign up in seconds with just your email and a secure password.",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-white" />,
    title: "Verify Identity",
    description: "Complete our lightning-fast 60-second KYC process.",
  },
  {
    icon: <Bitcoin className="w-6 h-6 text-white" />,
    title: "Buy or Sell Crypto",
    description: "Choose from 100+ cryptocurrencies and complete your payment.",
  },
  {
    icon: <ArrowRightLeft className="w-6 h-6 text-white" />,
    title: "Store or Transfer",
    description: "Receive crypto directly to your wallet instantly.",
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#05060A] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Start trading in <br />
              <span className="text-gradient">under 3 minutes</span>
            </h2>
            <p className="text-white/60 text-lg">
              We've stripped away the complexity. Our streamlined onboarding process gets you from zero to crypto incredibly fast, without sacrificing security.
            </p>
            
            <div className="mt-8 space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start relative">
                  {index !== steps.length - 1 && (
                    <div className="absolute top-12 left-6 w-px h-16 bg-gradient-to-b from-[#1E6BFF]/40 to-transparent" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1E6BFF] to-[#FF4FA3] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(30,107,255,0.3)]">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading mb-2">{step.title}</h4>
                    <p className="text-white/60">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Visual element representing the process */}
            <div className="aspect-square max-w-md mx-auto relative hidden md:block">
              <div className="absolute inset-0 rounded-full border border-white/10 border-dashed animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-white/5 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-[#1E6BFF] to-[#FF4FA3] opacity-20 filter blur-2xl" />
                <div className="glass w-64 h-80 rounded-3xl border border-white/20 shadow-2xl absolute flex flex-col items-center justify-center p-8 text-center backdrop-blur-3xl">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <UserCheck className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-2">Verified!</h3>
                  <p className="text-white/60 text-sm mb-8">Your account is ready for trading</p>
                  <Link href="/buy" className="w-full py-3 rounded-xl bg-white text-[#0B0E14] font-bold block text-center">
                    Buy Bitcoin
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
