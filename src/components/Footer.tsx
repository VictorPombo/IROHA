import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/5511992690081?text=Ol%C3%A1%2C%20vi%20o%20site%20do%20Iroha%20Lapa%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
const IFOOD_URL = "https://www.ifood.com.br/delivery/sao-paulo-sp/iroha-sushi-premium-vila-romana/adc7dc22-d397-4372-aeda-1008da1c61ef";
const NINETY_NINE_URL = "https://br-pax.onelink.me/MQTu?pid=food_99bPage&deep_link_value=food_99bPage&af_dp=taxis99onetravel://one&af_force_deeplink=true&deep_link_sub1=1577482&deep_link_sub2=5764609226262187091";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)]">
      <div className="container-max section-padding py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="text-2xl font-heading tracking-wider text-[var(--color-text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                IROHA
              </span>
              <span
                className="text-2xl font-heading text-[var(--color-gold)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                .
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              Tradição e excelência em culinária japonesa desde 2008. Uma
              experiência premium no coração da Lapa.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/irohasushilapa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
                id="footer-social-instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4">
              Navegação
            </h4>
            <nav className="space-y-2.5">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#cardapio", label: "Cardápio" },
                { href: "#historia", label: "Nossa História" },
                { href: "#galeria", label: "Galeria" },
                { href: "#avaliacoes", label: "Avaliações" },
                { href: "#reserva", label: "Reserva" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-xs text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+551130225825"
                className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                (11) 3022-5825
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                (11) 99269-0081
              </a>
              <a
                href="mailto:contato@irohalapa.com.br"
                className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                contato@irohalapa.com.br
              </a>
              <div className="flex items-start gap-2 text-xs text-[var(--color-text-muted)]">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
                <span>
                  Rua Cerro Corá, 448
                  <br />
                  Alto da Lapa, SP
                </span>
              </div>
            </div>
          </div>

          {/* Delivery */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4">
              Delivery
            </h4>
            <div className="space-y-3">
              <a
                href={IFOOD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
                id="footer-ifood"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                Pedir no iFood
              </a>
              <a
                href={NINETY_NINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
                id="footer-99food"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                Pedir no 99Food
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                Pedir via WhatsApp
              </a>
            </div>

            <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3 mt-6">
              Horários
            </h4>
            <div className="space-y-1 text-xs text-[var(--color-text-muted)]">
              <p>Seg–Sex: 11h30–15h / 18h30–23h</p>
              <p>Sáb: 12h–23h</p>
              <p>Dom: 12h–22h</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[var(--color-text-muted)]">
            Sushi Vila Romana Refeições Ltda — CNPJ: 32.096.532/0001-60
          </p>
          <p className="text-[10px] text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Iroha Sushi Lapa. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
