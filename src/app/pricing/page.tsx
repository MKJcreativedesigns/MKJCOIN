"use client";

import { motion } from 'framer-motion';
import { Check, Shield, Zap, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Pricing() {
  const plans = [
    {
      name: 'Personal',
      description: 'Perfect for beginners starting their crypto journey.',
      price: 'Free',
      features: [
        'Buy & Sell 50+ Cryptos',
        'Standard MKJ Wallet',
        'Email Support',
        'Basic Market Analytics',
        '0.5% Trading Fee'
      ],
      cta: 'Get Started',
      href: '/signup',
      highlighted: false
    },
    {
      name: 'Pro',
      description: 'Advanced tools for serious traders and enthusiasts.',
      price: '$19.99',
      period: '/mo',
      features: [
        'Everything in Personal',
        'MKJ Premium Card',
        'Priority 24/7 Support',
        'Advanced Asset Insights',
        '0.1% Trading Fee',
        'Custom Price Alerts'
      ],
      cta: 'Start Pro Trial',
      href: '/signup',
      highlighted: true
    },
    {
      name: 'Institutional',
      description: 'Custom solutions for high-volume traders and businesses.',
      price: 'Custom',
      features: [
        'Everything in Pro',
        'Dedicated Account Manager',
        'Custom API Integration',
        'Enhanced Security Protocols',
        'Institution-grade Liquidity',
        'Volume-based Fee Rebates'
      ],
      cta: 'Contact Sales',
      href: '#',
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
            >
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/50 max-w-2xl mx-auto"
            >
              Choose the plan that fits your financial goals. No hidden fees, no surprises.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative glass border-white/10 rounded-3xl p-8 flex flex-col ${
                  plan.highlighted ? 'ring-2 ring-[#1E6BFF] bg-[#1E6BFF]/5' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1E6BFF] text-white text-[10px] font-bold py-1 px-4 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-white/50 mb-6">{plan.description}</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-white/40">{plan.period}</span>}
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={plan.href}
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2 group ${
                    plan.highlighted
                      ? 'bg-[#1E6BFF] text-white hover:shadow-[0_0_20px_rgba(30,107,255,0.4)]'
                      : 'glass border-white/10 hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Fee Comparison Table (Simplified) */}
          <div className="mt-24 glass border-white/10 rounded-3xl p-8 overflow-hidden">
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Network Fee Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs text-white/40 border-b border-white/5 uppercase tracking-widest">
                    <th className="pb-4">Feature</th>
                    <th className="pb-4">Traditional Bank</th>
                    <th className="pb-4">Other Exchanges</th>
                    <th className="pb-4 text-[#1E6BFF]">MKJCOIN</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['ACH Deposits', '$1 - $5', '0.5% - 1.5%', 'Free'],
                    ['Card Purchases', 'N/A', '3.99%', '3.75%'],
                    ['Crypto Sending', 'N/A', 'Varies + Markup', 'Network Fee Only'],
                    ['Customer Support', 'Phone Only', 'Tickets Only', '24/7 Live Chat'],
                  ].map(([feature, bank, other, mkj]) => (
                    <tr key={feature} className="text-sm">
                      <td className="py-4 font-medium">{feature}</td>
                      <td className="py-4 text-white/40">{bank}</td>
                      <td className="py-4 text-white/40">{other}</td>
                      <td className="py-4 font-bold text-[#1E6BFF]">{mkj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
