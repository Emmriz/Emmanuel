(function () {
  "use strict";
  const { $, esc, icon, eyebrow, delay } = App;

  const ROW = "flex items-center gap-3 p-4 bg-surface border border-border rounded-xl hover:border-zinc-500 transition-colors";
  const ICON_BOX = "w-9 h-9 rounded-lg bg-elevated border border-border flex items-center justify-center flex-shrink-0";
  const INPUT = "w-full bg-elevated border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted focus:outline-none focus:border-accent/50 transition-colors";
  const LABEL = "block text-xs font-medium text-secondary mb-2";
  const REQUIRED = '<span class="text-red-400">*</span>';

  const direct = (iconName, label, value, href) => {
    const inner = `<div class="${ROW}"><div class="${ICON_BOX}">${icon(iconName, 15, "text-accent")}</div><div><p class="text-xs text-muted mb-0.5">${label}</p><p class="text-sm font-medium text-foreground break-all">${esc(value)}</p></div></div>`;
    return href ? `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer">${inner}</a>` : `<div>${inner}</div>`;
  };

  const sidebar = `
    <div class="flex flex-col gap-10">
      <div class="reveal bg-surface border border-border rounded-xl p-6">
        <div class="flex items-center gap-3 mb-4">
          <span class="flex h-2.5 w-2.5 rounded-full bg-green-500 relative"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span></span>
          <h3 class="font-semibold text-foreground text-sm">Currently Available</h3>
        </div>
        <p class="text-secondary text-sm leading-relaxed">${esc(CONTACT.availability)}</p>
      </div>

      <div class="reveal" ${delay(1)}>
        <h3 class="text-sm font-semibold text-foreground mb-4">Reach out directly</h3>
        <div class="flex flex-col gap-3">
          ${direct("mail", "Email", SITE.email, `mailto:${SITE.email}`)}
          ${SITE.whatsapp ? direct("phone", "WhatsApp", SITE.phone, `https://wa.me/${SITE.whatsapp}`) : ""}
          ${direct("mapPin", "Location", SITE.city)}
        </div>
      </div>

      <div class="reveal bg-surface border border-border rounded-xl p-6" ${delay(2)}>
        <div class="flex items-center gap-2 mb-4">${icon("clock", 14, "text-muted")}<h3 class="text-sm font-semibold text-foreground">Availability</h3></div>
        <div class="flex flex-col gap-2">
          ${CONTACT.hours
            .map(
              (h) => `
            <div class="flex items-center justify-between gap-3 text-xs p-3 rounded-lg ${h.open ? "bg-green-500/5 border border-green-500/15" : "bg-elevated border border-border"}">
              <span class="text-foreground font-medium">${esc(h.day)}</span><span class="${h.open ? "text-green-400" : "text-muted"} text-right">${esc(h.time)}</span>
            </div>`
            )
            .join("")}
        </div>
      </div>

      ${
        App.socials().length
          ? `<div class="reveal" ${delay(3)}>
              <h3 class="text-sm font-semibold text-foreground mb-4">Connect online</h3>
              <div class="grid grid-cols-2 gap-3">
                ${App.socials()
                  .map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2.5 p-3 bg-surface border border-border rounded-xl hover:border-zinc-500 text-secondary hover:text-foreground transition-all text-sm font-medium">${icon(s.key, 14, "text-muted")}${s.label}</a>`)
                  .join("")}
              </div>
            </div>`
          : ""
      }

      ${
        SITE.resume
          ? `<a href="${esc(SITE.resume)}" download target="_blank" rel="noopener noreferrer" class="reveal flex items-center gap-3 p-4 bg-surface border border-border rounded-xl hover:border-accent/50 text-secondary hover:text-foreground transition-all" ${delay(4)}>
              <div class="${ICON_BOX}">${icon("download", 15, "text-accent")}</div>
              <div><p class="text-sm font-semibold text-foreground">Download Resume</p><p class="text-xs text-muted">${esc(SITE.resumeNote)}</p></div>
            </a>`
          : ""
      }
    </div>`;

  const form = `
    <div class="reveal" ${delay(1)}>
      <div class="bg-surface border border-border rounded-2xl p-8 lg:p-10">
        <div id="form-view">
          <h2 class="font-bold text-foreground text-xl mb-2">Send a message</h2>
          <p class="text-secondary text-sm mb-8">Tell me about your project or opportunity. I'll get back to you within 24 hours.</p>
          <form id="contact-form" class="flex flex-col gap-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div><label for="f-name" class="${LABEL}">Your Name ${REQUIRED}</label><input id="f-name" name="name" type="text" required autocomplete="name" placeholder="John Smith" class="${INPUT}"></div>
              <div><label for="f-email" class="${LABEL}">Email Address ${REQUIRED}</label><input id="f-email" name="email" type="email" required autocomplete="email" placeholder="john@company.com" class="${INPUT}"></div>
            </div>
            <div><label for="f-subject" class="${LABEL}">Subject ${REQUIRED}</label><input id="f-subject" name="subject" type="text" required placeholder="Project inquiry, job opportunity, etc." class="${INPUT}"></div>
            <div><label for="f-message" class="${LABEL}">Message ${REQUIRED}</label><textarea id="f-message" name="message" required rows="6" placeholder="Tell me about your project, timeline, and budget…" class="${INPUT} resize-none"></textarea></div>
            <p id="form-error" class="hidden text-sm text-red-400" role="alert"></p>
            <button id="form-submit" type="submit" class="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed">${icon("send", 15)}<span>Send Message</span></button>
            <p class="text-xs text-muted text-center">Or email directly: <a href="mailto:${esc(SITE.email)}" class="text-accent hover:text-accent-light transition-colors">${esc(SITE.email)}</a></p>
          </form>
        </div>
        <div id="form-done" class="hidden text-center py-10" tabindex="-1">
          <div class="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">${icon("check", 22, "text-green-400")}</div>
          <h2 class="font-bold text-foreground text-xl mb-2">Message sent</h2>
          <p id="form-done-text" class="text-secondary text-sm mb-8"></p>
          <button id="form-again" class="text-sm font-semibold text-accent hover:text-accent-light transition-colors">Send another message</button>
        </div>
      </div>
    </div>`;

  App.mount(
    "Contact",
    `<section class="section-padding pb-12">
      <div class="container-main reveal">
        ${eyebrow("Contact")}
        <h1 class="text-display-md font-bold text-foreground mb-4">Let's work together</h1>
        <p class="text-lg text-secondary max-w-2xl leading-relaxed">${esc(CONTACT.intro)}</p>
      </div>
    </section>
    <section class="container-main pb-20">
      <div class="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">${sidebar}${form}</div>
    </section>`
  );

  /* ---------- Form handling ---------- */
  const formEl = $("#contact-form");
  const submit = $("#form-submit");
  const error = $("#form-error");

  const setBusy = (busy) => {
    submit.disabled = busy;
    $("span", submit).textContent = busy ? "Sending…" : "Send Message";
  };

  const showDone = (text) => {
    $("#form-done-text").textContent = text;
    $("#form-view").classList.add("hidden");
    $("#form-done").classList.remove("hidden");
    $("#form-done").focus();
  };

  formEl.addEventListener("submit", async (e) => {
    e.preventDefault();
    error.classList.add("hidden");
    const data = Object.fromEntries(new FormData(formEl));

    // No endpoint configured: hand the message to the visitor's email app instead.
    if (!SITE.formEndpoint) {
      const body = `${data.message}\n\n— ${data.name} (${data.email})`;
      location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
      showDone("Your email app should have opened with the message ready to send.");
      return;
    }

    setBusy(true);
    try {
      const response = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(`Request failed (${response.status})`);
      formEl.reset();
      showDone("Thanks for reaching out — I'll get back to you within 24 hours.");
    } catch (err) {
      error.textContent = `Your message could not be sent. Please try again, or email ${SITE.email} directly.`;
      error.classList.remove("hidden");
    } finally {
      setBusy(false);
    }
  });

  $("#form-again").addEventListener("click", () => {
    $("#form-done").classList.add("hidden");
    $("#form-view").classList.remove("hidden");
    $("#f-name").focus();
  });
})();
