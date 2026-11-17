import { createContext, useContext, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import swallow from "@/assets/hirondelle-swallow.png.asset.json";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/hotel";
import { BookingDialog, type Stay } from "./booking-dialog";
const defaults: Stay = {
  checkIn: "",
  checkOut: "",
  adults: 1,
  children: 0,
  rooms: 1,
  roomCategory: "Sans préférence",
};
const BookingContext = createContext<(v?: Partial<Stay>) => void>(() => {});
export const useBooking = () => useContext(BookingContext);
export function Brand() {
  return (
    <Link to="/" className="wordmark">
      <span
        className="brand-bird"
        style={{ WebkitMaskImage: `url(${swallow.url})`, maskImage: `url(${swallow.url})` }}
        aria-hidden="true"
      />
      <span>
        <strong>L’Hirondelle</strong>
        <small>Hôtel · Port-Gentil · Gabon</small>
      </span>
    </Link>
  );
}
export function HotelShell({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [initial, setInitial] = useState(defaults);
  const [key, setKey] = useState(0);
  function booking(v?: Partial<Stay>) {
    setInitial({ ...defaults, ...v });
    setKey((k) => k + 1);
    setOpen(true);
  }
  return (
    <BookingContext.Provider value={booking}>
      <header className="site-header">
        <div className="site-width header-main">
          <Brand />
          <nav className="desktop-nav" aria-label="Navigation principale">
            {navigation.map((n) =>
              n.to === "/services" ? (
                <div className="nav-drop" key={n.to}>
                  <Link to={n.to} activeOptions={{ exact: true }}>
                    {n.label}
                  </Link>
                  <div className="nav-drop-menu">
                    <Link to="/services">Tous les services</Link>
                    <Link to="/restauration">Restauration</Link>
                    <Link to="/visite-virtuelle">Visite virtuelle</Link>
                  </div>
                </div>
              ) : (
                <Link to={n.to} key={n.to} activeOptions={{ exact: true }}>
                  {n.label}
                </Link>
              ),
            )}
          </nav>
          <div className="flex gap-2 items-center">
            <Button variant="hotel" onClick={() => booking()}>
              Réserver
              <ArrowUpRight />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="mobile-toggle"
              aria-label={menu ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menu && (
          <nav className="mobile-menu" aria-label="Navigation mobile">
            {navigation.map((n) => (
              <Link to={n.to} key={n.to} onClick={() => setMenu(false)}>
                {n.label}
              </Link>
            ))}
            <Link to="/restauration" onClick={() => setMenu(false)}>
              Restauration
            </Link>
            <Link to="/visite-virtuelle" onClick={() => setMenu(false)}>
              Visite virtuelle
            </Link>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="site-width">
          <div className="footer-grid">
            <div>
              <Brand />
              <p className="text-xs text-muted-foreground leading-7 mt-5 max-w-xs">
                Une parenthèse à Port-Gentil.
                <br />
                Vos escales, vos missions, votre séjour.
              </p>
            </div>
            <div className="footer-links">
              <strong>Découvrir</strong>
              <Link to="/hotel">L’hôtel</Link>
              <Link to="/chambres">Chambres & studios</Link>
              <Link to="/longs-sejours">Longs séjours</Link>
              <Link to="/offres">Offres & formules</Link>
              <Link to="/restauration">Restauration</Link>
              <Link to="/visite-virtuelle">Visite virtuelle</Link>
              <Link to="/galerie">Galerie</Link>
            </div>
            <div className="footer-links">
              <strong>Votre séjour</strong>
              <Link to="/contact">Nous contacter</Link>
              <Link to="/faq">Questions fréquentes</Link>
              <Link to="/informations-pratiques">Informations pratiques</Link>
              <Link to="/conditions-de-sejour">Conditions de séjour</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Hôtel L’Hirondelle · Port-Gentil</span>
            <div className="flex gap-5 flex-wrap">
              <Link to="/mentions-legales">Mentions légales</Link>
              <Link to="/confidentialite">Confidentialité</Link>
              <Link to="/politique-cookies">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
      <Button
        size="icon"
        className="whatsapp-pending"
        aria-label="Contacter l’hôtel"
        title="Contact — coordonnées WhatsApp à confirmer"
        asChild
      >
        <Link to="/contact">
          <MessageCircle />
        </Link>
      </Button>
      <BookingDialog key={key} open={open} onOpenChange={setOpen} initial={initial} />
    </BookingContext.Provider>
  );
}
export function StayCta() {
  const booking = useBooking();
  return (
    <section className="cta-band">
      <h2>Votre prochaine escale commence ici.</h2>
      <p>
        Indiquez-nous vos dates et vos souhaits. Les disponibilités et les conditions de votre
        séjour seront confirmées par l’hôtel.
      </p>
      <Button variant="hotel" onClick={() => booking()}>
        Demander les disponibilités
        <ArrowUpRight />
      </Button>
    </section>
  );
}
