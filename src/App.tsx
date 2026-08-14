import { useEffect, useState } from "react";
import { pageContent } from "./data/content";
import { translateProject } from "./data/projectTranslations";
import { projects, type Language, type Project } from "./data/projects";

type PageCopy = (typeof pageContent)[Language];

function ProjectCard({ project, index, copy }: { project: Project; index: number; copy: PageCopy }) {
  const mediaCount = project.images.length + (project.video ? 1 : 0);
  const hasMedia = mediaCount > 0;

  return (
    <article className={`project-card project-card--${project.accent}`} data-reveal>
      <div className="project-copy">
        <div className="project-kicker">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.metrics.length > 0 && (
          <dl className="project-metrics" aria-label={copy.metricsAria}>
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <ul className="tag-list" aria-label={copy.technologiesAria}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        {(project.repository || project.demo || !hasMedia) && (
          <div className="project-links">
            {project.repository ? (
              <a href={project.repository} target="_blank" rel="noreferrer">
                {copy.repository} <span aria-hidden="true">↗</span>
              </a>
            ) : !hasMedia ? (
              <span>{copy.repositoryPending}</span>
            ) : null}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                {copy.demo} <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>

      <div
        className={`project-media${mediaCount > 1 ? " project-media--gallery" : ""}${
          mediaCount === 2 ? " project-media--two" : ""
        }${
          mediaCount === 4 ? " project-media--four" : ""
        }`}
      >
        {hasMedia ? (
          <>
            {project.video && (
              <figure className={`project-video${mediaCount > 1 ? " project-video--tile" : ""}`}>
                <video controls playsInline preload="metadata" aria-label={project.video.label}>
                  <source src={project.video.src} type="video/mp4" />
                  {copy.videoUnsupported}
                </video>
                <figcaption>{project.video.caption}</figcaption>
              </figure>
            )}
            {project.images.map((image, imageIndex) => (
              <figure
                className={
                  !project.video && imageIndex === 0
                    ? "project-image project-image--primary"
                    : "project-image"
                }
                key={image.src}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ objectPosition: image.position, objectFit: image.fit }}
                />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </>
        ) : (
          <div className="project-placeholder" aria-label={copy.mediaPlaceholderAria}>
            <span className="placeholder-orbit placeholder-orbit--one" />
            <span className="placeholder-orbit placeholder-orbit--two" />
            <span className="placeholder-core">{String(index + 1).padStart(2, "0")}</span>
            <small>{copy.mediaPlaceholder}</small>
          </div>
        )}
      </div>
    </article>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() =>
    window.localStorage.getItem("portfolio-language") === "en" ? "en" : "es",
  );
  const copy = pageContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.metaTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", copy.metaDescription);
    window.localStorage.setItem("portfolio-language", language);
  }, [copy.metaDescription, copy.metaTitle, language]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido">{copy.skipLink}</a>

      <header className="site-header">
        <nav className="nav-shell" aria-label={copy.navAria}>
          <a className="nav-brand" href="#inicio" aria-label={copy.navBrandAria}>CS</a>
          <div className="nav-actions">
            <div className="nav-links">
              <a href="#sobre-mi">{copy.nav.about}</a>
              <a href="#proyectos">{copy.nav.projects}</a>
              <a href="#contacto">{copy.nav.contact}</a>
            </div>
            <div className="language-switcher" role="group" aria-label={copy.languageGroup}>
              <span className={`language-code${language === "es" ? " is-active" : ""}`}>ES</span>
              <button
                className={`language-switch${language === "en" ? " is-english" : ""}`}
                type="button"
                role="switch"
                aria-checked={language === "en"}
                aria-label={copy.switchLanguage}
                title={copy.switchLanguage}
                onClick={() => setLanguage((current) => (current === "es" ? "en" : "es"))}
              >
                <span className="language-switch__thumb" />
              </button>
              <span className={`language-code${language === "en" ? " is-active" : ""}`}>EN</span>
            </div>
          </div>
        </nav>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-glow hero-glow--blue" />
          <div className="hero-glow hero-glow--violet" />
          <div className="hero-content" data-reveal>
            <p className="eyebrow">{copy.heroEyebrow}</p>
            <h1>
              {copy.heroLead}<span>{copy.heroAccent}</span>{copy.heroTail}
            </h1>
            <p className="hero-intro">{copy.heroIntro}</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#proyectos">{copy.exploreProjects}</a>
              <a className="button button--secondary" href="mailto:cssosa678@gmail.com">{copy.letsTalk} <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="system-window" data-reveal aria-label={copy.systemAria}>
            <div className="system-window__top">
              <span>{copy.systemId}</span>
              <span>{copy.systemActive}</span>
            </div>
            <div className="system-stage">
              <span className="system-ring system-ring--outer" />
              <span className="system-ring system-ring--inner" />
              <div className="system-core"><strong>CS</strong><small>{copy.mechatronics}</small></div>
              <span className="system-label system-label--mechanics">{copy.systemLabels.mechanics}</span>
              <span className="system-label system-label--electronics">{copy.systemLabels.electronics}</span>
              <span className="system-label system-label--manufacturing">{copy.systemLabels.manufacturing}</span>
              <span className="system-label system-label--code">{copy.systemLabels.code}</span>
            </div>
          </div>
        </section>

        <section className="section section--white" id="sobre-mi">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">{copy.aboutEyebrow}</p>
            <h2>{copy.aboutTitle[0]}<br />{copy.aboutTitle[1]}</h2>
          </div>

          <div className="about-grid">
            <article className="about-card about-card--statement" data-reveal>
              <p>{copy.aboutStatement}</p>
              <span>{copy.aboutLocation}</span>
            </article>

            <article className="about-card about-card--principles" data-reveal>
              <p className="card-label">{copy.workStyle}</p>
              <ol>
                {copy.principles.map((principle, index) => (
                  <li key={principle}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{principle}</strong>
                  </li>
                ))}
              </ol>
            </article>
          </div>

          <div className="areas-grid" aria-label={copy.areasAria}>
            {copy.areas.map((area) => (
              <article className="area-card" key={area.number} data-reveal>
                <span>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="proyectos">
          <div className="section-heading section-heading--center" data-reveal>
            <p className="eyebrow">{copy.projectsEyebrow}</p>
            <h2>{copy.projectsTitle[0]}<br />{copy.projectsTitle[1]}</h2>
            <p className="section-intro">{copy.projectsIntro}</p>
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={translateProject(project, language)}
                index={index}
                copy={copy}
              />
            ))}
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-card" data-reveal>
            <p className="eyebrow">{copy.contactEyebrow}</p>
            <h2>{copy.contactTitle}</h2>
            <p>{copy.contactIntro}</p>
            <div className="contact-primary">
              <a href="mailto:cssosa678@gmail.com">cssosa678@gmail.com <span aria-hidden="true">↗</span></a>
            </div>
            <div className="contact-links">
              <a href="mailto:sos22156@uvg.edu.gt"><span>{copy.universityEmail}</span><strong>sos22156@uvg.edu.gt</strong></a>
              <a href="tel:+50238099691"><span>{copy.phone}</span><strong>+502 3809 9691</strong></a>
              <a href="https://github.com/notssosa" target="_blank" rel="noreferrer"><span>GitHub</span><strong>@notssosa ↗</strong></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Carlos Sosa</span>
        <a href="#inicio">{copy.backToTop} ↑</a>
      </footer>
    </>
  );
}
