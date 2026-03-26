import Link from 'next/link';
import { Twitter, Disc, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0E14] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1E6BFF] to-[#FF4FA3] flex items-center justify-center p-[2px]">
                <div className="w-full h-full bg-[#0B0E14] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-bold text-xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#1E6BFF] to-[#FF4FA3]">M</span>
                </div>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">MKJ<span className="text-[#1E6BFF]">COIN</span></span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              The premium, fast, and secure platform for all your Web3 payment and cryptocurrency needs. Built for the future of finance.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/haryormhidey123" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5 text-white/80" />
              </a>
              <a href="mailto:voiceofayomide@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5 text-white/80" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Products</h4>
            <ul className="space-y-4">
              <li><Link href="/buy" className="text-white/60 hover:text-white transition-colors">Buy Crypto</Link></li>
              <li><Link href="/sell" className="text-white/60 hover:text-white transition-colors">Sell Crypto</Link></li>
              <li><Link href="/dashboard" className="text-white/60 hover:text-white transition-colors">Crypto Wallet</Link></li>
              <li><Link href="/dashboard" className="text-white/60 hover:text-white transition-colors">Web3 Payments</Link></li>
              <li><Link href="/pricing" className="text-white/60 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Developers</h4>
            <ul className="space-y-4">
              <li><Link href="/developers/docs" className="text-white/60 hover:text-white transition-colors">API Documentation</Link></li>
              <li><Link href="/developers/sdks" className="text-white/60 hover:text-white transition-colors">SDKs</Link></li>
              <li><Link href="/developers/guide" className="text-white/60 hover:text-white transition-colors">Integration Guide</Link></li>
              <li><Link href="/status" className="text-white/60 hover:text-white transition-colors">Status</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-white/60 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} MKJCOIN. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 text-sm hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="text-white/40 text-sm hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
