import {createFileRoute} from '@tanstack/react-router';
import {GalleryPage} from '@/components/hotel-pages';
import {hotelHead} from '@/lib/hotel';
export const Route=createFileRoute('/galerie')({component:Page,head:()=>hotelHead('Galerie photos | Hôtel L’Hirondelle','Photographies de l’Hôtel L’Hirondelle à Port-Gentil.')});
function Page(){return <GalleryPage/>;}
