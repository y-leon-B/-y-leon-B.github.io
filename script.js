// ============================================================
// 1) DATOS — edita solo esta sección con tu información real
// ============================================================
const cv = {
  name: "Andrea Gómez Rivera",
  initials: "AG",
  title: "Desarrolladora de Software Full Stack",
  contact: ["Bogotá, Colombia", "+57 300 000 0000", "andrea.gomez@email.com", "linkedin.com/in/tu-usuario", "github.com/tu-usuario"],
  summary: "Desarrolladora de software con más de 5 años de experiencia diseñando, construyendo y desplegando aplicaciones web escalables. Experiencia en JavaScript/TypeScript, React, Node.js y Python, con enfoque en código limpio, pruebas automatizadas y trabajo en equipos ágiles.",
  skills: {
    "Lenguajes": "JavaScript, TypeScript, Python, SQL, HTML5, CSS3",
    "Frontend": "React, Next.js, Vue.js, Redux, Tailwind CSS",
    "Backend": "Node.js, Express, Django, FastAPI, REST, GraphQL",
    "Bases de datos": "PostgreSQL, MySQL, MongoDB, Redis",
    "DevOps y Cloud": "Docker, GitHub Actions, AWS (EC2, S3, Lambda), Linux, Git",
    "Metodologías": "Scrum, Kanban, TDD, Clean Code, Code Review"
  },
  skillLevels: [ // solo para la plantilla visual (0–100)
    ["JavaScript / TypeScript", 92], ["React / Next.js", 90], ["Node.js", 88], ["Python", 82],
    ["SQL / PostgreSQL", 80], ["Docker / CI-CD", 75], ["AWS", 65]
  ],
  experience: [
    { role: "Desarrolladora de Software Senior", company: "TechNova Solutions", place: "Bogotá, Colombia", dates: "Ene 2023 – Presente", bullets: [
      "Lideré el desarrollo de una plataforma SaaS con React, Node.js y PostgreSQL usada por más de 20.000 usuarios activos.",
      "Reduje el tiempo de respuesta de la API en un 40% mediante optimización de consultas y caché con Redis.",
      "Implementé pipelines CI/CD con GitHub Actions y Docker, bajando el despliegue de 45 a 10 minutos.",
      "Mentoricé a 4 desarrolladores junior y lideré revisiones de código." ] },
    { role: "Desarrolladora Full Stack", company: "Innovatech S.A.S.", place: "Medellín, Colombia", dates: "Jun 2020 – Dic 2022", bullets: [
      "Desarrollé módulos de facturación electrónica e inventarios con Python (Django) y Vue.js.",
      "Integré APIs REST y servicios de terceros, garantizando 99,9% de disponibilidad.",
      "Aumenté la cobertura de pruebas del 35% al 85% con Jest y Pytest." ] },
    { role: "Desarrolladora Frontend Junior", company: "Creativa Digital", place: "Cali, Colombia", dates: "Ene 2019 – May 2020", bullets: [
      "Construí sitios web responsivos y accesibles con HTML, CSS, JavaScript y React para más de 15 clientes.",
      "Mejoré el rendimiento (Lighthouse) de 62 a 94 puntos con carga diferida y optimización de recursos." ] }
  ],
  projects: [
    { name: "TaskFlow – Gestor de proyectos", text: "Aplicación colaborativa con tableros Kanban, autenticación JWT y notificaciones en tiempo real (React, Node.js, WebSockets, MongoDB)." },
    { name: "DataViz Dashboard", text: "Panel de analítica con gráficos interactivos y exportación de reportes (TypeScript, D3.js, FastAPI)." }
  ],
  education: [{ degree: "Ingeniería de Sistemas y Computación", school: "Universidad Nacional de Colombia", years: "2014 – 2018" }],
  certifications: [
    "AWS Certified Cloud Practitioner – Amazon Web Services (2023)",
    "Professional Scrum Master I (PSM I) – Scrum.org (2022)",
    "Meta Front-End Developer Professional Certificate – Coursera (2021)"
  ],
  languages: [["Español", "Nativo"], ["Inglés", "Avanzado (B2/C1)"]]
};

// ============================================================
// 2) PLANTILLAS — generan el HTML de cada formato
// ============================================================
const li = (items) => items.map((t) => `<li>${t}</li>`).join("");

function renderATS(d) {
  return `
  <div class="ats">
    <h1>${d.name}</h1>
    <p class="role">${d.title}</p>
    <p class="contact">${d.contact.slice(0, 3).join(" | ")}</p>
    <p class="contact">${d.contact.slice(3).join(" | ")}</p>

    <h2>Perfil profesional</h2>
    <p>${d.summary}</p>

    <h2>Habilidades técnicas</h2>
    ${Object.entries(d.skills).map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`).join("")}

    <h2>Experiencia laboral</h2>
    ${d.experience.map((e) => `
      <div class="job">
        <h3>${e.role} – ${e.company}</h3>
        <p>${e.place} | ${e.dates}</p>
        <ul>${li(e.bullets)}</ul>
      </div>`).join("")}

    <h2>Proyectos destacados</h2>
    ${d.projects.map((p) => `<p><strong>${p.name}:</strong> ${p.text}</p>`).join("")}

    <h2>Educación</h2>
    ${d.education.map((e) => `<h3>${e.degree} – ${e.school}</h3><p>${e.years}</p>`).join("")}

    <h2>Certificaciones</h2>
    <ul>${li(d.certifications)}</ul>

    <h2>Idiomas</h2>
    <p>${d.languages.map(([a, b]) => `${a}: ${b}`).join(" | ")}</p>
  </div>`;
}

function renderVisual(d) {
  return `
  <div class="visual">
    <aside>
      <div class="avatar" aria-hidden="true">${d.initials}</div>
      <h2>CONTACTO</h2>
      <ul>${li(d.contact)}</ul>
      <h2>HABILIDADES</h2>
      ${d.skillLevels.map(([n, v]) => `
        <div class="skill">${n}
          <div class="track"><div class="fill" style="width:${v}%"></div></div>
        </div>`).join("")}
      <h2>IDIOMAS</h2>
      <ul>${d.languages.map(([a, b]) => `<li><strong>${a}</strong> – ${b}</li>`).join("")}</ul>
      <h2>CERTIFICACIONES</h2>
      <ul>${li(d.certifications)}</ul>
    </aside>
    <main>
      <h1>${d.name}</h1>
      <p class="role">${d.title}</p>
      <p>${d.summary}</p>

      <h2>Experiencia</h2>
      ${d.experience.map((e) => `
        <div class="job">
          <h3>${e.role}</h3>
          <p class="meta">${e.company} · ${e.place} · ${e.dates}</p>
          <ul class="bullets">${li(e.bullets)}</ul>
        </div>`).join("")}

      <h2>Proyectos</h2>
      ${d.projects.map((p) => `<h3>${p.name}</h3><p class="meta">${p.text}</p>`).join("")}

      <h2>Educación</h2>
      ${d.education.map((e) => `<h3>${e.degree}</h3><p class="meta">${e.school} · ${e.years}</p>`).join("")}
    </main>
  </div>`;
}

const templates = { ats: renderATS, visual: renderVisual };

// ============================================================
// 3) INTERACCIÓN — cambiar formato y descargar PDF
// ============================================================
const page = document.getElementById("cv");
const tabs = document.querySelectorAll(".toggle button");
const downloadBtn = document.getElementById("btn-download");
let current = "ats";

function show(name) {
  current = name;
  page.innerHTML = templates[name](cv);
  tabs.forEach((b) => b.setAttribute("aria-selected", String(b.dataset.template === name)));
}

tabs.forEach((b) => b.addEventListener("click", () => show(b.dataset.template)));

downloadBtn.addEventListener("click", async () => {
  const suffix = current === "ats" ? "ATS" : "Visual";
  const filename = `CV_${suffix}_${cv.name.replace(/\s+/g, "_")}.pdf`;

  // Si la librería no cargó (sin internet), se usa el diálogo de impresión del navegador
  if (typeof html2pdf === "undefined") { window.print(); return; }

  downloadBtn.disabled = true;
  downloadBtn.textContent = "Generando…";
  try {
    await html2pdf().set({
      margin: 0,
      filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      pagebreak: { mode: ["css", "legacy"], avoid: [".job"] }
    }).from(page).save();
  } catch (err) {
    console.error(err);
    window.print(); // alternativa
  } finally {
    downloadBtn.disabled = false;
    downloadBtn.textContent = "Descargar PDF";
  }
});

show("ats");
