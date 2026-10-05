(function () {
  "use strict";
  const { $, esc, icon, eyebrow, delay, BTN_PRIMARY, CARD } = App;

  const featured = PROJECTS.filter((p) => p.featured);
  const pad = (n) => String(n).padStart(2, "0");

  /* ---------- Hero ---------- */
  const hero = `
    <section class="relative isolate min-h-screen flex items-center pt-24 pb-16 overflow-hidden lg:pt-32">
      <div class="absolute inset-0 -z-10 opacity-70"><div id="light-rays" class="light-rays h-full w-full"></div></div>
      <div class="container-main relative z-10 w-full">
        <div class="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          <div class="max-w-3xl">
            <div class="reveal flex items-center gap-2 mb-8">
              <span class="flex h-2 w-2 rounded-full bg-green-500 relative"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span></span>
              <span class="text-xs text-secondary font-medium tracking-wide flex items-center gap-1">${icon("mapPin", 11)}${esc(SITE.city)} · ${esc(SITE.status)}</span>
            </div>
            <h1 class="reveal text-[clamp(2.8rem,7vw,6rem)] font-bold tracking-tight leading-[1.02] text-foreground mb-4" ${delay(1)}>${esc(SITE.firstName)}<br><span class="text-secondary">${esc(SITE.lastName)}</span></h1>
            <div class="reveal flex items-center gap-3 mb-6" ${delay(2)}>
              <div class="h-px w-8 bg-accent"></div>
              <span class="text-accent font-semibold tracking-wide text-sm uppercase">${esc(SITE.role)}</span>
            </div>
            <p class="reveal text-lg lg:text-xl text-secondary leading-relaxed max-w-2xl mb-10" ${delay(3)}>${esc(SITE.tagline)}</p>
            <div class="reveal flex flex-wrap gap-4" ${delay(4)}>
              <a href="projects.html" class="${BTN_PRIMARY}">View Projects${icon("arrow")}</a>
              ${App.resumeButton()}
            </div>
            <div class="reveal flex flex-wrap gap-8 mt-14 pt-10 border-t border-border" ${delay(5)}>
              ${SITE.heroStats.map((s) => `<div><p class="text-2xl font-bold text-foreground">${esc(s.value)}</p><p class="text-sm text-muted">${esc(s.label)}</p></div>`).join("")}
            </div>
          </div>
          <div class="reveal hidden lg:block" ${delay(3)}>
            <div class="relative w-72 h-80 xl:w-80 xl:h-96">
              <div class="absolute inset-0 rounded-2xl border border-border"></div>
              <div class="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-accent/30"></div>
              <div class="relative w-full h-full rounded-2xl overflow-hidden bg-surface">
                ${App.media(SITE.photo, { alt: App.fullName, label: App.initial(SITE.firstName) + App.initial(SITE.lastName), labelCls: "text-7xl", eager: true })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;

  /* ---------- Recent impact ---------- */
  const impact = `
    <section class="section-padding border-t border-border">
      <div class="container-main">
        <div class="reveal">
          ${eyebrow("Recent Impact")}
          <h2 class="text-display-sm font-bold text-foreground mb-4 max-w-2xl">Numbers that tell<span class="text-secondary"> the story</span></h2>
          <p class="text-secondary text-lg max-w-2xl mb-16">${esc(IMPACT.intro)}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          ${IMPACT.items
            .map(
              (item, i) => `
            <div class="bg-surface p-8 flex flex-col gap-3">
              <div class="reveal flex flex-col gap-3" ${delay(i)}>
                <p class="text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-foreground leading-none tracking-tight"><span data-count="${Number(item.value)}">0</span>${esc(item.suffix || "")}</p>
                <p class="text-sm font-semibold text-foreground">${esc(item.label)}</p>
                <p class="text-sm text-secondary leading-relaxed">${esc(item.text)}</p>
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </section>`;

  /* ---------- Featured work ---------- */
  const techTags = (tech, limit) => {
    const list = tech || [];
    const extra = list.length > limit ? `<span class="tag">+${list.length - limit}</span>` : "";
    return list.slice(0, limit).map((t) => `<span class="tag">${esc(t)}</span>`).join("") + extra;
  };

  const PILL = "group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200";

  // Desktop: full-screen panels that stack over each other while scrolling (position: sticky).
  const featuredDesktop = `
    <section class="hidden lg:block border-t border-border">
      ${featured
        .map(
          (p, i) => `
        <div class="h-screen w-full bg-bg flex items-center sticky top-0" style="z-index:${i + 1}">
          <div class="container-main w-full">
            <div class="grid grid-cols-[1fr_1.15fr] gap-14 xl:gap-20 items-center">
              <div>
                <div class="flex items-center gap-2.5 mb-8">
                  <span class="text-[10px] font-semibold tracking-[0.2em] uppercase text-accent">Featured Work</span>
                  <span class="text-border mx-0.5">—</span>
                  <span class="font-mono text-xs tabular-nums text-muted/60">${pad(i + 1)} / ${pad(featured.length)}</span>
                  <div class="ml-auto flex items-center gap-2"><span class="tag">${esc(p.category)}</span><span class="font-mono text-xs text-muted/50">${esc(p.year)}</span></div>
                </div>
                <h3 class="text-display-sm font-bold tracking-tight text-foreground mb-5">${esc(p.title)}</h3>
                <p class="text-base text-secondary leading-relaxed mb-8">${esc(p.description)}</p>
                <div class="flex flex-wrap gap-2 mb-10">${techTags(p.tech, 4)}</div>
                <div class="flex items-center gap-4">
                  <a href="${App.projectUrl(p)}" class="${PILL} bg-foreground text-bg hover:bg-white">Case Study${icon("arrow", 14)}</a>
                  ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener noreferrer" class="${PILL} border border-border hover:border-zinc-600 text-secondary hover:text-foreground">Live Site${icon("arrow", 14)}</a>` : ""}
                </div>
              </div>
              <div class="relative">
                <div class="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl"></div>
                <a href="${App.projectUrl(p)}" aria-label="View ${esc(p.title)} case study" class="block relative rounded-2xl overflow-hidden border border-border/60 shadow-2xl aspect-video bg-elevated">
                  ${App.coverOf(p, { cls: "object-cover object-top", labelCls: "text-8xl", eager: i === 0 })}
                </a>
              </div>
            </div>
          </div>
        </div>`
        )
        .join("")}
    </section>`;

  // Mobile / tablet: a compact numbered list.
  const featuredMobile = `
    <section class="lg:hidden section-padding border-t border-border">
      <div class="container-main">
        <div class="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20">
          <div>${eyebrow("Featured Work")}<h2 class="text-display-sm font-bold text-foreground">Selected projects</h2></div>
          <a href="projects.html" class="group inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors duration-200">View all work${icon("arrow", 14)}</a>
        </div>
        <div>
          <div class="h-px bg-border"></div>
          ${featured
            .map(
              (p, i) => `
            <div class="reveal">
              <a href="${App.projectUrl(p)}" class="group flex items-start gap-4 sm:gap-6 py-9">
                <span class="shrink-0 font-mono text-[11px] tabular-nums text-muted/40 mt-2 w-6 select-none">${pad(i + 1)}</span>
                <div class="flex-1 min-w-0">
                  <h3 class="text-xl sm:text-[1.75rem] font-bold tracking-tight leading-none mb-3 text-foreground group-hover:text-accent-light transition-colors duration-300">${esc(p.title)}</h3>
                  <p class="text-sm text-secondary leading-relaxed max-w-lg mb-4">${esc(p.description)}</p>
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="tag">${esc(p.category)}</span><span class="text-muted/30 select-none px-0.5">·</span>
                    ${(p.tech || []).slice(0, 3).map((t) => `<span class="text-xs font-mono text-muted">${esc(t)}</span>`).join("")}
                    ${(p.tech || []).length > 3 ? `<span class="text-xs font-mono text-muted/50">+${p.tech.length - 3}</span>` : ""}
                  </div>
                </div>
                <div class="shrink-0 self-start flex flex-col items-end gap-2.5 pt-0.5">
                  <div class="hidden sm:flex w-9 h-9 rounded-full border border-border group-hover:border-accent/40 group-hover:bg-accent/10 items-center justify-center transition-all duration-300">${icon("arrow", 14)}</div>
                  <div class="relative w-20 h-[3.25rem] sm:w-32 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden border border-border/30 bg-elevated">
                    ${App.coverOf(p, { cls: "object-cover object-top scale-[1.06] group-hover:scale-100 transition-transform duration-500 ease-out", labelCls: "text-xl" })}
                    <div class="absolute inset-0 bg-bg/30 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  <span class="hidden sm:block font-mono text-[11px] tabular-nums text-muted/50">${esc(p.year)}</span>
                </div>
              </a>
              <div class="h-px bg-border"></div>
            </div>`
            )
            .join("")}
        </div>
        <div class="reveal mt-16 flex justify-center">
          <a href="projects.html" class="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-zinc-700 text-sm font-medium text-secondary hover:text-foreground hover:bg-elevated transition-all duration-300">Explore all projects${icon("arrow", 14)}</a>
        </div>
      </div>
    </section>`;

  /* ---------- Capabilities ---------- */
  const capabilities = `
    <section class="section-padding border-t border-border relative z-10 bg-bg">
      <div class="container-main">
        <div class="reveal mb-16">
          ${eyebrow("Capabilities")}
          <h2 class="text-display-sm font-bold text-foreground max-w-2xl">What I can help<span class="text-secondary"> you build</span></h2>
          <p class="text-secondary text-lg max-w-2xl mt-4">Beyond the code — here's what I actually deliver for the businesses I work with.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          ${CAPABILITIES.map(
            (c, i) => `
            <div class="bg-surface p-8 group hover:bg-elevated transition-colors duration-200">
              <div class="reveal" ${delay(i)}>
                <div class="w-10 h-10 rounded-xl bg-elevated group-hover:bg-accent/10 border border-border flex items-center justify-center mb-5 transition-colors duration-200">${icon(c.icon, 18, "text-accent")}</div>
                <h3 class="font-semibold text-foreground mb-3 leading-tight">${esc(c.title)}</h3>
                <p class="text-sm text-secondary leading-relaxed">${esc(c.text)}</p>
              </div>
            </div>`
          ).join("")}
        </div>
      </div>
    </section>`;

  /* ---------- Experience ---------- */
  const experience = `
    <section class="section-padding border-t border-border">
      <div class="container-main">
        <div class="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          <div class="reveal lg:sticky lg:top-28">
            ${eyebrow("Experience")}
            <h2 class="text-display-sm font-bold text-foreground leading-tight mb-6">${esc(EXPERIENCE.heading[0])}<br><span class="text-secondary">${esc(EXPERIENCE.heading[1])}</span></h2>
            <p class="text-secondary leading-relaxed">${esc(EXPERIENCE.intro)}</p>
          </div>
          <div class="flex flex-col">${App.timeline()}</div>
        </div>
      </div>
    </section>`;

  /* ---------- Testimonials ---------- */
  const testimonials = !TESTIMONIALS.length
    ? ""
    : `
    <section class="section-padding border-t border-border">
      <div class="container-main">
        <div class="reveal mb-16">${eyebrow("Testimonials")}<h2 class="text-display-sm font-bold text-foreground max-w-2xl">What people<span class="text-secondary"> say</span></h2></div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${TESTIMONIALS.map(
            (t, i) => `
            <div class="reveal ${CARD} p-7 flex flex-col gap-5" ${delay(i)}>
              ${icon("quote", 20, "text-accent/50")}
              <p class="text-secondary leading-relaxed text-sm flex-1">"${esc(t.quote)}"</p>
              <div class="flex items-center gap-3 pt-4 border-t border-border">
                <div class="w-9 h-9 rounded-full bg-elevated border border-border flex items-center justify-center text-xs font-bold text-accent">${esc(App.initial(t.name))}</div>
                <div><p class="text-sm font-semibold text-foreground">${esc(t.name)}</p><p class="text-xs text-muted">${esc(t.role)}</p></div>
              </div>
            </div>`
          ).join("")}
        </div>
      </div>
    </section>`;

  /* ---------- Call to action ---------- */
  const BIG = "inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl transition-all duration-200";
  const cta = `
    <section class="section-padding border-t border-border relative overflow-hidden">
      <div class="container-main relative z-10">
        <div class="reveal bg-surface/80 border border-border rounded-2xl p-10 lg:p-16 text-center max-w-3xl mx-auto backdrop-blur-sm">
          <div class="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">${icon("message", 20, "text-accent")}</div>
          <h2 class="text-display-sm font-bold text-foreground mb-4">Have a project in mind?</h2>
          <p class="text-secondary text-lg leading-relaxed mb-8 max-w-xl mx-auto">Whether you need a new product built from scratch, an existing system improved, or a technical partner for your startup — let's talk.</p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="contact.html" class="${BIG} bg-accent hover:bg-accent-dark text-white">Get In Touch${icon("arrow")}</a>
            ${SITE.whatsapp ? `<a href="https://wa.me/${esc(SITE.whatsapp)}" target="_blank" rel="noopener noreferrer" class="${BIG} border border-border hover:border-zinc-500 text-secondary hover:text-foreground">WhatsApp Me</a>` : ""}
          </div>
        </div>
      </div>
    </section>`;

  App.intro();
  App.mount("", hero + impact + (featured.length ? featuredDesktop + featuredMobile : "") + capabilities + experience + App.skillsSection() + testimonials + cta);

  /* ---------- Animated light rays behind the hero ---------- */
  (function lightRays(container) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    container.appendChild(canvas);

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rays = Array.from({ length: 16 }, (_, i) => ({
      angle: (i / 15 - 0.5) * 1.5 + (Math.random() - 0.5) * 0.08,
      width: 0.03 + Math.random() * 0.06,
      speed: 0.2 + Math.random() * 0.5,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.05 + Math.random() * 0.1,
    }));

    let w = 0, h = 0, pointer = 0.5, eased = 0.5, visible = true, frame = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = container.clientWidth;
      h = container.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(ms) {
      const t = ms / 1000;
      eased += (pointer - eased) * 0.04;
      const ox = w * (0.5 + (eased - 0.5) * 0.12);
      const oy = -h * 0.15;
      const length = h * 1.35;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (const ray of rays) {
        const pulse = 0.65 + 0.35 * Math.sin(t * ray.speed + ray.phase);
        const a = Math.PI / 2 + ray.angle + Math.sin(t * ray.speed * 0.6 + ray.phase) * 0.04 - (eased - 0.5) * 0.25;
        const half = ray.width * (0.8 + 0.2 * pulse);
        const gradient = ctx.createLinearGradient(ox, oy, ox + Math.cos(a) * length, oy + Math.sin(a) * length);
        gradient.addColorStop(0, `rgba(170, 175, 255, ${ray.alpha * pulse})`);
        gradient.addColorStop(1, "rgba(99, 102, 241, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(ox, oy);
        ctx.lineTo(ox + Math.cos(a - half) * length, oy + Math.sin(a - half) * length);
        ctx.lineTo(ox + Math.cos(a + half) * length, oy + Math.sin(a + half) * length);
        ctx.closePath();
        ctx.fill();
      }
      if (visible && !reduced) frame = requestAnimationFrame(draw);
    }

    const start = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", () => { resize(); start(); });
    window.addEventListener("pointermove", (e) => { pointer = e.clientX / window.innerWidth; }, { passive: true });
    // Stop drawing once the hero is scrolled out of view.
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    }).observe(container);

    resize();
    start();
  })($("#light-rays"));
})();
