import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("la página incluye identidad, secciones y contacto", async () => {
  const [html, app] = await Promise.all([
    readFile(new URL("index.html", root), "utf8"),
    readFile(new URL("src/App.tsx", root), "utf8"),
  ]);

  assert.match(html, /Carlos Sosa — Ingeniero Mecatrónico/);
  assert.match(html, /lang="es"/);
  assert.match(app, /id="sobre-mi"/);
  assert.match(app, /id="proyectos"/);
  assert.match(app, /id="contacto"/);
  assert.match(app, /mailto:cssosa678@gmail\.com/);
  assert.match(app, /tel:\+50238099691/);
  assert.match(app, /github\.com\/notsosa/);
});

test("los proyectos usan una fuente de datos editable", async () => {
  const projects = await readFile(new URL("src/data/projects.ts", root), "utf8");
  assert.match(projects, /export type Project/);
  assert.match(projects, /images: ProjectImage\[\]/);
  assert.match(projects, /video: ProjectVideo \| null/);
  assert.match(projects, /molde-cad-cam/);
  assert.match(projects, /Haas VF-5/);
  assert.match(projects, /Inventor 2025/);
  assert.match(projects, /bomba-centrifuga/);
  assert.match(projects, /0\.85 L\/s/);
  assert.match(projects, /35 m/);
  assert.match(projects, /3450 rpm/);
  assert.match(projects, /reloj-assembly/);
  assert.match(projects, /AVR Assembly/);
  assert.match(projects, /ATmega328P/);
  assert.match(projects, /notsosa\/repositorio\/blob\/main\/Proyecto%20Reloj/);
  assert.match(projects, /ecualizador-analogico/);
  assert.match(projects, /3 bandas/);
  assert.match(projects, /demostracion\.mp4/);
  assert.match(projects, /elevador-motocicletas/);
  assert.match(projects, /1,100 lb/);
  assert.match(projects, /100 × 60 cm/);
  assert.match(projects, /llenadora-granos/);
  assert.match(projects, /1\.27 %/);
  assert.match(projects, /Autoajustable/);
  assert.match(projects, /pcb-breakout-qa/);
  assert.match(projects, /Sistema de pruebas para PCB/);
  assert.match(projects, /Prácticas profesionales · Aerobots/);
  assert.match(projects, /Altium Designer/);
  assert.match(projects, /QA electrónico/);
  assert.match(projects, /18650/);
  assert.match(projects, /fixture-cad\.png/);
  assert.match(projects, /controlador-esp-modular/);
  assert.match(projects, /KiCad/);
  assert.match(projects, /24 V · 4 A/);
  assert.match(projects, /E\/S protegidas/);
  assert.match(projects, /robot-sumo/);
  assert.match(projects, /Robot sumo universitario/);
  assert.match(projects, /mando de Xbox/);
  assert.match(projects, /competencia\.mp4/);
  assert.match(projects, /repository: string \| null/);
  assert.match(projects, /demo: string \| null/);
  assert.match(projects, /export const projects/);
});

test("la interfaz permite alternar todo el contenido entre español e inglés", async () => {
  const [app, content, translations, styles] = await Promise.all([
    readFile(new URL("src/App.tsx", root), "utf8"),
    readFile(new URL("src/data/content.ts", root), "utf8"),
    readFile(new URL("src/data/projectTranslations.ts", root), "utf8"),
    readFile(new URL("src/styles.css", root), "utf8"),
  ]);

  assert.match(app, /role="switch"/);
  assert.match(app, /portfolio-language/);
  assert.match(app, /translateProject\(project, language\)/);
  assert.match(app, /system-label--manufacturing/);
  assert.doesNotMatch(app, /system-label--control/);
  assert.match(content, /Manufactura/);
  assert.match(content, /Manufacturing/);
  assert.match(content, /Switch to Spanish/);
  assert.match(translations, /Centrifugal pump/);
  assert.match(translations, /University sumo robot/);
  assert.match(styles, /language-switch__thumb/);
});

test("el sitio compilado conserva su contenido principal", async () => {
  const output = await readFile(new URL("dist/index.html", root), "utf8");
  assert.match(output, /<div id="root"><\/div>/);
  assert.match(output, /Carlos Sosa — Ingeniero Mecatrónico/);
  assert.match(output, /\/assets\/index-[^\"]+\.js/);
  assert.match(output, /\/assets\/index-[^\"]+\.css/);
});
