"use client";

import { motion } from 'framer-motion';
import { Terminal, AppWindow, Settings, ChevronRight } from 'lucide-react';

export default function DeveloperPlatformSection() {
  const codeSnippet = `import { MKJCoin } from '@mkjcoin/sdk';

const client = new MKJCoin({
  apiKey: process.env.MKJCOIN_API_KEY
});

// Initialize payment widget
const payment = await client.createSession({
  fiatCurrency: 'USD',
  cryptoCurrency: 'BTC',
  amount: 100,
  walletAddress: '1A1zP1eP...'
});

console.log(payment.url); // Ready to launch!`;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold w-fit mb-6">
              Developer Platform
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Powerful APIs for <br />
              <span className="text-gradient">modern teams</span>
            </h2>
            <p className="text-white/60 text-lg">
              Integrate Web3 payments into your application with just a few lines of code. Access comprehensive SDKs, detailed docs, and customizable payment widgets.
            </p>
            
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-[#0B0E14] border border-white/10 p-4 rounded-2xl hover:border-blue-500/50 transition-colors cursor-pointer group">
                <Terminal className="w-8 h-8 text-blue-400" />
                <div>
                  <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">Comprehensive APIs</h4>
                  <p className="text-sm text-white/50">Build completely custom experiences.</p>
                </div>
                <ChevronRight className="w-5 h-5 ml-auto text-white/20 group-hover:text-white/50" />
              </div>
              <div className="flex items-center gap-4 bg-[#0B0E14] border border-white/10 p-4 rounded-2xl hover:border-pink-500/50 transition-colors cursor-pointer group">
                <AppWindow className="w-8 h-8 text-pink-400" />
                <div>
                  <h4 className="font-semibold text-white group-hover:text-pink-400 transition-colors">Payment Widgets</h4>
                  <p className="text-sm text-white/50">Drop in a fully featured checkout flow.</p>
                </div>
                <ChevronRight className="w-5 h-5 ml-auto text-white/20 group-hover:text-white/50" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="glass rounded-[2rem] border-white/20 overflow-hidden relative shadow-2xl">
              <div className="bg-[#11151F] border-b border-white/10 px-6 py-4 flex items-center gap-2">
                <div className="flex gap-2 mr-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="bg-[#0B0E14] py-1.5 px-3 rounded-md border border-white/5 text-xs text-white/60 font-mono">
                  index.ts
                </div>
              </div>
              <div className="p-6 bg-[#0B0E14] overflow-x-auto">
                <pre className="text-sm text-white/80 font-mono leading-loose">
                  <code>
                    <span className="text-pink-400">import</span> {'{'} MKJCoin {'}'} <span className="text-pink-400">from</span> <span className="text-green-300">'@mkjcoin/sdk'</span>;<br/><br/>
                    <span className="text-pink-400">const</span> client = <span className="text-pink-400">new</span> <span className="text-[#1E6BFF]">MKJCoin</span>({'{'}<br/>
                    {'  '}apiKey: process.<span className="text-blue-300">env</span>.MKJCOIN_API_KEY<br/>
                    {'}'});<br/><br/>
                    <span className="text-white/40">// Initialize payment widget</span><br/>
                    <span className="text-pink-400">const</span> payment = <span className="text-pink-400">await</span> client.<span className="text-blue-300">createSession</span>({'{'}<br/>
                    {'  '}fiatCurrency: <span className="text-green-300">'USD'</span>,<br/>
                    {'  '}cryptoCurrency: <span className="text-green-300">'BTC'</span>,<br/>
                    {'  '}amount: <span className="text-[#FF4FA3]">100</span>,<br/>
                    {'  '}walletAddress: <span className="text-green-300">'1A1zP1eP...'</span><br/>
                    {'}'});<br/><br/>
                    console.<span className="text-blue-300">log</span>(payment.url); <span className="text-white/40">// Ready to launch!</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
