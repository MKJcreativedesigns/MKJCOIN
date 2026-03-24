"use client";

import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Wallet } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', hasDropdown: true },
    { name: 'Buy Crypto', hasDropdown: false },
    { name: 'Sell Crypto', hasDropdown: false },
    { name: 'Developers', hasDropdown: true },
    { name: 'Pricing', hasDropdown: false },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-[#0B0E14]/80 backdrop-blur-md border-white/10 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1E6BFF] to-[#FF4FA3] flex items-center justify-center p-[2px]">
                <div className="w-full h-full bg-[#0B0E14] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-bold text-xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#1E6BFF] to-[#FF4FA3]">M</span>
                </div>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">MKJ<span className="text-[#1E6BFF]">COIN</span></span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href="#"
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 text-white/50" />}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Log in
            </Link>
            <button className="bg-white text-[#0B0E14] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-all flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              Sign up
            </button>
          </div>

          <button
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#0B0E14]/95 backdrop-blur-xl border-b border-white/10 py-4 px-4 flex flex-col gap-4 md:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href="#"
              className="text-lg font-medium text-white/80 hover:text-white py-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <Link href="#" className="text-lg font-medium text-white/80 hover:text-white py-2">
            Log in
          </Link>
          <button className="bg-gradient-to-r from-[#1E6BFF] to-[#FF4FA3] text-white px-5 py-3 rounded-xl text-lg font-semibold w-full mt-2">
            Sign up
          </button>
        </motion.div>
      )}
    </header>
  );
}
