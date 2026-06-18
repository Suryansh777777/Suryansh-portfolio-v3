import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "../../components/navigation";
import { Footer } from "../../components/footer";
import { Reveal } from "../../components/motion";
import { ToolIcon } from "../../components/tool-icon";
import { projects, getProject } from "../../data/projects";

const TOOLS = ["Figma", "Framer", "Sketch", "OpenAI"];

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} — Emili Hearth` : "Project" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const meta = [
    ["#TIMELINE", project.meta.timeline],
    ["#ROLE", project.meta.role],
    ["#INDUSTRY", project.meta.industry],
    ["#RESULT", project.meta.result],
  ];

  return (
    <>
      <Navigation />
      <main className="px-6 pt-36 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          {/* Hero — 2 columns */}
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="flex flex-col items-start gap-5">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-white-1 px-4 py-2.5 text-body-1 text-black-1 ring-1 ring-grey-2 transition-colors hover:bg-grey-1"
              >
                <svg viewBox="0 0 24 20" fill="none" className="h-4 w-5 text-blue-1" aria-hidden>
                  <path d="M21 11c-5-1-9 0-12 3M9 8l-4 6 5 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to Home
              </Link>
              <span className="text-hand-1 text-blue-1">#Webdesign</span>
              <h1 className="text-h1 text-black-1">{project.title}</h1>
              <p className="max-w-[480px] text-body-2 text-grey-3">{project.subtitle}</p>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-hand-2 text-black-1">The Tools I Used</span>
              <div className="flex gap-3">
                {TOOLS.map((t) => (
                  <ToolIcon key={t} name={t} />
                ))}
              </div>
            </div>
          </div>

          {/* Gallery — 2 x 2 */}
          <div className="relative mt-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.gallery.map((g, i) => (
                <Reveal key={g} variant="scale" delay={i * 0.04}>
                  <div className="relative aspect-[1.12] w-full overflow-hidden rounded-[28px] bg-grey-1">
                    <Image src={g} alt={`${project.title} screen ${i + 1}`} fill sizes="(max-width:768px) 90vw, 580px" className="object-cover" />
                  </div>
                </Reveal>
              ))}
            </div>
            <Image
              src="/framer/framer-icon.png"
              alt=""
              width={72}
              height={72}
              className="pointer-events-none absolute -bottom-4 right-2 h-16 w-16 rotate-6"
            />
          </div>

          {/* Meta cards */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {meta.map(([label, value]) => (
              <Reveal key={label} variant="up">
                <div className="flex h-full flex-col gap-2 rounded-[20px] bg-white-1 p-6 ring-1 ring-grey-2">
                  <span className="text-hand-1 uppercase text-blue-1">{label}</span>
                  <span className="font-display text-[1.5rem] font-semibold tracking-[-0.04em] text-black-1">{value}</span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* About The Project */}
          <div className="mt-24 flex flex-col items-start gap-7 pb-24">
            <Reveal variant="up">
              <h2 className="text-h2 text-black-1">About The Project</h2>
            </Reveal>
            <div className="flex flex-col gap-6">
              {project.description.map((p, i) => (
                <Reveal key={i} variant="up" delay={i * 0.03}>
                  <p className="max-w-[920px] text-[1.375rem] leading-[1.5] tracking-[-0.02em] text-grey-3">{p}</p>
                </Reveal>
              ))}
            </div>
            <a
              href={project.livePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-2xl bg-blue-1 px-5 py-3 text-body-1 text-white-1 transition-all duration-200 hover:brightness-105"
            >
              Live Preview
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
