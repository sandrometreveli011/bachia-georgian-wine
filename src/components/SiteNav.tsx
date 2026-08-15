import { useEffect, useState } from "react";
import { NAV, WHATSAPP } from "@/lib/site";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-charcoal/95 backdrop-blur-md border-b border-cream/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex flex-col leading-none">
          <span className="font-serif text-xl tracking-[0.18em] text-cream sm:text-2xl">
            BACHIA
          </span>
          <span className="eyebrow mt-1 text-cream/55">Winery · Asureti</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[0.78rem] uppercase tracking-[0.18em] text-cream/70 transition-colors hover:text-cream after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cream/30 px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.2em] text-cream transition-colors hover:border-accent hover:bg-accent hover:text-charcoal"
          >
            Plan Your Visit
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-cream transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-cream transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-charcoal/95 transition-[max-height] duration-500 lg:hidden ${open ? "max-h-96" : "max-h-0"}`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 pb-6 pt-2 sm:px-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-cream/10 py-3.5 text-sm uppercase tracking-[0.2em] text-cream/80"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
