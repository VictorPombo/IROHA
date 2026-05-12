"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/5511992690081?text=Ol%C3%A1%2C%20vi%20o%20site%20do%20Iroha%20Lapa%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
const GOOGLE_MAPS_DIR =
  "https://www.google.com/maps/dir//Iroha+Sushi+Lapa+-+Rua+Cerro+Cor%C3%A1+-+Alto+da+Lapa,+S%C3%A3o+Paulo+-+SP";
const IFOOD_URL =
  "https://www.ifood.com.br/delivery/sao-paulo-sp/iroha-sushi-premium-vila-romana/adc7dc22-d397-4372-aeda-1008da1c61ef";

const BUTTONS = [
  {
    href: WHATSAPP_URL,
    label: "WhatsApp",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    external: true,
  },
  {
    href: "#reserva",
    label: "Reservar",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    external: false,
  },
  {
    href: IFOOD_URL,
    label: "Delivery",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    external: true,
  },
  {
    href: GOOGLE_MAPS_DIR,
    label: "Ir",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    external: true,
  },
];

export default function MobileBar() {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 400) {
        // Show when scrolling down or stopped, hide when scrolling up fast
        if (currentScrollY > lastScrollY || currentScrollY - lastScrollY < 50) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      } else {
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-[var(--color-gold)]/20 px-2 py-2 safe-area-pb">
            <div className="flex items-center justify-around gap-1">
              {BUTTONS.map((btn) => {
                const Component = btn.external ? "a" : Link;
                const extraProps = btn.external
                  ? {
                      target: "_blank" as const,
                      rel: "noopener noreferrer",
                    }
                  : {};

                return (
                  <Component
                    key={btn.label}
                    href={btn.href}
                    {...extraProps}
                    className="flex flex-col items-center gap-1 px-3 py-2 text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors"
                    id={`mobile-bar-${btn.label.toLowerCase()}`}
                  >
                    {btn.icon}
                    <span className="text-[9px] tracking-wider uppercase">
                      {btn.label}
                    </span>
                  </Component>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
