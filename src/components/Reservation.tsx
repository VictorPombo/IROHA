"use client";

import { useState, type FormEvent } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Reservation() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    pessoas: "",
    data: "",
    horario: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const msg = `Olá! Gostaria de fazer uma reserva no Iroha Sushi Lapa.%0A%0A` +
      `📛 Nome: ${form.nome}%0A` +
      `📱 Telefone: ${form.telefone}%0A` +
      `👥 Pessoas: ${form.pessoas}%0A` +
      `📅 Data: ${form.data}%0A` +
      `🕐 Horário: ${form.horario}`;

    window.open(`https://wa.me/5511992690081?text=${msg}`, "_blank");
  };

  return (
    <section id="reserva" className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Info */}
          <AnimateOnScroll variant="fadeLeft">
            <div className="gold-line mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">
              Reserve sua mesa
            </p>
            <h2
              className="text-3xl sm:text-4xl font-heading mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Uma experiência
              <br />
              <span className="gold-gradient">que merece ser reservada</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed mb-8">
              Garanta seu lugar no Iroha. Preencha o formulário e enviaremos
              sua reserva diretamente pelo WhatsApp. Simples, rápido e
              confirmado em minutos.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-[var(--color-gold)]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-primary)]">(11) 3022-5825</p>
                  <p className="text-[10px] text-[var(--color-text-muted)] tracking-wider uppercase">Telefone</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-[var(--color-gold)]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-primary)]">(11) 99269-0081</p>
                  <p className="text-[10px] text-[var(--color-text-muted)] tracking-wider uppercase">WhatsApp</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-[var(--color-gold)]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-primary)]">Rua Cerro Corá, 448</p>
                  <p className="text-[10px] text-[var(--color-text-muted)] tracking-wider uppercase">Alto da Lapa, SP</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right — Form */}
          <AnimateOnScroll variant="fadeRight" delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8 rounded-sm space-y-5"
              id="reservation-form"
            >
              <div>
                <label
                  htmlFor="res-nome"
                  className="block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-2"
                >
                  Nome completo
                </label>
                <input
                  id="res-nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) =>
                    setForm({ ...form, nome: e.target.value })
                  }
                  className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-gold)] focus:outline-none transition-colors rounded-sm"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="res-telefone"
                  className="block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-2"
                >
                  Telefone / WhatsApp
                </label>
                <input
                  id="res-telefone"
                  type="tel"
                  required
                  value={form.telefone}
                  onChange={(e) =>
                    setForm({ ...form, telefone: e.target.value })
                  }
                  className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-gold)] focus:outline-none transition-colors rounded-sm"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="res-pessoas"
                    className="block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-2"
                  >
                    Pessoas
                  </label>
                  <select
                    id="res-pessoas"
                    required
                    value={form.pessoas}
                    onChange={(e) =>
                      setForm({ ...form, pessoas: e.target.value })
                    }
                    className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] px-3 py-3 text-sm text-[var(--color-text-primary)] focus:border-[var(--color-gold)] focus:outline-none transition-colors rounded-sm appearance-none"
                  >
                    <option value="">Qtd</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                    <option value="10+">10+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="res-data"
                    className="block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-2"
                  >
                    Data
                  </label>
                  <input
                    id="res-data"
                    type="date"
                    required
                    value={form.data}
                    onChange={(e) =>
                      setForm({ ...form, data: e.target.value })
                    }
                    className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] px-3 py-3 text-sm text-[var(--color-text-primary)] focus:border-[var(--color-gold)] focus:outline-none transition-colors rounded-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="res-horario"
                    className="block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-2"
                  >
                    Horário
                  </label>
                  <select
                    id="res-horario"
                    required
                    value={form.horario}
                    onChange={(e) =>
                      setForm({ ...form, horario: e.target.value })
                    }
                    className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] px-3 py-3 text-sm text-[var(--color-text-primary)] focus:border-[var(--color-gold)] focus:outline-none transition-colors rounded-sm appearance-none"
                  >
                    <option value="">Hora</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 text-sm"
                id="reservation-submit"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar Reserva pelo WhatsApp
              </button>

              <p className="text-[10px] text-[var(--color-text-muted)] text-center">
                Ao enviar, você será direcionado ao WhatsApp com os dados preenchidos.
              </p>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
