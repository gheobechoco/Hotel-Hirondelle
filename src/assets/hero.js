import entrance from "./hirondelle-entree.jpg";
import room from "./hirondeelle-chambre1.jpg";
import balcony from "./hirondelle-balcon5.jpg";
import palms from "./hotel-hirondeele-nature.jpg";
import facade from "./hotel-hirondelle-vue-etages1.jpg";

var SLIDES = [
  {
    img: entrance,
    l: "Bienvenue à",
    b: "L’Hirondelle",
    v: "4,2/5",
    s: "193 avis Google",
    d: "Un hôtel de charme au centre-ville de Port-Gentil.",
    n: "Accueil",
  },
  {
    img: room,
    l: "Nos",
    b: "Chambres",
    v: "57 500",
    s: "FCFA la nuit, dès",
    d: "Climatisation, Smart TV, minibar et douche à effet pluie.",
    n: "Chambres",
  },
  {
    img: balcony,
    l: "Chambre",
    b: "Supérieure",
    v: "Balcon",
    s: "ou terrasse privative",
    d: "Un espace extérieur face aux palmiers.",
    n: "Chambre supérieure",
    pos: "50% 68%",
  },
  {
    img: palms,
    l: "Le jardin",
    b: "Palmiers",
    v: "5 min",
    s: "à pied de la côte",
    d: "Un cadre verdoyant et calme, près du port et des commerces.",
    n: "Jardin",
  },
  {
    img: facade,
    l: "Façade",
    b: "Blanche",
    v: "≈ 60",
    s: "chambres, studios et suites",
    d: "Des balcons arrondis et une balustrade ajourée.",
    n: "Façade",
  },
];
var CTA = {
  primary: { label: "Demander une réservation", href: "/contact" },
  secondary: { label: "Voir les chambres", href: "/chambres" },
};
var INTERVAL = 5500;

export function initHero(root) {
  var stage = root.querySelector(".hh-plates");
  var copies = root.querySelector(".hh-copies");
  var th = root.querySelector(".hh-thumbs");
  stage.replaceChildren();
  copies.replaceChildren();
  th.replaceChildren();

  SLIDES.forEach(function (s) {
    stage.insertAdjacentHTML(
      "beforeend",
      '<figure class="hh-plate" aria-hidden="true"><img alt="" src="' +
        s.img +
        '" style="object-position:' +
        (s.pos || "50% 50%") +
        '"></figure>',
    );
    copies.insertAdjacentHTML(
      "beforeend",
      '<div class="hh-copy" aria-hidden="true"><p class="hh-ttl"><span>' +
        s.l +
        "</span><strong>" +
        s.b +
        '</strong></p><div class="hh-card"><span class="hh-badge">' +
        s.v +
        "</span><p><b>" +
        s.s +
        "</b><br>" +
        s.d +
        '</p></div><p class="hh-acts"><a class="hh-btn" href="' +
        CTA.primary.href +
        '">' +
        CTA.primary.label +
        '</a><a class="hh-btn ghost" href="' +
        CTA.secondary.href +
        '">' +
        CTA.secondary.label +
        "</a></p></div>",
    );
    th.insertAdjacentHTML(
      "beforeend",
      '<button class="hh-th" type="button" aria-label="' +
        s.n +
        '"><img alt="" src="' +
        s.img +
        '"></button>',
    );
  });

  var P = stage.children,
    C = copies.children,
    T = th.children,
    cur = -1,
    timer = null,
    paused = false,
    vis = true;
  var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  paused = still;
  var pp = root.querySelector('[data-hh="pp"]');
  pp.textContent = paused ? "Lecture" : "Pause";
  pp.setAttribute("aria-pressed", String(paused));
  var cleanups = [];
  var observer = null;
  var firstFrame = null;
  var secondFrame = null;
  var disposed = false;

  function listen(target, event, handler) {
    target.addEventListener(event, handler);
    cleanups.push(function () {
      target.removeEventListener(event, handler);
    });
  }
  function go(n) {
    n = (n + SLIDES.length) % SLIDES.length;
    if (n === cur) return;
    for (var i = 0; i < SLIDES.length; i++) {
      P[i].classList.remove("out");
      C[i].classList.remove("out");
    }
    if (cur >= 0) {
      P[cur].classList.replace("in", "out");
      C[cur].classList.replace("in", "out");
      C[cur].setAttribute("aria-hidden", "true");
      T[cur].removeAttribute("aria-current");
    }
    P[n].classList.add("in");
    C[n].classList.add("in");
    C[n].removeAttribute("aria-hidden");
    T[n].setAttribute("aria-current", "true");
    root.setAttribute("data-i", n);
    cur = n;
  }
  function stop() {
    clearInterval(timer);
    timer = null;
  }
  function play() {
    stop();
    if (!paused && vis && !document.hidden)
      timer = setInterval(function () {
        go(cur + 1);
      }, INTERVAL);
  }

  for (var i = 0; i < T.length; i++)
    (function (index) {
      listen(T[index], "click", function () {
        go(index);
        play();
      });
    })(i);
  listen(root.querySelector('[data-hh="prev"]'), "click", function () {
    go(cur - 1);
    play();
  });
  listen(root.querySelector('[data-hh="next"]'), "click", function () {
    go(cur + 1);
    play();
  });
  listen(pp, "click", function () {
    paused = !paused;
    pp.textContent = paused ? "Lecture" : "Pause";
    pp.setAttribute("aria-pressed", String(paused));
    if (still) root.toggleAttribute("data-motion", !paused);
    play();
  });
  listen(document, "visibilitychange", play);
  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      function (entries) {
        vis = entries[0].isIntersecting;
        play();
      },
      { threshold: 0.2 },
    );
    observer.observe(root);
  }
  firstFrame = requestAnimationFrame(function () {
    secondFrame = requestAnimationFrame(function () {
      if (!disposed) {
        go(0);
        play();
      }
    });
  });

  return function cleanup() {
    disposed = true;
    stop();
    cleanups.forEach(function (cleanupListener) {
      cleanupListener();
    });
    if (observer) observer.disconnect();
    if (firstFrame !== null) cancelAnimationFrame(firstFrame);
    if (secondFrame !== null) cancelAnimationFrame(secondFrame);
    stage.replaceChildren();
    copies.replaceChildren();
    th.replaceChildren();
  };
}
