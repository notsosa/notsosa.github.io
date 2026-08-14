import type { Language, Project, ProjectImage, ProjectMetric, ProjectVideo } from "./projects";

type ProjectTranslation = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  images: Array<Pick<ProjectImage, "alt" | "caption">>;
  video?: Pick<ProjectVideo, "label" | "caption">;
  metrics: ProjectMetric[];
};

const englishProjects: Record<string, ProjectTranslation> = {
  "molde-cad-cam": {
    title: "CAD/CAM mold",
    category: "Computer-aided manufacturing",
    description:
      "I designed both the CAD model and CAM strategy in Autodesk Inventor 2025 to machine a mold on a Haas VF-5. The challenge was to use the available tooling and keep machining time under 30 minutes. Finally, a resin casting was produced to validate the geometry and obtain the molded part.",
    technologies: ["Autodesk Inventor 2025", "CAD/CAM", "CNC", "Haas VF-5"],
    images: [
      { alt: "Finished aluminum mold after CNC machining", caption: "Final machining" },
      {
        alt: "CAM strategy and toolpath simulation in Autodesk Inventor 2025",
        caption: "CAM simulation",
      },
      { alt: "Blue mold and transparent part produced through resin casting", caption: "Resin result" },
    ],
    metrics: [
      { value: "< 30 min", label: "Target time" },
      { value: "Haas VF-5", label: "Machining center" },
      { value: "Inventor 2025", label: "CAD + CAM" },
    ],
  },
  "bomba-centrifuga": {
    title: "Centrifugal pump",
    category: "CAD design and turbomachinery",
    description:
      "For this academic project, I performed preliminary hydraulic sizing and converted it into a complete CAD design. Based on flow rate, total head, and operating speed, I modeled the impeller, shaft, housing, and full centrifugal pump assembly in Autodesk Inventor 2025.",
    technologies: ["Autodesk Inventor 2025", "CAD", "Turbomachinery", "Hydraulic design"],
    images: [
      { alt: "CAD assembly of the centrifugal pump viewed from the inlet", caption: "Front assembly" },
      { alt: "Isometric view of the centrifugal pump assembly and housing", caption: "Isometric view" },
      { alt: "CAD model of the impeller with curved blades", caption: "Impeller and blades" },
      { alt: "CAD model of the centrifugal pump drive shaft", caption: "Drive shaft" },
    ],
    metrics: [
      { value: "0.85 L/s", label: "Design flow" },
      { value: "35 m", label: "Total head" },
      { value: "3450 rpm", label: "Speed" },
    ],
  },
  "reloj-assembly": {
    title: "Alarm clock",
    category: "Embedded systems and digital electronics",
    description:
      "I programmed an alarm clock from scratch in AVR Assembly on an Arduino Nano, working directly with the ATmega328P. I implemented timekeeping with Timer0 and interrupts, button input, and multiplexing for four seven-segment displays; the breadboard prototype integrates indicators and a buzzer.",
    technologies: ["AVR Assembly", "Arduino Nano", "ATmega328P", "Digital electronics"],
    images: [
      {
        alt: "Alarm clock prototype with Arduino Nano, buttons, and four seven-segment displays",
        caption: "Functional prototype",
      },
    ],
    metrics: [
      { value: "ATmega328P", label: "Microcontroller" },
      { value: "AVR Assembly", label: "Firmware" },
      { value: "4 digits", label: "Multiplexed display" },
    ],
  },
  "ecualizador-analogico": {
    title: "Analog equalizer",
    category: "Analog circuits and signal processing",
    description:
      "I designed and built a three-band analog equalizer for my Analog Circuits course. The system separates the signal through low-pass, band-pass for mid frequencies, and high-pass filters, followed by an amplification stage that conditions the output and adjusts each band's contribution.",
    technologies: ["Analog filters", "Amplification", "Signal processing", "Prototyping"],
    images: [],
    video: {
      label: "Video demonstration of the analog equalizer in operation",
      caption: "Equalizer test",
    },
    metrics: [
      { value: "3 bands", label: "Equalization" },
      { value: "3 filters", label: "Processing" },
      { value: "1 stage", label: "Amplification" },
    ],
  },
  "elevador-motocicletas": {
    title: "Motorcycle lift",
    category: "Mechanical design and load analysis",
    description:
      "I calculated and designed a scale conceptual prototype of a manual mechanical lift for motorcycle maintenance. The proposal uses a scissor mechanism to raise both wheels simultaneously, reach multiple working heights, and incorporate a restraint system that keeps the motorcycle stable during service.",
    technologies: ["CAD", "Mechanical design", "Load analysis", "Scissor mechanism"],
    images: [{ alt: "CAD design of a manual scissor lift for motorcycles", caption: "Concept design" }],
    metrics: [
      { value: "1,100 lb", label: "Load capacity" },
      { value: "50 cm", label: "Maximum height" },
      { value: "100 × 60 cm", label: "Maximum footprint" },
    ],
  },
  "llenadora-granos": {
    title: "Semi-automatic grain filler",
    category: "Mechanism design and experimental validation",
    description:
      "I designed the mechanism of a semi-automatic grain filling machine in Onshape and compared its simulation with a physical prototype. The entire system had to run from a single motor, so I coordinated the mechanical transmissions, added bearings to reduce friction, and included adjustments that compensated for real-world tolerances without reprinting parts. The discrepancy between the theoretical and experimental models was only 1.27%.",
    technologies: ["Onshape", "Mechanism design", "Motion simulation", "Prototyping"],
    images: [
      { alt: "Complete CAD assembly of the semi-automatic grain filling machine", caption: "Complete assembly" },
      {
        alt: "CAD detail of the bearings and adjustable elements in the mechanism",
        caption: "Details and adjustments",
      },
      {
        alt: "CAD view without panels showing the transmission driven by a single motor",
        caption: "Exposed mechanism",
      },
    ],
    metrics: [
      { value: "1.27%", label: "Discrepancy" },
      { value: "1 motor", label: "Drive" },
      { value: "Self-adjusting", label: "Tolerances" },
    ],
  },
  "pcb-breakout-qa": {
    title: "PCB test system",
    category: "Professional internship · Aerobots",
    description:
      "During my professional internship at Aerobots, I designed a quality-assurance system for a PCB used in the final product. I first developed the breakout board in Altium Designer to organize and expose the required test connections; then I designed an Onshape fixture with a mechanism to insert and remove the board, space for an 18650 battery, and a solar-panel holder. The integrated system enabled more organized and repeatable verification without disclosing details of the product circuit.",
    technologies: ["Altium Designer", "Onshape", "Test fixtures", "Electronics QA"],
    images: [
      {
        alt: "CAD design of the PCB test fixture with an insertion mechanism and battery and solar-panel mounts",
        caption: "Fixture designed in Onshape",
      },
      {
        alt: "Assembled breakout PCB with terminals, connectors, and quality-assurance test points",
        caption: "Breakout PCB",
      },
    ],
    metrics: [
      { value: "PCB + fixture", label: "Integration" },
      { value: "18650", label: "Battery bay" },
      { value: "Onshape", label: "Mechanical design" },
    ],
  },
  "controlador-esp-modular": {
    title: "Modular ESP platform",
    category: "PCB design and embedded systems",
    description:
      "I designed an ESP-based board in KiCad using an Arduino R3 topology, intended to connect prebuilt modules without point-to-point wiring. The board accepts up to 24 V and 4 A, integrates USB-C, and individually protects user-accessible pins to reduce the risk of damage. Its modular architecture is intended for both engineering students and multi-module industrial integrations.",
    technologies: ["KiCad", "ESP", "Arduino R3 topology", "USB-C"],
    images: [
      {
        alt: "Three-dimensional render of the modular ESP board with connectors and a USB-C port",
        caption: "3D render",
      },
      {
        alt: "Copper routing and component placement view of the PCB designed in KiCad",
        caption: "PCB layout",
      },
    ],
    metrics: [
      { value: "24 V · 4 A", label: "Maximum input" },
      { value: "USB-C", label: "Connectivity" },
      { value: "Protected I/O", label: "Safety" },
    ],
  },
  "robot-sumo": {
    title: "University sumo robot",
    category: "Competition robotics and embedded systems",
    description:
      "I built a sumo robot for a university competition and programmed its firmware in C on an ESP32. The robot communicated over Bluetooth with an Xbox controller for driving during the match. I also designed an integration PCB in Altium Designer that combined the power electronics and ESP32, centralizing the system connections.",
    technologies: ["C", "ESP32", "Altium Designer", "Bluetooth"],
    images: [
      {
        alt: "Sumo robot prototype with chassis, motors, power electronics, and ESP32",
        caption: "Robot prototype",
      },
    ],
    video: {
      label: "Video of the sumo robot competing in a university event",
      caption: "Competition run",
    },
    metrics: [
      { value: "C", label: "Firmware" },
      { value: "Bluetooth", label: "Wireless link" },
      { value: "Xbox", label: "Gamepad" },
    ],
  },
};

export function translateProject(project: Project, language: Language): Project {
  if (language === "es") return project;

  const translation = englishProjects[project.id];
  if (!translation) return project;

  return {
    ...project,
    title: translation.title,
    category: translation.category,
    description: translation.description,
    technologies: translation.technologies,
    images: project.images.map((image, index) => ({
      ...image,
      alt: translation.images[index]?.alt ?? image.alt,
      caption: translation.images[index]?.caption ?? image.caption,
    })),
    video:
      project.video && translation.video
        ? { ...project.video, ...translation.video }
        : project.video,
    metrics: translation.metrics,
  };
}
