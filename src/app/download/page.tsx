"use client";

import { motion } from 'framer-motion';
import { Apple, Download, Smartphone, Star, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-hidden">
      <Navbar />
      
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#1E6BFF] rounded-full mix-blend-screen filter blur-[150px] opacity-20" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#FF4FA3] rounded-full mix-blend-screen filter blur-[150px] opacity-20" />

      <main className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 w-fit mx-auto lg:mx-0">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-white/80">4.9/5 Average App Rating</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                The most powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E6BFF] to-[#FF4FA3]">crypto app</span>
              </h1>

              <p className="text-lg text-white/60">
                Experience seamless trading, secure storage, and real-time market data directly from your device. Download MKJCOIN app and trade on the go.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-[#0B0E14] font-bold hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105">
                  <Apple className="w-6 h-6" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] font-normal">Download on the</div>
                    <div>App Store</div>
                  </div>
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl glass border-white/20 text-white font-bold hover:bg-white/10 transition-all hover:scale-105">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] font-normal">GET IT ON</div>
                    <div>Google Play</div>
                  </div>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 mt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-sm">Secure Storage</h4>
                    <p className="text-xs text-white/50">Biometric login</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1E6BFF]/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#1E6BFF]" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-sm">Lightning Fast</h4>
                    <p className="text-xs text-white/50">Instant execution</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2 }}
              className="relative hidden md:block mx-auto lg:mr-0 z-10"
            >
              {/* App Mockup UI */}
              <div className="w-[320px] h-[650px] bg-[#000] rounded-[3rem] border-[10px] border-[#222] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-7 bg-[#222] rounded-b-2xl w-1/2 mx-auto flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                  <div className="w-12 h-2 rounded-full bg-black"></div>
                </div>
                
                <div className="p-6 h-full flex flex-col pt-12 bg-gradient-to-b from-[#1E6BFF]/10 to-[#0B0E14] relative">
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-[#1E6BFF]/20 overflow-hidden">
                      <img src="https://ui-avatars.com/api/?name=User&background=random" alt="avatar" />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Smartphone className="w-4 h-4" /></div>
                    </div>
                  </div>
                  
                  <p className="text-white/60 text-sm mb-1 uppercase tracking-wider font-semibold">Total Asset Value</p>
                  <h2 className="text-4xl font-bold font-heading mb-8">$28,450.00</h2>
                  
                  <div className="flex gap-4 mb-8">
                    <div className="flex-1 bg-[#1E6BFF] py-3 rounded-xl text-center font-bold shadow-lg">Deposit</div>
                    <div className="flex-1 bg-white/10 py-3 rounded-xl text-center font-bold">Send</div>
                  </div>

                  <h3 className="font-semibold mb-4">My Portfolio</h3>
                  <div className="space-y-3 flex-1 overflow-y-auto pr-2 pb-10">
                    <div className="glass !bg-white/5 p-4 rounded-2xl flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#F7931A] flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-[#F7931A]/20">B</div>
                        <div>
                          <p className="font-bold text-sm">Bitcoin <span className="text-xs font-normal text-white/50">BTC</span></p>
                          <p className="text-xs text-white/50">0.125</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm">$8,040.06</p>
                        <p className="text-xs text-green-400">+1.2%</p>
                      </div>
                    </div>
                    
                    <div className="glass !bg-white/5 p-4 rounded-2xl flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#627EEA] flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-[#627EEA]/20">Ξ</div>
                        <div>
                          <p className="font-bold text-sm">Ethereum <span className="text-xs font-normal text-white/50">ETH</span></p>
                          <p className="text-xs text-white/50">2.54</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm">$8,763.50</p>
                        <p className="text-xs text-green-400">+3.4%</p>
                      </div>
                    </div>
                  </div>

                  {/* Mock Bottom Nav */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#0B0E14] border-t border-white/5 flex justify-around items-center px-4">
                    <div className="w-12 h-12 flex items-center justify-center text-[#1E6BFF]"><Star className="w-6 h-6 fill-current" /></div>
                    <div className="w-12 h-12 flex items-center justify-center text-white/40"><ShieldCheck className="w-6 h-6" /></div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#1E6BFF] to-[#FF4FA3] -mt-8 border-4 border-[#0B0E14] flex items-center justify-center shadow-lg"><Zap className="w-6 h-6 text-white" /></div>
                    <div className="w-12 h-12 flex items-center justify-center text-white/40"><Apple className="w-6 h-6" /></div>
                    <div className="w-12 h-12 flex items-center justify-center text-white/40"><Smartphone className="w-6 h-6" /></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
