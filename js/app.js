/* Shared helpers, header, footer and section builders used by every page. */
const App = (function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const fullName = `${SITE.firstName} ${SITE.lastName}`.trim();

  /* ---------- Icons (Lucide paths) ---------- */
  const ICONS = {
    menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    arrow: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    arrowLeft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    chevronLeft: '<path d="m15 18-6-6 6-6"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    mapPin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
    quote: '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>',
    message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    trending: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    coins: '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>',
    dashboard: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    smartphone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    youtube: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    twitter: '<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>',
  };

  const icon = (name, size = 16, cls = "") =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  /* ---------- Reusable class strings ---------- */
  const BTN = "inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-200";
  const BTN_PRIMARY = `${BTN} bg-accent hover:bg-accent-dark text-white`;
  const BTN_GHOST = `${BTN} border border-border hover:border-zinc-500 text-secondary hover:text-foreground`;
  const CARD = "bg-surface border border-border rounded-xl hover:border-zinc-600 transition-colors duration-200";

  const eyebrow = (text) => `<p class="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">${esc(text)}</p>`;

  const resumeButton = (label = "Download Resume") =>
    SITE.resume
      ? `<a href="${esc(SITE.resume)}" download target="_blank" rel="noopener noreferrer" class="${BTN_GHOST}">${label}${icon("download")}</a>`
      : "";

  const SOCIAL_LABELS = { github: "GitHub", linkedin: "LinkedIn", twitter: "Twitter / X", youtube: "YouTube" };
  const socials = () =>
    Object.entries(SITE.socials)
      .filter(([, url]) => url)
      .map(([key, url]) => ({ key, url, label: SOCIAL_LABELS[key] }));

  /* ---------- Images & placeholders ---------- */
  // Stable hue per seed so each image-less project keeps its own colour.
  const hueOf = (text) => [...String(text)].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) % 360, 7);

  // Fills its (relative) parent with the image, or a generated gradient when src is empty.
  function media(src, { alt = "", seed = alt, cls = "object-cover", label = "", labelCls = "text-5xl", eager = false } = {}) {
    if (src) {
      return `<img src="${esc(src)}" alt="${esc(alt)}" ${eager ? "" : 'loading="lazy"'} class="absolute inset-0 h-full w-full ${cls}">`;
    }
    const hue = hueOf(seed);
    return `<div class="absolute inset-0 flex items-center justify-center ${cls}" style="background:linear-gradient(135deg,hsl(${hue} 60% 32%),hsl(${(hue + 50) % 360} 65% 14%))" role="img" aria-label="${esc(alt)}"><span class="${labelCls} font-bold tracking-tight text-white/80 select-none">${esc(label)}</span></div>`;
  }

  const initial = (text) => String(text).trim().charAt(0).toUpperCase();

  // Always returns at least one entry; image-less projects get three placeholders so the gallery still works.
  function imagesOf(project) {
    const list = project.images && project.images.length ? project.images : ["", "", ""];
    return list.map((src, i) => ({ src, seed: `${project.title}${i || ""}`, label: i ? String(i + 1) : initial(project.title) }));
  }

  const coverOf = (project, opts = {}) => {
    const cover = imagesOf(project)[0];
    return media(cover.src, { alt: project.title, seed: cover.seed, label: cover.label, ...opts });
  };

  const projectUrl = (project) => `project.html?slug=${encodeURIComponent(project.slug)}`;

  /* ---------- Header ---------- */
  const NAV = [
    { id: "about", label: "About", href: "about.html" },
    { id: "projects", label: "Projects", href: "projects.html" },
    { id: "contact", label: "Contact", href: "contact.html" },
  ];

  function renderHeader() {
    const page = document.body.dataset.page;
    const link = (item, mobile) => {
      const active = item.id === page;
      const underline = active && !mobile ? '<span class="absolute -bottom-1 left-0 right-0 h-px bg-accent"></span>' : "";
      return `<a href="${item.href}" ${active ? 'aria-current="page"' : ""} class="relative ${mobile ? "text-base py-1" : "text-sm"} font-medium transition-colors duration-200 ${active ? "text-foreground" : "text-secondary hover:text-foreground"}">${item.label}${underline}</a>`;
    };
    const hire = (extra) =>
      `<a href="contact.html" class="text-sm font-medium px-4 py-2 rounded-lg border border-border hover:border-accent/50 hover:text-accent transition-all duration-200 ${extra}">Hire Me</a>`;

    document.body.insertAdjacentHTML(
      "afterbegin",
      `<header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent">
        <div class="container-main flex items-center justify-between h-16 lg:h-20">
          <a href="index.html" class="font-bold text-lg tracking-tight uppercase text-foreground hover:text-accent transition-colors">${esc(SITE.logo)}<span class="text-accent">.</span></a>
          <nav class="hidden md:flex items-center gap-8" aria-label="Main">${NAV.map((n) => link(n, false)).join("")}${hire("")}</nav>
          <button id="menu-toggle" class="md:hidden text-secondary hover:text-foreground transition-colors" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu">
            <span data-open>${icon("menu", 22)}</span><span data-close class="hidden">${icon("x", 22)}</span>
          </button>
        </div>
        <nav id="mobile-menu" class="hidden md:hidden border-t border-border" aria-label="Mobile">
          <div class="container-main py-6 flex flex-col items-start gap-4">${NAV.map((n) => link(n, true)).join("")}${hire("mt-2")}</div>
        </nav>
      </header>`
    );

    const header = $("#site-header");
    const toggle = $("#menu-toggle");
    const menu = $("#mobile-menu");
    const SOLID = ["bg-bg/95", "backdrop-blur-md", "border-border"];
    let open = false;

    const paint = () => {
      const solid = open || window.scrollY > 20;
      SOLID.forEach((c) => header.classList.toggle(c, solid));
      header.classList.toggle("border-transparent", !solid);
    };
    const setOpen = (value) => {
      open = value;
      menu.classList.toggle("hidden", !open);
      $("[data-open]", toggle).classList.toggle("hidden", open);
      $("[data-close]", toggle).classList.toggle("hidden", !open);
      toggle.setAttribute("aria-expanded", open);
      paint();
    };

    toggle.addEventListener("click", () => setOpen(!open));
    window.addEventListener("scroll", paint, { passive: true });
    window.addEventListener("resize", () => open && window.innerWidth >= 768 && setOpen(false));
    paint();
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    const socialLinks = socials()
      .map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}" class="text-muted hover:text-foreground transition-colors duration-200">${icon(s.key, 18)}</a>`)
      .join("");

    document.body.insertAdjacentHTML(
      "beforeend",
      `<footer class="border-t border-border bg-bg">
        <section class="container-main py-24 lg:py-36">
          <div class="max-w-4xl">
            <p class="reveal text-sm font-medium tracking-widest uppercase text-accent mb-6">Ready to build?</p>
            <h2 class="reveal text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-tight leading-[1.05] text-foreground mb-10">Let's build<br><span class="text-secondary">something great</span><br>together.</h2>
            <div class="reveal flex flex-wrap gap-4">
              <a href="contact.html" class="${BTN_PRIMARY}">Start a project${icon("arrow")}</a>
              ${resumeButton()}
            </div>
          </div>
        </section>
        <div class="border-t border-border">
          <div class="container-main py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div class="flex flex-col gap-1">
              <span class="text-sm text-secondary"><a href="mailto:${esc(SITE.email)}" class="hover:text-accent transition-colors">${esc(SITE.email)}</a></span>
              <span class="text-xs text-muted">${esc(SITE.city)} · ${esc(SITE.timezone)}</span>
            </div>
            <div class="flex items-center gap-5">${socialLinks}</div>
            <p class="text-xs text-muted order-last sm:order-none">© ${new Date().getFullYear()} ${esc(fullName)}</p>
          </div>
        </div>
      </footer>`
    );
  }

  /* ---------- Scroll reveal & count-up ---------- */
  const revealer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealer.unobserve(entry.target);
      }),
    { rootMargin: "0px 0px -40px 0px" }
  );

  // Call after inserting new markup; picks up any .reveal / .reveal-x not yet watched.
  function observeReveals(root = document) {
    $$(".reveal:not([data-watched]), .reveal-x:not([data-watched])", root).forEach((el) => {
      el.dataset.watched = "";
      // Anything already on screen is revealed straight away rather than waiting on the observer.
      // (Reading the rect also forces a layout, so the fade still plays.)
      if (el.getBoundingClientRect().top < window.innerHeight - 40) el.classList.add("is-visible");
      else revealer.observe(el);
    });
  }

  // Staggers siblings: delay(i) → inline style for the i-th item of a grid.
  const delay = (i, step = 80) => `style="transition-delay:${Math.min(i, 8) * step}ms"`;

  function countUp(el) {
    const target = Number(el.dataset.count);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = target;
      return;
    }
    const duration = 1500;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  function observeCounters(root = document) {
    const counterObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          countUp(entry.target);
          counterObserver.unobserve(entry.target);
        }),
      { threshold: 0.4 }
    );
    $$("[data-count]", root).forEach((el) => counterObserver.observe(el));
  }

  /* ---------- Sections shared between pages ---------- */
  function timelineItem(job, isLast) {
    return `
      <div class="reveal-x relative pl-8 ${isLast ? "" : "pb-12"}">
        ${isLast ? "" : '<div class="absolute left-[11px] top-8 bottom-0 w-px bg-border"></div>'}
        <div class="absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 border-accent bg-bg"></div>
        <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 class="font-semibold text-foreground">${esc(job.title)}</h3>
            <p class="text-accent text-sm font-medium">${esc(job.company)}<span class="text-muted ml-2">· ${esc(job.type)}</span></p>
          </div>
          <span class="text-xs font-mono text-muted bg-elevated border border-border px-2.5 py-1 rounded-lg flex items-center gap-1">${icon("calendar", 11)}${esc(job.period)}</span>
        </div>
        <p class="text-secondary text-sm leading-relaxed mb-4">${esc(job.summary)}</p>
        <ul class="flex flex-col gap-2">
          ${(job.points || []).map((p) => `<li class="flex items-start gap-2 text-sm text-secondary"><span class="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2"></span>${esc(p)}</li>`).join("")}
        </ul>
      </div>`;
  }

  const timeline = () => EXPERIENCE.items.map((job, i) => timelineItem(job, i === EXPERIENCE.items.length - 1)).join("");

  function skillsSection() {
    return `
      <section class="section-padding border-t border-border">
        <div class="container-main">
          <div class="reveal mb-16">
            ${eyebrow("Technical Skills")}
            <h2 class="text-display-sm font-bold text-foreground max-w-2xl">The tools I<span class="text-secondary"> build with</span></h2>
            <p class="text-secondary text-lg max-w-2xl mt-4">${esc(SKILLS.intro)}</p>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${SKILLS.groups
              .map(
                (group, i) => `
              <div class="reveal ${CARD} p-6" ${delay(i)}>
                <h3 class="text-xs font-semibold tracking-widest uppercase text-accent mb-4">${esc(group.name)}</h3>
                <div class="flex flex-wrap gap-2">
                  ${group.items.map((s) => `<span class="text-xs px-2.5 py-1 rounded-md bg-elevated border border-border text-secondary font-medium">${esc(s)}</span>`).join("")}
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </section>`;
  }

  /* ---------- Page bootstrap ---------- */
  // Each page script calls App.mount(title, html) once it has built its markup.
  function mount(title, html) {
    document.title = title ? `${title} | ${fullName}` : `${fullName} — ${SITE.role}`;
    renderHeader();
    $("#main").innerHTML = html;
    renderFooter();
    observeReveals();
    observeCounters();
  }

  return {
    $, $$, esc, icon, fullName, initial,
    BTN_PRIMARY, BTN_GHOST, CARD,
    eyebrow, resumeButton, socials,
    media, imagesOf, coverOf, projectUrl,
    observeReveals, delay, timeline, skillsSection, mount,
  };
})();
