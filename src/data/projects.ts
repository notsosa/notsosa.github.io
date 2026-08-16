export type Language = "es" | "en";

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  position?: string;
  fit?: "cover" | "contain";
  background?: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectVideo = {
  src: string;
  label: string;
  caption: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  images: ProjectImage[];
  video: ProjectVideo | null;
  metrics: ProjectMetric[];
  repository: string | null;
  demo: string | null;
  accent: "blue" | "violet" | "orange";
};

// Para agregar un proyecto, copia una ficha y reemplaza su contenido.
// Guarda las imágenes en public/projects/<nombre-del-proyecto> y usa rutas como:
// images: [{ src: "/projects/mi-proyecto/portada.jpg", alt: "...", caption: "..." }]
export const projects: Project[] = [
  {
    id: "molde-cad-cam",
    title: "Molde CAD/CAM",
    category: "Manufactura asistida por computadora",
    description:
      "Diseñé en Autodesk Inventor 2025 tanto el modelo CAD como la estrategia CAM para mecanizar un molde en una Haas VF-5. El reto fue aprovechar las herramientas disponibles y mantener el tiempo de maquinado por debajo de 30 minutos. Finalmente, se realizó un vaciado en resina para validar la geometría y obtener la pieza moldeada.",
    technologies: ["Autodesk Inventor 2025", "CAD/CAM", "CNC", "Haas VF-5"],
    images: [
      {
        src: "/projects/molde-cad-cam/mecanizado-final.jpeg",
        alt: "Molde de aluminio terminado después del maquinado CNC",
        caption: "Maquinado final",
        position: "center 68%",
      },
      {
        src: "/projects/molde-cad-cam/simulacion-cam.png",
        alt: "Simulación de la estrategia CAM y las trayectorias de herramienta en Autodesk Inventor 2025",
        caption: "Simulación CAM",
      },
      {
        src: "/projects/molde-cad-cam/pieza-en-resina.jpeg",
        alt: "Molde azul y pieza transparente obtenida mediante vaciado de resina",
        caption: "Resultado en resina",
        position: "center 58%",
      },
    ],
    video: null,
    metrics: [
      { value: "< 30 min", label: "Tiempo objetivo" },
      { value: "Haas VF-5", label: "Centro de maquinado" },
      { value: "Inventor 2025", label: "CAD + CAM" },
    ],
    repository: null,
    demo: null,
    accent: "blue",
  },
  {
    id: "bomba-centrifuga",
    title: "Bomba centrífuga",
    category: "Diseño CAD y turbomaquinaria",
    description:
      "En este proyecto académico calculé el dimensionamiento hidráulico preliminar y lo convertí en un diseño CAD completo. A partir del caudal, la carga total y la velocidad de operación, modelé en Autodesk Inventor 2025 el impulsor, el eje, la carcasa y el ensamble de una bomba centrífuga.",
    technologies: ["Autodesk Inventor 2025", "CAD", "Turbomaquinaria", "Diseño hidráulico"],
    images: [
      {
        src: "/projects/bomba-centrifuga/ensamble-frontal.jpeg",
        alt: "Ensamble CAD de la bomba centrífuga visto desde la entrada",
        caption: "Ensamble frontal",
      },
      {
        src: "/projects/bomba-centrifuga/ensamble-isometrico.jpeg",
        alt: "Vista isométrica del ensamble y la carcasa de la bomba centrífuga",
        caption: "Vista isométrica",
      },
      {
        src: "/projects/bomba-centrifuga/impulsor-alabes.jpeg",
        alt: "Modelo CAD del impulsor con sus álabes curvos",
        caption: "Impulsor y álabes",
      },
      {
        src: "/projects/bomba-centrifuga/eje-transmision.jpeg",
        alt: "Modelo CAD del eje de transmisión de la bomba centrífuga",
        caption: "Eje de transmisión",
      },
    ],
    video: null,
    metrics: [
      { value: "0.85 L/s", label: "Caudal de diseño" },
      { value: "35 m", label: "Carga total" },
      { value: "3450 rpm", label: "Velocidad" },
    ],
    repository: null,
    demo: null,
    accent: "violet",
  },
  {
    id: "reloj-assembly",
    title: "Reloj despertador",
    category: "Sistemas embebidos y electrónica digital",
    description:
      "Programé desde cero en AVR Assembly un reloj despertador sobre Arduino Nano, trabajando directamente con el ATmega328P. Implementé la base de tiempo con Timer0 e interrupciones, el manejo de botones y la multiplexación de cuatro displays de siete segmentos; el prototipo integra indicadores y buzzer en una construcción sobre protoboard.",
    technologies: ["AVR Assembly", "Arduino Nano", "ATmega328P", "Electrónica digital"],
    images: [
      {
        src: "/projects/reloj-assembly/prototipo-reloj.png",
        alt: "Prototipo de reloj despertador con Arduino Nano, botones y cuatro displays de siete segmentos",
        caption: "Prototipo funcional",
      },
    ],
    video: null,
    metrics: [
      { value: "ATmega328P", label: "Microcontrolador" },
      { value: "AVR Assembly", label: "Firmware" },
      { value: "4 dígitos", label: "Display multiplexado" },
    ],
    repository: "https://github.com/notsosa/repositorio/blob/main/Proyecto%20Reloj",
    demo: null,
    accent: "orange",
  },
  {
    id: "ecualizador-analogico",
    title: "Ecualizador analógico",
    category: "Circuitos analógicos y procesamiento de señales",
    description:
      "Diseñé y construí un ecualizador analógico de tres bandas para mi clase de Circuitos Analógicos. El sistema separa la señal mediante filtros pasa bajas, pasa banda para las frecuencias medias y pasa altas; después integra una etapa de amplificación para acondicionar la salida y ajustar el aporte de cada banda.",
    technologies: ["Filtros analógicos", "Amplificación", "Procesamiento de señales", "Prototipado"],
    images: [],
    video: {
      src: "/projects/ecualizador-analogico/demostracion.mp4",
      label: "Demostración en video del ecualizador analógico en funcionamiento",
      caption: "Prueba del ecualizador",
    },
    metrics: [
      { value: "3 bandas", label: "Ecualización" },
      { value: "3 filtros", label: "Procesamiento" },
      { value: "1 etapa", label: "Amplificación" },
    ],
    repository: null,
    demo: null,
    accent: "blue",
  },
  {
    id: "elevador-motocicletas",
    title: "Elevador para motocicletas",
    category: "Diseño mecánico y análisis de cargas",
    description:
      "Calculé y diseñé un prototipo conceptual a escala de un elevador mecánico manual para trabajos de mantenimiento. La propuesta utiliza un mecanismo tipo tijera para levantar ambas ruedas simultáneamente, alcanzar diferentes alturas e incorporar un sistema de sujeción que mantenga estable la motocicleta durante la intervención.",
    technologies: ["CAD", "Diseño mecánico", "Análisis de cargas", "Mecanismo de tijera"],
    images: [
      {
        src: "/projects/elevador-motocicletas/diseno-cad.png",
        alt: "Diseño CAD de un elevador manual tipo tijera para motocicletas",
        caption: "Diseño conceptual",
      },
    ],
    video: null,
    metrics: [
      { value: "1,100 lb", label: "Capacidad de carga" },
      { value: "50 cm", label: "Altura máxima" },
      { value: "100 × 60 cm", label: "Base máxima" },
    ],
    repository: null,
    demo: null,
    accent: "violet",
  },
  {
    id: "llenadora-granos",
    title: "Llenadora semiautomática de granos",
    category: "Diseño de mecanismos y validación experimental",
    description:
      "Diseñé en Onshape el mecanismo de una máquina llenadora semiautomática de granos y comparé su simulación con una maqueta física. Todo el sistema debía funcionar con un solo motor, por lo que coordiné las transmisiones mecánicas, incorporé rodamientos para disminuir la fricción y añadí ajustes que permitieran compensar tolerancias reales sin reimprimir las piezas. La discrepancia entre el modelo teórico y el experimental fue de solo 1.27 %.",
    technologies: ["Onshape", "Diseño de mecanismos", "Simulación de movimiento", "Prototipado"],
    images: [
      {
        src: "/projects/llenadora-granos/ensamble-completo.png",
        alt: "Ensamble CAD completo de la máquina llenadora semiautomática de granos",
        caption: "Ensamble completo",
      },
      {
        src: "/projects/llenadora-granos/detalle-mecanismo.png",
        alt: "Detalle CAD de los rodamientos y los elementos ajustables del mecanismo",
        caption: "Detalles y ajustes",
      },
      {
        src: "/projects/llenadora-granos/mecanismo-expuesto.png",
        alt: "Vista CAD de la máquina sin paneles para mostrar la transmisión accionada por un solo motor",
        caption: "Mecanismo expuesto",
      },
    ],
    video: null,
    metrics: [
      { value: "1.27 %", label: "Discrepancia" },
      { value: "1 motor", label: "Accionamiento" },
      { value: "Autoajustable", label: "Tolerancias" },
    ],
    repository: null,
    demo: null,
    accent: "orange",
  },
  {
    id: "pcb-breakout-qa",
    title: "Sistema de pruebas para PCB",
    category: "Prácticas profesionales · Aerobots",
    description:
      "Durante mis prácticas profesionales en Aerobots diseñé un sistema para el aseguramiento de calidad de una PCB destinada al producto final. Primero desarrollé en Altium Designer la tarjeta breakout para organizar y hacer accesibles las conexiones de prueba; después diseñé en Onshape una base con un mecanismo para insertar y retirar la placa, espacio para una batería 18650 y un soporte para panel solar. La integración permitió realizar verificaciones más ordenadas y repetibles sin exponer detalles del circuito del producto.",
    technologies: ["Altium Designer", "Onshape", "Fixtures de prueba", "QA electrónico"],
    images: [
      {
        src: "/projects/pcb-breakout-qa/fixture-cad.png",
        alt: "Diseño CAD del fixture para probar una PCB, con mecanismo de inserción y soportes para batería y panel solar",
        caption: "Fixture diseñado en Onshape",
        fit: "contain",
        background: "#333333",
      },
      {
        src: "/projects/pcb-breakout-qa/pcb-ensamblada.jpeg",
        alt: "PCB breakout ensamblada con terminales, conectores y puntos de prueba para aseguramiento de calidad",
        caption: "PCB breakout",
        fit: "contain",
        background: "#080d16",
      },
    ],
    video: null,
    metrics: [
      { value: "PCB + fixture", label: "Integración" },
      { value: "18650", label: "Alojamiento" },
      { value: "Onshape", label: "Diseño mecánico" },
    ],
    repository: null,
    demo: null,
    accent: "blue",
  },
  {
    id: "controlador-esp-modular",
    title: "Plataforma ESP modular",
    category: "Diseño de PCB y sistemas embebidos",
    description:
      "Diseñé en KiCad una tarjeta basada en ESP con topología de Arduino R3, orientada a conectar módulos prefabricados sin realizar cableado punto a punto. La placa admite una entrada máxima de 24 V y 4 A, integra USB-C y protege individualmente los pines expuestos al usuario para reducir el riesgo de daño. Su arquitectura modular está pensada tanto para estudiantes de ingeniería como para integraciones industriales con múltiples módulos.",
    technologies: ["KiCad", "ESP", "Topología Arduino R3", "USB-C"],
    images: [
      {
        src: "/projects/controlador-esp-modular/render-3d.jpeg",
        alt: "Render tridimensional de la plataforma ESP modular con conectores y puerto USB-C",
        caption: "Render 3D",
        fit: "contain",
        position: "center top",
        background: "#6d6d87",
      },
      {
        src: "/projects/controlador-esp-modular/layout-pcb.jpeg",
        alt: "Vista del trazado de cobre y la distribución de componentes de la PCB diseñada en KiCad",
        caption: "Layout de la PCB",
        fit: "contain",
        position: "center top",
        background: "#001022",
      },
    ],
    video: null,
    metrics: [
      { value: "24 V · 4 A", label: "Entrada máxima" },
      { value: "USB-C", label: "Conectividad" },
      { value: "E/S protegidas", label: "Seguridad" },
    ],
    repository: null,
    demo: null,
    accent: "violet",
  },
  {
    id: "robot-sumo",
    title: "Robot sumo universitario",
    category: "Robótica de competencia y sistemas embebidos",
    description:
      "Construí un robot sumo para una competencia universitaria y programé su firmware en C sobre un ESP32. El robot se comunicaba por Bluetooth con un mando de Xbox para dirigir el movimiento durante el combate. Además, diseñé en Altium Designer una PCB de integración que reunía la electrónica de potencia y el ESP32, centralizando las conexiones del sistema.",
    technologies: ["C", "ESP32", "Altium Designer", "Bluetooth"],
    images: [
      {
        src: "/projects/robot-sumo/prototipo.jpeg",
        alt: "Prototipo del robot sumo con chasis, motores, electrónica de potencia y ESP32",
        caption: "Prototipo del robot",
        fit: "contain",
      },
    ],
    video: {
      src: "/projects/robot-sumo/competencia.mp4",
      label: "Video del robot sumo participando en una competencia universitaria",
      caption: "Prueba en competencia",
    },
    metrics: [
      { value: "C", label: "Firmware" },
      { value: "Bluetooth", label: "Enlace inalámbrico" },
      { value: "Xbox", label: "Mando" },
    ],
    repository: null,
    demo: null,
    accent: "orange",
  },
];
