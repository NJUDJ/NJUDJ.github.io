// 页面功能。标题、介绍和各栏目内容在 content.js 中修改。
(() => {
  "use strict";
  const profile = window.PROFILE;
  const $ = selector => document.querySelector(selector);
  let searching = false;
  let category = "all";
  let activeSection = "home";
  let lastTrigger = null;
  const dialog = $("#entry-dialog");
  const icon = name => `<svg aria-hidden="true"><use href="#icon-${name}"/></svg>`;
  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };
  function safeLink(value) {
    try { const url = new URL(value); return ["https:", "http:"].includes(url.protocol) ? url.href : null; } catch (_) { return null; }
  }
  function setActive(id) {
    activeSection = id;
    document.querySelectorAll("[data-nav]").forEach(link => {
      const active = link.dataset.nav === id;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current");
    });
  }
  function openDetails(item, section, trigger) {
    lastTrigger = trigger;
    $("#entry-meta").textContent = `${section.title} · ${item.period}${item.placeholder ? " · 待填写" : ""}`;
    $("#entry-title").textContent = item.title;
    $("#entry-summary").textContent = item.summary;
    $("#entry-body").replaceChildren();
    for (const detail of item.details || []) {
      const block = make("section");
      block.append(make("h3", "", detail.heading), make("p", "", detail.text));
      $("#entry-body").append(block);
    }
    const url = safeLink(item.url);
    $("#entry-link").hidden = !url;
    if (url) $("#entry-link").href = url; else $("#entry-link").removeAttribute("href");
    dialog.showModal();
    dialog.scrollTop = 0;
  }
  function createCard(item, section) {
    const card = make("article", "experience-card glass");
    const symbol = make("div", "entry-icon"); symbol.innerHTML = icon(section.icon);
    const content = make("div", "card-copy");
    const top = make("div", "card-top"); top.append(make("h3", "", item.title));
    if (item.placeholder) top.append(make("span", "placeholder-label", "待填写"));
    const meta = make("p", "card-meta");
    meta.append(make("span", "", item.organization), make("span", "", item.period));
    const bottom = make("div", "card-bottom");
    const tags = make("div", "tags"); tags.append(...(item.tags || []).map(tag => make("span", "tag", tag)));
    const button = make("button", "detail-button", "查看详情"); button.type = "button";
    button.setAttribute("aria-label", `查看详情：${item.title}`); button.insertAdjacentHTML("beforeend", icon("arrow"));
    button.addEventListener("click", () => openDetails(item, section, button));
    bottom.append(tags, button);
    content.append(top, meta, make("p", "card-summary", item.summary), bottom);
    card.append(symbol, content);
    return card;
  }
  function renderSections() {
    const query = searching ? $("#search-input").value.trim().toLocaleLowerCase() : "";
    const container = $("#resume-sections"); container.replaceChildren();
    let total = 0;
    profile.sections.forEach((section, index) => {
      if (searching && category !== "all" && category !== section.id) return;
      const items = section.items.filter(item => !query || [section.title, item.title, item.organization, item.period, item.summary, ...(item.tags || []), ...(item.details || []).flatMap(detail => [detail.heading, detail.text])].join(" ").toLocaleLowerCase().includes(query));
      if (searching && !items.length) return;
      total += items.length;
      const block = make("section", "resume-section"); block.id = section.id;
      block.setAttribute("aria-labelledby", `${section.id}-title`);
      const heading = make("div", "section-heading");
      const titleWrap = make("div", "section-title-wrap");
      const titleGroup = make("div"); const title = make("h2", "", section.title); title.id = `${section.id}-title`;
      titleGroup.append(title, make("p", "eyebrow", section.english));
      titleWrap.append(make("span", "section-number", String(index + 1).padStart(2, "0")), titleGroup);
      heading.append(titleWrap, make("p", "section-intro", section.intro));
      const cards = make("div", "entry-list"); cards.append(...items.map(item => createCard(item, section)));
      if (!items.length) cards.append(make("p", "empty-message glass", "相关经历整理中，敬请期待。"));
      block.append(heading, cards); container.append(block);
    });
    $("#empty-message").hidden = !searching || total > 0;
    $("#search-status").textContent = `找到 ${total} 条经历`;
  }
  function renderFilters() {
    $("#search-filters").replaceChildren();
    [{ id: "all", title: "全部" }, ...profile.sections].forEach(section => {
      const button = make("button", `filter${category === section.id ? " active" : ""}`, section.title);
      button.type = "button"; button.setAttribute("aria-pressed", String(category === section.id));
      button.addEventListener("click", () => { category = section.id; renderFilters(); renderSections(); });
      $("#search-filters").append(button);
    });
  }
  function navigate(hash, scroll = true) {
    const id = hash.replace(/^#/, "") || "home";
    searching = id === "search";
    $("#search-panel").hidden = !searching;
    if (!searching) { category = "all"; $("#search-input").value = ""; }
    renderFilters(); renderSections();
    const valid = ["home", "search", "about", ...profile.sections.map(section => section.id)].includes(id);
    const targetId = valid ? id : "home";
    setActive(targetId === "about" ? "home" : targetId);
    if (scroll) {
      const target = document.getElementById(searching ? "search-panel" : targetId);
      if (targetId === "home") window.scrollTo({ top: 0, behavior: "smooth" });
      else target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (searching) $("#search-input").focus({ preventScroll: true });
  }
  // 同一个栏目重复点击时也能定位；浏览器前进、后退则由 hashchange 处理。
  document.addEventListener("click", event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const hash = link.getAttribute("href");
    if (location.hash !== hash) history.pushState(null, "", hash);
    navigate(hash);
  });
  window.addEventListener("hashchange", () => navigate(location.hash));
  $("#search-input").addEventListener("input", renderSections);
  $("#close-search").addEventListener("click", () => { history.pushState(null, "", "#home"); navigate("#home"); });
  $("#close-entry").addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => lastTrigger?.focus({ preventScroll: true }));
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });

  document.title = profile.name;
  $("meta[name='description']").content = profile.description.replace(/\n/g, " ");
  document.querySelectorAll("[data-site-name]").forEach(element => element.textContent = profile.name);
  $("#hero-title").textContent = profile.name;
  $("#site-description").textContent = profile.description;
  $("#about-text").textContent = profile.about;
  $("#profile-handle").textContent = profile.handle;
  $("#profile-monogram").textContent = profile.initials;
  $("#about-initials").textContent = profile.initials;
  for (const selector of ["#github-link", "#about-github"]) {
    const url = safeLink(profile.github); $(selector).hidden = !url;
    if (url) $(selector).href = url;
  }
  $("#copyright-year").textContent = new Date().getFullYear();
  function updateUptime() {
    const start = Date.parse(profile.startTime);
    if (!Number.isFinite(start)) { $("#uptime").hidden = true; return; }
    const total = Math.max(0, Math.floor((Date.now() - start) / 1000));
    const pad = value => String(value).padStart(2, "0");
    $("#uptime").textContent = `已运行 ${Math.floor(total / 86400)} 天 ${pad(Math.floor(total % 86400 / 3600))} 时 ${pad(Math.floor(total % 3600 / 60))} 分 ${pad(total % 60)} 秒`;
  }
  function applyTheme(theme) {
    document.body.dataset.theme = theme;
    $("#theme-label").textContent = theme === "deep" ? "切换浅蓝" : "切换深蓝";
    $("meta[name='theme-color']").content = theme === "deep" ? "#18365f" : "#dceaff";
  }
  let theme = "light";
  try { if (localStorage.getItem("personal-homepage-blue-theme") === "deep") theme = "deep"; } catch (_) {}
  applyTheme(theme);
  $("#theme-toggle").addEventListener("click", () => {
    const next = document.body.dataset.theme === "deep" ? "light" : "deep";
    applyTheme(next);
    try { localStorage.setItem("personal-homepage-blue-theme", next); } catch (_) {}
  });
  updateUptime(); setInterval(updateUptime, 1000); navigate(location.hash, Boolean(location.hash));
})();
