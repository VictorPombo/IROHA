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
                <svg className="w-8 h-8 text-[#ea1d2c] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  {/* Simplistic fork/knife or delivery bag to represent iFood */}
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
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
                <svg className="w-8 h-8 text-[#FFD000] group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  {/* Delivery scooter or bag */}
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
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
