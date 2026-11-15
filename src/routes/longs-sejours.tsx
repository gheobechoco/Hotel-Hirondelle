import {createFileRoute} from '@tanstack/react-router';
import {BusinessPage} from '@/components/hotel-pages';
import {hotelHead} from '@/lib/hotel';
export const Route=createFileRoute('/longs-sejours')({component:Page,head:()=>hotelHead('Longs séjours | Hôtel L’Hirondelle','Préparez un séjour prolongé à l’Hôtel L’Hirondelle.')});
function Page(){return <BusinessPage long/>;}
