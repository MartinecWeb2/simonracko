import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getProjectBySlug, projects, siteConfig } from "@/data/site";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} · ${siteConfig.alias}`,
      description: project.description,
      url: `${siteConfig.url}/projekty/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="pt-28">
        <article className="container-page pb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Zpět na úvod
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-violet/90">
                {project.year} · {project.client}
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-muted">{project.subtitle}</p>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
                {project.longDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  Otevřít web
                  <ArrowUpRight size={16} />
                </a>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>

            <div
              className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10"
              style={{
                background: `linear-gradient(145deg, ${project.color}44, #0a0a0a 55%, #111 100%)`,
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.2),transparent_45%)]" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Preview
                </p>
                <p className="mt-2 font-display text-2xl text-white">
                  {project.title}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="glass rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-dark">
                Technologie
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-6 md:col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-dark">
                Výsledky
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {project.results.map((result) => (
                  <li
                    key={result}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-sm text-white"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
