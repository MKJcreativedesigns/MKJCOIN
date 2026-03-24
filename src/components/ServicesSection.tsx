"use client";

import { motion } from 'framer-motion';
import { CreditCard, ArrowDownToLine, Wallet, Network, Fingerprint, Code2 } from 'lucide-react';

const services = [
  {
    title: "Buy Crypto",
    description: "Purchase digital assets instantly with your credit card, debit card, or bank transfer.",
    icon: <CreditCard className="w-8 h-8 text-[#1E6BFF]" />,
    gradient: "from-[#1E6BFF]/20 to-transparent",
  },
  {
    title: "Sell Crypto",
    description: "Convert your crypto to fiat currency and transfer it directly to your bank account.",
    icon: <ArrowDownToLine className="w-8 h-8 text-[#FF4FA3]" />,
    gradient: "from-[#FF4FA3]/20 to-transparent",
  },
  {
    title: "Crypto Wallet",
    description: "Secure, non-custodial wallet to store, swap, and manage your digital assets safely.",
    icon: <Wallet className="w-8 h-8 text-purple-400" />,
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    title: "Web3 Payments",
    description: "Accept crypto payments instantly on your website with zero chargebacks.",
    icon: <Network className="w-8 h-8 text-green-400" />,
    gradient: "from-green-500/20 to-transparent",
  },
  {
    title: "NFT Payments",
    description: "Enable users to buy NFTs with credit cards without needing a prior crypto wallet.",
    icon: <Fingerprint className="w-8 h-8 text-orange-400" />,
    gradient: "from-orange-500/20 to-transparent",
  },
  {
    title: "Developer APIs",
    description: "Powerful APIs and SDKs to integrate our fiat-to-crypto gateway in minutes.",
    icon: <Code2 className="w-8 h-8 text-cyan-400" />,
    gradient: "from-cyan-500/20 to-transparent",
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E6BFF]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF4FA3]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            A Complete <span className="text-gradient">Financial Ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Everything you need to step into Web3, from on-ramps to developer infrastructure.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={service.title}
              className="glass rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group border border-white/5 hover:border-white/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#0B0E14] border border-white/10 flex items-center justify-center mb-6 shadow-xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
