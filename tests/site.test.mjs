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
  assert.match(app, /github\.com\/notssosa/);
});

test("los proyectos usan una fuente de datos editable", async () => {
  const projects = await readFile(new URL("src/data/projects.ts", root), "utf8");
  assert.match(projects, /export type Project/);
  assert.match(projects, /image: string \| null/);
  assert.match(projects, /repository: string \| null/);
  assert.match(projects, /demo: string \| null/);
  assert.match(projects, /export const projects/);
});

test("el sitio compilado conserva su contenido principal", async () => {
  const output = await readFile(new URL("dist/index.html", root), "utf8");
  assert.match(output, /<div id="root"><\/div>/);
  assert.match(output, /Carlos Sosa — Ingeniero Mecatrónico/);
  assert.match(output, /\/assets\/index-[^\"]+\.js/);
  assert.match(output, /\/assets\/index-[^\"]+\.css/);
});
