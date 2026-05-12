"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const STATS = [
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    ),
    value: "4.6",
    label: "no Google",
    sub: "3.000+ avaliações",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    value: "2008",
    label: "Desde",
    sub: "17 anos de tradição",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    value: "Alto da Lapa",
    label: "São Paulo, SP",
    sub: "Zona Oeste",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    value: "11K+",
    label: "Seguidores",
    sub: "@irohasushilapa",
  },
];

export default function SocialProof() {
  return (
    <section className="relative z-10 -mt-1">
      <div className="bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--color-border)]">
            {STATS.map((stat, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1} variant="fadeUp">
                <div className="flex flex-col items-center text-center py-6 sm:py-8 px-2 sm:px-4">
                  <span className="text-xl sm:text-2xl mb-2">{stat.icon}</span>
                  <span
                    className="text-lg sm:text-xl font-heading text-[var(--color-gold)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-[var(--color-text-primary)] mt-1">
                    {stat.label}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[var(--color-text-muted)] mt-0.5">
                    {stat.sub}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
