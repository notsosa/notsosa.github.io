import { useEffect } from "react";
import { projects, type Project } from "./data/projects";

const areas = [
  { number: "01", title: "Mecánica", text: "Diseño y comprensión de sistemas físicos." },
  { number: "02", title: "Electrónica", text: "Sensores, actuadores y circuitos que conectan el sistema." },
  { number: "03", title: "Control", text: "Decisiones, retroalimentación y comportamiento medible." },
  { number: "04", title: "Código", text: "Lógica que convierte componentes en soluciones." },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card project-card--${project.accent}`} data-reveal>
      <div className="project-copy">
        <div className="project-kicker">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Tecnologías">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.repository ? (
            <a href={project.repository} target="_blank" rel="noreferrer">
              Ver repositorio <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span>Repositorio por añadir</span>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Ver demostración <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      <div className="project-media">
        {project.image ? (
          <img src={project.image} alt={`Vista del proyecto ${project.title}`} />
        ) : (
          <div className="project-placeholder" aria-label="Espacio reservado para la imagen del proyecto">
            <span className="placeholder-orbit placeholder-orbit--one" />
            <span className="placeholder-orbit placeholder-orbit--two" />
            <span className="placeholder-core">{String(index + 1).padStart(2, "0")}</span>
            <small>Tu proyecto aquí</small>
          </div>
        )}
      </div>
    </article>
  );
}

export default function App() {
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
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Navegación principal">
          <a className="nav-brand" href="#inicio" aria-label="Carlos Sosa, ir al inicio">CS</a>
          <div className="nav-links">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-glow hero-glow--blue" />
          <div className="hero-glow hero-glow--violet" />
          <div className="hero-content" data-reveal>
            <p className="eyebrow">Carlos Sosa · Ingeniería Mecatrónica</p>
            <h1>
              Ingeniería que <span>se mueve, piensa</span> y conecta.
            </h1>
            <p className="hero-intro">
              Exploro cómo la mecánica, la electrónica, el control y el código pueden convertirse en sistemas claros, útiles y bien construidos.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#proyectos">Explorar proyectos</a>
              <a className="button button--secondary" href="mailto:cssosa678@gmail.com">Hablemos <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="system-window" data-reveal aria-label="Diagrama conceptual de las áreas de la mecatrónica">
            <div className="system-window__top">
              <span>Sistema / 001</span>
              <span>Integración activa</span>
            </div>
            <div className="system-stage">
              <span className="system-ring system-ring--outer" />
              <span className="system-ring system-ring--inner" />
              <div className="system-core"><strong>CS</strong><small>Mecatrónica</small></div>
              <span className="system-label system-label--mechanics">Mecánica</span>
              <span className="system-label system-label--electronics">Electrónica</span>
              <span className="system-label system-label--control">Control</span>
              <span className="system-label system-label--code">Código</span>
            </div>
          </div>
        </section>

        <section className="section section--white" id="sobre-mi">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Sobre mí</p>
            <h2>Aprender construyendo.<br />Entender integrando.</h2>
          </div>

          <div className="about-grid">
            <article className="about-card about-card--statement" data-reveal>
              <p>
                Soy Carlos, estudiante de Ingeniería Mecatrónica. Este portafolio reúne el proceso detrás de mis proyectos universitarios: las preguntas, las pruebas y las decisiones que convierten una idea en algo real.
              </p>
              <span>Guatemala · En formación continua</span>
            </article>

            <article className="about-card about-card--principles" data-reveal>
              <p className="card-label">Mi manera de trabajar</p>
              <ol>
                <li><span>01</span><strong>Observar</strong></li>
                <li><span>02</span><strong>Prototipar</strong></li>
                <li><span>03</span><strong>Medir</strong></li>
                <li><span>04</span><strong>Mejorar</strong></li>
              </ol>
            </article>
          </div>

          <div className="areas-grid" aria-label="Áreas de formación">
            {areas.map((area) => (
              <article className="area-card" key={area.title} data-reveal>
                <span>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="proyectos">
          <div className="section-heading section-heading--center" data-reveal>
            <p className="eyebrow">Proyectos universitarios</p>
            <h2>Del concepto<br />al sistema.</h2>
            <p className="section-intro">La estructura está lista. Aquí irán las imágenes, el proceso y los resultados de cada proyecto.</p>
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-card" data-reveal>
            <p className="eyebrow">Contacto</p>
            <h2>¿Hacemos que una idea funcione?</h2>
            <p>Estoy abierto a conversaciones sobre proyectos, aprendizaje y oportunidades profesionales.</p>
            <div className="contact-primary">
              <a href="mailto:cssosa678@gmail.com">cssosa678@gmail.com <span aria-hidden="true">↗</span></a>
            </div>
            <div className="contact-links">
              <a href="mailto:sos22156@uvg.edu.gt"><span>Correo universitario</span><strong>sos22156@uvg.edu.gt</strong></a>
              <a href="tel:+50238099691"><span>Teléfono</span><strong>+502 3809 9691</strong></a>
              <a href="https://github.com/notssosa" target="_blank" rel="noreferrer"><span>GitHub</span><strong>@notssosa ↗</strong></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Carlos Sosa</span>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </>
  );
}
