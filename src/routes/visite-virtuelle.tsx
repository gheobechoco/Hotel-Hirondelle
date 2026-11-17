import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Mail, MessageCircle, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hotelHead } from "@/lib/hotel";

declare global {
  interface Window {
    kuulaEmbedManualMode: boolean | undefined;
    kuulaEmbed?: {
      add: (element: Element, index: number) => void;
      clear: () => void;
    };
  }
}

const tourUrl = "https://kuula.co/share/collection/7d4tS?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1";
const whatsappUrl =
  "https://wa.me/24177657635?text=Bonjour%2C%20je%20souhaite%20discuter%20d%E2%80%99une%20visite%20virtuelle%20pour%20mon%20%C3%A9tablissement.";
let kuulaEmbedPromise: Promise<void> | null = null;

function loadKuulaEmbed() {
  if (window.kuulaEmbed) return Promise.resolve();
  if (kuulaEmbedPromise) return kuulaEmbedPromise;

  const previousManualMode = window.kuulaEmbedManualMode;
  window.kuulaEmbedManualMode = true;
  const script = document.createElement("script");
  script.src = "https://static.kuula.io/embed.js";
  script.async = true;

  kuulaEmbedPromise = new Promise<void>((resolve, reject) => {
    script.onload = () => {
      window.kuulaEmbedManualMode = previousManualMode;
      if (window.kuulaEmbed) resolve();
      else reject(new Error("Kuula’s embed API did not initialize."));
    };
    script.onerror = () => {
      window.kuulaEmbedManualMode = previousManualMode;
      reject(new Error("Kuula’s embed script could not be loaded."));
    };
    document.head.appendChild(script);
  });

  return kuulaEmbedPromise;
}

export const Route = createFileRoute("/visite-virtuelle")({
  component: VirtualTourPage,
  head: () =>
    hotelHead(
      "Visite virtuelle pour votre établissement | Hôtel L’Hirondelle",
      "Découvrez un exemple de visite virtuelle à 360° et contactez-nous pour présenter votre établissement en immersion.",
    ),
});

function VirtualTourPage() {
  const embedRef = useRef<HTMLDivElement>(null);
  const [embedFailed, setEmbedFailed] = useState(false);

  useEffect(() => {
    const container = embedRef.current;
    if (!container) return;

    let mounted = true;
    const embed = document.createElement("div");
    embed.dataset["kuula"] = tourUrl;
    embed.dataset["width"] = "100%";
    embed.dataset["height"] = "640px";
    container.appendChild(embed);

    loadKuulaEmbed()
      .then(() => {
        if (mounted) window.kuulaEmbed?.add(embed, 0);
      })
      .catch(() => {
        if (mounted) setEmbedFailed(true);
      });

    return () => {
      mounted = false;
      if (container.querySelector("iframe")) window.kuulaEmbed?.clear();
      container.replaceChildren();
    };
  }, []);

  return (
    <div className="virtual-tour-page">
      <section className="virtual-tour-hero">
        <div className="site-width virtual-tour-hero-content">
          <span className="section-label">Une expérience immersive pour vos clients</span>
          <h1>Et si vos visiteurs pouvaient déjà pousser la porte&nbsp;?</h1>
          <p>
            Faites découvrir vos espaces autrement. Une visite virtuelle à 360° permet à vos futurs
            clients d’explorer votre établissement avant même leur arrivée.
          </p>
          <div className="virtual-tour-actions">
            <Button asChild variant="hotel">
              <a href="#exemple">
                Voir l’exemple
                <ArrowDown />
              </a>
            </Button>
            <Button asChild variant="hero">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Parlons de votre projet
                <MessageCircle />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section site-width virtual-tour-intro">
        <div>
          <span className="section-label">Montrez l’expérience, pas seulement les photos</span>
          <h2>Une première visite, où qu’ils soient.</h2>
        </div>
        <p>
          Chambres, espaces d’accueil, restaurant ou lieux de réception : présentez les espaces qui
          donnent envie de réserver. La visite peut ensuite être partagée avec vos clients et
          intégrée à votre site selon votre projet.
        </p>
      </section>

      <section className="virtual-tour-demo" id="exemple">
        <div className="site-width">
          <div className="virtual-tour-heading">
            <span className="section-label">Exemple de visite immersive</span>
            <h2>Découvrez la visite de l’Hôtel Edelweiss</h2>
            <p>
              Explorez la démonstration à 360°. Faites glisser l’image et utilisez les commandes
              pour parcourir les différents espaces.
            </p>
          </div>

          <div
            ref={embedRef}
            className="virtual-tour-embed"
            role="region"
            aria-label="Visite virtuelle de démonstration hébergée par Kuula"
          />

          {embedFailed && (
            <p className="virtual-tour-fallback" role="status">
              La visite intégrée ne se charge pas. Vous pouvez l’ouvrir directement sur Kuula.
            </p>
          )}
          <p className="virtual-tour-note">
            Cette démonstration est hébergée par Kuula et présente l’Hôtel Edelweiss. Elle illustre
            le principe d’une visite virtuelle ; elle ne représente pas l’Hôtel L’Hirondelle.
          </p>
          <Button asChild variant="link" className="virtual-tour-open">
            <a href={tourUrl} target="_blank" rel="noreferrer">
              Ouvrir la visite sur Kuula
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </section>

      <section className="virtual-tour-contact">
        <div className="site-width virtual-tour-contact-inner">
          <div>
            <span className="section-label">Votre établissement mérite sa visite</span>
            <h2>Parlons de votre projet.</h2>
            <p>
              Vous souhaitez proposer une visite virtuelle de votre hôtel, maison d’hôtes ou autre
              établissement&nbsp;? Contactez-moi pour en discuter.
            </p>
          </div>
          <div className="virtual-tour-contact-actions">
            <Button asChild variant="hotel">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle />
                WhatsApp · 077 65 76 35
              </a>
            </Button>
            <Button asChild variant="hero">
              <a href="mailto:moueletgeoff@gmail.com?subject=Projet%20de%20visite%20virtuelle">
                <Mail />
                moueletgeoff@gmail.com
              </a>
            </Button>
            <a className="virtual-tour-phone" href="tel:+24177657635">
              <Smartphone aria-hidden="true" />
              Appeler le 077 65 76 35
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
