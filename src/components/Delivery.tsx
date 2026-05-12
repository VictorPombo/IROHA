"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const IFOOD_LINK = "https://www.ifood.com.br/delivery/sao-paulo-sp/iroha-sushi-premium-vila-romana/adc7dc22-d397-4372-aeda-1008da1c61ef";
const NINETY_NINE_LINK = "https://br-pax.onelink.me/MQTu?pid=food_99bPage&deep_link_value=food_99bPage&af_dp=taxis99onetravel://one&af_force_deeplink=true&deep_link_sub1=1577482&deep_link_sub2=5764609226262187091";

export default function Delivery() {
  return (
    <section id="delivery" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#c9a96e]/5 to-transparent pointer-events-none" />
      
      <div className="container-max relative z-10">
        <AnimateOnScroll className="text-center mb-12">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">
            Iroha em Casa
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4 text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
            Faça seu Pedido
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-md mx-auto text-sm sm:text-base">
            O sabor autêntico e a qualidade premium do Iroha Sushi, entregues diretamente na sua casa.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* iFood Card */}
          <AnimateOnScroll delay={0.1} className="h-full">
            <motion.a
              href={IFOOD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center justify-center h-full p-8 rounded-sm bg-[#121212] border border-[#ea1d2c]/20 hover:border-[#ea1d2c] transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-[#ea1d2c]/10 flex items-center justify-center mb-6 group-hover:bg-[#ea1d2c] transition-colors">
                <svg className="w-8 h-8 text-[#ea1d2c] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293zm11.328 0c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293zM14.172 14.52l2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 01.23 14.541H0a9.598 9.598 0 008.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ea1d2c] transition-colors">Pedir no iFood</h3>
              <p className="text-sm text-center text-[var(--color-text-muted)]">Entrega rápida e segura direto pelo app do iFood.</p>
            </motion.a>
          </AnimateOnScroll>

          {/* 99Food Card */}
          <AnimateOnScroll delay={0.2} className="h-full">
            <motion.a
              href={NINETY_NINE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center justify-center h-full p-8 rounded-sm bg-[#121212] border border-[#FFD000]/20 hover:border-[#FFD000] transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-[#FFD000]/10 flex items-center justify-center mb-6 group-hover:bg-[#FFD000] transition-colors">
                <span className="text-3xl font-black text-[#FFD000] group-hover:text-black tracking-tighter" style={{ fontFamily: 'Arial, sans-serif' }}>
                  99
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFD000] transition-colors">Pedir no 99Food</h3>
              <p className="text-sm text-center text-[var(--color-text-muted)]">Aproveite cupons e promoções exclusivas no app 99.</p>
            </motion.a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
