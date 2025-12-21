<template>
  <main class="home">
    <!-- Inicio / Hero -->
    <section id="inicio" class="hero">
      <div class="hero-text">
        <h1 class="name">Esteban David Ruiz Caicedo</h1>
        <p class="subtitle">Ingeniería en Sistemas (en curso) • Desarrollador de Software</p>
        <p class="mini">
          Soy Ingeniero en Sistemas con sólidos conocimientos en desarrollo de aplicaciones web y móviles,
          y gestión de bases de datos SQL. Me caracterizo por mi capacidad analítica, adaptabilidad y
          compromiso con la mejora continua de los procesos tecnológicos. Disfruto trabajar en entornos
          colaborativos orientados a resultados y a la innovación.
        </p>

        <div class="contact-line">
          <a
            :href="`mailto:${contact.email}`"
            class="contact-link mail-link"
            :aria-label="`Enviar correo a ${contact.email}`"
          >
            <!-- Icono Gmail (sobre) -->
            <svg class="icon mail" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.3l-8 4.99L4 8.3V6l8 5 8-5v2.3z"/>
            </svg>
            {{ contact.email }}
          </a>

          <span class="sep">•</span>

          <a
            :href="contact.whatsapp"
            class="contact-link whatsapp-link"
            target="_blank"
            rel="noreferrer"
            :aria-label="`Abrir WhatsApp a ${contact.phone}`"
          >
            <!-- Icono WhatsApp -->
            <svg class="icon whatsapp" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 .01 5.37 0 12a11.95 11.95 0 001.64 6.07L0 24l6.17-1.62A12 12 0 0024 12c0-3.2-1.25-6.2-3.48-8.52zM12 21.5a9.46 9.46 0 01-4.84-1.35l-.35-.2-3.66.96.98-3.57-.22-.37A9.45 9.45 0 1121.5 12 9.46 9.46 0 0112 21.5zM17.6 14.05c-.26-.13-1.54-.77-1.78-.86s-.4-.13-.57.13-.65.86-.8 1.04-.29.2-.53.07a6.19 6.19 0 01-1.84-1.14 6.86 6.86 0 01-1.32-1.63c-.14-.24 0-.37.1-.5.11-.11.25-.29.38-.43.13-.13.17-.22.26-.37.09-.13.04-.25-.02-.37-.07-.12-.57-1.36-.78-1.86-.2-.48-.4-.41-.56-.41-.15 0-.33 0-.5 0s-.37.05-.56.26c-.19.21-.72.7-.72 1.71s.74 1.98.84 2.12c.11.14 1.45 2.3 3.51 3.22 2.06.92 2.06.61 2.43.57.37-.04 1.49-.61 1.7-1.21s.21-1.18.15-1.3c-.05-.11-.19-.16-.45-.29z"/>
            </svg>
            {{ contact.phone }}
          </a>

          <span class="sep">•</span>

          <span class="contact-location">{{ contact.location }}</span>
        </div>
      </div>
    </section>

    <!-- Formación académica -->
    <section id="formacion" class="section-block">
      <h2>🎓 Formación académica</h2>
      <ul class="list">
        <li>
          <strong>Bachiller Comercial</strong> — 2020<br />
          <span class="muted">Institución Educativa Liceo del Pacífico</span>
        </li>
        <li>
          <strong>Técnico en Sistemas</strong> — 2020<br />
          <span class="muted">Instituto Compusistemas</span>
        </li>
        <li>
          <strong>Ingeniería en Sistemas</strong> — Actualmente<br />
          <span class="muted">Universidad del Pacífico</span>
        </li>
      </ul>
    </section>

    <!-- Habilidades -->
    <section id="habilidades" class="section-block">
      <h2>🛠️ Habilidades</h2>

      <div class="skills-grid grid cols-2">
        <div class="skill-card card">
          <h3>Lenguajes & Frameworks</h3>
          <p class="muted">C#, Java, JavaScript, TypeScript, React, Dart, Spring Boot</p>
        </div>

        <div class="skill-card card">
          <h3>Bases de datos</h3>
          <p class="muted">MySQL, Firebase, SQL Server</p>
        </div>

        <div class="skill-card card">
          <h3>Herramientas & Control de versiones</h3>
          <p class="muted">Git, GitHub, Postman, VSCode, IntelliJ IDEA</p>
        </div>

        <div class="skill-card card">
          <h3>Sistemas operativos & Entornos</h3>
          <p class="muted">Windows, Linux (básico), Docker (básico)</p>
        </div>
      </div>
    </section>

    <!-- Experiencia -->
    <section id="experiencia" class="section-block">
      <h2>💼 Experiencia</h2>

      <div class="exp-card card">
        <div class="exp-row">
          <strong>Auxiliar de sistemas — Libernet</strong>
          <span class="muted">2018 - 2019</span>
        </div>
        <ul class="list">
          <li>Mantenimiento de equipos de cómputo.</li>
          <li>Atención al cliente.</li>
          <li>Venta de productos tecnológicos.</li>
        </ul>
      </div>
    </section>

    <!-- Proyectos -->
    <section id="proyectos" class="section-block">
      <h2>🚀 Proyectos</h2>

      <div class="projects-grid">
        <article
          v-for="p in projects"
          :key="p.name"
          class="project-card card"
          role="article"
          :aria-labelledby="`title-${p.name}`"
        >
          <div class="project-top">
            <div>
              <h3 :id="`title-${p.name}`" class="project-title">{{ p.name }}</h3>
              <p v-if="p.subtitle" class="project-subtitle">{{ p.subtitle }}</p>
            </div>
            <div class="project-meta">
              <span v-if="p.collab" class="badge">🤝 {{ p.collab }}</span>
              <span v-else class="pill-tech" v-if="p.tech && p.tech.length">{{ p.tech[0] }}</span>
            </div>
          </div>

          <p class="desc">{{ p.description }}</p>

          <div class="tags" v-if="p.tech && p.tech.length">
            <span v-for="t in p.tech" :key="t" class="tag">{{ t }}</span>
          </div>

          <div class="project-links">
            <a v-if="p.repo" :href="p.repo" target="_blank" rel="noreferrer" class="btn">Repositorio</a>
            <a v-if="p.live" :href="p.live" target="_blank" rel="noreferrer" class="btn ghost">Ir al sitio</a>
          </div>
        </article>
      </div>
    </section>

    <!-- Certificaciones -->
    <section id="certificaciones" class="section-block">
      <h2>📜 Certificaciones</h2>
      <ul class="list">
        <li>Desarrollo en Java de cero a experto — Udemy</li>
        <li>Desarrollo en C# de cero a experto — Udemy</li>
        <li>Programación Orientada a Objetos — Platzi</li>
      </ul>
    </section>

    <!-- Contacto -->
    <section id="contacto" class="section-block contact-block">
      <h2>📫 Contáctame</h2>
      <p>¿Tienes un proyecto o una idea? Escríbeme y te respondo pronto.</p>
      <ul class="contacts">
        <li>
          <strong>Correo:</strong>
          <a
            :href="`mailto:${contact.email}`"
            class="contact-link mail-link"
            :aria-label="`Enviar correo a ${contact.email}`"
          >
            <svg class="icon mail" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.3l-8 4.99L4 8.3V6l8 5 8-5v2.3z"/>
            </svg>
            {{ contact.email }}
          </a>
        </li>
        <li>
          <strong>WhatsApp:</strong>
          <a
            :href="contact.whatsapp"
            class="contact-link whatsapp-link"
            target="_blank"
            rel="noreferrer"
            :aria-label="`Abrir WhatsApp a ${contact.phone}`"
          >
            <svg class="icon whatsapp" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 .01 5.37 0 12a11.95 11.95 0 001.64 6.07L0 24l6.17-1.62A12 12 0 0024 12c0-3.2-1.25-6.2-3.48-8.52zM12 21.5a9.46 9.46 0 01-4.84-1.35l-.35-.2-3.66.96.98-3.57-.22-.37A9.45 9.45 0 1121.5 12 9.46 9.46 0 0112 21.5zM17.6 14.05c-.26-.13-1.54-.77-1.78-.86s-.4-.13-.57.13-.65.86-.8 1.04-.29.2-.53.07a6.19 6.19 0 01-1.84-1.14 6.86 6.86 0 01-1.32-1.63c-.14-.24 0-.37.1-.5.11-.11.25-.29.38-.43.13-.13.17-.22.26-.37.09-.13.04-.25-.02-.37-.07-.12-.57-1.36-.78-1.86-.2-.48-.4-.41-.56-.41-.15 0-.33 0-.5 0s-.37.05-.56.26c-.19.21-.72.7-.72 1.71s.74 1.98.84 2.12c.11.14 1.45 2.3 3.51 3.22 2.06.92 2.06.61 2.43.57.37-.04 1.49-.61 1.7-1.21s.21-1.18.15-1.3c-.05-.11-.19-.16-.45-.29z"/>
            </svg>
            {{ contact.phone }}
          </a>
        </li>
        <li><strong>Ubicación:</strong> {{ contact.location }}</li>
        <li><strong>GitHub:</strong> <a href="https://github.com/Esteban1720" target="_blank" rel="noreferrer">Esteban1720</a></li>
      </ul>
    </section>
  </main>
</template>

<script setup>
const contact = {
  email: 'dr0238335@gmail.com',
  phone: '+57 320 701 2503',
  location: 'Buenaventura',
  whatsapp: 'https://wa.me/573207012503'
}

const projects = [
  {
    name: 'Control de Acceso',
    description: 'Aplicación Flutter para control de acceso (registro y escaneo de códigos) usando Firebase Firestore. APK disponible en releases.',
    tech: ['Flutter', 'Firebase', 'Firestore'],
    repo: 'https://github.com/Esteban1720/demo',
    live: 'https://controldeaccesoup.netlify.app/'
  },
  {
    name: 'Ruta Limpia',
    description: 'Sistema RutaLimpia para gestión de rutas y vehículos. Mapas interactivos con Mapbox; autenticación y panel administrativo.',
    tech: ['Vue', 'Node', 'Mapbox', 'MySQL', 'Tailwind'],
    collab: 'Colaborador',
    repo: 'https://github.com/gabrielsanchez16/Project-University'
  },
  {
    name: 'Gestión de Citas Médicas',
    subtitle: 'Sistema de turnos y gestión clínica',
    description: 'Aplicación Java (Spring Boot) para gestionar pacientes, agendas y reportes. (Repositorio privado o movido).',
    tech: ['Java 17', 'Spring Boot', 'Thymeleaf', 'MariaDB', 'Spring Security', 'JasperReports'],
    repo: null
  },
  {
    name: 'EmuChull',
    description: 'Launcher de emuladores creado en Flutter. Instalador disponible en la página y releases en GitHub.',
    tech: ['Flutter', 'Dart'],
    repo: 'https://github.com/Esteban1720/EmuChull',
    live: 'https://emuchull.netlify.app/'
  }
]
</script>

<style scoped>
/* Iconos (unificado) */
.icon {
  width: 18px;
  height: 18px;
  display: inline-block;
  flex-shrink: 0;
  fill: currentColor;
  vertical-align: middle;
  transition: transform 0.2s ease, color 0.25s ease, filter 0.25s ease;
}

/* Colores específicos para íconos */
.icon.mail {
  color: #D44638; /* Rojo Gmail */
}

.icon.whatsapp {
  color: #25D366; /* Verde WhatsApp */
}

/* Hacer que el texto del enlace tome el color del icono al hover/focus */
.mail-link:hover,
.mail-link:focus {
  color: #D44638;
}
.whatsapp-link:hover,
.whatsapp-link:focus {
  color: #25D366;
}

/* Efecto hover suave para icono (agranda + glow) */
.contact-link:hover .icon,
.contact-link:focus .icon {
  transform: scale(1.15);
  filter: drop-shadow(0 0 6px currentColor);
}

/* ------------------------- resto de estilos ------------------------- */

.home { padding-bottom: 48px; }

/* Hero */
.hero { text-align: center; padding: 36px 16px; }
.name { font-size: 28px; font-weight: 700; margin-bottom: 6px; }
.subtitle { color: rgba(255,255,255,0.85); margin-bottom: 12px; font-weight:600; }
.mini { color: rgba(255,255,255,0.9); max-width: 900px; margin: 0 auto 14px; text-align: center; }

/* contact-line */
.contact-line { margin-top: 12px; display:flex; justify-content:center; align-items:center; gap:8px; font-weight:600; flex-wrap:wrap; }
.contact-link { color: var(--accent-1); text-decoration:none; display:inline-flex; align-items:center; gap:8px; padding:4px 6px; border-radius:6px; }
.contact-link:hover { text-decoration:underline; }
.contact-location { color: rgba(255,255,255,0.9); }

/* section-block minor overrides to match layout */
.section-block { padding: 22px; margin-top: 24px; }

/* projects improved */
.projects-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-top: 16px;
}

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 6px 20px rgba(0,0,0,0.28);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 36px rgba(0,0,0,0.38);
  border-color: rgba(255,204,112,0.25);
}

.project-top {
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:12px;
  margin-bottom:8px;
}

.project-title {
  color: #ffdd99;
  font-size: 18px;
  margin: 0;
}

.project-subtitle {
  color: rgba(255,255,255,0.8);
  font-size: 13px;
  margin-top:4px;
}

.project-meta { display:flex; gap:8px; align-items:center; }

.badge {
  background: linear-gradient(90deg, #ffcc70, #ff8c70);
  color: #2f0743;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 12px;
  box-shadow: 0 6px 18px rgba(255,140,112,0.12);
}

.pill-tech {
  background: rgba(255,255,255,0.06);
  color: #ffdca3;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 12px;
  border: 1px solid rgba(255,255,255,0.06);
}

.desc {
  color: rgba(255,255,255,0.93);
  margin: 8px 0 12px 0;
  font-size: 14px;
  line-height: 1.45;
}

.tags { display:flex; flex-wrap:wrap; gap:8px; margin-bottom: 12px; }

.tag {
  background: rgba(255,255,255,0.06);
  color: #ffdca3;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  border: 1px solid rgba(255,255,255,0.06);
}

.project-links { display:flex; gap:10px; margin-top: 6px; }

.btn {
  background: linear-gradient(90deg, #ffcc70, #ff8c70);
  color: #2f0743;
  font-weight: 700;
  padding: 8px 14px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 14px;
  transition: transform .18s ease, box-shadow .18s ease;
  border: none;
  display:inline-flex;
  align-items:center;
  gap:8px;
}
.btn:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(255,204,112,0.2); }

.btn.ghost {
  background: transparent;
  color: #ffdd99;
  border: 1px solid rgba(255,204,112,0.18);
}
.btn.ghost:hover { box-shadow: 0 8px 24px rgba(255,204,112,0.12); }

/* small utilities */
.card { padding: 12px; }
.muted { color: rgba(255,255,255,0.78); font-size: 14px; }

/* responsive */
@media (max-width: 880px) {
  .projects-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 520px) {
  .projects-grid { grid-template-columns: 1fr; }
  .project-top { flex-direction: column; align-items: flex-start; gap:8px; }
}

/* --- Responsividad mejorada --- */

/* Hero: padding y tipografías fluidas */
.hero {
  text-align: center;
  padding: clamp(28px, 6vh, 80px) 16px;
}

.name {
  /* escala entre 1.6rem y 2.4rem según ancho */
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 700;
  margin-bottom: 6px;
}

.subtitle {
  font-size: clamp(0.95rem, 2.2vw, 1.05rem);
  color: rgba(255,255,255,0.85);
  margin-bottom: 12px;
}

.mini {
  color: rgba(255,255,255,0.9);
  max-width: 900px;
  margin: 0 auto 14px;
  text-align: center;
  padding: 0 12px; /* evita que el texto pegue en móviles */
  font-size: clamp(0.95rem, 1.6vw, 1rem);
  line-height: 1.5;
}

/* contact tweaks for mobile */
.contact-line { gap: 10px; }

/* Projects grid: ajustar min para pantallas pequeñas */
.projects-grid {
  display: grid;
  gap: 20px;
  /* permite que las tarjetas se ajusten mejor en pantallas estrechas */
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 16px;
}

/* Tarjetas y tipografías dentro de proyectos */
.project-card {
  padding: clamp(12px, 2.2vw, 18px);
  border-radius: 14px;
}

.project-title {
  color: #ffdd99;
  font-size: clamp(16px, 2.2vw, 18px);
  margin: 0;
}

/* Tags y links permiten wrap */
.tags {
  display: flex;
  flex-wrap: wrap; /* <-- evita overflow */
  gap: 8px;
  margin-bottom: 12px;
}

.project-links {
  display: flex;
  gap: 10px;
  margin-top: 6px;
  flex-wrap: wrap; /* <-- los botones pasan a nueva línea si falta espacio */
}

/* Botones: padding responsivo */
.btn {
  padding: clamp(6px, 1.2vw, 8px) 14px;
  font-size: clamp(13px, 1.4vw, 14px);
}

/* Opcional: mejora de accesibilidad y preferencia de movimiento */
@media (prefers-reduced-motion: reduce) {
  .project-card,
  .btn {
    transition: none !important;
  }
}
</style>
