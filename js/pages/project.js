(function () {
  "use strict";
  const { $, $$, esc, icon, delay, BTN_PRIMARY } = App;

  const slug = new URLSearchParams(location.search).get("slug");
  const project = PROJECTS.find((p) => p.slug === slug);

  const backLink = `
    <div class="container-main pt-8 pb-4">
      <a href="projects.html" class="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors">${icon("arrowLeft", 14)}All Projects</a>
    </div>`;

  if (!project) {
    App.mount(
      "Project not found",
      `${backLink}
      <section class="container-main py-24 text-center">
        <h1 class="text-display-sm font-bold text-foreground mb-4">Project not found</h1>
        <p class="text-secondary mb-8">That project doesn't exist or may have been renamed.</p>
        <a href="projects.html" class="${BTN_PRIMARY}">Browse all projects${icon("arrow")}</a>
      </section>`
    );
    return;
  }

  const images = App.imagesOf(project);
  const shot = (image, opts) => App.media(image.src, { seed: image.seed, label: image.label, ...opts });

  const SMALL_BTN = "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all";

  const header = `
    <section class="container-main py-12 lg:py-16">
      <div class="reveal">
        <div class="flex flex-wrap items-center gap-3 mb-6">
          <span class="tag">${esc(project.category)}</span>
          ${project.year ? `<span class="flex items-center gap-1.5 text-xs text-muted font-mono">${icon("calendar", 11)}${esc(project.year)}</span>` : ""}
          ${project.status ? `<span class="flex items-center gap-1.5 text-xs text-green-400 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>${esc(project.status)}</span>` : ""}
        </div>
        <h1 class="text-display-md font-bold text-foreground mb-4">${esc(project.title)}</h1>
        <p class="text-lg text-secondary leading-relaxed max-w-3xl mb-8">${esc(project.description)}</p>
        <div class="flex flex-wrap gap-4">
          ${project.live ? `<a href="${esc(project.live)}" target="_blank" rel="noopener noreferrer" class="${SMALL_BTN} bg-accent hover:bg-accent-dark text-white">${icon("external", 14)}View Live Site</a>` : ""}
          ${project.video ? `<a href="${esc(project.video)}" target="_blank" rel="noopener noreferrer" class="${SMALL_BTN} border border-border hover:border-red-500/50 text-secondary hover:text-red-400">${icon("youtube", 14)}Watch Demo</a>` : ""}
        </div>
      </div>
    </section>`;

  const gallery = `
    <section class="container-main pb-16">
      <button data-open="0" aria-label="View ${esc(project.title)} full size" class="block relative w-full h-[40vh] lg:h-[55vh] rounded-2xl overflow-hidden border border-border bg-elevated cursor-pointer group/cover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
        ${shot(images[0], { alt: project.title, cls: "object-cover transition-transform duration-500 group-hover/cover:scale-[1.02]", labelCls: "text-9xl", eager: true })}
        <div class="absolute inset-0 bg-black/0 group-hover/cover:bg-black/10 transition-colors duration-300"></div>
        ${images.length > 1 ? `<div class="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm font-mono">1 / ${images.length}</div>` : ""}
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cover:opacity-100 transition-opacity duration-200">
          <div class="bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">Click to expand</div>
        </div>
      </button>
      ${
        images.length > 1
          ? `<div class="mt-3 grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-8 gap-2">
              ${images
                .slice(1)
                .map(
                  (image, i) => `
                <button data-open="${i + 1}" aria-label="View screenshot ${i + 2} of ${images.length}" class="relative aspect-video rounded-lg overflow-hidden border border-border bg-elevated cursor-pointer hover:border-zinc-500 hover:opacity-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  ${shot(image, { alt: `${project.title} screenshot ${i + 2}`, labelCls: "text-lg" })}
                </button>`
                )
                .join("")}
            </div>`
          : ""
      }
    </section>`;

  const techStack = !(project.tech || []).length
    ? ""
    : `
    <section class="container-main pb-16">
      <div class="flex items-start gap-3 flex-wrap">
        <div class="flex items-center gap-2 mr-2 py-1">${icon("tag", 14, "text-muted")}<span class="text-sm font-semibold text-secondary">Tech Stack</span></div>
        ${project.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
      </div>
    </section>`;

  const caseStudy = [
    ["Problem", project.problem],
    ["Solution", project.solution],
    ["Results", project.results],
  ].filter(([, text]) => text);

  const writeUp =
    !caseStudy.length && !project.about
      ? ""
      : `
    <section class="container-main pb-20">
      <div class="flex flex-col gap-4">
        ${caseStudy
          .map(
            ([title, text], i) => `
          <div class="reveal bg-surface border border-border rounded-xl p-7" ${delay(i)}>
            <div class="flex items-center gap-4 mb-4"><h3 class="text-xs font-bold tracking-widest uppercase text-accent">${title}</h3><div class="flex-1 h-px bg-border"></div></div>
            <p class="text-secondary leading-relaxed whitespace-pre-line">${esc(text)}</p>
          </div>`
          )
          .join("")}
      </div>
      ${
        project.about
          ? `<div class="reveal ${caseStudy.length ? "mt-6" : ""} bg-surface border border-border rounded-xl p-8">
              <h3 class="font-semibold text-foreground mb-4">About this project</h3>
              <p class="text-secondary leading-relaxed whitespace-pre-line">${esc(project.about)}</p>
            </div>`
          : ""
      }
    </section>`;

  const related = PROJECTS.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3);
  const more = !related.length
    ? ""
    : `
    <section class="border-t border-border section-padding">
      <div class="container-main">
        <h2 class="text-xl font-bold text-foreground mb-8">More ${esc(project.category)} Projects</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${related
            .map(
              (p) => `
            <a href="${App.projectUrl(p)}" class="group bg-surface border border-border rounded-xl overflow-hidden hover:border-zinc-600 transition-colors duration-200">
              <div class="relative h-36 overflow-hidden bg-elevated">${App.coverOf(p, { cls: "object-cover group-hover:scale-105 transition-transform duration-500", labelCls: "text-4xl" })}</div>
              <div class="p-5">
                <h3 class="font-semibold text-foreground text-sm group-hover:text-accent transition-colors mb-1">${esc(p.title)}</h3>
                <p class="text-xs text-secondary line-clamp-2">${esc(p.description)}</p>
              </div>
            </a>`
            )
            .join("")}
        </div>
      </div>
    </section>`;

  App.mount(project.title, backLink + header + gallery + techStack + writeUp + more);

  /* ---------- Lightbox ---------- */
  const ROUND = "rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white";
  const multiple = images.length > 1;

  document.body.insertAdjacentHTML(
    "beforeend",
    `<div id="lightbox" class="hidden fixed inset-0 z-[60] bg-black/[0.92] backdrop-blur-md flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Image lightbox">
      <div class="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-4 z-10">
        <span id="lb-count" class="text-white/60 text-sm font-mono"></span>
        <button id="lb-close" class="w-9 h-9 ${ROUND}" aria-label="Close">${icon("x", 18)}</button>
      </div>
      <div class="relative w-full max-w-6xl mx-4 sm:mx-12"><div id="lb-stage" class="relative w-full aspect-video"></div></div>
      ${
        multiple
          ? `<button id="lb-prev" class="absolute left-3 sm:left-6 w-10 h-10 ${ROUND}" aria-label="Previous image">${icon("chevronLeft", 20)}</button>
             <button id="lb-next" class="absolute right-3 sm:right-6 w-10 h-10 ${ROUND}" aria-label="Next image">${icon("chevronRight", 20)}</button>
             <div id="lb-thumbs" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 max-w-[90vw] overflow-x-auto pb-1"></div>`
          : ""
      }
    </div>`
  );

  const lightbox = $("#lightbox");
  let current = 0;
  let opener = null;

  function show(index) {
    current = (index + images.length) % images.length;
    const image = images[current];
    $("#lb-count").textContent = `${current + 1} / ${images.length}`;
    $("#lb-stage").innerHTML = shot(image, { alt: `${project.title} — image ${current + 1}`, cls: image.src ? "object-contain" : "rounded-xl", labelCls: "text-9xl", eager: true });
    if (!multiple) return;
    $("#lb-thumbs").innerHTML = images
      .map(
        (thumb, i) => `
        <button data-go="${i}" aria-label="Go to image ${i + 1}" class="relative flex-shrink-0 w-12 h-8 rounded overflow-hidden border-2 transition-all ${i === current ? "border-white opacity-100" : "border-white/30 opacity-50 hover:opacity-80"}">
          ${shot(thumb, { labelCls: "text-[10px]" })}
        </button>`
      )
      .join("");
  }

  function open(index, trigger) {
    opener = trigger;
    lightbox.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    show(index);
    $("#lb-close").focus();
  }

  function close() {
    lightbox.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    if (opener) opener.focus();
  }

  $$("[data-open]").forEach((btn) => btn.addEventListener("click", () => open(Number(btn.dataset.open), btn)));
  $("#lb-close").addEventListener("click", close);

  if (multiple) {
    $("#lb-prev").addEventListener("click", () => show(current - 1));
    $("#lb-next").addEventListener("click", () => show(current + 1));
    $("#lb-thumbs").addEventListener("click", (e) => {
      const thumb = e.target.closest("[data-go]");
      if (thumb) show(Number(thumb.dataset.go));
    });
  }

  // Click on the dark backdrop (not the image or controls) closes.
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("hidden")) return;
    if (e.key === "Escape") close();
    if (multiple && e.key === "ArrowLeft") show(current - 1);
    if (multiple && e.key === "ArrowRight") show(current + 1);
  });

  // Swipe left / right on touch screens.
  let touchX = null;
  lightbox.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener("touchend", (e) => {
    if (touchX === null || !multiple) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    touchX = null;
  });
})();
