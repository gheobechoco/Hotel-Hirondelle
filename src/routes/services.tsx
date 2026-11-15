import {createFileRoute} from '@tanstack/react-router';
import {InfoPage} from '@/components/hotel-pages';
import {hotelHead} from '@/lib/hotel';
export const Route=createFileRoute('/services')({component:Page,head:()=>hotelHead('Restauration & services | Hôtel L’Hirondelle','Préparez les attentions de votre séjour.')});
function Page(){return <InfoPage title="Restauration & services" description="Préparez les attentions de votre séjour." kind="services"/>;}
