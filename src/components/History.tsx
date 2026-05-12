"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function History() {
  return (
    <section id="historia" className="section-padding bg-[var(--color-bg-secondary)]">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <AnimateOnScroll variant="fadeLeft">
            <div className="gold-line mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">
              Nossa História
            </p>
            <h2
              className="text-3xl sm:text-4xl font-heading mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              17 anos de tradição
              <br />
              <span className="gold-gradient">no coração da Lapa</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed mb-4">
              Desde 2008, o Iroha Sushi Lapa é referência em culinária japonesa
              no Alto da Lapa. Com ingredientes selecionados diariamente e
              técnicas que respeitam a tradição, construímos uma história de
              sabor e confiança com mais de 3.000 avaliações no Google.
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed mb-8">
              Cada peça é preparada com cuidado artesanal, honrando as raízes
              da gastronomia japonesa com um toque contemporâneo que é a marca
              da nossa casa.
            </p>

            {/* Mini stats */}
            <div className="flex gap-8">
              <div>
                <p
                  className="text-2xl sm:text-3xl font-heading text-[var(--color-gold)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  17+
                </p>
                <p className="text-xs text-[var(--color-text-muted)] tracking-wider uppercase">
                  Anos
                </p>
              </div>
              <div>
                <p
                  className="text-2xl sm:text-3xl font-heading text-[var(--color-gold)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  3K+
                </p>
                <p className="text-xs text-[var(--color-text-muted)] tracking-wider uppercase">
                  Avaliações
                </p>
              </div>
              <div>
                <p
                  className="text-2xl sm:text-3xl font-heading text-[var(--color-gold)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  4.6★
                </p>
                <p className="text-xs text-[var(--color-text-muted)] tracking-wider uppercase">
                  Google
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Image */}
          <AnimateOnScroll variant="fadeRight" delay={0.2}>
            <div className="relative h-[400px] sm:h-[500px] rounded-sm overflow-hidden">
              <Image
                src="/images/real/fachada.jpg"
                alt="Fachada do restaurante Iroha Sushi Lapa à noite"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 glass-card px-5 py-3 rounded-sm">
                <p
                  className="text-sm font-heading text-[var(--color-gold)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Desde 2008
                </p>
                <p className="text-[10px] text-[var(--color-text-muted)] tracking-wider uppercase">
                  Alto da Lapa, SP
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
