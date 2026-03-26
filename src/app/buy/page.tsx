"use client";

import { motion } from 'framer-motion';
import { Bitcoin, ArrowLeft, ShieldCheck, ChevronDown, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function BuyCrypto() {
  const [amount, setAmount] = useState('1000');
  const [currency, setCurrency] = useState('USD');
  const [asset, setAsset] = useState('BTC');

  const assets = [
    { symbol: 'BTC', name: 'Bitcoin', icon: <Bitcoin className="w-5 h-5 text-[#F7931A]" /> },
    { symbol: 'ETH', name: 'Ethereum', icon: <div className="w-5 h-5 rounded-full bg-[#627EEA] flex items-center justify-center text-[8px]">Ξ</div> },
    { symbol: 'SOL', name: 'Solana', icon: <div className="w-5 h-5 rounded-full bg-[#14F195] flex items-center justify-center text-[8px] text-[#0B0E14]">S</div> },
  ];

  const paymentMethods = [
    { id: 'bank', name: 'Bank Transfer (ACH)', fee: '0.5%', time: '1-3 days' },
    { id: 'card', name: 'Credit/Debit Card', fee: '3.75%', time: 'Instant' },
    { id: 'apple', name: 'Apple Pay', fee: '3.75%', time: 'Instant' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-xl mx-auto">
          <Link href="/dashboard" className="flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Bitcoin className="w-40 h-40" />
            </div>

            <h1 className="text-3xl font-heading font-bold mb-2">Buy Crypto</h1>
            <p className="text-white/50 mb-8">Choose your asset and payment method to get started.</p>

            <div className="space-y-6 relative z-10">
              {/* Asset Selection */}
              <div>
                <label className="text-sm text-white/40 mb-2 block">I want to buy</label>
                <div className="grid grid-cols-3 gap-3">
                  {assets.map((a) => (
                    <button
                      key={a.symbol}
                      onClick={() => setAsset(a.symbol)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${
                        asset === a.symbol ? 'bg-[#1E6BFF]/10 border-[#1E6BFF] text-white' : 'bg-white/5 border-white/5 text-white/40 hover:bg-white/10'
                      }`}
                    >
                      {a.icon}
                      <span className="font-bold text-xs">{a.symbol}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Entry */}
              <div className="bg-[#0B0E14]/60 border border-white/10 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-white/40">Amount in USD</span>
                  <span className="text-xs text-[#1E6BFF]">Limits: $10 - $50,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">$</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-transparent border-none text-4xl font-bold focus:outline-none w-full text-right"
                  />
                </div>
                <div className="h-px bg-white/5 my-4" />
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Estimated {asset}</span>
                  <span className="font-bold text-[#1E6BFF]">≈ {(Number(amount) / 64320).toFixed(6)} {asset}</span>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="text-sm text-white/40 mb-2 block">Payment Method</label>
                <div className="space-y-2">
                  {paymentMethods.map((m) => (
                    <button
                      key={m.id}
                      className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center p-0.5 group-hover:border-[#1E6BFF]">
                          {m.id === 'bank' && <Check className="w-full h-full text-[#1E6BFF]" />}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{m.name}</p>
                          <p className="text-[10px] text-white/40">{m.time} • Fee: {m.fee}</p>
                        </div>
                      </div>
                      <ChevronDown className="w-4 h-4 text-white/20" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full py-5 bg-gradient-to-r from-[#1E6BFF] to-[#FF4FA3] text-white font-bold rounded-2xl text-lg hover:shadow-[0_0_30px_rgba(30,107,255,0.4)] transition-all flex items-center justify-center gap-3">
                Review Purchase
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-white/30">
                <ShieldCheck className="w-4 h-4 text-green-500/50" />
                Your transaction is secured by bank-grade encryption.
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
