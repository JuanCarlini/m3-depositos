export const phone = true;

export default function(root, opts, lib) {
  const box = root.querySelector(".mo-ph") || root;
  const list = root.querySelector(".mo-ph__list");
  const chapters = [ ...root.querySelectorAll(".mo-ph__ch") ];
  const pics = chapters.map((c => c.querySelector(".mo-ph__pic")));
  if (!list || chapters.length < 2 || pics.some((p => !p))) return {};
  const homes = pics.map((p => p.parentElement));
  const listHome = {
    parent: list.parentElement,
    next: list.nextSibling
  };
  const zoom = lib.clamp(+opts.zoom || 1.06, 1, 1.1);
  const n = chapters.length;
  const hold = n <= 3 ? 2 : 3;
  chapters.forEach((c => {
    if (c.querySelector(":scope > .mo-ph__words")) return;
    const w = document.createElement("div");
    w.className = "mo-ph__words";
    [ ...c.children ].filter((el => !el.classList.contains("mo-ph__pic"))).forEach((el => w.append(el)));
    c.append(w);
  }));
  const stage = document.createElement("div");
  stage.className = "mo-ph__stage";
  const panel = document.createElement("div");
  panel.className = "mo-ph__panel";
  const count = document.createElement("p");
  count.className = "mo-ph__count";
  count.setAttribute("aria-hidden", "true");
  panel.append(count);
  const pad = v => String(v).padStart(2, "0");
  let live = false, scrubber = null, on = -1;
  const fits = () => !lib.reduced() && innerHeight >= 600;
  const show = k => {
    if (k === on) return;
    on = k;
    chapters.forEach(((c, i) => c.classList.toggle("is-on", i === k)));
    count.textContent = `${pad(k + 1)} / ${pad(n)}`;
  };
  const draw = p => {
    const seg = 1 / n;
    let k = 0;
    pics.forEach(((pic, i) => {
      const u = i === 0 ? 1 : lib.clamp((p - (i - .25) * seg) / (.45 * seg));
      const e = lib.ease.out(u);
      pic.style.setProperty("--mo-c", `${((1 - e) * 100).toFixed(2)}%`);
      pic.style.setProperty("--mo-z", (zoom - (zoom - 1) * e).toFixed(4));
      if (u >= .5) k = i;
    }));
    show(k);
  };
  const go = () => {
    if (live) return;
    live = true;
    root.style.setProperty("--mo-hold", String(hold));
    pics.forEach((p => stage.append(p)));
    panel.append(list);
    stage.append(panel);
    box.append(stage);
    root.classList.add("is-live");
    box.setAttribute("data-edge-free", "");
    draw(0);
    scrubber = lib.scrub(root, draw);
  };
  const rest = () => {
    if (!live) return;
    live = false;
    scrubber?.destroy();
    scrubber = null;
    root.classList.remove("is-live");
    root.style.removeProperty("--mo-hold");
    box.removeAttribute("data-edge-free");
    listHome.parent.insertBefore(list, listHome.next);
    pics.forEach(((p, i) => {
      homes[i].prepend(p);
      p.style.removeProperty("--mo-c");
      p.style.removeProperty("--mo-z");
    }));
    chapters.forEach((c => c.classList.remove("is-on")));
    stage.remove();
    on = -1;
  };
  const sync = () => fits() ? go() : rest();
  sync();
  let t = 0;
  const onResize = () => {
    clearTimeout(t);
    t = setTimeout(sync, 120);
  };
  addEventListener("resize", onResize);
  const rq = matchMedia("(prefers-reduced-motion: reduce)");
  rq.addEventListener("change", sync);
  return {
    destroy() {
      removeEventListener("resize", onResize);
      rq.removeEventListener("change", sync);
      rest();
    }
  };
}
