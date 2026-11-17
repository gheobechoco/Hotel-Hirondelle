import entrance from "@/assets/hirondelle-entree.jpg";
import room from "@/assets/hirondeelle-chambre1.jpg";
import facade from "@/assets/hotel-hirondelle-vue-etages1.jpg";
import palms from "@/assets/hotel-hirondeele-nature.jpg";
import balcony from "@/assets/hirondelle-balcon5.jpg";
import hallAsset from "@/assets/hotel-hall.jpg.asset.json";
import buvetteAsset from "@/assets/hotel-buvette.jpg.asset.json";
import balconyView from "@/assets/hirondelle-balcon-vue-bas.jpg";
import balconyViewTwo from "@/assets/hirondelle-vue-balcon2.jpg";
import bedroomThree from "@/assets/hirondelle-vue-chambre-3.jpg";
import bedroomTwo from "@/assets/hirondelle-vue-chambre2.jpg";
import bedroomFive from "@/assets/hirondelle-vue-chambre5.jpg";
import softBed from "@/assets/hirondelle-vue-lit-doux.jpg";
import diningRoom from "@/assets/hotel-hirondeelle-refectoire.jpg";
import nightRoom from "@/assets/hotel-hirondelle-chambre-nuit.jpg";
import buildingAndRoom from "@/assets/hotel-hirondelle-vue-batiment et chambre-exterieure.jpg";
import refreshmentBar from "@/assets/hotel-hirondelle-vue-buvette.jpg";
import bedroomFour from "@/assets/hotel-hirondelle-vue-chambre4.jpg";
import shower from "@/assets/hotel-hirondelle-vue-douche2.jpg";
import entranceDoor from "@/assets/hotel-hirondelle-vue-porte-Acceuil.jpg";
import outsideReception from "@/assets/hotel-hirondelle-vue-reception-exterieur.jpg";
import reception from "@/assets/hotel-hirondelle-vue-reception.jpg";
import bedroomDetail from "@/assets/hotel-hirondelle-vuelutre.jpg";
import alternateNightRoom from "@/assets/hotel-hirondellevue-chambre-nuit.jpg";
import bayView from "@/assets/hotel-hironedlle-vue-baie-vitre.jpg";
import bayWindow from "@/assets/hotel-hironelle-baie-vitre1.jpg";
import hallPhoto from "@/assets/hotrl-hirondelle-vue-hall.jpg";
import bedroomImage from "@/assets/image hotel hirondelele chambre.jfif";

export const photos = [
  { url: entrance, alt: "Entrée de l’Hôtel L’Hirondelle" },
  { url: room, alt: "Chambre de l’hôtel" },
  { url: facade, alt: "Façade de l’hôtel et palmiers" },
  { url: palms, alt: "Palmes vues depuis le balcon" },
  { url: balcony, alt: "Balcon de l’hôtel" },
  { url: balconyView, alt: "Vue depuis un balcon de l’hôtel" },
  { url: balconyViewTwo, alt: "Balcon et vue extérieure" },
  { url: bedroomThree, alt: "Chambre de l’hôtel, vue 3" },
  { url: bedroomTwo, alt: "Chambre de l’hôtel, vue 2" },
  { url: bedroomFive, alt: "Chambre de l’hôtel, vue 5" },
  { url: softBed, alt: "Lit préparé dans une chambre" },
  { url: diningRoom, alt: "Réfectoire de l’hôtel" },
  { url: nightRoom, alt: "Chambre de l’hôtel en soirée" },
  { url: buildingAndRoom, alt: "Bâtiment de l’hôtel et chambre extérieure" },
  { url: refreshmentBar, alt: "Buvette de l’hôtel" },
  { url: bedroomFour, alt: "Chambre de l’hôtel, vue 4" },
  { url: shower, alt: "Douche d’une chambre de l’hôtel" },
  { url: entranceDoor, alt: "Porte d’accueil de l’hôtel" },
  { url: outsideReception, alt: "Entrée extérieure de la réception" },
  { url: reception, alt: "Réception de l’hôtel" },
  { url: bedroomDetail, alt: "Détail d’une chambre de l’hôtel" },
  { url: alternateNightRoom, alt: "Autre vue d’une chambre en soirée" },
  { url: bayView, alt: "Vue depuis une baie vitrée" },
  { url: bayWindow, alt: "Baie vitrée de l’hôtel" },
  { url: hallPhoto, alt: "Hall de l’hôtel" },
  { url: bedroomImage, alt: "Chambre de l’hôtel" },
] as const;
export const hall = { url: hallAsset.url, alt: "Hall de l’Hôtel L’Hirondelle" };
export const buvette = { url: buvetteAsset.url, alt: "Espace buvette de l’hôtel" };
export const categories = [
  "Chambre Standard",
  "Chambre Supérieure",
  "Studio & Appartement Meublé",
  "Chambre Deluxe & Suite",
] as const;
export const navigation = [
  { to: "/" as const, label: "Accueil" },
  { to: "/chambres" as const, label: "Chambres & studios" },
  { to: "/services" as const, label: "Services" },
  { to: "/affaires" as const, label: "Séjours professionnels" },
  { to: "/galerie" as const, label: "Galerie" },
  { to: "/contact" as const, label: "Contact" },
];
export function isApproved(status?: string) {
  return status === "approved" || status === "published";
}
export function hotelHead(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
