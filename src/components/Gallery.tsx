"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const GALLERY_IMAGES = [
  {
    src: "/images/real/destaque-combo.png",
    alt: "Prato especial em destaque — Iroha Sushi Lapa",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/real/real-2.jpg",
    alt: "Gastronomia Japonesa — Iroha Sushi Lapa",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/real/real-3.jpg",
    alt: "Gastronomia Japonesa — Iroha Sushi Lapa",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/real/real-4.jpg",
    alt: "Combinado premium — Iroha Sushi Lapa",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/real/real-5.jpg",
    alt: "Sushi especial — Iroha Sushi Lapa",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/real/real-6.jpg",
    alt: "Destaque do chef — Iroha Sushi Lapa",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/images/real/real-7.jpg",
    alt: "Rodízio premium — Iroha Sushi Lapa",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/real/real-8.jpg",
    alt: "Experiência Iroha — Iroha Sushi Lapa",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-max">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-12">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">
            Experiência Visual
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Galeria
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-md mx-auto text-sm sm:text-base">
            Cada detalhe conta. Do preparo à mesa, a experiência Iroha é visual.
          </p>
        </AnimateOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 auto-rows-[150px] sm:auto-rows-[190px] grid-flow-row-dense">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`${img.span} relative h-full w-full overflow-hidden rounded-sm group cursor-pointer`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                sizes="(max-width: 640px) 50vw, 33vw"
                loading="lazy"
                unoptimized
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-[#0a0a0a]/10 transition-all duration-500" />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-[#0a0a0a]/80 backdrop-blur-sm px-3 py-2 rounded-sm">
                  <p className="text-[10px] text-[var(--color-text-secondary)] tracking-wider">
                    @irohasushilapa
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <AnimateOnScroll className="text-center mt-10">
          <a
            href="https://www.instagram.com/irohasushilapa/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
            id="gallery-instagram"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Siga @irohasushilapa
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
