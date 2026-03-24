"use client";

import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck2, AlertTriangle } from 'lucide-react';

export default function SecuritySection() {
  const cards = [
    {
      icon: <Lock className="w-8 h-8 text-[#1E6BFF]" />,
      title: "Bank-level Encryption",
      desc: "AES-256 encryption ensures your data and transactions are completely protected from end to end."
    },
    {
      icon: <FileCheck2 className="w-8 h-8 text-[#FF4FA3]" />,
      title: "Compliance & KYC",
      desc: "We adhere strictly to global regulatory standards and robust identity verification processes."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-400" />,
      title: "Fraud Protection",
      desc: "Advanced machine learning algorithms detect and prevent suspicious activities instantly."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Secure Transactions",
      desc: "Every purchase is backed by multi-signature wallets and real-time transaction monitoring."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-semibold mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Voted Most Secure Platform
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ironclad Security by <span className="text-gradient">Design</span>
          </h2>
          <p className="text-white/60 text-lg">
            We don't compromise on your safety. Our infrastructure is built from the ground up to protect your assets and your identity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 p-1 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent">
          <div className="grid sm:grid-cols-2 gap-6 p-6 md:p-10 bg-[#0B0E14] rounded-[1.8rem] w-full col-span-1 md:col-span-2">
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors bg-[#11151F]"
              >
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold font-heading mb-3">{card.title}</h3>
                <p className="text-white/60 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
