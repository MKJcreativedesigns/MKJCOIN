"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CEO at BlockPay",
    text: "MKJCOIN transformed how our users buy crypto. Integration took a day, and our conversion rates went up by 45%. Outstanding service.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "User",
    text: "The fastest crypto buying experience I've ever had. Smooth interface and my BTC arrived instantly to my wallet. Highly recommend!",
    rating: 5
  },
  {
    name: "David Wright",
    role: "DeFi Developer",
    text: "Their APIs are well-documented and incredibly reliable. We've routed millions through their infrastructure without a single hiccup.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative bg-gradient-to-b from-transparent to-[#05060A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Loved by <span className="text-gradient">millions</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            See what our users and partners have to say about the MKJCOIN experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all group"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/80 text-lg mb-8 italic">"{test.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#1E6BFF] to-[#FF4FA3] p-0.5">
                  <div className="w-full h-full bg-[#0B0E14] rounded-full flex items-center justify-center font-bold text-white">
                    {test.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white font-heading">{test.name}</h4>
                  <p className="text-sm text-white/50">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
