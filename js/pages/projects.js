(function () {
  "use strict";
  const { $, esc, icon, eyebrow, delay, BTN_GHOST } = App;

  const MAX_TECH = 4;
  const CHIP = "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200";
  const CHIP_ON = `${CHIP} bg-accent text-white border border-accent`;
  const CHIP_OFF = `${CHIP} bg-surface border border-border text-secondary hover:text-foreground hover:border-zinc-500`;
  const ACTION = "flex items-center gap-1.5 text-xs font-semibold transition-colors";

  // The filter and search are kept in the address (?category=…&q=…) so a filtered view can be shared or reloaded.
  const params = new URLSearchParams(location.search);
  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];
  const state = {
    category: categories.includes(params.get("category")) ? params.get("category") : "All",
    query: (params.get("q") || "").trim(),
  };

  App.mount(
    "Projects",
    `<section class="section-padding pb-12">
      <div class="container-main reveal">
        ${eyebrow("Portfolio")}
        <h1 class="text-display-md font-bold text-foreground mb-4">All Projects</h1>
        <p class="text-lg text-secondary max-w-2xl leading-relaxed">${esc(SITE.projectsIntro.replace("{count}", PROJECTS.length))}</p>
      </div>
    </section>

    <section class="pb-12 border-b border-border">
      <div class="container-main">
        <div class="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
          <div class="relative w-full lg:w-72 flex-shrink-0">
            ${icon("search", 14, "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none")}
            <input id="search" type="search" autocomplete="off" placeholder="Search projects or technologies…" aria-label="Search projects or technologies" value="${esc(state.query)}"
              class="w-full bg-surface border border-border rounded-xl pl-9 pr-4 py-2.5 text-sm text-foreground placeholder-muted focus:outline-none focus:border-accent/50 transition-colors">
          </div>
          <div id="chips" class="flex flex-wrap gap-2" role="group" aria-label="Filter by category"></div>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-main">
        <p id="count" class="sr-only" aria-live="polite"></p>
        <div id="grid" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        <div id="empty" class="hidden text-center py-12">
          <p class="text-lg font-semibold text-foreground mb-2">No projects found</p>
          <p class="text-sm text-secondary mb-6">Try a different search term or category.</p>
          <button id="reset" class="${BTN_GHOST}">Clear filters</button>
        </div>
      </div>
    </section>`
  );

  const grid = $("#grid");
  const chips = $("#chips");
  const search = $("#search");

  const card = (p, i) => {
    const tech = p.tech || [];
    const extra = tech.length > MAX_TECH ? [`+${tech.length - MAX_TECH}`] : [];
    // The cover image (with its Featured badge) is rendered twice: on top for wider screens, inline for phones.
    const media = (cls) => `
      <div class="relative overflow-hidden bg-elevated ${cls}">
        ${App.coverOf(p, { cls: "object-cover transition-transform duration-500 group-hover:scale-105" })}
        ${p.featured ? '<div class="absolute top-3 left-3"><span class="text-xs font-semibold px-2.5 py-1 bg-accent text-white rounded-full">Featured</span></div>' : ""}
      </div>`;
    return `
      <article class="reveal group relative bg-surface border border-border rounded-xl overflow-hidden hover:border-zinc-600 transition-colors duration-200 flex flex-col" ${delay(i, 50)}>
        <a class="absolute inset-0 z-0" aria-label="View ${esc(p.title)} details" href="${App.projectUrl(p)}"></a>
        ${media("hidden sm:block h-48 flex-shrink-0")}
        <!-- Phones: title → description → image → category → tech stack. Wider screens keep the image on top. -->
        <div class="p-6 flex flex-col flex-1">
          <h3 class="order-1 sm:order-none font-bold text-foreground mb-2 group-hover:text-accent transition-colors">${esc(p.title)}</h3>
          <p class="order-2 sm:order-none text-sm text-secondary leading-relaxed mb-4 sm:flex-1">${esc(p.description)}</p>
          ${media("order-3 sm:hidden aspect-video rounded-lg border border-border/40 mb-4")}
          <div class="order-4 sm:order-first flex items-start justify-between gap-2 mb-3 sm:mb-2"><span class="tag">${esc(p.category)}</span><span class="text-xs font-mono text-muted">${esc(p.year)}</span></div>
          <div class="order-5 sm:order-none flex flex-wrap gap-1.5 mb-5">
            ${[...tech.slice(0, MAX_TECH), ...extra].map((t) => `<span class="text-[11px] px-2 py-0.5 rounded-md bg-elevated border border-border text-muted">${esc(t)}</span>`).join("")}
          </div>
          <div class="order-6 sm:order-none mt-auto relative z-10 flex items-center gap-4 pt-4 border-t border-border">
            ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener noreferrer" class="${ACTION} text-secondary hover:text-accent">${icon("external", 12)}Live Site</a>` : ""}
            ${p.video ? `<a href="${esc(p.video)}" target="_blank" rel="noopener noreferrer" class="${ACTION} text-secondary hover:text-red-400">${icon("youtube", 12)}Watch</a>` : ""}
            <a href="${App.projectUrl(p)}" class="${ACTION} text-muted hover:text-foreground ml-auto">Details${icon("arrow", 12)}</a>
          </div>
        </div>
      </article>`;
  };

  const matches = (p) => {
    if (state.category !== "All" && p.category !== state.category) return false;
    const q = state.query.toLowerCase();
    if (!q) return true;
    return [p.title, p.description, p.category, ...(p.tech || [])].join(" ").toLowerCase().includes(q);
  };

  function render() {
    chips.innerHTML = categories
      .map((c) => `<button data-category="${esc(c)}" aria-pressed="${c === state.category}" class="${c === state.category ? CHIP_ON : CHIP_OFF}">${esc(c)}</button>`)
      .join("");

    const visible = PROJECTS.filter(matches);
    grid.innerHTML = visible.map(card).join("");
    grid.classList.toggle("hidden", !visible.length);
    $("#empty").classList.toggle("hidden", visible.length > 0);
    $("#count").textContent = `${visible.length} project${visible.length === 1 ? "" : "s"} shown`;
    App.observeReveals(grid);

    const next = new URLSearchParams();
    if (state.category !== "All") next.set("category", state.category);
    if (state.query) next.set("q", state.query);
    const qs = next.toString();
    history.replaceState(null, "", qs ? `?${qs}` : location.pathname);
  }

  chips.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-category]");
    if (!chip) return;
    state.category = chip.dataset.category;
    render();
  });

  search.addEventListener("input", () => {
    state.query = search.value.trim();
    render();
  });

  $("#reset").addEventListener("click", () => {
    state.category = "All";
    state.query = "";
    search.value = "";
    render();
    search.focus();
  });

  render();
})();
