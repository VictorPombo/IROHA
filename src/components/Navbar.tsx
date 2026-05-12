"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#historia", label: "Nossa História" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#reserva", label: "Reserva" },
  { href: "#localizacao", label: "Localização" },
];

const WHATSAPP_URL =
  "https://wa.me/5511992690081?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Iroha%20Sushi%20Lapa.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#c9a96e]/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-3 group"
            id="nav-logo"
          >
            <div className="flex flex-col">
              <span
                className="text-xl sm:text-2xl font-heading tracking-wider text-[var(--color-text-primary)] group-hover:text-[var(--color-gold)] transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                IROHA
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[var(--color-gold)] uppercase">
                Sushi Lapa
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors duration-300"
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-5 py-2.5"
              id="nav-reservar"
            >
              Reservar Mesa
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 z-60"
            aria-label="Abrir menu"
            id="nav-mobile-toggle"
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 8 }
                  : { rotate: 0, y: 0 }
              }
              className="block w-6 h-[2px] bg-[var(--color-gold)]"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-[var(--color-gold)]"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0 }
              }
              className="block w-6 h-[2px] bg-[var(--color-gold)]"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg tracking-[0.2em] uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: NAV_LINKS.length * 0.05 }}
            >
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-4"
              >
                Reservar Mesa
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
