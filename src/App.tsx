import { useState, type ReactNode } from "react"

const assetUrl = (fileName: string) =>
  `${import.meta.env.BASE_URL}assets/${fileName}`

const heroImage = assetUrl("fachada-undertech.webp")
const workshopImage = assetUrl("interior-undertech.jpg")

const whatsappUrl =
  "https://wa.me/551126940055?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20do%20meu%20ve%C3%ADculo."
const phoneUrl = "tel:+551126940055"
const instagramUrl = "https://www.instagram.com/fumagallieundertech/"
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Rua+Orville+Derby%2C+172%2C+Mooca%2C+S%C3%A3o+Paulo%2C+SP"
const mapsEmbedUrl =
  "https://www.google.com/maps?q=Rua%20Orville%20Derby%2C%20172%2C%20Mooca%2C%20S%C3%A3o%20Paulo%2C%20SP&output=embed"

type IconName = "transmission" | "alignment" | "engine" | "suspension" | "brake" | "diagnostic" | "check" | "pin" | "clock" | "arrow" | "menu" | "close" | "shield" | "chat" | "phone" | "instagram" | "whatsapp"

function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName
  className?: string
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  }

  const paths: Record<IconName, ReactNode> = {
    transmission: (
      <>
        <path d="M8 4h8v4H8zM6 8h12l2 4v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5z" />
        <path d="M8 13h8M9 16h6M12 8v5" />
      </>
    ),
    alignment: (
      <>
        <circle cx="7" cy="12" r="3" />
        <circle cx="17" cy="12" r="3" />
        <path d="M10 12h4M3 6h18M5 4 3 6l2 2M19 4l2 2-2 2" />
      </>
    ),
    engine: (
      <>
        <path d="M6 8h10l3 3v6H7l-3-3V9h2z" />
        <path d="M9 8V5h5v3M19 12h2v3h-2M4 11H2M9 12h5" />
      </>
    ),
    suspension: (
      <>
        <path d="M8 3h8M12 3v3M8 6h8l-2 3 2 3-2 3 2 3H8l2-3-2-3 2-3zM12 18v3" />
      </>
    ),
    brake: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M6.5 7.5 9 10M15 14l2.5 2.5M16.5 7.5 14 10M10 14l-2.5 2.5" />
      </>
    ),
    diagnostic: (
      <>
        <rect x="4" y="5" width="16" height="12" rx="2" />
        <path d="m7 12 2-2 2 3 2-5 2 4h2M8 20h8" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.8 2.7 8 7 10 4.3-2 7-5.2 7-10V6z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    chat: (
      <>
        <path d="M20 11a7 7 0 0 1-7 7H8l-4 3 1.2-5A7 7 0 1 1 20 11Z" />
        <path d="M9 11h.01M13 11h.01M17 11h.01" />
      </>
    ),
    phone: (
      <path d="M7.2 3.5 10 7.2 8.5 9.5a15.8 15.8 0 0 0 6 6l2.3-1.5 3.7 2.8v2.1a2 2 0 0 1-2.2 2C10.1 20 4 13.9 3.1 5.7a2 2 0 0 1 2-2.2z" />
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.5Z" />
        <path d="M8.2 7.8c.4 4 3.6 7.2 7.6 7.6M8.3 8l1.5-.6 1.4 2-1 1.2M15.7 15.2l.6-1.5-2-1.4-1.2 1" />
      </>
    ),
  }

  return <svg {...common}>{paths[name]}</svg>
}

const services: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "transmission",
    title: "Fluido de transmissão",
    text: "Troca técnica do fluido para preservar o câmbio e manter as trocas suaves.",
  },
  {
    icon: "alignment",
    title: "Alinhamento e balanceamento",
    text: "Mais estabilidade, conforto e vida útil para os pneus do seu veículo.",
  },
  {
    icon: "engine",
    title: "Mecânica geral",
    text: "Manutenção preventiva e corretiva com diagnóstico claro e preciso.",
  },
  {
    icon: "suspension",
    title: "Suspensão",
    text: "Revisão e reparo de amortecedores, buchas, pivôs e componentes.",
  },
  {
    icon: "brake",
    title: "Sistema de freios",
    text: "Inspeção de pastilhas, discos, fluido e todo o sistema de segurança.",
  },
  {
    icon: "diagnostic",
    title: "Diagnóstico eletrônico",
    text: "Leitura técnica para identificar falhas antes que se tornem problemas maiores.",
  },
]

const navItems = [
  ["Serviços", "#servicos"],
  ["A oficina", "#oficina"],
  ["Como funciona", "#processo"],
  ["Instagram", "#instagram"],
  ["Contato", "#contato"],
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f4f1] text-[#171717]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111]/95 text-white backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a
            href="#inicio"
            className="block"
            aria-label="Undertech Tecnologia Automotiva - início"
          >
            <img
              src={assetUrl("undertech-logo-cropped.png")}
              alt="Undertech Tecnologia Automotiva"
              className="h-14 w-[154px] rounded-sm object-contain sm:w-[174px]"
            />
          </a>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Navegação principal"
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-white/70 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-sm bg-[#128c7e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0f766e] lg:flex"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Agendar pelo WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-sm border border-white/20 lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-white/10 bg-[#111] px-5 py-5 lg:hidden"
            aria-label="Menu móvel"
          >
            <div className="mx-auto flex max-w-7xl flex-col">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-4 font-semibold text-white/80"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section
          id="inicio"
          className="relative flex min-h-[760px] items-end overflow-hidden bg-[#151515] pt-28 text-white"
        >
          <img
            src={heroImage}
            alt="Fachada da oficina Undertech na Mooca"
            className="absolute inset-0 h-full w-full object-cover object-[58%_center] brightness-[0.78] saturate-[0.88]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,.98)_0%,rgba(10,10,10,.86)_40%,rgba(10,10,10,.28)_76%),linear-gradient(0deg,rgba(10,10,10,.76)_0%,transparent_58%)]" />
          <div className="absolute right-[-90px] top-24 hidden h-80 w-80 rounded-full border-[60px] border-white/[0.04] xl:block" />

          <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 pt-20 lg:grid-cols-[1fr_360px] lg:px-8 lg:pb-20">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 border-l-2 border-[#eda71e] pl-3 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Oficina especializada na Mooca
              </div>
              <h1 className="font-display text-6xl font-extrabold uppercase leading-[0.88] tracking-[-0.035em] sm:text-7xl lg:text-[96px]">
                Seu carro.
                <br />
                <span className="text-[#eda71e]">Nosso cuidado.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                Manutenção automotiva com diagnóstico preciso, serviço
                transparente e a atenção que o seu veículo merece.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-3 rounded-sm bg-[#eda71e] px-7 py-4 text-sm font-bold text-[#292623] transition hover:bg-[#d69316]"
                >
                  Conheça nossos serviços
                  <Icon name="arrow" className="h-5 w-5" />
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-3 rounded-sm border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold backdrop-blur transition hover:bg-white/10"
                >
                  <Icon name="pin" className="h-5 w-5 text-[#eda71e]" />
                  Estamos na Mooca
                </a>
              </div>
            </div>

            <div className="self-end border-l border-white/20 pl-6 lg:pl-8">
              <span className="font-display text-5xl font-extrabold text-[#eda71e]">
                01
              </span>
              <p className="mt-2 font-display text-xl font-bold uppercase">
                Diagnóstico honesto
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-white/60">
                Você entende o que o carro precisa antes de qualquer serviço
                começar.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#eda71e] text-[#292623]">
          <div className="mx-auto grid max-w-7xl divide-y divide-[#292623]/20 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
            {[
              ["Atendimento local", "Na região da Mooca"],
              ["Serviço completo", "Do diagnóstico à entrega"],
              ["Transparência", "Orçamento antes do reparo"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="flex items-center gap-4 py-6 sm:px-6 first:pl-0"
              >
                <Icon name="check" className="h-6 w-6 shrink-0" />
                <div>
                  <p className="text-sm font-bold">{title}</p>
                  <p className="mt-0.5 text-xs text-[#292623]/70">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="servicos" className="scroll-mt-20 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="eyebrow">O que fazemos</p>
                <h2 className="section-title mt-4 max-w-2xl">
                  Cuidado completo para o seu veículo
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-[#666]">
                Revisões e reparos para manter segurança, desempenho e
                tranquilidade em todos os seus caminhos.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-[#deddd9] bg-[#deddd9] sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group relative min-h-[320px] overflow-hidden bg-white p-7 transition duration-300 hover:bg-[#171717] hover:text-white sm:p-8"
                >
                  <span className="absolute right-7 top-7 font-display text-sm font-bold text-[#b6b5b1] group-hover:text-white/30">
                    0{index + 1}
                  </span>
                  <div className="relative grid h-24 w-24 place-items-center rounded-sm border border-[#eda71e]/30 bg-[#fff2cc] text-[#b8790b] transition duration-300 group-hover:scale-105 group-hover:border-[#eda71e] group-hover:bg-[#eda71e] group-hover:text-[#292623]">
                    <div className="absolute -bottom-2 -right-2 h-8 w-8 border-b-2 border-r-2 border-[#eda71e]/60 transition group-hover:border-white/25" />
                    <Icon name={service.icon} className="h-12 w-12" />
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-bold uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#737373] transition group-hover:text-white/60">
                    {service.text}
                  </p>
                  <a
                    href="#contato"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b8790b] group-hover:text-[#eda71e]"
                  >
                    Saiba mais
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="oficina"
          className="scroll-mt-20 bg-[#181818] py-24 text-white sm:py-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-[#eda71e]" />
              <img
                src={workshopImage}
                alt="Veículo no elevador dentro da oficina Undertech"
                className="relative aspect-[4/3] w-full object-cover object-center"
              />
              <div className="absolute -bottom-6 right-0 bg-[#eda71e] px-7 py-5 text-[#292623] sm:right-[-20px]">
                <p className="font-display text-3xl font-extrabold uppercase">
                  Mooca
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#292623]/70">
                  São Paulo • SP
                </p>
              </div>
            </div>

            <div className="lg:pl-8">
              <p className="eyebrow">A Fumagalli & Undertech</p>
              <h2 className="section-title mt-4">
                Mecânica de confiança, conversa sem complicação
              </h2>
              <p className="mt-6 text-base leading-7 text-white/60">
                Cuidamos de cada veículo com responsabilidade e atenção aos
                detalhes. Nosso compromisso é explicar o diagnóstico com clareza
                e recomendar apenas o que realmente precisa ser feito.
              </p>
              <div className="mt-9 space-y-5">
                {[
                  [
                    "Clareza em cada etapa",
                    "Diagnóstico e orçamento apresentados antes da execução.",
                  ],
                  [
                    "Técnica e atenção",
                    "Procedimentos cuidadosos para entregar um serviço bem-feito.",
                  ],
                  [
                    "Segurança em primeiro lugar",
                    "Revisão criteriosa dos itens essenciais do veículo.",
                  ],
                ].map(([title, text]) => (
                  <div key={title} className="flex gap-4">
                    <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#eda71e]/50 text-[#eda71e]">
                      <Icon name="check" className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold uppercase">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm text-white/50">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="processo" className="scroll-mt-20 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center">
              <p className="eyebrow justify-center">Como funciona</p>
              <h2 className="section-title mx-auto mt-4 max-w-xl">
                Simples, transparente e sem surpresas
              </h2>
            </div>
            <div className="relative mt-14 grid gap-10 md:grid-cols-3">
              <div className="absolute left-[16.6%] right-[16.6%] top-8 hidden border-t border-dashed border-[#c9c7c1] md:block" />
              {[
                [
                  "01",
                  "Avaliação",
                  "Ouvimos você e fazemos uma análise cuidadosa do veículo.",
                ],
                [
                  "02",
                  "Diagnóstico",
                  "Explicamos o problema e apresentamos as melhores soluções.",
                ],
                [
                  "03",
                  "Serviço",
                  "Com sua aprovação, executamos o reparo e revisamos a entrega.",
                ],
              ].map(([number, title, text]) => (
                <div key={number} className="relative text-center">
                  <span className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full border-8 border-[#f5f4f1] bg-[#171717] font-display text-xl font-bold text-white">
                    {number}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold uppercase">
                    {title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#707070]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="instagram"
          className="scroll-mt-20 overflow-hidden bg-[#171717] text-white"
        >
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#833ab4_0%,#c13584_28%,#e1306c_50%,#f56040_72%,#fcaf45_100%)] p-10 text-white sm:min-h-[430px]">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[48px] border-white/10" />
              <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full border-[48px] border-white/20" />
              <div className="relative text-center">
                <Icon
                  name="instagram"
                  className="mx-auto h-24 w-24 sm:h-32 sm:w-32"
                />
                <p className="mt-7 font-display text-3xl font-extrabold uppercase sm:text-4xl">
                  @fumagallieundertech
                </p>
              </div>
            </div>

            <div className="flex items-center px-5 py-20 sm:px-12 lg:px-16">
              <div>
                <p className="eyebrow !text-[#f56040]">Acompanhe a oficina</p>
                <h2 className="section-title mt-4 max-w-xl">
                  Bastidores, serviços e dicas para o seu carro
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
                  Siga nosso perfil no Instagram para conhecer o dia a dia da
                  oficina, acompanhar serviços realizados e conferir conteúdos
                  sobre manutenção automotiva.
                </p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[linear-gradient(100deg,#833ab4,#c13584,#e1306c,#f56040)] px-7 py-4 text-sm font-bold text-white transition hover:brightness-110"
                >
                  <Icon name="instagram" className="h-5 w-5" />
                  Seguir no Instagram
                  <Icon name="arrow" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="scroll-mt-20 bg-[#eda71e] text-[#292623]"
        >
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.35fr_.65fr]">
            <div className="px-5 py-20 lg:px-8 lg:py-24">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#292623]/70">
                Seu carro merece atenção
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
                Agende uma avaliação com nossa equipe
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#292623]/75">
                Visite a Fumagalli & Undertech na região da Mooca e descubra uma
                forma mais clara de cuidar do seu veículo.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-sm bg-[#171717] px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#171717]"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  Agendar pelo WhatsApp
                </a>
                <a
                  href={phoneUrl}
                  className="inline-flex items-center justify-center gap-3 rounded-sm border border-[#292623]/25 bg-white/30 px-7 py-4 text-sm font-bold transition hover:bg-white"
                >
                  <Icon name="phone" className="h-5 w-5" />
                  Ligar agora
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-sm border border-[#292623]/25 px-7 py-4 text-sm font-bold transition hover:bg-white"
                >
                  <Icon name="pin" className="h-5 w-5" />
                  Ver rota
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-7 bg-[#d69316] px-5 py-14 lg:px-12">
              <div className="flex gap-4">
                <Icon name="pin" className="mt-1 h-6 w-6 shrink-0" />
                <div>
                  <p className="font-display text-lg font-bold uppercase">
                    Localização
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#292623]/70">
                    Rua Orville Derby, 172
                    <br />
                    Mooca • São Paulo — SP
                  </p>
                </div>
              </div>
              <div className="h-px bg-[#292623]/20" />
              <div className="flex gap-4">
                <Icon name="phone" className="mt-1 h-6 w-6 shrink-0" />
                <div>
                  <p className="font-display text-lg font-bold uppercase">
                    Telefone e WhatsApp
                  </p>
                  <a
                    href={phoneUrl}
                    className="mt-1 block text-lg font-bold transition hover:underline"
                  >
                    (11) 2694-0055
                  </a>
                  <p className="mt-1 text-xs text-[#292623]/65">
                    Toque no número para ligar
                  </p>
                </div>
              </div>
              <div className="h-px bg-[#292623]/20" />
              <div className="flex gap-4">
                <Icon name="shield" className="mt-1 h-6 w-6 shrink-0" />
                <div>
                  <p className="font-display text-lg font-bold uppercase">
                    Avaliação técnica
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#292623]/70">
                    Serviço recomendado somente após o diagnóstico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f4f1] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(23,23,23,.08)] lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:py-16">
              <p className="eyebrow">Como chegar</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">
                Estamos na Mooca
              </h2>
              <div className="mt-7 flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-[#fff2cc] text-[#b8790b]">
                  <Icon name="pin" className="h-5 w-5" />
                </div>
                <p className="text-base leading-7 text-[#555]">
                  Rua Orville Derby, 172
                  <br />
                  Mooca • São Paulo — SP
                </p>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-sm bg-[#171717] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#eda71e] hover:text-[#292623]"
              >
                Abrir rota no Google Maps
                <Icon name="arrow" className="h-5 w-5" />
              </a>
            </div>
            <div className="min-h-[340px] bg-[#deddd9] lg:min-h-[400px]">
              <iframe
                src={mapsEmbedUrl}
                title="Mapa da Undertech na Rua Orville Derby, 172"
                className="h-full min-h-[340px] w-full border-0 lg:min-h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#111] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
            <a
              href="#inicio"
              aria-label="Undertech Tecnologia Automotiva - início"
            >
              <img
                src={assetUrl("undertech-logo-cropped.png")}
                alt="Undertech Tecnologia Automotiva"
                className="h-[72px] w-[186px] rounded-sm object-contain"
              />
            </a>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-xs font-semibold text-white/50 transition hover:text-white"
                >
                  {label}
                </a>
              ))}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 transition hover:text-white"
              >
                <Icon name="instagram" className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 transition hover:text-white"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Fumagalli & Undertech. Todos os
              direitos reservados.
            </p>
            <p>Rua Orville Derby, 172 • Mooca • São Paulo</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#eda71e] text-[#292623] shadow-[0_8px_30px_rgba(237,167,30,.35)] transition hover:-translate-y-1 lg:hidden"
        aria-label="Agendar pelo WhatsApp"
      >
        <Icon name="whatsapp" />
      </a>
    </div>
  )
}
