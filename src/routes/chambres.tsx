import {createFileRoute} from '@tanstack/react-router';
import {RoomsPage} from '@/components/hotel-pages';
import {hotelHead} from '@/lib/hotel';
export const Route=createFileRoute('/chambres')({component:Page,head:()=>hotelHead('Chambres & Studios | Hôtel L’Hirondelle','Découvrez les hébergements de l’Hôtel L’Hirondelle à Port-Gentil.')});
function Page(){return <RoomsPage/>;}
