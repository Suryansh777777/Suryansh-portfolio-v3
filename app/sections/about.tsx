import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "../components/motion";
import { about } from "../data/content";

/* Blue monochrome tool icons in 80×80 cards */
function ToolIcon({ name }: { name: string }) {
  const C = "#009dff";
  const inner: Record<string, React.ReactNode> = {
    Figma: (
      <svg viewBox="0 0 38 57" className="h-8 w-8" aria-hidden fill="none" stroke={C} strokeWidth="3">
        <circle cx="28.5" cy="28.5" r="9.5" />
        <path d="M9.5 38H19v9.5a9.5 9.5 0 1 1-9.5-9.5Z" />
        <path d="M19 .5h9.5a9.5 9.5 0 1 1 0 19H19V.5Z" />
        <path d="M19 .5v19H9.5a9.5 9.5 0 0 1 0-19H19Z" />
        <path d="M19 19.5v19H9.5a9.5 9.5 0 0 1 0-19H19Z" />
      </svg>
    ),
    Framer: (
      <svg viewBox="0 0 14 21" className="h-8 w-7" aria-hidden fill="none" stroke={C} strokeWidth="1.6" strokeLinejoin="round">
        <path d="M0.8 0.8H13.2V7H7L13.2 13.2H7V19.4L0.8 13.2V7H7" />
      </svg>
    ),
    Sketch: (
      <svg viewBox="0 0 24 22" className="h-8 w-8" aria-hidden fill="none" stroke={C} strokeWidth="1.6" strokeLinejoin="round">
        <path d="M6 2.5h12L22 8l-10 12L2 8 6 2.5Z" />
        <path d="M2 8h20M8.5 8 12 20 15.5 8 12 2.5 8.5 8Z" />
      </svg>
    ),
    OpenAI: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden fill={C}>
        <path d="M21.55 10.18a5.66 5.66 0 0 0-.49-4.64 5.7 5.7 0 0 0-6.14-2.73A5.65 5.65 0 0 0 10.66 1a5.7 5.7 0 0 0-5.43 3.94A5.66 5.66 0 0 0 1.45 7.7a5.7 5.7 0 0 0 .7 6.67 5.66 5.66 0 0 0 .49 4.64 5.7 5.7 0 0 0 6.14 2.73A5.65 5.65 0 0 0 13.34 23a5.7 5.7 0 0 0 5.43-3.95 5.66 5.66 0 0 0 3.78-2.74 5.7 5.7 0 0 0-.7-6.66l-.1-.04Zm-8.21 11.49a4.23 4.23 0 0 1-2.72-.99l.13-.07 4.52-2.61a.74.74 0 0 0 .37-.64v-6.38l1.91 1.1v5.27a4.25 4.25 0 0 1-4.24 4.24l.1-.07Zm-9.1-3.89a4.21 4.21 0 0 1-.5-2.85l.13.08 4.52 2.6a.73.73 0 0 0 .74 0l5.52-3.18v2.2l-.01.04-4.57 2.64a4.25 4.25 0 0 1-5.8-1.55l.45-.02Zm-1.19-9.86a4.23 4.23 0 0 1 2.21-1.86V11.43a.73.73 0 0 0 .37.64l5.52 3.18-1.91 1.1-4.52-2.61a4.25 4.25 0 0 1-1.55-5.81l.4-.07Zm15.7 3.65-5.52-3.2 1.9-1.1 4.53 2.61a4.24 4.24 0 0 1-.65 7.65v-5.42a.73.73 0 0 0-.38-.63l.1.1.02-.01Zm1.9-2.85-.13-.08-4.51-2.62a.74.74 0 0 0-.75 0L9.6 9.04V6.84l.01-.04 4.57-2.63a4.24 4.24 0 0 1 6.3 4.4l-.13-.06.02-.01ZM8.56 11.99l-1.91-1.1V5.62a4.25 4.25 0 0 1 6.96-3.26l-.13.07-4.52 2.61a.73.73 0 0 0-.37.64l-.03 6.36.03-.03Zm1.03-2.24L12.05 8.3l2.46 1.42v2.85l-2.46 1.42-2.46-1.42V9.75Z" />
      </svg>
    ),
  };
  return (
    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[20px] bg-grey-1">
      {inner[name]}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="px-6 py-[120px] md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Reveal variant="up">
            <span className="text-hand-1 text-blue-1">{about.tag}</span>
          </Reveal>
          <Reveal variant="up" delay={0.05}>
            <h2 className="max-w-[1000px] text-h1 text-black-1">{about.heading}</h2>
          </Reveal>
        </div>

        {/* 50 / 50 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Tools + Work Process */}
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-6">
              <Reveal variant="up">
                <span className="text-hand-2 text-black-1">{about.toolStackLabel}</span>
              </Reveal>
              <RevealGroup stagger={0.06} className="flex flex-wrap gap-3">
                {about.tools.map((t) => (
                  <RevealItem key={t} variant="scale">
                    <ToolIcon name={t} />
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <div className="flex flex-col gap-6">
              <Reveal variant="up">
                <span className="text-hand-2 text-black-1">{about.processLabel}</span>
              </Reveal>
              <RevealGroup stagger={0.08} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {about.process.map((p) => (
                  <RevealItem key={p.step} variant="up">
                    <div className="flex h-full flex-col gap-2.5 rounded-[20px] bg-grey-1 p-[22px]">
                      <span className="text-hand-1 text-blue-1">{p.step}</span>
                      <span className="text-body-3 text-black-1">{p.title}</span>
                      <span className="text-body-2 text-grey-3">{p.body}</span>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>

          {/* Profile image */}
          <Reveal variant="scale" className="w-full">
            <div className="relative h-full min-h-[460px] w-full overflow-visible rounded-[32px] bg-white-2">
              <div className="relative h-full w-full overflow-hidden rounded-[32px]">
                <Image
                  src="/framer/profile-about.png"
                  alt="Emili Hearth"
                  fill
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="object-cover object-top"
                />
              </div>
              <span className="absolute right-6 top-6 text-hand-2 text-blue-1">
                {about.profileGreeting}
              </span>
              <Image
                src="/framer/framer-icon.png"
                alt=""
                width={72}
                height={72}
                className="absolute -bottom-2 -right-3 h-16 w-16 rotate-6"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
