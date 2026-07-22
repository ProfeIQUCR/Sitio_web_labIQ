// =============================================================================
// data.js — Base de datos del Portal de Laboratorio de Ingeniería Química
// =============================================================================
// GUÍA DE MANTENIMIENTO:
//   • Añadir equipo    → agregar un objeto al array EQUIPOS[]
//   • Añadir categoría → agregar un objeto al array CATEGORIAS[]
//   • Cambiar correo   → editar CONTACTO.emailDestino
//   • Las imágenes van en: assets/img/equipos/<nombre-del-archivo>.webp
// =============================================================================

'use strict';

// ---------------------------------------------------------------------------
// CATEGORÍAS
// Para añadir una nueva categoría: agrega { id, label } al final del array.
// El 'id' debe coincidir con la propiedad 'categoria' de los equipos.
// ---------------------------------------------------------------------------
const CATEGORIAS = [
  { id: "bombas", label: "Bombas", lab: "general" },
  { id: "intercambiadores", label: "Intercambiadores", lab: "general" },
  { id: "sensores", label: "Sensores y Medición", lab: "general" },
  { id: "cristaleria", label: "Cristalería Especializada", lab: "general" },
  { id: "reactores", label: "Reactores", lab: "general" },
  { id: "separacion", label: "Separación", lab: "general" },
  { id: "analisis-termico", label: "Análisis Térmico", lab: "instrumental" },
  { id: "espectroscopia", label: "Espectroscopía", lab: "instrumental" },
  { id: "balanzas", label: "Balanzas", lab: "general" },
  { id: "agitacion", label: "Agitación y Mezcla", lab: "general" },
  { id: "filtracion", label: "Filtración", lab: "general" },
  { id: "destilacion", label: "Destilación", lab: "general" },
  { id: "cromatografia", label: "Cromatografía", lab: "instrumental" },
  { id: "transferencia-masa", label: "Transferencia de Masa", lab: "general" },
  { id: "mecanica-fluidos", label: "Mecánica de Fluidos", lab: "general" },
  { id: "vacio", label: "Vacío", lab: "general" },
  { id: "instrumentacion", label: "Instrumentación", lab: "instrumental" },
  { id: "electronica", label: "Electrónica", lab: "general" },
  { id: "analizador-elemental", label: "Analizador Elemental", lab: "instrumental" },
];

// ---------------------------------------------------------------------------
// EQUIPOS
// Cada objeto representa un equipo físico del laboratorio.
// Campos:
//   id       → identificador único (ej. "B-001")
//   nombre   → nombre completo del equipo
//   categoria → debe coincidir con un 'id' de CATEGORIAS[]
//   img      → ruta relativa a la imagen WebP (en assets/img/equipos/)
// ---------------------------------------------------------------------------
const EQUIPOS = [

  // --- BOMBAS ---

  // --- INTERCAMBIADORES ---

  // --- SENSORES Y MEDICIÓN ---

  // --- CRISTALERÍA ESPECIALIZADA ---

  // --- REACTORES ---

  // --- SEPARACIÓN ---

  // --- ANÁLISIS TÉRMICO ---

  // --- ESPECTROSCOPÍA ---

  // --- BALANZAS ---

  // --- AGITACIÓN Y MEZCLA ---

  // --- FILTRACIÓN ---

  // --- DESTILACIÓN ---

  // --- CROMATOGRAFÍA ---

  // --- TRANSFERENCIA DE MASA ---

  // --- MECÁNICA DE FLUIDOS ---

  // --- VACÍO ---

  // --- INSTRUMENTACIÓN ---

  // --- ELECTRÓNICA ---
      { id: "CG-004", nombre: "GC-MS (Thermo Scientific)", categoria: ["cromatografia", "instrumentacion"], img: "assets/img/equipos/crom-gc-ms-thermo-scientific.webp" },
        { id: "IN-005", nombre: "Analizador de Carbono Orgánico Total (TOC) (Shimadzu)", categoria: "instrumentacion", img: "assets/img/equipos/inst-analizador-de-carbono-organico-total-toc.webp" },
      { id: "ES-004", nombre: "Espectroscopio infrarrojo (FTIR) (Thermo Scientific)", categoria: ["espectroscopia", "instrumentacion"], img: "assets/img/equipos/espec-espectroscopio-infrarrojo-ftir.webp" },
  { id: "CG-005", nombre: "HPLC (Agilent Technologies)", categoria: ["cromatografia", "instrumentacion"], img: "assets/img/equipos/crom-hplc-agilent-technologies.webp" },
      { id: "CG-006", nombre: "GC (Shimadzu)", categoria: ["cromatografia", "instrumentacion"], img: "assets/img/equipos/crom-gc-shimadzu.webp" },
    { id: "IN-007", nombre: "Analizador elemental (CHONS) (Thermo Scientific)", categoria: ["instrumentacion", "analizador-elemental"], img: "assets/img/equipos/inst-analizador-elemental-chons-thermo-scientific.webp" },
  { id: "AT-001", nombre: "Analizador termogravimétrico (TGA/DSC) ", categoria: ["analisis-termico", "instrumentacion"], img: "assets/img/equipos/term-analizador-termogravimetrico-tgadsc.webp" },
  { id: "CG-007", nombre: "HPLC (Thermo Scientific)", categoria: ["cromatografia", "instrumentacion"], img: "assets/img/equipos/crom-hplc-thermo-scientific.webp" },
  { id: "IN-008", nombre: "Analizador de tamaño de partícula (Z-sizer) y potencial Z (Malvern Analytical)", categoria: "instrumentacion", img: "assets/img/equipos/inst-analizador-de-tamano-de-particula-z-sizer-y-potencial-z-malvern-analytical.webp" },
      { id: "ES-005", nombre: "Espectroscopio UV-Vis con fibra óptica (Thermo Scientific)", categoria: ["espectroscopia", "instrumentacion"], img: "assets/img/equipos/espec-espectoscopio-uv-vis-con-fibra-optica-thermo-scientific.webp" },
      { id: "ES-006", nombre: "Espectroscopio UV-Vis (Thermo Scientific)", categoria: ["espectroscopia", "instrumentacion"], img: "assets/img/equipos/espec-espectoscopio-uv-vis-thermo-scientific.webp" },
];

// ---------------------------------------------------------------------------
// PROCEDIMIENTOS
// Pasos del proceso de solicitud + documentos descargables.
// Actualiza 'ruta' cuando cambies el nombre de un archivo PDF.
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// PROCEDIMIENTOS
// El documento PDF "solicitudes-de-laboratorio-2024.pdf" contiene las
// características completas de cada tipo de solicitud.
// Cada tipo de solicitud referencia ese mismo PDF.
// ---------------------------------------------------------------------------
const PROCEDIMIENTOS = {

  // Cuatro tipos de solicitud según el reglamento vigente
  tipos: [
    {
      id: "general",
      icono: "clipboard",
      titulo: "Solicitud de Laboratorio General",
      descripcion: "Procedimiento estándar para el uso del laboratorio durante el horario regular de atención. Aplica para proyectos finales de curso, asistencia a proyectos de investigación, desarrollo de TFG o TFIA o recibir capacitación.",
      documentoId: "doc-solicitudes-generales",
      // Sub-pasos de este tipo de solicitud
      pasos: [
        "Coordinar disponibilidad del espacio, equipos y reactivos con el personal técnico de laboratorio.",
        "Enviar la solicitud al correo electrónico del laboratorio con copia a la persona docente responsable. Recuerde: la solicitud debe venir firmada por ambas partes para ser analizada.",
        "La jefatura de laboratorios revisa la solicitud y, de ser necesario, pide aclaraciones y/o modificaciones",
        "Se da o no el V.B. y se copia a las partes interesadas",
        "Aviso: La solicitud debe enviarse con al menos 5 días de anticipación a la fecha coordinada con el personal técnico de laboratorio.",
      ],
    },
    {
      id: "fuera-horario",
      icono: "clock",
      titulo: "Solicitud de Uso en Horas Fuera de Atención",
      descripcion: "Para el uso del laboratorio fuera del horario regular de servicio. Se divide en dos modalidades según el tipo de actividad que se realizará.",
      // Este tipo tiene sub-modalidades
      subtipos: [
        {
          id: "sin-permiso-especial",
          etiqueta: "Sin permiso especial",
          descripcion: "Actividades que se realizan entre lunes y jueves, de corta duración (máx. 4 noches) y ocasionales. Por ejemplo: uso de equipos de calentamiento como plantillas, hornos, estufas, mantas y de agitación como plantillas magnéticas, sistemas de agitación e incubadoras.",

          pasos: [
            "Coordinar disponibilidad del espacio, equipos y reactivos con el personal técnico de laboratorio.",
            "Comunique qué equipo necesita, qué va a hacer y las condiciones a las que lo necesita dejar operando",
            "El personal técnico analiza el caso y determina si necesita o no el V.B. adicional de la jefatura de laboratorios o si necesita realizar alguna consulta",
            "Si el permiso procede, se llena la boleta respectiva. Si el permiso es denegado, se le darán las razones correspondientes",
            "Aviso: Las muflas solo se pueden dejar en modo de enfriamiento en horas fuera de atención (una vez el tratamiento térmico ha finalizado).",
          ],
        },
        {
          id: "con-permiso-especial",
          etiqueta: "Con permiso especial",
          descripcion: "Actividades que se realizan entre lunes y jueves, de corta duración (máx. 4 noches) y que, a priori, se conoce serán repetidas en semanas consecutivas. Incluye también actividades que involucran dejar cualquier equipo funcionando durante el fin de semana o, bien, que requieren el uso de equipos por tiempos prolongados de manera exclusiva",

          pasos: [
            "Coordinar disponibilidad del espacio, equipos y reactivos con el personal técnico de laboratorio.",
            "Enviar carta al correo electrónico del laboratorio con copia a la persona docente responsable. Recuerde: la solicitud debe venir firmada por ambas partes para ser analizada.",
            "La jefatura de laboratorios revisa la solicitud y, de ser necesario, pide aclaraciones y/o modificaciones. En caso de ser necesario, se gestiona el permiso con una instancia superior",
            "Se da o no el V.B. y se copia a las partes interesadas",
            "Aviso: La solicitud debe enviarse con al menos 5 días de anticipación a la fecha coordinada con el personal técnico de laboratorio.",
            "Importante: Para actividades presenciales en horas fuera de atención (5 pm hasta el cierre del edificio de LD según el horario del Decanato o los días sábado) se requiere que persona docente de la EIQ acompañe a la persona estudiante o grupo de trabajo para realizar la supervisión y se encargue del cierre de los espacios)",
          ],
        },
      ],
    },
    {
      id: "instrumental",
      icono: "microscope",
      titulo: "Solicitud del Laboratorio Instrumental",
      descripcion: "Proceso específico para el uso de los equipos de análisis instrumental. Incluye los equipos de cromatografía líquida (HPLC) y de gases (GC & GC-MS), análisis elemental (CHONS), tamaño de partícula (DLS), carbono orgánico total (TOC), análisis termogravimétrico (TGA/DSC), espectroscopía UV/Vis/FTIR y flourescencia de rayosX (XRF).",
      documentoId: "doc-solicitudes-instrumentales",
      pasos: [
        "Enviar solicitud a la persona sub-coordinadora del laboratorio instrumental, con copia a la persona docente responsable. Recuerde: la solicitud debe venir firmada por ambas partes para ser analizada.",
        "La persona sub-coordinadora revisa la solicitud y, de ser necesario, pide aclaraciones y/o modificaciones. Se da o no el V.B. y se copia a las partes interesadas.",
        "En caso de ser necesario, se solicita criterio técnico a la persona responsable del equipo y/o el V.B. a la dirección académica. Se da o no el V.B. y se copia a las partes interesadas",
        "Se coordina el uso del equipo con la persona sub-coordinadora del laboratorio instrumental",
        "Aviso: La solicitud debe enviarse con al menos 5 días de anticipación a la fecha coordinada con el personal técnico de laboratorio.",
      ],
    },
    {
      id: "externas-eiq",
      icono: "building",
      titulo: "Solicitudes Externas a la EIQ",
      descripcion: "Procedimiento para usuarios externos a la Escuela de Ingeniería Química: otras facultades o institutos de investigación.",
      pasos: [
        "Se coordina el uso del espacio, equipos y reactivos con el personal técnico de laboratorio.",
        "Se envía, por Oficio, la solicitud a la jefatura de laboratorios, con copia a la persona docente responsable. Recuerde: la solicitud debe venir firmada por ambas partes para ser analizada.",
        "La jefatura de laboratorios revisa la solicitud y, de ser necesario, pide aclaraciones y/o modificaciones. Se da o no el V.B. técnico y se eleva la solicitud a la dirección académica",
        "La dirección académica revisa la solicitud y, de ser necesario, pide aclaraciones y/o modificaciones. Se da o no el V.B. general y se copia a las partes interesadas",
        "La jefatura de laboratorios responde mediante Oficio a las partes interesadas",
        "Aviso: La solicitud debe enviarse con al menos 10 días de anticipación a la fecha coordinada con el personal técnico de laboratorio.",
        "Importante: Para particulares o empresas, deben contactar al correo VENTASERVICIOS.EIQ@ucr.ac.cr",
      ],
    },
  ],

  // Documento oficial con todas las características y formatos de cada solicitud
  documentos: [
    {
      id: "doc-solicitudes",
      nombre: "Tipos de Solicitudes de Laboratorio",
      formato: "PDF",
      tamaño: "1.3 MB",
      descripcion: "Documento oficial que contiene las características, requisitos y formatos para los cuatro tipos de solicitud: laboratorio general, fuera de horario, laboratorio instrumental y solicitudes externas a la EIQ.",
      ruta: "assets/docs/solicitudes-de-laboratorio-2024.pdf",
    },

    {
      id: "doc-solicitudes-generales",
      nombre: "Solicitud del Laboratorio General",
      formato: "PDF",
      tamaño: "322 KB",
      descripcion: "Documento plantilla para llenado cuando se solicita el laboratorio general",
      ruta: "assets/docs/Carta_permiso_laboratorio_2025.pdf",
    },

    {
      id: "doc-solicitudes-instrumentales",
      nombre: "Solicitud del Laboratorio Instrumental",
      formato: "PDF",
      tamaño: "234 KB",
      descripcion: "Documento plantilla para llenado cuando se solicita el laboratorio instrumental",
      ruta: "assets/docs/Carta_permiso_laboratorio_instr_2025_final.pdf",
    },
  ],
};

// ---------------------------------------------------------------------------
// CONTACTO
// ✏️ Edita emailDestino con el correo real antes de publicar el sitio.
// ---------------------------------------------------------------------------
const CONTACTO = {
  // ✏️ REEMPLAZA CON EL CORREO REAL DE DESTINO PARA EL FORMULARIO
  emailDestino: "laboratorio.eiq@ucr.ac.cr",

  horarios: [
    {
      dias: "Lunes a Viernes",
      horas: "07:00 — 17:00 h",
      detalle: "Prácticas programadas, trabajos especiales de curso y trabajos finales de graduación",
    },

  ],

  personal: [
    {
      id: "P-001",
      nombre: "Dr. Adrián Serrano Mora",
      cargo: "Jefe de Laboratorios",
      correo: "laboratorio.eiq@ucr.ac.cr",
      oficina: "Edificio Administrativo, Oficina 419",
      telefono: "2511-5161",
      // 'color' define el acento de la tarjeta: "primary" | "secondary" | "accent" | "neutral"
      color: "primary",
    },
    {
      id: "P-002",
      nombre: "Olman Aguilar Solano",
      cargo: "Técnico de Laboratorio General",
      correo: "olman.aguilar@ucr.ac.cr",
      oficina: "Ventanilla de atención",
      telefono: "2511-6690",
      color: "secondary",
    },
    {
      id: "P-003",
      nombre: "Emilio García Rodríguez",
      cargo: "Técnico de Laboratorio General e Instrumental",
      correo: "jose.garcia_r@ucr.ac.cr",
      oficina: "Ventanilla de atención",
      telefono: "2511-6689",
      color: "accent",
    },
    {
      id: "P-004",
      // ✏️ REEMPLAZA con el nombre real
      nombre: "Jaqueline Carazo",
      // ✏️ REEMPLAZA con el cargo real
      cargo: "Técnico de Laboratorio General",
      // ✏️ REEMPLAZA con el correo real
      correo: "jaqueline.carazo@ucr.ac.cr",
      // ✏️ REEMPLAZA con la oficina real
      oficina: "Ventanilla de atención",
      // ✏️ REEMPLAZA con la extensión real
      telefono: "2511-6690",
      // Opciones: "primary" (azul) | "secondary" (verde) | "accent" (amarillo) | "neutral" (gris)
      color: "neutral",
    },
  ],
};

// ---------------------------------------------------------------------------
// VIDEOS DE PROCESOS (TRÁMITES IN SITU)
// ✏️ Reemplaza las URLs de rutaCanva con los enlaces reales de tus videos de Canva.
// ---------------------------------------------------------------------------
const VIDEOS = [
  {
    id: "control-acceso",
    titulo: "Control de Acceso al Laboratorio",
    descripcion: "Videoguía con el protocolo obligatorio y los pasos necesarios para registrarse e ingresar a las instalaciones.",
    duracion: "1:48 min",
    rutaCanva: "https://www.canva.com/design/DAGiHfEExXc/1Xp4QXzZM5hFmt7dy_HmnA/watch"
  },
  {
    id: "refrigeradores-congeladores",
    titulo: "Uso de Refrigeradores y Congeladores",
    descripcion: "Normas de rotulación, almacenamiento correcto de reactivos y orden de la cadena de frío en el laboratorio.",
    duracion: "1:46 min",
    rutaCanva: "https://www.canva.com/design/DAGiR3GUayY/vDjn67fXjLH2tpAVEJnscA/watch"
  },
  {
    id: "fuera-horario-video",
    titulo: "Paso a Paso: Boleta Fuera de Horario",
    descripcion: "Videotutorial detallado para completar de forma correcta la solicitud física y digital en la ventanilla.",
    duracion: "2:21 min",
    rutaCanva: "https://www.canva.com/design/DAGiMDs-dNs/eLlH5QeTZX4_7twrXIKFGA/watch"
  }
];

