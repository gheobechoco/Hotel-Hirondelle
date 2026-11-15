import {createFileRoute} from '@tanstack/react-router';
import {InfoPage} from '@/components/hotel-pages';
import {hotelHead} from '@/lib/hotel';
export const Route=createFileRoute('/offres')({component:Page,head:()=>hotelHead('Offres & formules | Hôtel L’Hirondelle','Les formules disponibles pour votre prochain séjour.')});
function Page(){return <InfoPage title="Offres & formules" description="Les formules disponibles pour votre prochain séjour." kind="offres"/>;}
