/* Newstar demo B — đổi ngôn ngữ, menu điện thoại, bộ lọc, biểu mẫu */
(() => {
  const html = document.documentElement;
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- Ngôn ngữ VI / EN ---------- */
  const ATTRS = ["placeholder", "aria-label", "alt", "title", "content"];
  function setLang(l) {
    html.lang = l;
    try { localStorage.setItem("nsb-lang", l); } catch (e) {}
    $$("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === l));
    ATTRS.forEach(a => $$(`[data-${l}-${a}]`).forEach(el => el.setAttribute(a, el.getAttribute(`data-${l}-${a}`))));
    $$("option[data-vi]").forEach(o => { o.textContent = o.dataset[l]; });
    if (html.dataset[`title${l === "vi" ? "Vi" : "En"}`]) document.title = html.dataset[`title${l === "vi" ? "Vi" : "En"}`];
    document.dispatchEvent(new CustomEvent("langchange", {detail: l}));
  }
  document.addEventListener("click", e => { const b = e.target.closest("[data-lang]"); if (b) setLang(b.dataset.lang); });
  setLang(html.lang === "en" ? "en" : "vi");
  window.NSB = { lang: () => html.lang, t: (vi, en) => html.lang === "en" ? en : vi };

  /* ---------- Menu điện thoại ---------- */
  const burger = document.querySelector(".burger"), mnav = document.getElementById("mnav");
  if (burger && mnav) {
    const open = on => { burger.setAttribute("aria-expanded", on); mnav.hidden = !on; document.body.style.overflow = on ? "hidden" : ""; };
    burger.addEventListener("click", () => open(mnav.hidden));
    mnav.addEventListener("click", e => { if (e.target.closest("a")) open(false); });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !mnav.hidden) { open(false); burger.focus(); } });
    matchMedia("(min-width:1081px)").addEventListener("change", m => { if (m.matches) open(false); });
  }

  /* ---------- Bộ lọc dạng nút + "xem thêm" ---------- */
  $$("[data-filter]").forEach(bar => {
    const target = document.getElementById(bar.dataset.filter);
    const moreBtn = document.querySelector(`[data-more="${bar.dataset.filter}"]`);
    const step = +(target.dataset.step || 999);
    let shown = step, cat = "all";
    const apply = () => {
      const items = $$(":scope > [data-cat]", target).filter(it => cat === "all" || it.dataset.cat.split(" ").includes(cat));
      $$(":scope > [data-cat]", target).forEach(it => it.hidden = true);
      items.forEach((it, i) => it.hidden = i >= shown);
      if (moreBtn) moreBtn.hidden = items.length <= shown;
    };
    bar.addEventListener("click", e => {
      const b = e.target.closest("button[data-f]"); if (!b) return;
      $$("button", bar).forEach(x => x.setAttribute("aria-pressed", x === b));
      cat = b.dataset.f; shown = step; apply();
    });
    if (moreBtn) moreBtn.addEventListener("click", () => { shown += step; apply(); });
    apply();
  });

  /* ---------- Biểu mẫu báo giá (demo: kiểm tra rồi báo đã gửi) ---------- */
  $$("form[data-form]").forEach(form => {
    const err = form.querySelector(".form-err");
    form.addEventListener("input", e => { if (e.target.getAttribute("aria-invalid") === "true") { e.target.removeAttribute("aria-invalid"); err.textContent = ""; } });
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]'), contact = form.querySelector('[name="contact"]');
      const bad = [];
      if (name && !name.value.trim()) bad.push([name, NSB.t("Nhập họ tên để đội kỹ thuật biết cách xưng hô.", "Enter your name so our team knows who to reply to.")]);
      const v = contact ? contact.value.trim() : "";
      if (contact && !(/^[\d\s+().-]{9,}$/.test(v) && v.replace(/\D/g, "").length >= 9) && !/^\S+@\S+\.\S+$/.test(v)) bad.push([contact, NSB.t("Nhập số điện thoại (ít nhất 9 số) hoặc email hợp lệ.", "Enter a phone number (at least 9 digits) or a valid email.")]);
      if (bad.length) { bad.forEach(([el]) => el.setAttribute("aria-invalid", "true")); err.textContent = bad[0][1]; bad[0][0].focus(); return; }
      form.classList.add("sent");
      const ok = form.querySelector(".form-ok"); ok.setAttribute("tabindex", "-1"); ok.focus();
    });
  });

  /* ---------- Hộp xem lớn (video, ảnh): Esc luôn đóng được ---------- */
  document.addEventListener("keydown", e => { if (e.key !== "Escape") return; const d = document.querySelector("dialog.lb[open]"); if (d) { e.preventDefault(); d.close(); } });

  /* ---------- Năm ở chân trang ---------- */
  $$("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
})();
