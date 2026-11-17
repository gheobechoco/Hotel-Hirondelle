import { useEffect, useRef } from "react";
import { initHero } from "@/assets/hero.js";
import "@/assets/hero.css";

export function HotelHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    return initHero(rootRef.current);
  }, []);

  return (
    <section
      ref={rootRef}
      className="hh"
      data-i="0"
      aria-roledescription="carrousel"
      aria-label="Découvrir l’hôtel"
    >
      <span className="hh-arc a" />
      <span className="hh-arc b" />
      <div className="hh-wrap">
        <div className="hh-grid">
          <div className="hh-plates" />
          <div className="hh-copies" />
        </div>
        <div className="hh-ctrl">
          <button
            className="hh-ic"
            type="button"
            data-hh="prev"
            aria-label="Diapositive précédente"
          >
            ‹
          </button>
          <div className="hh-thumbs" />
          <button className="hh-ic" type="button" data-hh="next" aria-label="Diapositive suivante">
            ›
          </button>
          <button className="hh-ic hh-pp" type="button" data-hh="pp" aria-pressed="false">
            Pause
          </button>
        </div>
      </div>
    </section>
  );
}
