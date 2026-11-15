import {createFileRoute} from '@tanstack/react-router';
import {AboutPage} from '@/components/hotel-pages';
import {hotelHead} from '@/lib/hotel';
export const Route=createFileRoute('/hotel')({component:Page,head:()=>hotelHead('L’hôtel | Hôtel L’Hirondelle','Découvrez l’esprit de l’Hôtel L’Hirondelle à Port-Gentil.')});
function Page(){return <AboutPage/>;}
