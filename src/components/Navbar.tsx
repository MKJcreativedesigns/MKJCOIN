"use client";

import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Wallet } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Auth Listener
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.session?.user || null);
    };
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/');
  };

  const navLinks = [
    {
      name: 'Products', href: '/products', hasDropdown: true, items: [
        { name: 'Buy Crypto', href: '/buy' },
        { name: 'Sell Crypto', href: '/sell' },
        { name: 'Crypto Wallets', href: '/dashboard' },
        { name: 'Web3 Payments', href: '/web3-payments' },
        { name: 'NFT Payments', href: '/nft-payments' },
        { name: 'Payment Widgets', href: '/widgets' },
      ]
    },
    {
      name: 'Buy Crypto', href: '/buy', hasDropdown: true, items: [
        { name: 'Buy Bitcoin', href: '/buy/bitcoin' },
        { name: 'Buy Ethereum', href: '/buy/ethereum' },
        { name: 'Buy Altcoins', href: '/buy/altcoins' },
        { name: 'Payment Methods', href: '/payment-methods' },
      ]
    },
    {
      name: 'Sell Crypto', href: '/sell', hasDropdown: true, items: [
        { name: 'Sell Bitcoin', href: '/sell/bitcoin' },
        { name: 'Sell Ethereum', href: '/sell/ethereum' },
        { name: 'Withdraw to Bank', href: '/withdraw' },
        { name: 'P2P Trading', href: '/p2p' },
      ]
    },
    {
      name: 'Developers', href: '/developers', hasDropdown: true, items: [
        { name: 'Developer APIs', href: '/developers/api' },
        { name: 'Developer Platform', href: '/developers/platform' },
        { name: 'Comprehensive APIs', href: '/developers/docs' },
        { name: 'API Documentation', href: '/developers/documentation' },
      ]
    },
    {
      name: 'Pricing', href: '/pricing', hasDropdown: true, items: [
        { name: 'Transaction Fees', href: '/pricing/fees' },
        { name: 'Subscription Plans', href: '/pricing/subscriptions' },
        { name: 'Enterprise Pricing', href: '/pricing/enterprise' },
      ]
    },
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
              <span className="font-heading font-bold text-2xl tracking-tight text-white">MKJ<span className="text-[#1E6BFF]">COIN</span></span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group/navItem py-2">
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 text-white/50 group-hover/navItem:rotate-180 transition-transform duration-200" />}
                  </Link>
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-[#0B0E14]/95 backdrop-blur-xl border border-white/10 rounded-xl py-2 opacity-0 invisible group-hover/navItem:opacity-100 group-hover/navItem:visible transition-all duration-200 shadow-2xl">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <>
                <Link href="/dashboard" className="text-sm font-medium text-white/80 hover:text-[#1E6BFF] transition-colors">
                  Dashboard
                </Link>
                <button onClick={handleSignOut} className="bg-white/5 text-white border border-white/10 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  Log in
                </Link>
                <Link href="/signup" className="bg-white text-[#0B0E14] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-all flex items-center gap-2">
                  <Wallet className="w-4 h-4" />
                  Sign up
                </Link>
              </>
            )}
          </div>

          <button
            className="lg:hidden p-2 text-white/80 hover:text-white"
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
            <div key={link.name} className="flex flex-col gap-2">
              <Link
                href={link.href}
                className="text-lg font-medium text-white/80 hover:text-white py-1 flex items-center justify-between"
                onClick={!link.hasDropdown ? () => setIsOpen(false) : undefined}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-5 h-5 text-white/50" />}
              </Link>
              {link.hasDropdown && (
                <div className="pl-4 flex flex-col gap-2 border-l border-white/10 mt-1 mb-2">
                  {link.items?.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base text-white/60 hover:text-white py-1 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="h-px bg-white/10 my-2" />
          {user ? (
            <>
              <Link 
                href="/dashboard" 
                className="text-lg font-medium text-[#1E6BFF] hover:text-white py-2"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <button 
                onClick={() => {
                  handleSignOut();
                  setIsOpen(false);
                }}
                className="bg-white/5 text-white border border-white/10 px-5 py-3 rounded-xl text-lg font-semibold w-full mt-2 text-center"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link 
                href="/login" 
                className="text-lg font-medium text-white/80 hover:text-white py-2"
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                className="bg-gradient-to-r from-[#1E6BFF] to-[#FF4FA3] text-white px-5 py-3 rounded-xl text-lg font-semibold w-full mt-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign up
              </Link>
            </>
          )}
        </motion.div>
      )}
    </header>
  );
}
