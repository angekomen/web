export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  capabilities: string[];
  legalRefs: number[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "obra-civil-e-infraestructura",
    shortTitle: "Obra Civil",
    title: "Obra Civil e Infraestructura",
    tagline:
      "Construcción y mantenimiento de obras públicas y privadas a gran escala.",
    description:
      "Diseñamos, ejecutamos y mantenemos vías públicas, autopistas, carreteras y obras de infraestructura de cualquier tipo. Aportamos capacidad operativa, equipo técnico y experiencia para proyectos donde la calidad estructural y los tiempos no son negociables.",
    capabilities: [
      "Construcción y mantenimiento de autopistas, autovías y carreteras",
      "Puentes, torres y estructuras de hormigón armado y metálicas",
      "Conservación y explotación de vías públicas y privadas",
      "Operaciones industriales, comerciales y financieras vinculadas a obra civil",
    ],
    legalRefs: [1, 11],
    icon: "road",
  },
  {
    slug: "edificacion-y-desarrollo-inmobiliario",
    shortTitle: "Edificación",
    title: "Edificación y Desarrollo Inmobiliario",
    tagline:
      "Promoción, construcción y restauración de edificios y urbanizaciones.",
    description:
      "Desarrollamos urbanizaciones y edificios destinados a uso industrial, comercial o de vivienda, por cuenta propia o de terceros. Acompañamos el proyecto desde la promoción hasta la conservación posterior de la obra.",
    capabilities: [
      "Promoción y construcción de vivienda, oficinas y plazas comerciales",
      "Restauración de edificios y urbanizaciones existentes",
      "Conservación y mantenimiento de obras, instalaciones y servicios urbanos",
      "Naves industriales y desarrollos mixtos",
    ],
    legalRefs: [2],
    icon: "building",
  },
  {
    slug: "infraestructura-energetica-y-electrica",
    shortTitle: "Energía y Electricidad",
    title: "Infraestructura Energética y Eléctrica",
    tagline:
      "Redes de transmisión, subestaciones y electrificación de proyectos.",
    description:
      "Ejecutamos obras de generación, transmisión y distribución de energía eléctrica para industria, infraestructura pública y desarrollos privados. Incluye control y automatización de redes, alumbrado público y soluciones para entornos especiales.",
    capabilities: [
      "Centrales, líneas de transmisión y distribución eléctrica",
      "Subestaciones, centros de transformación e interconexión",
      "Electrificación de ferrocarriles, metros y tranvías",
      "Alumbrado público, iluminación industrial y entornos explosivos",
      "Control, telemando y automatización de redes eléctricas",
    ],
    legalRefs: [3, 5, 10],
    icon: "bolt",
  },
  {
    slug: "hidraulica-gas-y-climatizacion",
    shortTitle: "Hidráulica y Gas",
    title: "Hidráulica, Gas y Climatización",
    tagline:
      "Obras y mantenimiento para agua, gases combustibles y sistemas HVAC.",
    description:
      "Construimos y mantenemos infraestructura para el aprovechamiento, transporte y distribución de agua y gases, así como sistemas de climatización industrial y comercial. Incluye plantas de tratamiento, canalizaciones y soluciones ambientales.",
    capabilities: [
      "Obras hidráulicas: almacenamiento, canalización y distribución de agua",
      "Plantas de tratamiento de aguas y gases",
      "Distribución de gases combustibles, líquidos y sólidos",
      "Ventilación, calefacción, climatización y refrigeración industrial",
    ],
    legalRefs: [6, 7, 8],
    icon: "droplet",
  },
  {
    slug: "telecomunicaciones-y-electronica",
    shortTitle: "Telecom",
    title: "Telecomunicaciones y Electrónica",
    tagline:
      "Sistemas de comunicación, señalización y redes electrónicas industriales.",
    description:
      "Diseñamos e instalamos sistemas y redes de comunicación, señalización y control electrónico para infraestructura crítica, transporte y entornos industriales. Cubrimos desde telefonía y telegrafía hasta antenas, repetidores y radioenlaces.",
    capabilities: [
      "Redes de comunicaciones telefónicas y telegráficas",
      "Sistemas de señalización, S.O.S., protección civil y tráfico",
      "Antenas, repetidores, radioenlaces y ayuda a la navegación",
      "Transmisión y utilización de voz, datos, medidas y señales",
    ],
    legalRefs: [4],
    icon: "radio",
  },
  {
    slug: "servicios-urbanos-y-medio-ambiente",
    shortTitle: "Urbanos y Medio Ambiente",
    title: "Servicios Urbanos y Medio Ambiente",
    tagline:
      "Reforestación, gestión de residuos, mobiliario urbano y proyectos medioambientales.",
    description:
      "Prestamos servicios urbanos integrales y proyectos medioambientales, desde reforestación y jardinería hasta gestión de residuos y mobiliario urbano publicitario. Operamos en régimen de concesión o contrato directo.",
    capabilities: [
      "Repoblaciones forestales, jardinería y mantenimiento de parques",
      "Tratamiento, reciclaje y valoración de residuos urbanos e industriales",
      "Diseño, fabricación e instalación de mobiliario urbano",
      "Proyectos medioambientales y gestión de plantas de transferencia",
    ],
    legalRefs: [13, 14, 15],
    icon: "leaf",
  },
  {
    slug: "consultoria-y-direccion-de-proyectos",
    shortTitle: "Consultoría",
    title: "Consultoría y Dirección de Proyectos",
    tagline:
      "Estudios, informes, supervisión técnica y gestión de concesiones.",
    description:
      "Acompañamos proyectos como dirección técnica externa, supervisión de obra, elaboración de estudios e informes, y gestión integral de concesiones públicas o privadas. Aportamos visión técnica para que la inversión llegue a buen puerto.",
    capabilities: [
      "Elaboración de estudios, informes y proyectos técnicos",
      "Supervisión, dirección y asesoramiento en ejecución de obras",
      "Gestión y explotación de concesiones administrativas",
      "Acondicionamiento y rehabilitación de activos concesionados",
    ],
    legalRefs: [22, 24],
    icon: "compass",
  },
];

export const complementaryServices = {
  title: "Servicios Complementarios",
  tagline: "Capacidades adicionales que reforzamos en proyectos integrales.",
  items: [
    {
      title: "Limpieza y mantenimiento de inmuebles",
      description:
        "Limpieza de edificios, oficinas y locales comerciales; higienización, desinfección y conservación.",
    },
    {
      title: "Montaje e instalación de mobiliario",
      description:
        "Montaje de mesas, estanterías y material de oficina para entrega llave en mano.",
    },
    {
      title: "Transporte de pasajeros y mercancías",
      description:
        "Transporte terrestre y gestión de áreas de servicio, estaciones de autobuses e intermodales.",
    },
    {
      title: "Servicios auxiliares en eventos y recintos",
      description:
        "Conserjería, recepción, acomodación y atención a usuarios en recintos, ferias y eventos.",
    },
    {
      title: "Gestión de centros educativos",
      description:
        "Gestión integral o explotación de centros públicos o privados de enseñanza.",
    },
    {
      title: "Lectura y mantenimiento de contadores",
      description:
        "Lectura, inspección y mantenimiento de contadores de agua, gas y electricidad.",
    },
  ],
};

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
