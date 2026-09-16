import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ArchiveSection from '../components/ArchiveSection';
import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import { projects, SEMESTERS } from '../data/projects';
import { scrollBehavior, useMotion } from '../hooks/useMotion';
import { ORGANIZATION_LD, SITE } from '../lib/site';

const SECTIONS = ['active', 'shipped'] as const;
type SectionId = (typeof SECTIONS)[number];

/* Navbar (h-16) plus this page's own sticky bar, so a jump lands the section
   heading just below both instead of behind them. */
const STICKY_OFFSET = 116;

function Projects() {
  const { t } = useTranslation();
  const m = useMotion();
  const [current, setCurrent] = useState<SectionId>('active');

  const active = projects.filter((project) => project.status === 'active');
  const shipped = projects.filter((project) => project.status === 'shipped');
  const counts: Record<SectionId, number> = { active: active.length, shipped: shipped.length };

  /* Two sections only, so comparing one boundary beats an IntersectionObserver. */
  useEffect(() => {
    const track = () => {
      const el = document.getElementById('shipped');
      if (!el) return;
      setCurrent(el.getBoundingClientRect().top <= STICKY_OFFSET ? 'shipped' : 'active');
    };

    track();
    window.addEventListener('scroll', track, { passive: true });
    return () => window.removeEventListener('scroll', track);
  }, []);

  const jump = (event: React.MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - STICKY_OFFSET,
      behavior: scrollBehavior(),
    });
  };

  return (
    <>
      <Seo
        title="Projets IA - Club Intelligence Artificielle Université Laval | CIA ULaval"
        description={`Découvrez les projets innovants du Club IA ULaval : ${projects
          .slice(0, 5)
          .map((p) => p.defaultTitle)
          .join(', ')} et plus. Projets d'intelligence artificielle et machine learning.`}
        keywords={`projets IA, ${projects
          .map((p) => p.defaultTitle)
          .join(', ')}, projets étudiants, machine learning, deep learning, Club IA ULaval`}
        path="/projects"
        image="/project/flappy-brain.webp"
        socialTitle="Projets IA - Club Intelligence Artificielle Université Laval"
        socialDescription="Découvrez nos projets innovants d'intelligence artificielle et machine learning."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Projets IA - Club Intelligence Artificielle Université Laval',
          url: `${SITE}/projects`,
          description: "Collection des projets d'intelligence artificielle du Club IA ULaval",
          mainEntity: ORGANIZATION_LD,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-24">
        <header className="pb-10 md:pb-14">
          <motion.h1 className="cia-display text-display" {...m.write}>
            {t('home.projects.title', 'Projects')}
          </motion.h1>
          <motion.p
            className="font-body text-primary-400 text-base md:text-lg max-w-xl mt-8"
            {...m.rise(0.08)}
          >
            {t('home.projectsPage.subtitle')}
          </motion.p>
        </header>
      </div>

      <nav aria-label={t('projects.sectionNav')} className="sticky top-16 z-40 cia-nav">
        <ul className="max-w-7xl mx-auto flex gap-8 px-4 md:px-6">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(event) => jump(event, id)}
                aria-current={current === id ? 'location' : undefined}
                className={`flex items-baseline gap-2 border-b-2 py-4 cia-mono text-xs uppercase tracking-eyebrow transition-colors cia-focus-ring ${
                  current === id
                    ? 'border-accent-400 text-ink'
                    : 'border-transparent text-ink-muted hover:text-ink'
                }`}
              >
                {t(`projects.nav.${id}`)}
                <span className="cia-index">{counts[id]}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
        <div id="active" className="scroll-mt-32">
          {SEMESTERS.map((semester) => {
            const inTerm = active.filter((project) => project.semester === semester);
            if (inTerm.length === 0) return null;

            return (
              <section key={semester} className="pt-14 first:pt-12">
                <h2 className="cia-heading-section pb-6">{t(`projects.semesters.${semester}`)}</h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {inTerm.map((project) => (
                    <div key={project.key}>
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {shipped.length > 0 && (
          <ArchiveSection
            id="shipped"
            className="scroll-mt-32 pt-16 md:pt-24"
            titleKey="projects.completed.title"
            subtitleKey="projects.completed.subtitle"
            entries={shipped.map((project) => ({
              id: project.key,
              title: t(`home.projects.${project.key}.title`, project.defaultTitle),
              meta: [
                t(`projects.categories.${project.category}`),
                t(`projects.semesters.${project.semester}`),
                project.partner,
              ]
                .filter(Boolean)
                .join(' · '),
              to: project.link,
            }))}
          />
        )}
      </div>
    </>
  );
}

export default Projects;
