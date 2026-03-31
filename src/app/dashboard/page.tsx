"use client";

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  RefreshCcw, 
  Plus, 
  MoreHorizontal,
  LayoutDashboard,
  LineChart,
  CreditCard,
  Settings,
  Bell,
  Search,
  ChevronRight,
  TrendingUp,
  Bitcoin,
  ArrowRightLeft
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { createClient } from '@/utils/supabase/client';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [userName, setUserName] = useState('User');
  const [userBalance, setUserBalance] = useState('0.00');
  const supabase = createClient();

  useEffect(() => {
    async function loadUserData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Fetch Profile
      const { data: dbUser } = await supabase
        .from('User')
        .select('fullName')
        .eq('id', user.id)
        .single();
        
      if (dbUser) {
        setUserName(dbUser.fullName.split(' ')[0]);
      }

      // Fetch USD Balance
      const { data: wallet } = await supabase
        .from('Wallet')
        .select('balance')
        .eq('userId', user.id)
        .eq('asset', 'USD')
        .single();

      if (wallet) {
        setUserBalance(Number(wallet.balance).toLocaleString('en-US', { minimumFractionDigits: 2 }));
      }
    }
    loadUserData();
  }, []);

  const assets = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$64,320.50', change: '+2.45%', color: '#F7931A', icon: <Bitcoin className="w-6 h-6" /> },
    { name: 'Ethereum', symbol: 'ETH', price: '$3,450.20', change: '+1.12%', color: '#627EEA', icon: <div className="w-6 h-6 rounded-full bg-[#627EEA] flex items-center justify-center text-white text-[10px] font-bold">Ξ</div> },
    { name: 'Solana', symbol: 'SOL', price: '$145.80', change: '-0.34%', color: '#14F195', icon: <div className="w-6 h-6 rounded-full bg-[#14F195] flex items-center justify-center text-[#0B0E14] text-[10px] font-bold">S</div> },
    { name: 'Cardano', symbol: 'ADA', price: '$0.45', change: '+5.67%', color: '#0033AD', icon: <div className="w-6 h-6 rounded-full bg-[#0033AD] flex items-center justify-center text-white text-[10px] font-bold">A</div> },
  ];

  const transactions = [
    { type: 'Buy', asset: 'BTC', amount: '0.0155', value: '$1,000.00', status: 'Completed', date: 'Mar 23, 10:45 AM' },
    { type: 'Sell', asset: 'ETH', amount: '0.5', value: '$1,725.10', status: 'Completed', date: 'Mar 22, 02:30 PM' },
    { type: 'Received', asset: 'USDT', amount: '500', value: '$500.00', status: 'Pending', date: 'Mar 22, 11:15 AM' },
    { type: 'Internal Transfer', asset: 'SOL', amount: '10', value: '$1,458.00', status: 'Completed', date: 'Mar 21, 09:20 AM' },
  ];

  const sidebarLinks = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Assets', icon: Wallet },
    { name: 'Market', icon: TrendingUp },
    { name: 'Exchange', icon: RefreshCcw },
    { name: 'Wallet', icon: CreditCard },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white font-sans">
      <Navbar />

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/5 h-[calc(100vh-80px)] hidden lg:flex flex-col p-6 sticky top-20">
          <nav className="space-y-2 flex-grow">
            {sidebarLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setActiveTab(link.name)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                  activeTab === link.name 
                    ? "bg-[#1E6BFF]/10 text-[#1E6BFF] border border-[#1E6BFF]/20" 
                    : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
                )}
              >
                <link.icon className={cn("w-5 h-5", activeTab === link.name ? "text-[#1E6BFF]" : "text-white/40 group-hover:text-white")} />
                <span className="font-medium">{link.name}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto glass border-white/10 rounded-2xl p-4">
            <p className="text-xs text-white/40 mb-2 uppercase tracking-wider">Account Level</p>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm">Tier 2 Verified</span>
              <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Active</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#1E6BFF] to-[#FF4FA3] w-3/4" />
            </div>
            <p className="text-[10px] text-white/40 mt-2">Daily limit: $50,000 / $100,000</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-4 md:p-8 lg:p-10 max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-heading font-bold">Welcome back, {userName}!</h1>
              <p className="text-white/50 text-sm">Here's what's happening with your portfolio today.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-[#1E6BFF] transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search assets..." 
                  className="bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#1E6BFF] focus:border-[#1E6BFF] transition-all w-full md:w-64"
                />
              </div>
              <button className="p-2.5 glass border-white/10 rounded-xl hover:bg-white/10 transition-all relative">
                <Bell className="w-5 h-5 text-white/60" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#FF4FA3] rounded-full border-2 border-[#0B0E14]" />
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Portfolio Balance */}
            <div className="lg:col-span-2 glass border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <LayoutDashboard className="w-32 h-32 text-[#1E6BFF]" />
              </div>
              
              <div className="relative z-10">
                <p className="text-white/50 text-sm mb-1">Total Balance</p>
                <div className="flex items-baseline gap-3 mb-6">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold">${userBalance}</h2>
                  <span className="text-green-400 flex items-center gap-1 text-sm bg-green-400/10 px-2 py-1 rounded-lg">
                    <ArrowUpRight className="w-4 h-4" />
                    +12.5%
                  </span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/buy" className="px-6 py-3 bg-[#1E6BFF] text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-[#1E6BFF]/90 transition-all">
                    <Plus className="w-4 h-4" />
                    Buy Crypto
                  </Link>
                  <Link href="/sell" className="px-6 py-3 glass border-white/10 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-white/5 transition-all">
                    <RefreshCcw className="w-4 h-4" />
                    Sell/Exchange
                  </Link>
                </div>
              </div>

              {/* Mock Chart Area */}
              <div className="mt-8 h-40 flex items-end gap-1">
                {[40, 45, 30, 60, 50, 80, 70, 90, 85, 95, 80, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="flex-grow bg-gradient-to-t from-[#1E6BFF]/40 to-[#1E6BFF]/80 rounded-t-sm"
                  />
                ))}
              </div>
            </div>

            {/* Quick Actions / Mini Wallet */}
            <div className="glass border-white/10 rounded-3xl p-6 md:p-8">
              <h3 className="font-heading font-bold text-xl mb-6 flex items-center justify-between">
                My Wallet
                <ChevronRight className="w-5 h-5 text-white/30" />
              </h3>
              
              <div className="space-y-4">
                {assets.slice(0, 3).map((asset) => (
                  <div key={asset.symbol} className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-all cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#1E6BFF]/20 transition-all">
                        {asset.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{asset.name}</p>
                        <p className="text-[10px] text-white/40">{asset.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">{asset.price}</p>
                      <p className={cn("text-[10px]", asset.change.startsWith('+') ? "text-green-400" : "text-red-400")}>
                        {asset.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/dashboard/assets" className="block w-full mt-6 py-3 border border-dashed border-white/10 rounded-xl text-center text-xs text-white/50 hover:border-white/20 hover:text-white transition-all">
                + View all assets
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Transactions */}
            <div className="lg:col-span-2 glass border-white/10 rounded-3xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-bold text-xl">Recent Activity</h3>
                <Link href="/dashboard/history" className="text-xs text-[#1E6BFF] hover:underline">View all history</Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-xs text-white/40 border-b border-white/5">
                      <th className="pb-3 font-medium">Transaction</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Date</th>
                      <th className="pb-3 font-medium text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {transactions.map((tx, i) => (
                      <tr key={i} className="group cursor-pointer">
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center",
                              tx.type === 'Buy' ? "bg-green-500/10 text-green-400" : 
                              tx.type === 'Sell' ? "bg-red-500/10 text-red-400" : "bg-blue-500/10 text-blue-400"
                            )}>
                              {tx.type === 'Buy' ? <ArrowDownLeft className="w-4 h-4" /> : 
                               tx.type === 'Sell' ? <ArrowUpRight className="w-4 h-4" /> : <RefreshCcw className="w-4 h-4" />}
                            </div>
                            <div>
                              <p className="text-sm font-medium">{tx.type} {tx.asset}</p>
                              <p className="text-[10px] text-white/40">Network: Mainnet</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className={cn(
                            "text-[10px] px-2 py-0.5 rounded-full",
                            tx.status === 'Completed' ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"
                          )}>
                            {tx.status}
                          </span>
                        </td>
                        <td className="py-4 text-xs text-white/50">{tx.date}</td>
                        <td className="py-4 text-right">
                          <p className="text-sm font-medium">{tx.amount} {tx.asset}</p>
                          <p className="text-[10px] text-white/40">{tx.value}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Swap Card */}
            <div className="glass border-white/10 rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white/5 to-transparent">
              <h3 className="font-heading font-bold text-xl mb-6">Quick Swap</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-[#0B0E14]/60 border border-white/5 rounded-2xl">
                  <div className="flex justify-between text-[10px] text-white/40 mb-1">
                    <span>From</span>
                    <span>Balance: 0.85 ETH</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <input type="number" defaultValue="0.5" className="bg-transparent border-none text-xl font-bold focus:outline-none w-1/2" />
                    <button className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded-lg text-sm font-semibold">
                      <div className="w-5 h-5 rounded-full bg-[#627EEA] flex items-center justify-center text-[8px]">Ξ</div>
                      ETH
                    </button>
                  </div>
                </div>

                <div className="flex justify-center -my-6 relative z-10">
                  <button className="w-8 h-8 rounded-full bg-[#1E6BFF] border-2 border-[#0B0E14] flex items-center justify-center shadow-lg hover:rotate-180 transition-transform duration-500">
                    <ArrowRightLeft className="w-4 h-4 text-white rotate-90" />
                  </button>
                </div>

                <div className="p-4 bg-[#0B0E14]/60 border border-white/5 rounded-2xl">
                  <div className="flex justify-between text-[10px] text-white/40 mb-1">
                    <span>To (Estimated)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-[#1E6BFF]">1,725.10</span>
                    <button className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded-lg text-sm font-semibold">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-[8px]">$</div>
                      USDT
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex justify-between text-[10px] text-white/40 mb-4">
                    <span>Rate: 1 ETH = 3,450.20 USDT</span>
                    <span>Slippage: 0.5%</span>
                  </div>
                  <Link href="/dashboard/swap" className="w-full block text-center py-4 bg-gradient-to-r from-[#1E6BFF] to-[#FF4FA3] text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(30,107,255,0.4)] transition-all">
                    Swap Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
