import {createFileRoute} from '@tanstack/react-router';
import {BusinessPage} from '@/components/hotel-pages';
import {hotelHead} from '@/lib/hotel';
export const Route=createFileRoute('/affaires')({component:Page,head:()=>hotelHead('Séjours professionnels | Hôtel L’Hirondelle','Préparez vos déplacements professionnels à Port-Gentil avec L’Hirondelle.')});
function Page(){return <BusinessPage/>;}
