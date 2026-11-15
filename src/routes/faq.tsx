import {createFileRoute} from '@tanstack/react-router';
import {FaqPage} from '@/components/hotel-pages';
import {hotelHead} from '@/lib/hotel';
export const Route=createFileRoute('/faq')({component:Page,head:()=>hotelHead('Questions fréquentes | Hôtel L’Hirondelle','Informations sur les demandes de disponibilité à L’Hirondelle.')});
function Page(){return <FaqPage/>;}
