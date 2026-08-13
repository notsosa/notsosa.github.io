export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string | null;
  repository: string | null;
  demo: string | null;
  accent: "blue" | "violet" | "orange";
};

// Para agregar un proyecto, copia una ficha y reemplaza su contenido.
// Guarda las imágenes en public/projects y usa una ruta como:
// image: "/projects/mi-proyecto.jpg"
export const projects: Project[] = [
  {
    id: "automatizacion",
    title: "Control y automatización",
    category: "Próximo caso de estudio",
    description:
      "Este espacio está listo para documentar un sistema de control: el problema, las decisiones de diseño, el prototipo y los resultados.",
    technologies: ["Sensores", "Control", "Programación"],
    image: null,
    repository: null,
    demo: null,
    accent: "blue",
  },
  {
    id: "sistema-embebido",
    title: "Sistema embebido",
    category: "Próximo caso de estudio",
    description:
      "Una ficha preparada para presentar la integración entre electrónica, firmware y pruebas de un proyecto universitario.",
    technologies: ["Electrónica", "Firmware", "Prototipado"],
    image: null,
    repository: null,
    demo: null,
    accent: "violet",
  },
  {
    id: "diseno-mecatronico",
    title: "Diseño mecatrónico",
    category: "Próximo caso de estudio",
    description:
      "Aquí podrás explicar cómo una idea pasó de los cálculos y el modelado a un mecanismo integrado y funcional.",
    technologies: ["CAD", "Mecánica", "Integración"],
    image: null,
    repository: null,
    demo: null,
    accent: "orange",
  },
];
