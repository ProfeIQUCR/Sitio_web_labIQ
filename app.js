// =============================================================================
// app.js — Portal LAB-IQ Ver 1.1
// Lógica: Catálogo con Lazy Load, Filtros por categoría,
//         Procedimientos, Contacto, Formulario FormSubmit
// =============================================================================

'use strict';

// ─── ÍCONOS SVG INLINE (Lucide-style) ───────────────────────────────────────
const ICONS = {
  calendar:  `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  download:  `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  pen:       `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  clipboard: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`,
  shield:    `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  clock:     `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  microscope:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 18h8"/><path d="M3 21h18"/><path d="M14 21v-4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4"/><path d="M14 7l-2-2"/><path d="M16 5l-4-4-4 4 4 4 4-4z"/><line x1="12" y1="9" x2="12" y2="15"/></svg>`,
  building:  `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 22V12h6v10"/><path d="M9 7h.01M12 7h.01M15 7h.01M9 12h.01M15 12h.01"/></svg>`,
  mail:      `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  buildingsm:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  phone:     `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.15 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.06 6.06l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  chevron:   `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`,
};

// ─── INICIALIZACIÓN ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderHeroStats();
  renderProcedures();
  renderCatalog();
  selectLaboratory('general');
  initCatalogSearch();
  renderContact();
  initContactForm();
  setFooterYear();
});

// ─── NAV: SCROLL BEHAVIOR + MENÚ MÓVIL ──────────────────────────────────────
function initNav() {
  const header = document.getElementById('nav-header');
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  const backToTop = document.getElementById('back-to-top');

  // Clases de scroll
  const onScroll = () => {
    const scrollY = window.scrollY;
    header.classList.toggle('scrolled', scrollY > 10);
    
    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Toggle menú móvil
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Cerrar menú móvil al hacer clic en un link
  links?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // Active link con IntersectionObserver
  initActiveNavLinks();
}

function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(section => observer.observe(section));
}

// ─── HERO: ESTADÍSTICAS DINÁMICAS ────────────────────────────────────────────
function renderHeroStats() {
  const totalEquipos = document.getElementById('stat-total-equipos');
  const totalCats    = document.getElementById('stat-total-cats');

  if (totalEquipos) totalEquipos.textContent = EQUIPOS.length;
  if (totalCats)    totalCats.textContent    = CATEGORIAS.length;
}

// ─── PROCEDIMIENTOS ──────────────────────────────────────────────────────────
function renderProcedures() {
  renderProcTypes();
  renderDocumento();
  renderVideos();
}

// Colores de acento por tipo de solicitud
const PROC_COLORS = {
  general:         { bg: '#EFF6FF', icon: '#3B82F6', border: '#BFDBFE' },
  'fuera-horario': { bg: '#ECFDF5', icon: '#10B981', border: '#A7F3D0' },
  instrumental:    { bg: '#FFF7ED', icon: '#F59E0B', border: '#FDE68A' },
  'externas-eiq':  { bg: '#F5F3FF', icon: '#8B5CF6', border: '#DDD6FE' },
};

// Función helper para renderizar los pasos y los avisos destacados
function renderStepsHtml(pasos, extraHtml = '') {
  if (!pasos || pasos.length === 0) return '';

  const normalSteps = [];
  const warnings = [];

  pasos.forEach(p => {
    if (p.startsWith('Aviso:') || p.startsWith('Importante:')) {
      const isImportant = p.startsWith('Importante:');
      const cleanText = p.replace(/^(Aviso:|Importante:)\s*/, '');
      const label = isImportant ? 'Importante' : 'Aviso';
      const modifierClass = isImportant ? 'proc-warning-banner--danger' : '';
      warnings.push(`
        <div class="proc-warning-banner ${modifierClass}">
          <span class="proc-warning-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </span>
          <p class="proc-warning-text"><strong>${label}:</strong> ${cleanText}</p>
        </div>
      `);
    } else {
      normalSteps.push(`<li>${p}</li>`);
    }
  });

  return `
    <ol class="proc-steps-list">${normalSteps.join('')}</ol>
    ${extraHtml}
    ${warnings.join('')}
  `;
}

function renderProcTypes() {
  const grid = document.getElementById('proc-types-grid');
  if (!grid) return;
  grid.innerHTML = '';

  PROCEDIMIENTOS.tipos.forEach((tipo) => {
    const colors = PROC_COLORS[tipo.id] || PROC_COLORS.general;
    const cardId = `proc-card-${tipo.id}`;
    const panelId = `proc-panel-${tipo.id}`;

    // Construir lista de pasos o sub-tipos
    let detailHtml = '';

    // Buscar documento asociado si existe
    const doc = tipo.documentoId ? PROCEDIMIENTOS.documentos.find(d => d.id === tipo.documentoId) : null;
    let documentButtonHtml = '';
    if (doc) {
      documentButtonHtml = `
        <div class="proc-download-container">
          <a href="${doc.ruta}" target="_blank" rel="noopener" class="proc-download-btn-card">
            <div class="proc-download-btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div class="proc-download-btn-content">
              <span class="proc-download-btn-title">Descargar Plantilla Oficial</span>
              <span class="proc-download-btn-meta">Formato ${doc.formato} • ${doc.tamaño}</span>
            </div>
            <div class="proc-download-btn-action">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
          </a>
        </div>
      `;
    }

    // Buscar video asociado si existe para colocar un acceso contextual directo
    const vid = tipo.videoId ? VIDEOS.find(v => v.id === tipo.videoId) : null;
    let videoBadgeHtml = '';
    if (vid) {
      videoBadgeHtml = `
        <div class="proc-video-badge" 
             style="background:${colors.bg}; border-color:${colors.border}; color:${colors.icon};" 
             onclick="openVideoModal('${vid.titulo}', '${vid.rutaCanva}')"
             role="button"
             aria-label="Ver video explicativo: ${vid.titulo}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.375rem;"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Ver video explicativo de este trámite
        </div>
      `;
    }

    if (tipo.subtipos) {
      // Tipo "fuera-horario": tiene sub-modalidades y ahora también soporta pasos
      detailHtml = videoBadgeHtml + tipo.subtipos.map(sub => `
        <div class="proc-subtipo">
          <span class="proc-subtipo-label"
                style="background:${colors.bg}; color:${colors.icon}; border-color:${colors.border};">
            ${sub.etiqueta}
          </span>
          <p class="proc-subtipo-desc">${sub.descripcion}</p>
          ${renderStepsHtml(sub.pasos)}
        </div>
      `).join('');
    } else if (tipo.pasos) {
      // Tipos con lista de pasos
      detailHtml = videoBadgeHtml + renderStepsHtml(tipo.pasos, documentButtonHtml);
    }

    const card = document.createElement('div');
    card.className = 'proc-type-card';
    card.id = cardId;
    card.style.setProperty('--proc-icon-bg', colors.bg);
    card.style.setProperty('--proc-icon-color', colors.icon);
    card.style.setProperty('--proc-border', colors.border);

    card.innerHTML = `
      <button
        class="proc-type-header"
        aria-expanded="false"
        aria-controls="${panelId}"
        onclick="toggleProcCard('${tipo.id}')"
      >
        <div class="proc-type-icon" aria-hidden="true">
          ${ICONS[tipo.icono] || ICONS.clipboard}
        </div>
        <div class="proc-type-heading">
          <h3 class="proc-type-title">${tipo.titulo}</h3>
          <p class="proc-type-desc">${tipo.descripcion}</p>
        </div>
        <span class="proc-chevron" aria-hidden="true">${ICONS.chevron}</span>
      </button>
      <div class="proc-type-panel-wrapper" id="${panelId}" aria-hidden="true">
        <div class="proc-type-panel">
          ${detailHtml}
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Toggle acordeón de tarjetas de procedimiento
function toggleProcCard(tipoId) {
  const card  = document.getElementById(`proc-card-${tipoId}`);
  const btn   = card?.querySelector('.proc-type-header');
  const wrapper = document.getElementById(`proc-panel-${tipoId}`);
  if (!btn || !wrapper) return;

  const isOpen = card.classList.contains('open');

  // Cerrar todos los demás
  document.querySelectorAll('.proc-type-card').forEach(c => {
    c.classList.remove('open');
    c.querySelector('.proc-type-header')?.setAttribute('aria-expanded', 'false');
    c.querySelector('.proc-type-panel-wrapper')?.setAttribute('aria-hidden', 'true');
  });

  // Abrir o mantener cerrado el actual
  if (!isOpen) {
    card.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    wrapper.setAttribute('aria-hidden', 'false');
  }
}

// Exponer para onclick inline
window.toggleProcCard = toggleProcCard;

async function togglePdfViewer(pdfPath) {
  const container = document.getElementById('pdf-viewer-container');
  const iframe = document.getElementById('pdf-iframe');
  if (!container || !iframe) return;

  if (container.style.display === 'none') {
    if (pdfPath) {
      try {
        const response = await fetch(pdfPath, { method: 'HEAD' });
        if (response.ok) {
          iframe.src = pdfPath;
        } else {
          iframe.srcdoc = `
            <div style="font-family: 'Outfit', sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #991B1B; background: #FEF2F2; text-align: center; padding: 2rem; box-sizing: border-box; border-radius: 8px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <h2 style="margin: 0 0 0.5rem 0; font-size: 1.25rem;">El documento no está disponible</h2>
              <p style="margin: 0 0 1.5rem 0; font-size: 0.9rem; max-width: 400px; color: #7F1D1D; line-height: 1.5;">El archivo PDF solicitado no se encuentra en el servidor. Por favor, comunícate con la jefatura de laboratorios.</p>
              <a href="${pdfPath}" target="_blank" style="display: inline-block; background: #0056e0; color: white; text-decoration: none; padding: 0.6rem 1.2rem; border-radius: 6px; font-weight: bold; font-size: 0.85rem; transition: background 200ms;">Intentar descarga directa</a>
            </div>
          `;
        }
      } catch (error) {
        console.error("Error al validar el PDF, intentando carga directa:", error);
        iframe.src = pdfPath;
      }
    }
    container.style.display = 'block';
    setTimeout(() => {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  } else {
    container.style.display = 'none';
    iframe.src = '';
    iframe.removeAttribute('srcdoc');
  }
}
window.togglePdfViewer = togglePdfViewer;

function renderDocumento() {
  const grid = document.getElementById('docs-grid');
  if (!grid) return;
  grid.innerHTML = '';

  PROCEDIMIENTOS.documentos.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'doc-card doc-card--featured';
    
    const viewOnlineBtn = `
      <button 
        class="btn btn-outline-primary btn-sm doc-view-btn" 
        onclick="togglePdfViewer('${doc.ruta}')" 
        id="view-${doc.id}"
        aria-label="Ver ${doc.nombre} en pantalla"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.375rem;"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        Ver en pantalla
      </button>
    `;

    card.innerHTML = `
      <div class="doc-card-header">
        <span class="doc-format-badge">${doc.formato}</span>
        <span class="doc-size">${doc.tamaño}</span>
      </div>
      <h3 class="doc-name">${doc.nombre}</h3>
      <p class="doc-desc">${doc.descripcion}</p>
      <div class="doc-actions" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: auto; align-items: center;">
        <a
          href="${doc.ruta}"
          target="_blank"
          rel="noopener"
          class="btn btn-primary btn-sm doc-download-btn"
          id="download-${doc.id}"
          aria-label="Descargar ${doc.nombre}"
          style="margin-top: 0;"
        >
          ${ICONS.download}
          Descargar PDF
        </a>
        ${viewOnlineBtn}
      </div>
    `;
    grid.appendChild(card);
  });
}

// ─── PROCESOS EN EL LABORATORIO (TRÁMITES IN SITU / VIDEOS) ───────────────────
function renderVideos() {
  const grid = document.getElementById('videos-grid');
  if (!grid) return;
  grid.innerHTML = '';

  VIDEOS.forEach((vid, index) => {
    const card = document.createElement('div');
    let colorClass = '';
    if (index === 1) colorClass = ' video-card--green';
    else if (index === 2) colorClass = ' video-card--pink';
    card.className = 'video-card' + colorClass;
    card.innerHTML = `
      <div class="video-thumbnail-wrapper" onclick="openVideoModal('${vid.titulo}', '${vid.rutaCanva}')" role="button" aria-label="Ver video explicativo: ${vid.titulo}">
        <div class="video-thumbnail-graphic">
          <div class="video-thumbnail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="transform: translateX(2px);"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <span style="font-size: 0.8rem; font-weight: var(--fw-bold); text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.9;">Reproducir Guía</span>
        </div>
        <span class="video-duration-badge">${vid.duracion}</span>
      </div>
      <div class="video-card-content">
        <h3 class="video-title">${vid.titulo}</h3>
        <p class="video-desc">${vid.descripcion}</p>
        <button class="btn btn-outline-primary btn-sm video-play-btn" onclick="openVideoModal('${vid.titulo}', '${vid.rutaCanva}')" aria-label="Ver video ${vid.titulo}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.375rem;"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Ver video
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openVideoModal(videoTitle, videoUrl) {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  const title = document.getElementById('video-modal-title');
  if (!modal || !iframe || !title) return;

  // Si es un enlace de Canva normal (sin embed), le agregamos el parámetro para que se pueda empotrar
  let formattedUrl = videoUrl;
  if (videoUrl.includes('canva.com') && !videoUrl.includes('embed')) {
    if (videoUrl.includes('?')) {
      formattedUrl = videoUrl + '&embed';
    } else {
      formattedUrl = videoUrl + '?embed';
    }
  }

  title.textContent = videoTitle;
  iframe.src = formattedUrl;
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Evitar scroll de la página de fondo
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  if (!modal || !iframe) return;

  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  iframe.src = ''; // Detener reproducción
  document.body.style.overflow = ''; // Restaurar scroll
}

function openImageModal(imgSrc, imgAlt) {
  const modal = document.getElementById('image-modal');
  const img = document.getElementById('modal-image');
  const caption = document.getElementById('image-modal-caption');
  if (!modal || !img || !caption) return;

  img.src = imgSrc;
  img.alt = imgAlt;
  caption.textContent = imgAlt;
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeImageModal() {
  const modal = document.getElementById('image-modal');
  const img = document.getElementById('modal-image');
  if (!modal || !img) return;

  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  img.src = '';
  document.body.style.overflow = '';
}

window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;

// ─── CATÁLOGO: FILTROS E INICIALIZACIÓN DE LAB ────────────────────────────────
const ITEMS_PER_PAGE = 12;
let displayedCount = ITEMS_PER_PAGE;
let currentLab = 'general';
let currentCategory = 'todos';

function selectLaboratory(lab) {
  currentLab = lab;
  currentCategory = 'todos';
  displayedCount = ITEMS_PER_PAGE;

  // Limpiar buscador al cambiar de laboratorio
  const searchInput = document.getElementById('catalog-search');
  const clearBtn = document.getElementById('search-clear-btn');
  if (searchInput) {
    searchInput.value = '';
    searchQuery = '';
  }
  if (clearBtn) {
    clearBtn.hidden = true;
  }

  // Actualizar clases de los tabs del selector
  document.querySelectorAll('.lab-tab').forEach(tab => {
    const isActive = tab.dataset.lab === lab;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  // Re-renderizar los chips de categorías para este laboratorio
  renderCatalogFilters();

  // Filtrar el catálogo
  filterCatalog();
}

window.selectLaboratory = selectLaboratory;

function renderCatalogFilters() {
  const bar = document.getElementById('catalog-filter-bar');
  if (!bar) return;

  // Limpiar filtros previos
  bar.innerHTML = '';

  // Crear chip de "Todos"
  const todosChip = document.createElement('button');
  todosChip.className = 'filter-chip active';
  todosChip.dataset.cat = 'todos';
  todosChip.id = 'chip-todos';
  todosChip.textContent = 'Todos';
  todosChip.setAttribute('aria-pressed', 'true');
  todosChip.addEventListener('click', () => filterByCategory('todos'));
  bar.appendChild(todosChip);

  // Filtrar categorías que pertenecen al laboratorio activo
  const filteredCats = CATEGORIAS.filter(cat => cat.lab === currentLab);

  filteredCats.forEach(cat => {
    const chip = document.createElement('button');
    chip.className = 'filter-chip';
    chip.dataset.cat = cat.id;
    chip.id = `chip-${cat.id}`;
    chip.textContent = cat.label;
    chip.setAttribute('aria-pressed', 'false');
    chip.addEventListener('click', () => filterByCategory(cat.id));
    bar.appendChild(chip);
  });
}

// ─── CATÁLOGO: RENDER ────────────────────────────────────────────────────────
function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  grid.innerHTML = '';

  EQUIPOS.forEach(equipo => {
    // Unificar categoria como array
    const categoriasArray = Array.isArray(equipo.categoria) ? equipo.categoria : [equipo.categoria];

    // Obtener etiquetas de categorías y crear badges html
    const catLabelsHtml = categoriasArray.map(catId => {
      const catInfo = CATEGORIAS.find(c => c.id === catId);
      const catLabel = catInfo ? catInfo.label : catId;
      return `<span class="card-category-badge">${catLabel}</span>`;
    }).join(' ');

    const primaryCat = categoriasArray[0] || 'todos';

    // Iniciales para el placeholder (hasta 2 letras significativas)
    const words = equipo.nombre.replace(/[()[\].,]/g, '').split(/\s+/);
    const initials = words
      .filter(w => w.length > 2)
      .slice(0, 2)
      .map(w => w[0])
      .join('')
      .toUpperCase() || equipo.id.slice(0, 2).toUpperCase();

    const card = document.createElement('article');
    card.className = 'equipo-card';
    card.dataset.categoria = JSON.stringify(categoriasArray);
    card.setAttribute('aria-label', equipo.nombre);
    card.addEventListener('click', () => openImageModal(equipo.img, equipo.nombre));

    card.innerHTML = `
      <div class="card-img-wrapper" data-cat="${primaryCat}">
        <div class="card-img-placeholder" aria-hidden="true">
          <svg class="placeholder-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
          <span class="placeholder-text">${initials}</span>
        </div>
        <img
          class="card-img"
          data-src="${equipo.img}"
          alt="${equipo.nombre}"
          decoding="async"
        >
      </div>
      <div class="card-body">
        <h3 class="card-name">${equipo.nombre}</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.25rem; margin-top: 0.5rem;">${catLabelsHtml}</div>
      </div>
    `;

    grid.appendChild(card);
  });

  initLazyLoad();
}

// ─── CATÁLOGO: FILTRAR Y CONTAR ──────────────────────────────────────────────
function filterByCategory(cat) {
  currentCategory = cat;
  displayedCount = ITEMS_PER_PAGE;

  // Actualizar clases activas en los chips de categorías
  document.querySelectorAll('.filter-chip').forEach(chip => {
    const isActive = chip.dataset.cat === cat;
    chip.classList.toggle('active', isActive);
    chip.setAttribute('aria-pressed', String(isActive));
  });

  filterCatalog();
}

window.filterByCategory = filterByCategory;

let searchQuery = '';

function filterCatalog() {
  const cards = document.querySelectorAll('.equipo-card');
  const emptyState = document.getElementById('catalog-empty');
  const loadMoreContainer = document.getElementById('catalog-load-more-container');
  let matchingCount = 0;

  cards.forEach(card => {
    const cardCatJson = card.dataset.categoria;
    let categoriasArray = [];
    
    try {
      if (cardCatJson.startsWith('[')) {
        categoriasArray = JSON.parse(cardCatJson);
      } else {
        categoriasArray = [cardCatJson];
      }
    } catch (e) {
      categoriasArray = [cardCatJson];
    }

    // Determinar laboratorio: si alguna categoría pertenece a 'instrumental', el equipo es 'instrumental'
    let cardLab = 'general';
    for (const catId of categoriasArray) {
      const catInfo = CATEGORIAS.find(c => c.id === catId);
      if (catInfo && catInfo.lab === 'instrumental') {
        cardLab = 'instrumental';
        break;
      }
    }

    const cardName = card.getAttribute('aria-label') || '';

    const matchLab = cardLab === currentLab;
    const matchCat = currentCategory === 'todos' || categoriasArray.includes(currentCategory);
    const matchSearch = cardName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(
      searchQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    );

    const isMatch = matchLab && matchCat && matchSearch;
    
    if (isMatch) {
      matchingCount++;
      card.style.display = matchingCount <= displayedCount ? '' : 'none';
    } else {
      card.style.display = 'none';
    }
  });

  updateCatalogCount(matchingCount);

  // Mostrar/ocultar estado sin resultados
  if (emptyState) {
    emptyState.hidden = (matchingCount > 0);
  }

  // Mostrar/ocultar botón Cargar más
  if (loadMoreContainer) {
    loadMoreContainer.style.display = matchingCount > displayedCount ? 'flex' : 'none';
  }
}

function initCatalogSearch() {
  const searchInput = document.getElementById('catalog-search');
  const clearBtn = document.getElementById('search-clear-btn');
  const resetBtn = document.getElementById('btn-reset-filters');
  const loadMoreBtn = document.getElementById('btn-load-more');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (clearBtn) {
      clearBtn.hidden = (searchQuery === '');
    }
    filterCatalog();
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.hidden = true;
      searchInput.focus();
      filterCatalog();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      // Restablecer buscador
      searchInput.value = '';
      searchQuery = '';
      if (clearBtn) clearBtn.hidden = true;
      
      // Restablecer laboratorio y categoría
      selectLaboratory('general');
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      displayedCount += ITEMS_PER_PAGE;
      filterCatalog();
    });
  }
}

function updateCatalogCount(count) {
  const el = document.getElementById('catalog-count');
  if (el) el.textContent = `${count} equipo${count !== 1 ? 's' : ''}`;
}

// ─── CATÁLOGO: LAZY LOADING ──────────────────────────────────────────────────
function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  if (!images.length) return;

  // Precarga: comenzar a cargar imágenes 400px antes del viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const img = entry.target;
      const src = img.dataset.src;
      if (!src) return;

      img.src = src;

      img.addEventListener('load', () => {
        img.classList.add('loaded');
      }, { once: true });

      img.addEventListener('error', () => {
        // Si la imagen no existe, el placeholder de CSS queda visible
        img.remove();
      }, { once: true });

      observer.unobserve(img);
    });
  }, {
    rootMargin: '400px 0px', // carga 400px antes de entrar al viewport
  });

  images.forEach(img => observer.observe(img));
}

// ─── CONTACTO: PERSONAL Y HORARIOS ──────────────────────────────────────────
function renderContact() {
  renderStaff();
  renderSchedule();
}

function renderStaff() {
  const grid = document.getElementById('staff-grid');
  if (!grid) return;

  grid.innerHTML = '';

  CONTACTO.personal.forEach(person => {
    // Extraer iniciales (ignorar títulos académicos cortos)
    const initials = person.nombre
      .split(/\s+/)
      .filter(w => w.length > 2 && !['en', 'de', 'del'].includes(w.toLowerCase()))
      .slice(0, 2)
      .map(w => w[0])
      .join('')
      .toUpperCase();

    const card = document.createElement('div');
    card.className = `staff-card color-${person.color}`;

    card.innerHTML = `
      <div class="staff-avatar-block" aria-hidden="true">
        <span class="staff-initials">${initials}</span>
      </div>
      <div class="staff-info">
        <h3 class="staff-name">${person.nombre}</h3>
        <p class="staff-role">${person.cargo}</p>
        <div class="staff-contacts">
          <a href="mailto:${person.correo}" class="staff-contact-item" aria-label="Correo de ${person.nombre}">
            ${ICONS.mail}
            <span>${person.correo}</span>
          </a>
          <div class="staff-contact-item">
            ${ICONS.buildingsm}
            <span>${person.oficina}</span>
          </div>
          <div class="staff-contact-item">
            ${ICONS.phone}
            <span>${person.telefono}</span>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function renderSchedule() {
  const list = document.getElementById('schedule-list');
  if (!list) return;

  list.innerHTML = '';

  CONTACTO.horarios.forEach(row => {
    const isClosed = row.horas.toLowerCase() === 'cerrado';
    const div = document.createElement('div');
    div.className = `schedule-row${isClosed ? ' closed' : ''}`;

    div.innerHTML = `
      <span class="schedule-days">${row.dias}</span>
      <div class="schedule-right">
        <span class="schedule-hours">${row.horas}</span>
        <span class="schedule-detail">${row.detalle}</span>
      </div>
    `;

    list.appendChild(div);
  });
}

// ─── FORMULARIO DE CONTACTO (FORMSUBMIT.CO) ──────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Configurar el action de FormSubmit con el email de data.js
  form.action = `https://formsubmit.co/${CONTACTO.emailDestino}`;
}

// ─── FOOTER: AÑO DINÁMICO ────────────────────────────────────────────────────
function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}
