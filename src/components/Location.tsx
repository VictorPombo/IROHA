"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1!2d-46.7037!3d-23.5406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57e87da68f15%3A0xf244947f885f7372!2sIroha%20Sushi%20Lapa!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";

const GOOGLE_MAPS_DIR =
  "https://www.google.com/maps/dir//Iroha+Sushi+Lapa+-+Rua+Cerro+Cor%C3%A1+-+Alto+da+Lapa,+S%C3%A3o+Paulo+-+SP";

const WAZE_URL =
  "https://waze.com/ul?ll=-23.5405514,-46.7015153&navigate=yes";

export default function Location() {
  return (
    <section
      id="localizacao"
      className="section-padding bg-[var(--color-bg-secondary)]"
    >
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map */}
          <AnimateOnScroll variant="fadeLeft">
            <div className="relative h-[350px] sm:h-[450px] rounded-sm overflow-hidden">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                className="w-full h-full border-0 grayscale-[70%] contrast-[1.1] brightness-[0.8] invert-[0.92] hue-rotate-[180deg]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Iroha Sushi Lapa no Google Maps"
              />
              <div className="absolute inset-0 pointer-events-none border border-[var(--color-border)] rounded-sm" />
            </div>
          </AnimateOnScroll>

          {/* Info */}
          <AnimateOnScroll variant="fadeRight" delay={0.2}>
            <div className="gold-line mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">
              Como Chegar
            </p>
            <h2
              className="text-3xl sm:text-4xl font-heading mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Localização
            </h2>

            {/* Address */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-sm bg-[var(--color-gold)]/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[var(--color-gold)]"
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
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-primary)] font-medium">
                    Rua Cerro Corá, 448
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    Alto da Lapa, São Paulo — SP, 05061-000
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-sm bg-[var(--color-gold)]/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[var(--color-gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-primary)] font-medium mb-2">
                    Horários de Funcionamento
                  </p>
                  <div className="space-y-1">
                    <div className="flex justify-between gap-8 text-xs">
                      <span className="text-[var(--color-text-muted)]">
                        Seg–Sex (Almoço)
                      </span>
                      <span className="text-[var(--color-text-secondary)]">
                        11h30 – 15h00
                      </span>
                    </div>
                    <div className="flex justify-between gap-8 text-xs">
                      <span className="text-[var(--color-text-muted)]">
                        Seg–Sex (Jantar)
                      </span>
                      <span className="text-[var(--color-text-secondary)]">
                        18h30 – 23h00
                      </span>
                    </div>
                    <div className="flex justify-between gap-8 text-xs">
                      <span className="text-[var(--color-text-muted)]">
                        Sábado
                      </span>
                      <span className="text-[var(--color-text-secondary)]">
                        12h00 – 23h00
                      </span>
                    </div>
                    <div className="flex justify-between gap-8 text-xs">
                      <span className="text-[var(--color-text-muted)]">
                        Domingo
                      </span>
                      <span className="text-[var(--color-text-secondary)]">
                        12h00 – 22h00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direction Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={GOOGLE_MAPS_DIR}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs text-center"
                id="location-google-maps"
              >
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
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Como Chegar (Google Maps)
              </a>
              <a
                href={WAZE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs text-center"
                id="location-waze"
              >
                Abrir no Waze
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
