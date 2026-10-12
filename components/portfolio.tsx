'use client';

/** Portfolio preview; shares its content with the dedicated portfolio page. */
import {concepts,type PortfolioConcept} from '@/lib/portfolio';
export type {PortfolioConcept} from '@/lib/portfolio';

type PortfolioProps = {
  /** Override the section anchor if needed. */
  id?: string;
  /** Default link destination when no detail handler is supplied. */
  href?: string;
  /** Optional handler for opening a project dialog or custom navigation. */
  onSelect?: (concept: PortfolioConcept) => void;
};

export default function Portfolio({
  id = 'portafolio',
  href = '#contacto',
  onSelect,
}: PortfolioProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="bg-[#fafafa] px-[6%] py-12 text-[#101010] sm:px-[4.4%] sm:py-16"
    >
      <div className="mx-auto grid max-w-[1320px] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-10">
        <header className="min-w-0 lg:pt-3">
          <span className="inline-block rounded-full bg-[#ffcc00] px-3 py-2 text-[9px] leading-relaxed font-extrabold tracking-[1.2px] sm:text-[10px]">
            ASÍ CREAMOS CONTENIDO
          </span>
          <h2
            id={`${id}-title`}
            className="mt-5 text-[clamp(2rem,3.1vw,2.75rem)] leading-[1.16] font-black tracking-[-1.6px]"
          >
            Ideas para poner tu marca en{' '}
            <mark>
              movimiento
            </mark>
          </h2>
          <p className="mt-5 max-w-[290px] text-sm leading-relaxed text-[#737373]">
            Explora cómo podemos conectar tu marca con las personas a través de estrategia, videos, publicidad y diseño.
          </p>
        </header>

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {concepts.map((concept) => (
            <a
              key={concept.tag}
              href={href}
              onClick={(event) => {
                if (onSelect && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                  event.preventDefault();
                  onSelect(concept);
                }
              }}
              aria-label={`Ver concepto: ${concept.title}`}
              className={`group relative isolate grid min-h-[230px] min-w-0 grid-rows-[auto_1fr_auto] gap-y-4 overflow-hidden rounded-2xl p-6 text-left no-underline transition-[color,box-shadow,transform,translate,rotate] duration-300 hover:text-white hover:shadow-xl focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8a000] motion-safe:hover:-translate-y-1 motion-safe:hover:-rotate-1 motion-safe:focus-visible:-rotate-1 motion-reduce:transition-none sm:min-h-[250px] sm:p-7 ${concept.background}`}
            >
              {/* Dark overlay gives all four cards a consistent hover treatment. */}
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[#111111] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none" />
              <span aria-hidden="true" className="pointer-events-none absolute -right-16 -bottom-16 -z-10 size-56 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none" />
              <span aria-hidden="true" className="pointer-events-none absolute -right-9 -bottom-9 -z-10 size-40 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none" />

              <div className="flex items-start justify-between gap-3">
                <span className="pt-2 text-[9px] leading-relaxed font-semibold tracking-[1.2px]">
                  {concept.tag}
                </span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/65 text-[#101010] transition-colors duration-300 group-hover:bg-[#ffcc00] group-focus-visible:bg-[#ffcc00] motion-reduce:transition-none">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="size-5 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:rotate-6 motion-safe:group-focus-visible:translate-x-0.5 motion-safe:group-focus-visible:-translate-y-0.5 motion-reduce:transition-none"
                  >
                    <path d="M6 18 18 6M6 6h12v12" />
                  </svg>
                </span>
              </div>

              <div className="contents">
                <h3 className="max-w-[260px] self-center text-[28px] leading-[1.05] font-black tracking-[-1px] sm:text-[30px]">
                  {concept.title}
                </h3>
                <p className="max-w-[270px] text-xs leading-relaxed text-inherit transition-colors duration-300 group-hover:text-white/75 group-focus-visible:text-white/75 motion-reduce:transition-none">
                  {concept.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
