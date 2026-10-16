import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'bioestimuladores-en-vivo-2026',
    title: 'Masterclass En Vivo: Bioestimuladores de Colágeno y Vectores Tensores',
    subtitle: 'Hidroxiapatita de Calcio (Radiesse), PLLA (Sculptra) y PCL. Planimetría, diluciones y manejo inmediato de complicaciones.',
    modality: 'en-vivo',
    modalityBadge: 'En Vivo · Streaming Interactivo',
    category: 'Bioestimulación',
    level: 'Avanzado',
    duration: '6 horas en directo + Acceso a Grabación 90 días',
    price: 280,
    originalPrice: 380,
    nextDate: 'Sábado 28 de Noviembre, 2026 · 10:00 AM (GMT-4)',
    spotsAvailable: 7,
    isNew: true,
    isFeatured: true,
    rating: 4.98,
    reviewCount: 42,
    heroImage: '/images/carousel_01.png',
    description: 'Aprende en directo con la Dra. Katheryn Escorcia la ciencia y destreza clínica detrás de los bioestimuladores de última generación. Revisión exhaustiva de indicaciones según el tipo de piel (criterios clínicos de valoración), selección adecuada del paciente, planos anatómicos de seguridad y técnicas de vectorización para lograr un rejuvenecimiento genuinamente natural sin sobre-voluminizar.',
    objectives: [
      'Dominar las 7 señales diagnósticas clave antes de indicar un bioestimulador.',
      'Aprender los protocolos exactos de hiperdilución según zona: tercio medio, borde mandibular y cuello.',
      'Técnica de inyección con cánula 22G y 25G para minimizar riesgos vasculares.',
      'Algoritmo de actuación inmediata ante eventos adversos, nódulos y oclusiones.'
    ],
    targetAudience: [
      'Médicos Generales y Especialistas interesados en Medicina Estética.',
      'Dermatólogos, Cirujanos Plásticos y Médicos Estéticos titulados.',
      'Odontólogos especialistas en Armonización Orofacial.'
    ],
    includes: [
      'Acceso en tiempo real a la transmisión HD interactiva con Q&A en directo.',
      'Grabación íntegra protegida con DRM accesible por 90 días en la plataforma.',
      'Guía clínica en PDF con consentimientos informados y fichas técnicas de dilución.',
      'Certificado de asistencia emitido y firmado por la Dra. Katheryn Escorcia.'
    ],
    modules: [
      {
        id: 'mod-1',
        title: 'Módulo 1: Fisiología del Envejecimiento y Selección del Paciente',
        duration: '1h 30m',
        lessons: [
          {
            id: 'les-1-1',
            title: 'Las 7 señales diagnósticas: ¿Quién es la candidata ideal?',
            duration: '35m',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            isPreview: true,
            summary: 'Análisis de la calidad dérmica, laxitud, atrofia del colágeno y expectativas del paciente natural.'
          },
          {
            id: 'les-1-2',
            title: 'Diferencias biofísicas entre CaHA, PLLA y PCL',
            duration: '55m',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            summary: 'Mecanismo de acción neocolagénesis tipo I vs tipo III. Tiempo de latencia biológica.'
          }
        ]
      },
      {
        id: 'mod-2',
        title: 'Módulo 2: Técnicas de Marcación, Vectores y Diluciones',
        duration: '2h 15m',
        lessons: [
          {
            id: 'les-2-1',
            title: 'Mapeo facial y vectores antigravedad paso a paso',
            duration: '45m',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            summary: 'Técnica de abanico y retroinyección controlada en tejido celular subcutáneo superficial.'
          },
          {
            id: 'les-2-2',
            title: 'Protocolos de hiperdilución 1:1, 1:2 y 1:4 para cuello y escote',
            duration: '50m',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            summary: 'Demostración de mezclado homogéneo y uso de lidocaína al 2% con epinefrina.'
          },
          {
            id: 'les-2-3',
            title: 'Video demostrativo de procedimiento clínico completo',
            duration: '40m',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            summary: 'Abordaje de paciente real con técnica de bioestimulación mandibular.'
          }
        ]
      },
      {
        id: 'mod-3',
        title: 'Módulo 3: Complicaciones, Prevención y Rescate',
        duration: '2h 15m',
        lessons: [
          {
            id: 'les-3-1',
            title: 'Prevención de nódulos y granulomas tardíos',
            duration: '45m',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
            summary: 'Manejo con corticoides intralesionales, 5-FU y masaje post-tratamiento del paciente.'
          },
          {
            id: 'les-3-2',
            title: 'Sesión de Preguntas y Respuestas en Vivo (Grabación)',
            duration: '90m',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
            summary: 'Resolución de dudas clínicas enviadas por los alumnos asistentes.'
          }
        ]
      }
    ]
  },
  {
    id: 'hands-on-full-face-presencial',
    title: 'Workshop Presencial VIP: Armonización Facial Full Face & Rejuvenecimiento Cervical',
    subtitle: 'Entrenamiento 100% práctico presencial con pacientes reales. Grupos reducidos a máximo 6 profesionales.',
    modality: 'presencial',
    modalityBadge: 'Presencial Hands-On · Cupos Limitados',
    category: 'Práctica Clínica',
    level: 'Alta Especialización',
    duration: '2 Días Intensivos (16 horas clínicas presenciales)',
    price: 890,
    originalPrice: 1100,
    nextDate: '15 y 16 de Diciembre, 2026',
    location: 'Santo Domingo & Santiago (Rep. Dominicana) · Barranquilla (Colombia)',
    spotsAvailable: 4,
    isNew: true,
    isFeatured: true,
    rating: 5.0,
    reviewCount: 38,
    heroImage: '/images/dra_katheryn.jpg',
    description: 'El programa práctico más exclusivo y transformador de la Dra. Katheryn Escorcia. Diseñado para médicos que buscan perfeccionar su técnica de inyección con pacientes reales, eliminando el miedo y logrando resultados armoniosos, simétricos y naturales. Cada participante realiza los procedimientos guiado directamente por la Dra. Escorcia.',
    objectives: [
      'Inyectar en pacientes modelos reales provistos por la academia bajo tutoría personalizada.',
      'Aprender el abordaje integral Full Face: fosa temporal, pómulos, mandíbula, mentón y cuello.',
      'Manejo seguro de microcánulas 22G y 25G en diferentes planos tisulares.',
      'Optimización de la consulta de valoración para aumentar la tasa de aceptación de tratamientos.'
    ],
    targetAudience: [
      'Médicos cirujanos y especialistas con conocimientos previos en inyectables.',
      'Profesionales de la salud que deseen dominar casos complejos con seguridad clínica total.'
    ],
    includes: [
      'Todos los insumos médicos, viales de productos y pacientes modelos incluidos.',
      'Kit quirúrgico de bienvenida y material de estudio de lujo.',
      'Coffee breaks, almuerzo ejecutivo y cena de networking con la Dra. Katheryn.',
      'Certificación física de alta jerarquía con registro internacional.',
      'Acceso vitalicio a grupo privado de interconsulta por WhatsApp.'
    ],
    modules: [
      {
        id: 'mod-ho-1',
        title: 'Día 1: Evaluación Estética, Marcado Anatómico y Tercio Superior/Medio',
        duration: '8 horas',
        lessons: [
          {
            id: 'les-ho-1',
            title: 'Análisis fotográfico y proporciones áureas en vivo',
            duration: '2 horas',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
            summary: 'Sesión teórica presencial intensiva y diagnóstico facial en vivo.'
          },
          {
            id: 'les-ho-2',
            title: 'Práctica Hands-On en pacientes: Tercio medio y fosa temporal',
            duration: '6 horas',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
            summary: 'Inyección supervisada 1 a 1 de cánula profunda y supraperióstica.'
          }
        ]
      },
      {
        id: 'mod-ho-2',
        title: 'Día 2: Tercio Inferior, Ángulo Mandibular, Cuello y Entrega de Diplomas',
        duration: '8 horas',
        lessons: [
          {
            id: 'les-ho-3',
            title: 'Práctica Hands-On: Definición de reborde mandibular y mentón',
            duration: '5 horas',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4',
            summary: 'Vectorización con bioestimuladores combinados con ácido hialurónico reticulado.'
          },
          {
            id: 'les-ho-4',
            title: 'Protocolo fotográfico de salida, entrega de diplomas y coctel',
            duration: '3 horas',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
            summary: 'Ceremonia de graduación y entrega de certificaciones oficiales.'
          }
        ]
      }
    ]
  },
  {
    id: 'diplomado-online-bioestimulacion',
    title: 'Programa Online: Bioestimulación Dérmica, Polinucleótidos & Skin Quality',
    subtitle: 'El curso on-demand más completo: PN-HPT, Ácido Poliláctico, Hidroxiapatita y Exosomas para revitalización profunda.',
    modality: 'online',
    modalityBadge: 'Online · Acceso Inmediato 24/7',
    category: 'Dermatología Estética',
    level: 'Intermedio a Avanzado',
    duration: '24 Horas lectivas (8 Módulos HD)',
    price: 340,
    originalPrice: 490,
    isNew: false,
    isFeatured: true,
    rating: 4.95,
    reviewCount: 96,
    heroImage: '/images/carousel_04.png',
    description: 'Aprende a tu propio ritmo desde cualquier dispositivo con nuestro reproductor protegido de alta fidelidad. Descubre cómo restaurar la matriz extracelular, mejorar la calidad epidérmica y tratar la piel fina o apagada (tal como revisamos en consulta) con los últimos avances en medicina regenerativa.',
    objectives: [
      'Entender en detalle la histología cutánea: epidermis gruesa vs adelgazada y unión DEJ.',
      'Diferenciar el colágeno denso y paralelo de la piel joven del colágeno fragmentado.',
      'Aplicación clínica de polinucleótidos para ojeras, cuello y cicatrices.',
      'Integración sinérgica de bioestimuladores con peelings y mesoterapia biológica.'
    ],
    targetAudience: [
      'Médicos que desean ampliar su cartera de tratamientos con alta demanda y bajo riesgo.',
      'Profesionales que buscan elevar la calidad de piel de sus pacientes antes de rellenos.'
    ],
    includes: [
      'Acceso ilimitado por 12 meses a los 8 módulos en ultra alta definición.',
      'Reproductor con protección anticopia y marcas de agua de seguridad dinámicas.',
      'Exámenes de autoevaluación al final de cada módulo.',
      'Certificado digital verificable con código QR único para cada alumno.'
    ],
    modules: [
      {
        id: 'mod-on-1',
        title: 'Módulo 1: La Biología del Envejecimiento Dérmico',
        duration: '2h 45m',
        lessons: [
          {
            id: 'les-on-1',
            title: 'Piel fina o apagada: Histopatología del fotoenvejecimiento',
            duration: '40m',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            isPreview: true,
            summary: 'Explicación detallada del colágeno denso paralelo vs fragmentado desordenado.'
          },
          {
            id: 'les-on-2',
            title: 'La unión dermoepidérmica (DEJ) y la senescencia celular',
            duration: '45m',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            summary: 'Papel de los fibroblastos en la pérdida de turgencia y elasticidad.'
          }
        ]
      },
      {
        id: 'mod-on-2',
        title: 'Módulo 2: Protocolos Clínicos de Polinucleótidos',
        duration: '3h 10m',
        lessons: [
          {
            id: 'les-on-3',
            title: 'Técnica micropápula en contorno de ojos y código de barras',
            duration: '50m',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            summary: 'Cómo evitar hematomas y conseguir la dispersión ideal de producto.'
          },
          {
            id: 'les-on-4',
            title: 'Protocolo de choque de 3 sesiones espaciadas cada 21 días',
            duration: '45m',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            summary: 'Guía de dosimetría y cuidados post-inyección para el paciente.'
          }
        ]
      }
    ]
  },
  {
    id: 'toxina-botulinica-en-vivo',
    title: 'Masterclass En Vivo: Toxina Botulínica Avanzada y Sonrisa Gingival',
    subtitle: 'Protocolos de precisión para tercio superior, bruxismo, platisma (Lifting Nefertiti) y corrección de asimetrías.',
    modality: 'en-vivo',
    modalityBadge: 'En Vivo · Próxima Fecha',
    category: 'Neuromoduladores',
    level: 'Intermedio a Avanzado',
    duration: '5 horas en directo + Sesión Práctica Transmitida',
    price: 240,
    originalPrice: 320,
    nextDate: 'Sábado 12 de Diciembre, 2026 · 11:00 AM (GMT-4)',
    spotsAvailable: 9,
    isNew: true,
    isFeatured: false,
    rating: 4.97,
    reviewCount: 51,
    heroImage: '/images/carousel_05.png',
    description: 'La toxina botulínica es el procedimiento más demandado del mundo, pero también el que requiere mayor precisión anatómica para evitar caídas de ceja, mirada congelada o asimetrías. En esta sesión en directo, la Dra. Katheryn Escorcia desvela sus secretos de microdosificación para lograr expresiones frescas y naturales.',
    objectives: [
      'Planimetría muscular precisa del frontal, corrugadores y orbicular.',
      'Tratamiento de la sonrisa gingival según tipo anatómico (Labiador vs cigomático).',
      'Protocolo para bruxismo maseterino sin descolgamiento mandibular.',
      'Técnica de Nefertiti Lift para definición del reborde y bandas platismales.'
    ],
    targetAudience: [
      'Médicos generales, estéticos, dermatólogos y odontólogos.'
    ],
    includes: [
      'Acceso a la sesión en directo con resolución de casos clínicos en vivo.',
      'Manual descargable en PDF con puntos de inyección y dosificación en unidades.',
      'Acceso a la grabación por 60 días.',
      'Certificado de finalización oficial.'
    ],
    modules: [
      {
        id: 'mod-tox-1',
        title: 'Módulo 1: Anatomía Dinámica y Marcación Segura',
        duration: '2h 30m',
        lessons: [
          {
            id: 'les-tox-1',
            title: 'Mapeo individualizado según la mímica facial del paciente',
            duration: '45m',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            summary: 'Evitar la temida "ceja de mefisto" y el exceso de pesadez frontal.'
          }
        ]
      }
    ]
  },
  {
    id: 'rinomodelacion-presencial-barranquilla',
    title: 'Workshop Presencial: Rinomodelación Estructural de Alta Precisión',
    subtitle: 'Técnica segura con ácido hialurónico de alta elasticidad. Anatomía vascular nasal y protocolos de emergencia.',
    modality: 'presencial',
    modalityBadge: 'Presencial Hands-On · Sede Barranquilla',
    category: 'Práctica Clínica',
    level: 'Alta Especialización',
    duration: '1 Día Intensivo (8 horas prácticas con modelos)',
    price: 950,
    originalPrice: 1200,
    nextDate: 'Sábado 23 de Enero, 2027',
    location: 'Barranquilla, Colombia (Clínica Privada Dra. Katheryn Escorcia)',
    spotsAvailable: 3,
    isNew: true,
    isFeatured: false,
    rating: 5.0,
    reviewCount: 29,
    heroImage: '/images/carousel_08.png',
    description: 'La rinomodelación es una de las técnicas con mayor satisfacción inmediata, pero con el mayor requerimiento de rigor anatómico vascular. Aprende con la Dra. Katheryn Escorcia en Barranquilla, Colombia, los ángulos correctos, profundidades seguras y el soporte del ángulo nasolabial para resultados estables sin riesgo de isquemia.',
    objectives: [
      'Manejo del plano supraperióstico y supra-cartilaginoso estricto.',
      'Elevación y soporte de la punta nasal con pilar columelar.',
      'Camuflaje de giba dorsal y regularización del dorso.',
      'Protocolo anti-isquemia y uso de hialuronidasa de alta potencia.'
    ],
    targetAudience: [
      'Médicos con experiencia comprobada en inyectables que desean incorporar rinomodelación.'
    ],
    includes: [
      'Modelos reales y jeringas de alta gama incluidas para la práctica del alumno.',
      'Asesoría post-curso directa por WhatsApp para tus primeros casos.',
      'Almuerzo privado y entrega de diploma oficial.'
    ],
    modules: [
      {
        id: 'mod-rino-1',
        title: 'Módulo Práctico: Dorso, Punta y Columela',
        duration: '8 horas',
        lessons: [
          {
            id: 'les-rino-1',
            title: 'Técnica de inyección en bolo mínimo y aspiración de seguridad',
            duration: '1h 30m',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
            summary: 'Principios de reología del ácido hialurónico con alto G Prime.'
          }
        ]
      }
    ]
  },
  {
    id: 'anatomia-y-complicaciones-online',
    title: 'Curso Online: Anatomía Facial de Seguridad, Zonas de Peligro & Hialuronidasa',
    subtitle: 'El escudo médico definitivo: cómo prevenir, diagnosticar a tiempo y tratar complicaciones vasculares en medicina estética.',
    modality: 'online',
    modalityBadge: 'Online · Acceso Inmediato 24/7',
    category: 'Seguridad Médica',
    level: 'Intermedio a Avanzado',
    duration: '12 Horas de Video Clínico HD',
    price: 190,
    originalPrice: 280,
    isNew: false,
    isFeatured: false,
    rating: 4.99,
    reviewCount: 114,
    heroImage: '/images/carousel_05.png',
    description: 'Ningún inyector debería ejercer la medicina estética sin conocer al milímetro las zonas de peligro de la arteria facial, angular, supratroclear y labiales. Este programa te brinda la tranquilidad y el respaldo médico para trabajar con confianza absoluta.',
    objectives: [
      'Mapeo ecográfico y visual de las 6 zonas faciales con mayor riesgo de oclusión vascular.',
      'Reconocimiento en minutos del livedo reticularis, palidez y dolor isquémico.',
      'Dosis exactas de hialuronidasa según el tipo de relleno y tiempo transcurrido.',
      'Protocolo farmacológico: anticoagulantes, vasodilatadores y oxigenoterapia hiperbárica.'
    ],
    targetAudience: [
      'Obligatorio para cualquier profesional médico que inyecte ácido hialurónico o bioestimuladores.'
    ],
    includes: [
      'Acceso vitalicio a la plataforma con reproductor seguro.',
      'Flujograma descargable de emergencia para imprimir y tener en el consultorio.',
      'Certificado digital acreditativo con verificación.'
    ],
    modules: [
      {
        id: 'mod-anat-1',
        title: 'Módulo 1: Arterias Faciales y Planos Tisulares',
        duration: '3 horas',
        lessons: [
          {
            id: 'les-anat-1',
            title: 'Trayecto de la arteria facial y sus ramas colaterales',
            duration: '50m',
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            isPreview: true,
            summary: 'Variaciones anatómicas que debes considerar en la práctica clínica diaria.'
          }
        ]
      }
    ]
  }
];
