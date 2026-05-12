"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const REVIEWS = [
  {
    name: "Mariana S.",
    rating: 5,
    text: "Melhor japonês da região, sem dúvidas! O rodízio especial é impecável — peixes fresquíssimos e atendimento nota 10. Frequento há anos e nunca decepciona.",
    date: "há 2 semanas",
  },
  {
    name: "Ricardo P.",
    rating: 5,
    text: "Ambiente super agradável e comida de altíssima qualidade. O sashimi de salmão trufado é divino. Voltarei sempre!",
    date: "há 1 mês",
  },
  {
    name: "Ana Clara M.",
    rating: 5,
    text: "Fui com a família e todos amaram. Ótimo custo-benefício para a qualidade que oferecem. O combinado premium é generoso e saboroso.",
    date: "há 3 semanas",
  },
  {
    name: "Fernando L.",
    rating: 4,
    text: "Excelente opção na Lapa. O hot roll é viciante e o temaki é bem recheado. Ambiente agradável, voltaremos em breve!",
    date: "há 1 mês",
  },
  {
    name: "Juliana D.",
    rating: 5,
    text: "17 anos de tradição não mentem. O Iroha é consistente em qualidade e sabor. Recomendo de olhos fechados para quem ama comida japonesa.",
    date: "há 2 meses",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-[var(--color-gold)]" : "text-[var(--color-border)]"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleReviews = REVIEWS.slice(0, 3);

  return (
    <section
      id="avaliacoes"
      className="section-padding bg-[var(--color-bg-secondary)]"
    >
      <div className="container-max">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-12">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">
            Nossos Clientes
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Avaliações
          </h2>

          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-sm mt-4">
            <div className="flex items-center gap-1">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span
                className="text-2xl font-heading text-[var(--color-text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                4.6
              </span>
            </div>
            <div className="h-8 w-[1px] bg-[var(--color-border)]" />
            <div className="text-left">
              <StarRating rating={5} />
              <p className="text-[10px] text-[var(--color-text-muted)] mt-0.5">
                3.000+ avaliações
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Review Cards — Desktop */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-6">
          {visibleReviews.map((review, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="glass-card p-6 rounded-sm h-full flex flex-col">
                <StarRating rating={review.rating} />
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-4 mb-auto">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--color-border)]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] text-xs font-medium">
                      {review.name.charAt(0)}
                    </div>
                    <span className="text-sm text-[var(--color-text-primary)]">
                      {review.name}
                    </span>
                  </div>
                  <span className="text-[10px] text-[var(--color-text-muted)]">
                    {review.date}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Review Cards — Mobile Carousel */}
        <div className="sm:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 rounded-sm"
            >
              <StarRating rating={REVIEWS[activeIndex].rating} />
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-4 mb-6">
                &ldquo;{REVIEWS[activeIndex].text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] text-xs font-medium">
                    {REVIEWS[activeIndex].name.charAt(0)}
                  </div>
                  <span className="text-sm text-[var(--color-text-primary)]">
                    {REVIEWS[activeIndex].name}
                  </span>
                </div>
                <span className="text-[10px] text-[var(--color-text-muted)]">
                  {REVIEWS[activeIndex].date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === activeIndex
                    ? "bg-[var(--color-gold)] w-6"
                    : "bg-[var(--color-border)]"
                }`}
                aria-label={`Ver avaliação ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA to Google */}
        <AnimateOnScroll className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Iroha+Sushi+Lapa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
            id="reviews-google-link"
          >
            Ver todas as avaliações no Google →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
