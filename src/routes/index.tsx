import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Reveal } from "@/components/Reveal";
import {
  GOOGLE_REVIEWS_URL,
  INSTAGRAM,
  MAPS_URL,
  PHONE,
  PHONE_HREF,
  WHATSAPP,
} from "@/lib/site";
import heroVineyard from "@/assets/hero-vineyard.jpg";
import cellar from "@/assets/cellar.jpg";
import pour from "@/assets/pour.jpg";
import winemaker from "@/assets/winemaker.jpg";

const TITLE = "Bachia Winery — Georgian Wine Tasting in Asureti";
const DESCRIPTION =
  "Bachia Winery in Asureti, Georgia. Georgian wine tasting, vineyard visits and genuine Georgian hospitality. Rated 5.0 on Google from 47 reviews.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Bachia Winery, winery in Asureti, Asureti winery, Georgian wine, Georgian winery, wine tasting Asureti, wine tasting Georgia",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Winery",
          name: "Bachia Winery",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Asureti",
            addressCountry: "GE",
          },
          telephone: "+995577464769",
          sameAs: [INSTAGRAM],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "47",
            bestRating: "5",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const Stars = ({ className = "" }: { className?: string }) => (
  <span aria-hidden="true" className={`tracking-[0.25em] ${className}`}>
    ★★★★★
  </span>
);

const EXPERIENCES = [
  {
    title: "Wine Tasting",
    text: "Discover local Georgian wines and experience their character firsthand.",
  },
  {
    title: "Vineyard",
    text: "Take in the vineyard and the landscape surrounding Asureti.",
  },
  {
    title: "Georgian Hospitality",
    text: "Enjoy the warmth and personal hospitality visitors repeatedly mention in their reviews.",
  },
  {
    title: "Local Wine Tradition",
    text: "Explore the character and story of Georgian wines.",
  },
];

const REVIEWS = [
  {
    name: "Alessandra Speri",
    text: "Zaza is a passionate wine maker and a good man. We spent a morning with him tasting his wines and chatting as well as having an opportunity to visit the vineyard.",
    excerpt: false,
  },
  {
    name: "Sophie Kalandadze",
    text: "If you want to have truly Georgian experience with its hospitality and local tastes of amazing wines - you need to visit this winery. The owner is extremely professional and passionate about what he does.",
    excerpt: false,
  },
  {
    name: "Alexey Samosov",
    text: "We were gonna just stop by and quickly buy some craft wine…",
    excerpt: true,
  },
];

function Home() {
  return (
    <div className="bg-background">
      <SiteNav />
      <WhatsAppFab />

      <main>
        {/* HERO */}
        <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden">
          <img
            src={heroVineyard}
            alt="Vineyard rows on the hills near Asureti, Georgia at golden hour"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full scale-105 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/40" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
            <Reveal>
              <span className="inline-flex items-center gap-3 border border-cream/25 px-4 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-cream/85 backdrop-blur-sm">
                <Stars className="text-accent" />
                <span>5.0 on Google · 47 Reviews</span>
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-8 max-w-4xl font-serif text-[2.6rem] leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
                Discover Georgian Wine at Bachia Winery
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
                Authentic wine, local tradition, and Georgian hospitality in Asureti.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#visit"
                  className="inline-flex items-center justify-center bg-primary px-8 py-4 text-[0.75rem] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Plan Your Visit
                </a>
                <a
                  href="#story"
                  className="inline-flex items-center justify-center border border-cream/35 px-8 py-4 text-[0.75rem] uppercase tracking-[0.22em] text-cream transition-colors hover:border-cream hover:bg-cream/10"
                >
                  Explore Our Story
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* STORY */}
        <section id="story" className="bg-background py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
            <Reveal className="order-2 lg:order-1">
              <p className="eyebrow">Bachia Winery · Asureti, Georgia</p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
                A place where Georgian wine, local traditions and genuine hospitality come together.
              </h2>
              <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">
                Bachia Winery sits in Asureti, in the hills south of Tbilisi. Guests come for the
                wine and stay for the conversation — a morning at the vineyard, a glass poured by
                the person who made it, and the unhurried welcome that Georgian wine culture is
                known for.
              </p>
              <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
                It is a visit rather than a shop: a small winery, an open door, and time taken with
                every guest.
              </p>
              <a
                href="#experience"
                className="mt-10 inline-block border-b border-primary pb-1 text-[0.75rem] uppercase tracking-[0.22em] text-primary transition-colors hover:border-accent hover:text-accent"
              >
                The Experience
              </a>
            </Reveal>

            <Reveal delay={150} className="order-1 lg:order-2">
              <figure className="relative">
                <img
                  src={cellar}
                  alt="Traditional Georgian wine cellar with clay qvevri set into the earthen floor"
                  loading="lazy"
                  width={1280}
                  height={1600}
                  className="h-[26rem] w-full object-cover sm:h-[34rem] lg:h-[40rem]"
                />
                <figcaption className="eyebrow mt-4">Georgian winemaking tradition</figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="bg-charcoal py-24 text-cream sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow text-cream/50">The Experience</p>
              <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                What guests find at Bachia Winery
              </h2>
            </Reveal>

            <ul className="mt-16 grid gap-px border border-cream/10 bg-cream/10 sm:grid-cols-2">
              {EXPERIENCES.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={i * 100}
                  className="group bg-charcoal p-9 transition-colors duration-500 hover:bg-primary sm:p-12"
                >
                  <span className="eyebrow text-cream/40">0{i + 1}</span>
                  <h3 className="mt-6 font-serif text-2xl sm:text-3xl">{item.title}</h3>
                  <p className="mt-4 max-w-sm leading-relaxed text-cream/65 transition-colors group-hover:text-cream/85">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120}>
              <p className="mt-10 max-w-2xl text-xs leading-relaxed text-cream/40">
                Based on what guests describe in their Google reviews. Contact the winery directly
                to confirm what is available on the day of your visit.
              </p>
            </Reveal>
          </div>
        </section>

        {/* WINEMAKER */}
        <section className="bg-background py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <Reveal>
              <img
                src={winemaker}
                alt="A winemaker's hands examining vine leaves in the vineyard"
                loading="lazy"
                width={1280}
                height={1600}
                className="h-[26rem] w-full object-cover sm:h-[34rem]"
              />
            </Reveal>
            <Reveal delay={150}>
              <p className="eyebrow">The Winemaker</p>
              <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">Zaza</h2>
              <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">
                Guests describe Zaza as a passionate winemaker — professional, welcoming and
                knowledgeable about Georgian wine. He receives visitors himself, pours his own
                wines, and takes the time to talk about them.
              </p>
              <blockquote className="mt-10 border-l border-primary pl-6 font-serif text-2xl leading-snug text-foreground sm:text-3xl">
                “Zaza is a passionate wine maker and a good man.”
                <footer className="eyebrow mt-4 block not-italic">
                  Alessandra Speri · Google Review
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* WINES */}
        <section id="wines" className="relative overflow-hidden">
          <img
            src={pour}
            alt="Amber Georgian wine being poured into a glass"
            loading="lazy"
            width={1600}
            height={1104}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/80" />
          <div className="relative mx-auto max-w-3xl px-5 py-28 text-center text-cream sm:px-8 sm:py-40">
            <Reveal>
              <p className="eyebrow text-cream/50">Our Wines</p>
              <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                Explore the wines of Bachia Winery
              </h2>
              <p className="mx-auto mt-6 max-w-xl leading-relaxed text-cream/70">
                Discover the character of Georgian wine through the wines crafted at Bachia Winery.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center bg-cream px-8 py-4 text-[0.75rem] uppercase tracking-[0.22em] text-charcoal transition-colors hover:bg-accent"
              >
                Ask About Our Wines
              </a>
            </Reveal>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Google Reviews</p>
              <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                What our guests say
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-y border-border py-6">
                <span className="flex items-baseline gap-3">
                  <Stars className="text-primary" />
                  <span className="font-serif text-3xl">5.0</span>
                  <span className="eyebrow">Google Rating</span>
                </span>
                <span className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl">47</span>
                  <span className="eyebrow">Reviews</span>
                </span>
              </div>
            </Reveal>

            <ul className="mt-14 grid gap-10 lg:grid-cols-3">
              {REVIEWS.map((review, i) => (
                <Reveal as="li" key={review.name} delay={i * 120} className="flex flex-col">
                  <Stars className="text-primary" />
                  <blockquote className="mt-6 flex-1 font-serif text-2xl leading-snug text-foreground">
                    “{review.text}”
                  </blockquote>
                  <div className="mt-6">
                    <p className="text-sm font-medium">{review.name}</p>
                    <p className="eyebrow mt-1">Google Review</p>
                    {review.excerpt ? (
                      <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block border-b border-primary pb-0.5 text-xs uppercase tracking-[0.18em] text-primary"
                      >
                        Read more on Google
                      </a>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120}>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-16 inline-flex items-center justify-center border border-foreground/25 px-8 py-4 text-[0.75rem] uppercase tracking-[0.22em] transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Read More Reviews on Google
              </a>
              <p className="mt-4 text-xs text-muted-foreground">
                Reviews shown as published on Google. Link to be replaced with the winery's exact
                Google Business profile URL.
              </p>
            </Reveal>
          </div>
        </section>

        {/* VISIT */}
        <section id="visit" className="bg-primary py-24 text-primary-foreground sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <p className="eyebrow text-primary-foreground/55">Visit</p>
              <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
                Come experience Bachia Winery
              </h2>
              <dl className="mt-10 space-y-4 text-primary-foreground/85">
                <div className="flex gap-3">
                  <dt aria-hidden="true">📍</dt>
                  <dd>Asureti, Georgia</dd>
                </div>
                <div className="flex gap-3">
                  <dt aria-hidden="true">📞</dt>
                  <dd>
                    <a href={PHONE_HREF} className="hover:underline">
                      {PHONE}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt aria-hidden="true">💬</dt>
                  <dd>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      WhatsApp
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt aria-hidden="true">📸</dt>
                  <dd>
                    <a
                      href={INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Instagram
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={150} className="flex flex-col justify-center gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-cream px-8 py-6 text-[0.78rem] uppercase tracking-[0.22em] text-charcoal transition-colors hover:bg-accent"
              >
                WhatsApp Us <span aria-hidden="true">→</span>
              </a>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-between border border-primary-foreground/35 px-8 py-6 text-[0.78rem] uppercase tracking-[0.22em] transition-colors hover:bg-primary-foreground/10"
              >
                Call the Winery <span aria-hidden="true">→</span>
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-primary-foreground/35 px-8 py-6 text-[0.78rem] uppercase tracking-[0.22em] transition-colors hover:bg-primary-foreground/10"
              >
                Visit Instagram <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* LOCATION */}
        <section aria-labelledby="location-heading" className="bg-background">
          <div className="mx-auto max-w-7xl px-5 pb-14 pt-24 sm:px-8 sm:pt-32">
            <Reveal>
              <p className="eyebrow">Location</p>
              <h2 id="location-heading" className="mt-6 font-serif text-4xl sm:text-5xl">
                Asureti, Georgia
              </h2>
              <p className="mt-4 text-muted-foreground">HMRC+3R Asureti</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center bg-primary px-8 py-4 text-[0.75rem] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Get Directions
              </a>
            </Reveal>
          </div>
          <Reveal>
            <iframe
              title="Map showing Bachia Winery in Asureti, Georgia"
              src="https://www.openstreetmap.org/export/embed.html?bbox=44.566%2C41.573%2C44.626%2C41.603&layer=mapnik&marker=41.5878%2C44.5967"
              loading="lazy"
              className="h-[22rem] w-full border-y border-border grayscale-[0.35] sm:h-[30rem]"
            />
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer className="bg-charcoal py-16 text-cream sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-serif text-2xl tracking-[0.16em]">BACHIA WINERY</p>
              <p className="eyebrow mt-3 text-cream/50">Asureti, Georgia</p>
              <p className="mt-5 max-w-xs text-sm text-cream/60">
                Authentic Georgian wine &amp; hospitality
              </p>
            </div>
            <nav aria-label="Footer" className="flex flex-col gap-3 text-sm text-cream/70">
              <a href={PHONE_HREF} className="hover:text-cream">
                {PHONE}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream"
              >
                WhatsApp
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream"
              >
                Instagram
              </a>
            </nav>
          </div>
          <div className="mx-auto mt-12 max-w-7xl border-t border-cream/10 px-5 pt-6 sm:px-8">
            <p className="text-xs text-cream/40">
              © {new Date().getFullYear()} Bachia Winery · Asureti, Georgia
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
