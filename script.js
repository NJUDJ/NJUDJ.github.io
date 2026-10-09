// 页面功能一般不用改。网站文字和文章在 content.js 里。
(() => {
  "use strict";
  const blog = window.BLOG;
  const $ = (selector) => document.querySelector(selector);
  const views = { home: ["SLOW NOTES", "最近写下的"], articles: ["ALL NOTES", "文章小集"], friends: ["FRIENDS & LINKS", "隔壁的茶室"], bookmarks: ["SAVED NOTES", "想再读一次"], search: ["FIND A NOTE", "文章检索"] };
  let view = "home", tag = "全部", currentPost = null, toastTimer;
  const validIds = new Set(blog.posts.map(post => post.id));
  let saved = new Set();
  try { const data = JSON.parse(localStorage.getItem("tea-blog-bookmarks") || "[]"); if (Array.isArray(data)) saved = new Set(data.filter(id => validIds.has(id))); } catch (_) { /* 存储不可用时，本次浏览仍可收藏。 */ }
  const icon = (name) => `<svg aria-hidden="true"><use href="#icon-${name}"/></svg>`;
  function node(name, className, value) { const el = document.createElement(name); if (className) el.className = className; if (value !== undefined) el.textContent = value; return el; }
  function notify(message) { clearTimeout(toastTimer); $("#toast").textContent = message; $("#toast").hidden = false; toastTimer = setTimeout(() => $("#toast").hidden = true, 2200); }
  function toggleSave(id) {
    saved.has(id) ? saved.delete(id) : saved.add(id);
    let persisted = true;
    try { localStorage.setItem("tea-blog-bookmarks", JSON.stringify([...saved])); } catch (_) { persisted = false; }
    notify(saved.has(id) ? (persisted ? "已加入本浏览器的收藏" : "已收藏，本次浏览有效") : "已取消收藏");
    render(); if (currentPost) updateBookmarkButton();
  }
  function updateBookmarkButton() { $("#bookmark-button").textContent = saved.has(currentPost.id) ? "取消收藏" : "收藏这篇文章"; $("#bookmark-button").setAttribute("aria-pressed", String(saved.has(currentPost.id))); }
  function openPost(post) {
    currentPost = post;
    $("#article-meta").textContent = `${post.date} · ${post.tag}`;
    $("#article-title").textContent = post.title;
    $("#article-body").replaceChildren(...post.paragraphs.map(text => node("p", "", text)));
    updateBookmarkButton(); $("#article-dialog").showModal(); $("#article-dialog").scrollTop = 0;
  }
  function articleCard(post) {
    const card = node("article", "post-card glass");
    const meta = node("div", "post-meta"), time = node("time", "", post.date); time.dateTime = post.date;
    meta.append(time, node("span", "tag", post.tag));
    const link = node("a", "article-link"); link.href = `#post/${encodeURIComponent(post.id)}`;
    link.append(node("h3", "", post.title));
    const bottom = node("div", "card-bottom"), read = node("a", "read-link", "读一读"); read.href = link.href; read.insertAdjacentHTML("beforeend", icon("arrow"));
    const save = node("button", "save-button"); save.type = "button"; save.innerHTML = icon("mark"); save.setAttribute("aria-pressed", String(saved.has(post.id))); save.setAttribute("aria-label", `${saved.has(post.id) ? "取消收藏" : "收藏"}：${post.title}`); save.addEventListener("click", () => toggleSave(post.id));
    bottom.append(read, save); card.append(meta, link, node("p", "", post.excerpt), bottom); return card;
  }
  function render() {
    $("#view-eyebrow").textContent = views[view][0]; $("#view-title").textContent = views[view][1];
    document.querySelectorAll("[data-view]").forEach(link => { const active = link.dataset.view === view; link.classList.toggle("active", active); active ? link.setAttribute("aria-current", "page") : link.removeAttribute("aria-current"); });
    $("#search-panel").hidden = view !== "search"; $("#filters").hidden = view === "friends"; $("#friend-help").hidden = view !== "friends";
    $("#cards").replaceChildren(); $("#filters").replaceChildren(); $("#empty-message").hidden = true;
    if (view === "friends") {
      for (const friend of blog.friends) {
        const a = node("a", "friend-card glass"); a.href = friend.url; a.target = "_blank"; a.rel = "noopener noreferrer";
        const text = node("div"); text.append(node("h3", "", friend.name), node("p", "", friend.description)); a.append(node("span", "friend-avatar", friend.initial || friend.name.slice(0, 1)), text); $("#cards").append(a);
      }
      $("#item-count").textContent = `${blog.friends.length} 个链接`; return;
    }
    ["全部", ...new Set(blog.posts.map(post => post.tag))].forEach(label => { const button = node("button", `filter${tag === label ? " active" : ""}`, label); button.type = "button"; button.setAttribute("aria-pressed", String(tag === label)); button.addEventListener("click", () => { tag = label; render(); }); $("#filters").append(button); });
    const query = view === "search" ? $("#search-input").value.trim().toLocaleLowerCase() : "";
    const posts = blog.posts.filter(post => (tag === "全部" || post.tag === tag) && (view !== "bookmarks" || saved.has(post.id)) && (!query || [post.title, post.tag, post.excerpt, ...post.paragraphs].join(" ").toLocaleLowerCase().includes(query))).sort((a, b) => b.date.localeCompare(a.date));
    $("#item-count").textContent = `${posts.length} 篇文章`;
    $("#cards").append(...posts.map(articleCard));
    if (!posts.length) { $("#empty-message").hidden = false; $("#empty-message").textContent = view === "bookmarks" ? "这里还没有收藏。点击文章旁的书签，就能在这个浏览器里留下一篇。" : "暂时没有找到，试试别的关键词或标签吧。"; }
  }
  function route() {
    const hash = location.hash.slice(1);
    if (hash.startsWith("post/")) {
      let id; try { id = decodeURIComponent(hash.slice(5)); } catch (_) { id = ""; }
      const post = blog.posts.find(post => post.id === id);
      if (post) { if (view === "friends") { view = "articles"; tag = "全部"; } render(); openPost(post); }
      else { location.hash = "articles"; notify("这篇文章暂时不存在"); }
      return;
    }
    if ($("#article-dialog").open) $("#article-dialog").close();
    view = Object.hasOwn(views, hash) ? hash : "home"; tag = "全部"; render();
    if (view === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    else if (hash) { $(".content-section").scrollIntoView({ behavior: "smooth", block: "start" }); if (view === "search") $("#search-input").focus({ preventScroll: true }); }
  }
  document.title = blog.name;
  $("meta[name='description']").content = blog.description.replace(/\n/g, " ");
  document.querySelectorAll("[data-site-name]").forEach(el => el.textContent = blog.name);
  $("#hero-title").textContent = blog.name; $("#site-description").textContent = blog.description; $("#about-text").textContent = blog.about; $("#github-link").href = blog.github;
  $("#copyright-year").textContent = new Date().getFullYear();
  function updateUptime() {
    const start = Date.parse(blog.startTime);
    if (!Number.isFinite(start)) { $("#uptime").textContent = "欢迎来到这间小小茶室"; return; }
    const seconds = Math.max(0, Math.floor((Date.now() - start) / 1000)), days = Math.floor(seconds / 86400), hours = Math.floor(seconds % 86400 / 3600), minutes = Math.floor(seconds % 3600 / 60), rest = seconds % 60;
    const pad = value => String(value).padStart(2, "0"); $("#uptime").textContent = `已运行 ${days} 天 ${pad(hours)} 时 ${pad(minutes)} 分 ${pad(rest)} 秒`;
  }
  $("#search-input").addEventListener("input", render);
  $("#bookmark-button").addEventListener("click", () => toggleSave(currentPost.id));
  $("#close-article").addEventListener("click", () => $("#article-dialog").close());
  $("#article-dialog").addEventListener("click", event => { if (event.target !== $("#article-dialog")) return; const r = event.target.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) event.target.close(); });
  $("#article-dialog").addEventListener("close", () => { currentPost = null; if (location.hash.startsWith("#post/")) { history.replaceState(null, "", `#${view}`); render(); } });
  const palettes = ["peach", "green", "rose"];
  try { const palette = localStorage.getItem("tea-blog-palette"); if (palettes.includes(palette)) document.body.dataset.palette = palette; } catch (_) {}
  $("#palette-toggle").addEventListener("click", () => { const current = document.body.dataset.palette || "peach", next = palettes[(palettes.indexOf(current) + 1) % palettes.length]; document.body.dataset.palette = next; try { localStorage.setItem("tea-blog-palette", next); } catch (_) {} });
  window.addEventListener("hashchange", route); updateUptime(); setInterval(updateUptime, 1000); route();
})();
