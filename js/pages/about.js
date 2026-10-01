(function () {
  "use strict";
  const { esc, icon, eyebrow, delay, BTN_PRIMARY, CARD } = App;

  const paragraph = (text) => esc(text).replace("{name}", `<strong class="text-foreground">${esc(App.fullName)}</strong>`);

  const intro = `
    <section class="section-padding">
      <div class="container-main">
        <div class="grid lg:grid-cols-[2fr_1fr] gap-16 lg:gap-24 items-center">
          <div class="reveal">
            ${eyebrow("About")}
            <h1 class="text-display-md font-bold text-foreground leading-tight mb-6">${esc(ABOUT.headline[0])}<span class="text-secondary"> ${esc(ABOUT.headline[1])}</span></h1>
            ${ABOUT.paragraphs.map((p, i) => `<p class="text-lg text-secondary leading-relaxed ${i === ABOUT.paragraphs.length - 1 ? "mb-8" : "mb-4"}">${paragraph(p)}</p>`).join("")}
            <div class="flex items-center gap-2 text-sm text-muted mb-8">${icon("mapPin", 13)}<span>${esc(SITE.city)} · ${esc(SITE.timezoneLong)}</span></div>
            <div class="flex flex-wrap gap-4">
              <a href="contact.html" class="${BTN_PRIMARY}">Work with me${icon("arrow")}</a>
              ${App.resumeButton()}
            </div>
          </div>
          <div class="reveal hidden lg:block" ${delay(2)}>
            <div class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-border">
              ${App.media(SITE.photo, { alt: App.fullName, label: App.initial(SITE.firstName) + App.initial(SITE.lastName), labelCls: "text-7xl", eager: true })}
            </div>
          </div>
        </div>
      </div>
    </section>`;

  const whatIDo = `
    <section class="section-padding border-t border-border">
      <div class="container-main">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div class="reveal">
            ${eyebrow("What I do")}
            <h2 class="text-display-sm font-bold text-foreground mb-6">${esc(ABOUT.whatIDo.title)}</h2>
            ${ABOUT.whatIDo.paragraphs.map((p) => `<p class="text-secondary leading-relaxed mb-4 last:mb-0">${esc(p)}</p>`).join("")}
          </div>
          <div class="reveal grid gap-3" ${delay(1)}>
            ${ABOUT.whatIDo.list.map((item) => `<div class="flex items-start gap-3 text-secondary text-sm">${icon("check", 15, "text-accent flex-shrink-0 mt-0.5")}${esc(item)}</div>`).join("")}
          </div>
        </div>
      </div>
    </section>`;

  const career = `
    <section class="section-padding border-t border-border">
      <div class="container-main">
        <div class="reveal mb-16">${eyebrow("Career Timeline")}<h2 class="text-display-sm font-bold text-foreground">How I got here</h2></div>
        <div class="flex flex-col max-w-3xl">${App.timeline()}</div>
      </div>
    </section>`;

  const values = `
    <section class="section-padding border-t border-border">
      <div class="container-main">
        <div class="reveal mb-16">${eyebrow("Professional Values")}<h2 class="text-display-sm font-bold text-foreground">How I work</h2></div>
        <div class="grid sm:grid-cols-2 gap-6 max-w-4xl">
          ${ABOUT.values
            .map(
              (v, i) => `
            <div class="reveal ${CARD} p-7" ${delay(i)}>
              <h3 class="font-semibold text-foreground mb-3">${esc(v.title)}</h3>
              <p class="text-sm text-secondary leading-relaxed">${esc(v.text)}</p>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </section>`;

  App.mount("About", intro + whatIDo + career + values + App.skillsSection());
})();
