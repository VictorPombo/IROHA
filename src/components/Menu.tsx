"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const CATEGORIES = [
  "Combinados",
  "Sashimi",
  "Sushi",
  "Duplas",
  "Makisushis",
  "Temaki",
  "Entradas",
  "Pratos Quentes",
  "Teppanyaki",
  "Tempurá",
];

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  image: string;
  badge?: string;
}

const MENU_ITEMS: Record<string, MenuItem[]> = {
  Entradas: [
    { name: "Guioza (8 un.)", desc: "Pastéis recheados com legumes e carne bovina", price: "R$ 35,90", image: "/images/hot-roll.png", badge: "Favorito" },
    { name: "Harumaki", desc: "Rolinho primavera com recheio de queijo", price: "R$ 29,90", image: "/images/real/real-4.jpg" },
    { name: "Shimeji", desc: "Cogumelos pequenos na manteiga e shoyu", price: "R$ 49,90", image: "/images/real/real-5.jpg", badge: "Mais Pedido" },
    { name: "Shimeji com Lula", desc: "Cogumelos pequenos com anéis de lula", price: "R$ 45,90", image: "/images/real/real-6.jpg" },
    { name: "Carpaccio de Salmão", desc: "Finas lâminas de salmão", price: "R$ 29,90", image: "/images/salmon-sashimi.png" },
  ],
  Sushi: [
    { name: "Sushi Simples (16 un.)", desc: "8 sushis, 2 kappas, 2 uramaki califórnia, 2 salmonmakis e 2 jhous", price: "R$ 45,90", image: "/images/hero-sushi.png" },
    { name: "Sushi Salmão (16 un.)", desc: "8 sushis, 6 salmonmakis e 2 jhous", price: "R$ 45,90", image: "/images/sushi-combo.png", badge: "Mais Pedido" },
    { name: "Sushi Atum (16 un.)", desc: "8 sushis e 6 tekkas", price: "R$ 45,90", image: "/images/real/real-2.jpg" },
    { name: "Sushi Especial (21 un.)", desc: "10 sushis, 3 jhous, 2 tekkas, 2 kappas, 2 uramaki califórnia, 2 salmonmakis", price: "R$ 45,90", image: "/images/real/destaque-combo.png", badge: "Destaque" },
    { name: "Sushi Jhou (8 un.)", desc: "Sushi de salmão picadinho com cebolinha e maionese", price: "R$ 45,90", image: "/images/real/real-3.jpg" },
    { name: "Sushi Skin (10 un.)", desc: "6 sushis e 4 uramaki skin", price: "R$ 45,90", image: "/images/temaki-premium.png" },
  ],
  Duplas: [
    { name: "Dupla Kani", desc: "Dupla de nigiri de Kani", price: "R$ 8,00", image: "/images/real/real-1.jpg" },
    { name: "Dupla Salmão", desc: "Dupla de nigiri de Salmão fresco", price: "R$ 8,00", image: "/images/salmon-sashimi.png", badge: "Mais Pedido" },
    { name: "Dupla Peixe Branco", desc: "Dupla de nigiri de Peixe Branco", price: "R$ 7,50", image: "/images/real/real-2.jpg" },
    { name: "Dupla Atum", desc: "Dupla de nigiri de Atum", price: "R$ 9,00", image: "/images/hero-sushi.png" },
    { name: "Dupla Sushi Skin", desc: "Dupla de pele de salmão grelhada", price: "R$ 7,50", image: "/images/real/real-4.jpg" },
    { name: "Dupla Jhou", desc: "Dupla de Jhou especial", price: "R$ 8,50", image: "/images/real/real-5.jpg" },
  ],
  Makisushis: [
    { name: "Uramaki Califórnia", desc: "8 unidades", price: "R$ 45,90", image: "/images/sushi-combo.png" },
    { name: "Uramaki Salmão", desc: "8 unidades", price: "R$ 45,90", image: "/images/real/real-7.jpg", badge: "Favorito" },
    { name: "Uramaki Skin", desc: "8 unidades", price: "R$ 45,90", image: "/images/hero-sushi.png" },
    { name: "Kanimaki", desc: "8 unidades", price: "R$ 45,90", image: "/images/real/real-8.jpg" },
    { name: "Kappamaki", desc: "8 unidades", price: "R$ 45,90", image: "/images/real/real-2.jpg" },
    { name: "Tekkamaki", desc: "8 unidades", price: "R$ 45,90", image: "/images/real/real-3.jpg" },
    { name: "Salmonmaki", desc: "8 unidades", price: "R$ 45,90", image: "/images/real/real-4.jpg" },
    { name: "Ebiten Uramaki", desc: "8 unidades", price: "R$ 45,90", image: "/images/real/real-5.jpg" },
    { name: "Hot Roll (8 un.)", desc: "Makisushi de kani, salmão empanado, arroz e molho tarê", price: "R$ 45,90", image: "/images/hot-roll.png", badge: "Destaque" },
    { name: "Romeu e Julieta", desc: "8 uni - Makisushi de goiaba, banana e arroz", price: "R$ 45,90", image: "/images/real/real-6.jpg" },
    { name: "Acelgamaki", desc: "Salmão grelhado com cebolinha e maionese enrolado na acelga", price: "R$ 45,90", image: "/images/real/real-1.jpg" },
  ],
  Sashimi: [
    { name: "Sashimi Simples (16 fatias)", desc: "Atum, salmão e peixe branco", price: "R$ 59,90", image: "/images/salmon-sashimi.png" },
    { name: "Sashimi de Salmão (16 fatias)", desc: "Fatias nobres de salmão fresco", price: "R$ 59,90", image: "/images/real/real-6.jpg", badge: "Mais Pedido" },
    { name: "Sashimi de Atum (16 fatias)", desc: "Atum fresco fatiado", price: "R$ 59,90", image: "/images/real/real-7.jpg" },
    { name: "Sashimi Especial (25 fatias)", desc: "Atum, salmão, peixe branco e kani", price: "R$ 69,90", image: "/images/real/real-8.jpg", badge: "Especial" },
  ],
  Combinados: [
    { name: "Iroha 1 Pessoa (18 un.)", desc: "6 sashimis, 4 sushis, 2 jhous, 2 kappas, 2 uramaki califórnias e 2 salmonmakis", price: "R$ 54,90", image: "/images/real/real-2.jpg" },
    { name: "Iroha 2 Pessoas (32 un.)", desc: "2 sashimis, 6 sushis, 4 salmonmakis, 4 kappas, 4 uramaki califórnias e 2 jhous", price: "R$ 96,00", image: "/images/real/real-3.jpg", badge: "Favorito" },
    { name: "Iroha 3 Pessoas (42 un.)", desc: "16 sashimis, 8 sushis, 4 salmonmakis, 3 kappas, 3 jhous, 3 uramaki califórnias, 3 uramaki skin e 3 hot holl", price: "R$ 126,00", image: "/images/real/real-4.jpg" },
    { name: "Iroha Super Especial (52 un.)", desc: "20 sashimis, 10 sushis, 4 jhous, 4 kappas, 4 salmonmakis, 4 hot holl, 4 uramaki califórnias e 2 uramaki skin", price: "R$ 156,00", image: "/images/real/destaque-combo.png", badge: "Premium" },
    { name: "Iroha (66 un.)", desc: "24 sashimis, 16 sushis, 6 jhous, 4 tekkas, 4 kappas, 4 uramaki califórnias, 4 salmonmakis e 4 hot holl", price: "R$ 159,00", image: "/images/real/real-5.jpg" },
    { name: "Iroha Salmão 1 Pessoa (17 un.)", desc: "6 sashimis, 4 sushis, 4 salmonmakis e 3 jhous", price: "R$ 74,90", image: "/images/salmon-sashimi.png" },
    { name: "Iroha Salmão 2 Pessoas (32 un.)", desc: "12 sashimis, 8 sushis, 4 uramaki salmão, 4 salmonmakis e 4 jhous", price: "R$ 96,00", image: "/images/real/real-7.jpg" },
    { name: "Iroha Salmão 3 Pessoas (42 un.)", desc: "16 sashimis, 10 sushis, 6 salmonmakis e 4 uramaki salmão", price: "R$ 126,00", image: "/images/real/real-8.jpg" },
  ],
  "Pratos Quentes": [
    { name: "Yakisoba Misto", desc: "Macarrão, carne bovina, frango e legumes", price: "R$ 49,90", image: "/images/hot-roll.png", badge: "Favorito" },
    { name: "Yakisoba de Carne", desc: "Macarrão, carne bovina e legumes", price: "R$ 64,90", image: "/images/real/real-1.jpg" },
    { name: "Yakisoba de Frango", desc: "Macarrão, frango e legumes", price: "R$ 49,90", image: "/images/real/real-4.jpg" },
    { name: "Yakisoba Especial", desc: "Macarrão, carne bovina, frango, frutos do mar e legumes", price: "R$ 69,90", image: "/images/real/real-5.jpg", badge: "Premium" },
    { name: "Yakisoba Vegetariano", desc: "Macarrão, shimeji e legumes", price: "R$ 59,90", image: "/images/real/real-6.jpg" },
    { name: "Yakisoba Camarão", desc: "Macarrão, camarão e legumes", price: "R$ 64,90", image: "/images/real/real-8.jpg" },
    { name: "Chicken Katsu", desc: "Frango empanado crocante", price: "R$ 29,90", image: "/images/hot-roll.png" },
    { name: "Guikatsu", desc: "Carne bovina empanada crocante", price: "R$ 29,90", image: "/images/real/real-3.jpg" },
  ],
  Teppanyaki: [
    { name: "Teppan de Anchova", desc: "Grelhado com legumes, arroz e missoshiru", price: "R$ 49,90", image: "/images/real/real-2.jpg" },
    { name: "Teppan de Salmão", desc: "Grelhado com legumes, arroz e missoshiru", price: "R$ 69,90", image: "/images/salmon-sashimi.png", badge: "Destaque" },
    { name: "Teppan de Lula", desc: "Grelhado com legumes, arroz e missoshiru", price: "R$ 59,90", image: "/images/real/real-4.jpg" },
    { name: "Teppan Frutos do Mar", desc: "Grelhado com legumes, arroz e missoshiru", price: "R$ 69,90", image: "/images/real/real-5.jpg" },
    { name: "Teppan de Camarão", desc: "Grelhado com legumes, arroz e missoshiru", price: "R$ 69,90", image: "/images/real/real-6.jpg" },
    { name: "Teppan Filé de Frango", desc: "Grelhado com legumes, arroz e missoshiru", price: "R$ 49,90", image: "/images/real/real-7.jpg" },
    { name: "Teppan Filé Mignon", desc: "Grelhado com legumes, arroz e missoshiru", price: "R$ 69,90", image: "/images/real/real-8.jpg" },
    { name: "Teppan Contrafilé e Picanha", desc: "Grelhado com legumes, arroz e missoshiru", price: "R$ 62,90", image: "/images/real/real-1.jpg" },
  ],
  Tempurá: [
    { name: "Tempurá de Legumes", desc: "Legumes variados empanados", price: "R$ 29,90", image: "/images/hot-roll.png" },
    { name: "Tempurá de Camarão", desc: "12 camarões empanados", price: "R$ 55,90", image: "/images/real/real-3.jpg", badge: "Especial" },
    { name: "Tempurá Misto", desc: "6 camarões e legumes mistos", price: "R$ 49,90", image: "/images/real/real-4.jpg" },
  ],
  Temaki: [
    { name: "Temaki Salmão", desc: "Enrolado em forma de cone - 1 unidade", price: "R$ 39,90", image: "/images/temaki-premium.png", badge: "Favorito" },
    { name: "Temaki Atum", desc: "Enrolado em forma de cone - 1 unidade", price: "R$ 39,90", image: "/images/real/real-5.jpg" },
    { name: "Temaki Kani", desc: "Enrolado em forma de cone - 1 unidade", price: "R$ 29,90", image: "/images/real/real-6.jpg" },
    { name: "Temaki Califórnia", desc: "Enrolado em forma de cone - 1 unidade", price: "R$ 29,90", image: "/images/real/real-7.jpg" },
    { name: "Temaki Salmonskin", desc: "Enrolado em forma de cone - 1 unidade", price: "R$ 35,90", image: "/images/real/real-8.jpg" },
    { name: "Temaki Peixe Branco", desc: "Enrolado em forma de cone - 1 unidade", price: "R$ 35,90", image: "/images/real/real-1.jpg" },
    { name: "Temaki Filadelfia", desc: "Enrolado em forma de cone - 1 unidade", price: "R$ 39,90", image: "/images/temaki-premium.png", badge: "Mais Pedido" },
    { name: "Temaki Shimeji", desc: "Enrolado em forma de cone - 1 unidade", price: "R$ 39,90", image: "/images/real/real-2.jpg" },
    { name: "Temaki Camarão", desc: "Enrolado em forma de cone - 1 unidade", price: "R$ 39,90", image: "/images/real/real-3.jpg" },
  ],
};

const RODIZIO_DATA = [
  {
    type: "Completo",
    desc: "Sushis, sashimis, temakis e pratos quentes. A essência da culinária japonesa.",
    almoco: "R$ 79,90",
    jantar: "R$ 114,90",
    almocoLabel: "Almoço (Seg-Sex)",
    jantarLabel: "Jantar / FDS",
  },
  {
    type: "Promoção de Segunda",
    desc: "Rodízio completo com bebidas e sobremesas inclusas. Válido apenas nas segundas (exceto feriados).",
    almoco: "R$ 89,90",
    jantar: "R$ 89,90",
    almocoLabel: "Almoço (Segunda)",
    jantarLabel: "Jantar (Segunda)",
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Combinados");
  const [showRodizio, setShowRodizio] = useState(false);

  const items = MENU_ITEMS[activeCategory] || [];

  return (
    <section id="cardapio" className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-max">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-12">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">
            Gastronomia Japonesa
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Nosso Cardápio
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto text-sm sm:text-base">
            Cada prato é uma obra de arte. Ingredientes selecionados, técnica
            apurada e apresentação impecável.
          </p>
        </AnimateOnScroll>

        {/* Rodízio Toggle */}
        <AnimateOnScroll className="mb-10">
          <div className="flex justify-center">
            <button
              onClick={() => setShowRodizio(!showRodizio)}
              className={`px-6 py-3 flex items-center justify-center gap-2 text-sm tracking-wider uppercase transition-all duration-300 border ${
                showRodizio
                  ? "bg-[var(--color-gold)] text-[var(--color-bg-primary)] border-[var(--color-gold)]"
                  : "border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)]/10"
              }`}
              id="menu-rodizio-toggle"
            >
              {showRodizio ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                  Fechar Rodízio
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/></svg>
                  Ver Rodízio
                </>
              )}
            </button>
          </div>
        </AnimateOnScroll>

        {/* Rodízio Panel */}
        <AnimatePresence>
          {showRodizio && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden mb-12"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {RODIZIO_DATA.map((rod) => (
                  <div
                    key={rod.type}
                    className="glass-card p-6 sm:p-8 rounded-sm"
                  >
                    <h3
                      className="text-xl sm:text-2xl font-heading text-[var(--color-gold)] mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Rodízio {rod.type}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                      {rod.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[var(--color-bg-primary)] p-4 rounded-sm text-center">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-1">
                          {rod.almocoLabel}
                        </p>
                        <p className="text-xl font-heading text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                          {rod.almoco}
                        </p>
                      </div>
                      <div className="bg-[var(--color-bg-primary)] p-4 rounded-sm text-center">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-1">
                          {rod.jantarLabel}
                        </p>
                        <p className="text-xl font-heading text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                          {rod.jantar}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rodízio Benefits */}
              <div className="glass-card p-6 rounded-sm">
                <h4 className="text-sm tracking-[0.15em] uppercase text-[var(--color-gold)] mb-4">
                  Benefícios Especiais
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--color-gold)] text-lg">✦</span>
                    <div>
                      <p className="text-sm text-[var(--color-text-primary)]">
                        Bariátricos e Vegetarianos
                      </p>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        20% de desconto no rodízio
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--color-gold)] text-lg">✦</span>
                    <div>
                      <p className="text-sm text-[var(--color-text-primary)]">
                        Crianças até 5 anos
                      </p>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        Cortesia da casa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--color-gold)] text-lg">✦</span>
                    <div>
                      <p className="text-sm text-[var(--color-text-primary)]">
                        Crianças 6–9 anos
                      </p>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        Pagam meio rodízio
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Tabs */}
        <AnimateOnScroll className="mb-10">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide -mx-4 px-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 text-xs tracking-[0.1em] uppercase transition-all duration-300 shrink-0 ${
                  activeCategory === cat
                    ? "bg-[var(--color-gold)] text-[var(--color-bg-primary)]"
                    : "border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                }`}
                id={`menu-tab-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group glass-card rounded-sm overflow-hidden hover:border-[var(--color-gold)]/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-[var(--color-gold)] text-[var(--color-bg-primary)] text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 font-medium">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-[var(--color-text-primary)] mb-1.5 group-hover:text-[var(--color-gold)] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 line-clamp-2">
                    {item.desc}
                  </p>
                  <p
                    className="text-base font-heading text-[var(--color-gold)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
