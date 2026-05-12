"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const LINKS = [
  {
    label: "Cardápio",
    icon: <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>,
    href: "https://irohalapa.com.br/#cardapio",
    id: "link-cardapio",
  },
  {
    label: "Reservar Mesa",
    icon: <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>,
    href: "https://wa.me/5511992690081?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Iroha%20Sushi%20Lapa.",
    id: "link-reservar",
    external: true,
  },
  {
    label: "Pedir Delivery (iFood)",
    icon: <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
    href: "https://www.ifood.com.br/delivery/sao-paulo-sp/iroha-sushi-premium-vila-romana/adc7dc22-d397-4372-aeda-1008da1c61ef",
    id: "link-delivery",
    external: true,
  },
  {
    label: "Como Chegar",
    icon: <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>,
    href: "https://www.google.com/maps/dir//Iroha+Sushi+Lapa+-+Rua+Cerro+Cor%C3%A1+-+Alto+da+Lapa,+S%C3%A3o+Paulo+-+SP",
    id: "link-localizacao",
    external: true,
  },
  {
    label: "Instagram",
    icon: <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
    href: "https://www.instagram.com/irohasushilapa/",
    id: "link-instagram",
    external: true,
  },
  {
    label: "WhatsApp",
    icon: <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>,
    href: "https://wa.me/5511992690081?text=Ol%C3%A1!%20Vim%20do%20Instagram.%20Gostaria%20de%20saber%20mais.",
    id: "link-whatsapp",
    external: true,
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] flex flex-col items-center justify-center px-4 py-12">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 flex items-center justify-center">
          <span
            className="text-2xl font-heading text-[var(--color-gold)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            IR
          </span>
        </div>
        <h1
          className="text-2xl font-heading tracking-wider text-[var(--color-text-primary)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          IROHA
        </h1>
        <p className="text-[10px] tracking-[0.3em] text-[var(--color-gold)] uppercase">
          Sushi Lapa
        </p>
        <p className="text-xs text-[var(--color-text-muted)] mt-2">
          Desde 2008 • Alto da Lapa, SP
        </p>
      </motion.div>

      {/* Links */}
      <div className="w-full max-w-sm space-y-3">
        {LINKS.map((link, i) => {
          const isExternal = link.external;
          const Component = isExternal ? "a" : Link;
          const extraProps = isExternal
            ? {
                target: "_blank" as const,
                rel: "noopener noreferrer",
              }
            : {};

          return (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <Component
                href={link.href}
                {...extraProps}
                className="flex items-center justify-center gap-2 w-full text-center py-4 px-6 border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-primary)] text-sm tracking-wider hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/5 hover:text-[var(--color-gold)] transition-all duration-300 rounded-sm"
                id={link.id}
              >
                {link.icon}
                {link.label}
              </Component>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-center"
      >
        <div className="flex items-center gap-2 justify-center mb-2">
          <svg className="w-4 h-4 text-[var(--color-gold)] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          <span className="text-xs text-[var(--color-text-muted)]">
            4.6 no Google • 3.000+ avaliações
          </span>
        </div>
        <p className="text-[10px] text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} Iroha Sushi Lapa
        </p>
      </motion.div>
    </div>
  );
}
