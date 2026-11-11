import { createFileRoute } from '@tanstack/react-router'
import { ArrowDown, ArrowRight, ArrowUpRight, Compass, Lightbulb, TrendingUp } from 'lucide-react'
import { Header } from '@/components/site/Header'
import { Reveal } from '@/components/site/Reveal'
import { ContactForm } from '@/components/site/ContactForm'
import { LogoMark, Wordmark } from '@/components/site/Logo'

export const Route = createFileRoute('/')({
  component: Home,
})

/**
 * Set this to a path such as '/img/hussain-khan.jpg' once a professional
 * portrait is added to public/img. Until then an elegant placeholder is shown.
 */
const FOUNDER_PHOTO: string | null = null

const img = (file: string, w: number) => `/.netlify/images?url=/img/${file}&w=${w}&fm=webp&q=80`

const principles = [
  {
    icon: Compass,
    title: 'Strategy',
    text: 'Every great move begins with a clear direction.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'Progress comes from exploring new possibilities.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    text: 'Building towards meaningful, long-term progress.',
  },
]

const reasons = [
  'Forward-thinking mindset.',
  'Strategic perspective.',
  'Commitment to innovation.',
  'Focus on meaningful progress.',
  'Long-term vision.',
]

function Home() {
  return (
    <div id="top" className="relative overflow-x-clip bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Vision />
        <Philosophy />
        <Founder />
        <WhyExlantic />
        <Contact />
        <BrandStatement />
      </main>
      <Footer />
    </div>
  )
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-accent">
      <span className="text-muted-foreground">{index}</span>
      <span className="h-px w-10 bg-gradient-to-r from-primary to-transparent" aria-hidden="true" />
      {children}
    </p>
  )
}

function Hero() {
  return (
    <section className="grain relative isolate flex min-h-[100svh] items-center pt-24 pb-16">
      {/* atmosphere */}
      <div className="grid-lines absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="glow-pulse absolute top-1/4 right-[-10%] -z-10 size-[42rem] rounded-full bg-primary/25 blur-[140px] max-md:top-[30%] max-md:right-[-40%] max-md:size-[28rem]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] -z-10 size-[30rem] rounded-full bg-violet-deep/30 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-content items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="relative z-10 order-2 lg:order-1">
          <Reveal>
            <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-white/[0.03] px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px] shadow-accent" />
              Think Beyond. Build Forward.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-brand text-[2.15rem] leading-[1.15] tracking-[0.06em] text-metal sm:text-5xl lg:text-[3.6rem] xl:text-[4.1rem]">
              EXLANTIC
              <span className="block text-[0.62em] tracking-[0.2em]">GROWTH PARTNERS</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 font-display text-3xl italic text-violet sm:text-4xl lg:text-5xl">
              Turning Insights Into Growth.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We believe meaningful progress begins with fresh perspectives, strategic thinking and
              the courage to explore new possibilities.
            </p>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#about"
                className="group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-deep to-primary px-8 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_-10px] shadow-primary/70 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-primary motion-reduce:transition-none"
              >
                Discover Exlantic
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-13 items-center justify-center gap-3 rounded-full border border-silver/30 px-8 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-silver/70 hover:bg-white/[0.04]"
              >
                Get in Touch
              </a>
            </div>
          </Reveal>
        </div>

        {/* 3D visual */}
        <div className="scene relative order-1 mx-auto aspect-square w-full max-w-[22rem] sm:max-w-md lg:order-2 lg:max-w-none">
          <div className="orbit" aria-hidden="true" />
          <div className="orbit [animation-delay:-6s] [animation-duration:24s] scale-[0.82]" aria-hidden="true" />
          <img
            src={img('hero-monolith.png', 900)}
            srcSet={`${img('hero-monolith.png', 480)} 480w, ${img('hero-monolith.png', 900)} 900w, ${img('hero-monolith.png', 1280)} 1280w`}
            sizes="(min-width: 1024px) 45vw, 90vw"
            alt="Abstract 3D sculpture of interlocking silver geometry and violet glass rings"
            width={1024}
            height={1024}
            fetchPriority="high"
            className="float-slow relative size-full object-contain mix-blend-lighten [mask-image:radial-gradient(circle,black_55%,transparent_72%)]"
          />
          <div className="absolute -bottom-2 left-2 hidden sm:block" aria-hidden="true">
            <div className="cube" style={{ '--size': '54px' } as React.CSSProperties}>
              <span /><span /><span /><span /><span /><span />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        Scroll
        <ArrowDown className="size-4 animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative scroll-mt-20 border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-content gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionLabel index="01">About Us</SectionLabel>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] text-metal sm:text-6xl">
            A forward-thinking <em className="text-violet">initiative.</em>
          </h2>
        </Reveal>
        <div className="flex flex-col gap-8 lg:pt-14">
          <Reveal delay={100}>
            <p className="text-xl leading-relaxed text-foreground/90 sm:text-2xl sm:leading-relaxed">
              Exlantic Growth Partners is a forward-thinking business initiative built around
              innovation, strategic thinking and meaningful growth.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our focus is on exploring new opportunities, understanding evolving business needs and
              embracing the possibilities of tomorrow.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-4 grid grid-cols-3 border-t border-border pt-8 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              <span>Explore</span>
              <span className="text-center">Understand</span>
              <span className="text-right">Embrace</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Vision() {
  return (
    <section id="vision" className="relative isolate scroll-mt-20 overflow-hidden py-28 sm:py-40">
      <img
        src={img('vision-horizon.png', 1600)}
        srcSet={`${img('vision-horizon.png', 800)} 800w, ${img('vision-horizon.png', 1600)} 1600w, ${img('vision-horizon.png', 2400)} 2400w`}
        sizes="100vw"
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover object-[30%_center] opacity-80"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/40 to-background"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="02">Our Vision</SectionLabel>
        </Reveal>
        <Reveal delay={120}>
          <blockquote className="mt-10 max-w-4xl font-display text-[2.1rem] leading-[1.15] text-metal sm:text-5xl lg:text-6xl">
            “To help shape a future where businesses can grow{' '}
            <em className="text-violet">smarter</em>, adapt <em className="text-violet">faster</em>{' '}
            and move forward through innovation and intelligent solutions.”
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}

function Philosophy() {
  return (
    <section id="philosophy" className="relative scroll-mt-20 border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionLabel index="03">Our Philosophy</SectionLabel>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-metal sm:text-6xl">
              Three principles.
              <br />
              <em className="text-violet">One direction.</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-muted-foreground">
              The ideas that guide how we think, explore and build — today and in the years ahead.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-white/[0.035] to-transparent p-8 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-primary/50 motion-reduce:transition-none sm:p-10">
                <div
                  className="absolute -top-24 -right-24 size-56 rounded-full bg-primary/0 blur-3xl transition-colors duration-700 group-hover:bg-primary/25"
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between">
                  <span className="relative inline-flex size-14 items-center justify-center">
                    <span
                      className="absolute inset-0 rotate-45 rounded-md border border-primary/50 bg-primary/10 transition-transform duration-700 group-hover:rotate-[135deg] motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                    <p.icon className="relative size-5 text-accent" aria-hidden="true" />
                  </span>
                  <span className="font-brand text-xs tracking-[0.3em] text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-12 font-display text-4xl text-metal">{p.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Founder() {
  return (
    <section id="founder" className="relative scroll-mt-20 border-t border-border py-24 sm:py-32">
      <div
        className="absolute top-1/3 left-[-15%] -z-10 size-[30rem] rounded-full bg-primary/15 blur-[140px]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-content items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal>
          <figure className="relative mx-auto w-full max-w-md">
            <div
              className="absolute -inset-3 rounded-[1.75rem] border border-primary/25 sm:-inset-5"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary via-card to-background">
              {FOUNDER_PHOTO ? (
                <img
                  src={`/.netlify/images?url=${FOUNDER_PHOTO}&w=800&fm=webp`}
                  alt="Portrait of Hussain Khan, Founder of Exlantic Growth Partners"
                  loading="lazy"
                  className="size-full object-cover"
                />
              ) : (
                <div className="flex size-full flex-col items-center justify-center gap-6">
                  <div className="grid-lines absolute inset-0" aria-hidden="true" />
                  <div
                    className="absolute bottom-0 left-1/2 h-2/3 w-3/4 -translate-x-1/2 rounded-t-full bg-gradient-to-t from-primary/20 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative font-display text-8xl text-metal">HK</span>
                  <span className="relative text-[0.62rem] uppercase tracking-[0.4em] text-muted-foreground">
                    Founder portrait
                  </span>
                </div>
              )}
            </div>
            <figcaption className="absolute -bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-border bg-background/85 px-5 py-4 backdrop-blur-xl sm:left-10 sm:right-10">
              <span>
                <span className="block font-display text-2xl text-foreground">Hussain Khan</span>
                <span className="text-[0.65rem] uppercase tracking-[0.3em] text-accent">Founder</span>
              </span>
              <LogoMark className="size-8" />
            </figcaption>
          </figure>
        </Reveal>

        <div className="pt-6 lg:pt-0">
          <Reveal>
            <SectionLabel index="04">Leadership</SectionLabel>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-metal sm:text-6xl">
              Meet Our <em className="text-violet">Founder</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 border-l border-primary/50 pl-6">
              <p className="font-brand text-lg tracking-[0.12em] text-foreground sm:text-xl">
                HUSSAIN KHAN
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Founder, Exlantic Growth Partners.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-10 text-lg leading-relaxed text-foreground/90 sm:text-xl sm:leading-relaxed">
              Hussain Khan founded Exlantic Growth Partners with a vision to build a forward-thinking
              brand focused on business growth, innovation and emerging opportunities.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              His ambition is to explore new possibilities and build solutions that help businesses
              move forward.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function WhyExlantic() {
  return (
    <section id="why" className="relative scroll-mt-20 border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-content gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <SectionLabel index="05">Why Exlantic</SectionLabel>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] text-metal sm:text-6xl">
            Built on <em className="text-violet">perspective.</em>
          </h2>
          <p className="mt-6 max-w-sm text-muted-foreground">
            What defines the way Exlantic approaches every opportunity.
          </p>
          <div className="scene mt-14 hidden lg:block" aria-hidden="true">
            <div className="cube ml-10" style={{ '--size': '120px' } as React.CSSProperties}>
              <span /><span /><span /><span /><span /><span />
            </div>
          </div>
        </Reveal>

        <ol className="flex flex-col border-t border-border">
          {reasons.map((reason, i) => (
            <Reveal as="li" key={reason} delay={i * 80}>
              <div className="group flex items-center gap-6 border-b border-border py-7 transition-colors hover:border-primary/40 sm:gap-10 sm:py-9">
                <span className="font-brand text-xs tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-accent">
                  0{i + 1}
                </span>
                <span className="flex-1 font-display text-3xl text-foreground transition-transform duration-500 group-hover:translate-x-2 motion-reduce:transition-none sm:text-4xl">
                  {reason}
                </span>
                <ArrowUpRight
                  className="size-5 shrink-0 text-muted-foreground transition-[color,transform] duration-500 group-hover:rotate-45 group-hover:text-accent motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-background to-background p-6 sm:p-12 lg:p-16">
          <div
            className="absolute -top-40 -right-40 size-[28rem] rounded-full bg-primary/20 blur-[120px]"
            aria-hidden="true"
          />
          <div className="relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionLabel index="06">Contact Us</SectionLabel>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] text-metal sm:text-6xl">
                Let’s start a <em className="text-violet">conversation.</em>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                Whether you would like to learn more about Exlantic or explore an idea together, we
                would be glad to hear from you.
              </p>
              <dl className="mt-12 grid gap-6 border-t border-border pt-8">
                <div>
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-accent">
                    Enquiries
                  </dt>
                  <dd className="mt-2 text-sm text-muted-foreground">
                    Share your details using the form and our team will respond personally.
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-accent">
                    Reach
                  </dt>
                  <dd className="mt-2 text-sm text-muted-foreground">
                    Open to conversations with businesses and partners internationally.
                  </dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function BrandStatement() {
  return (
    <section className="grain relative isolate overflow-hidden border-t border-border py-28 text-center sm:py-40">
      <div className="grid-lines absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="glow-pulse absolute top-1/2 left-1/2 -z-10 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <LogoMark className="mx-auto size-14" />
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-10 font-brand text-xl tracking-[0.18em] text-metal sm:text-3xl lg:text-4xl">
            EXLANTIC GROWTH PARTNERS
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 font-display text-4xl italic text-violet sm:text-6xl lg:text-7xl">
            Think Beyond. Build Forward.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-8 text-sm uppercase tracking-[0.4em] text-muted-foreground">
            Turning Insights Into Growth.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Wordmark />
        <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3">
          {[
            ['#about', 'About'],
            ['#vision', 'Vision'],
            ['#philosophy', 'Philosophy'],
            ['#founder', 'Founder'],
            ['#contact', 'Contact'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Exlantic Growth Partners
        </p>
      </div>
    </footer>
  )
}
