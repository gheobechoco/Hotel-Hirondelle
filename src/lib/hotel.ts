import entrance from '@/assets/hotel-entrance.jpg.asset.json';
import room from '@/assets/hotel-room.jpg.asset.json';
import facade from '@/assets/hotel-facade.jpg.asset.json';
import palms from '@/assets/hotel-palms.jpg.asset.json';
import balcony from '@/assets/hotel-balcony.jpg.asset.json';
import hallImg from '@/assets/hotel-hall.jpg.asset.json';
import buvetteImg from '@/assets/hotel-buvette.jpg.asset.json';
export const hall={url:hallImg.url,alt:'Hall de l’Hôtel L’Hirondelle'};
export const buvette={url:buvetteImg.url,alt:'Espace buvette de l’hôtel'};
export const photos = [{url:entrance.url,alt:'Entrée de l’Hôtel L’Hirondelle'}, {url:room.url,alt:'Chambre et fresque tropicale de l’hôtel'}, {url:facade.url,alt:'Façade de l’hôtel et palmiers'}, {url:palms.url,alt:'Palmes vues depuis le balcon'}, {url:balcony.url,alt:'Balcon de l’hôtel'}] as const;
export const categories = ['Chambre Standard','Chambre Supérieure','Studio & Appartement Meublé','Chambre Deluxe & Suite'] as const;
export const navigation = [{to:'/' as const,label:'Accueil'}, {to:'/chambres' as const,label:'Chambres & studios'}, {to:'/services' as const,label:'Services'}, {to:'/affaires' as const,label:'Séjours professionnels'}, {to:'/galerie' as const,label:'Galerie'}, {to:'/contact' as const,label:'Contact'}];
export function isApproved(status?:string) { return status === 'approved' || status === 'published'; }
export function hotelHead(title:string,description:string) { return {meta:[{title},{name:'description',content:description},{property:'og:title',content:title},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}; }
