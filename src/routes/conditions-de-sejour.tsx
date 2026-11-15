import {createFileRoute} from '@tanstack/react-router';
import {InfoPage} from '@/components/hotel-pages';
import {hotelHead} from '@/lib/hotel';
export const Route=createFileRoute('/conditions-de-sejour')({component:Page,head:()=>hotelHead('Conditions de séjour | Hôtel L’Hirondelle','Votre demande et les conditions de confirmation.')});
function Page(){return <InfoPage title="Conditions de séjour" description="Votre demande et les conditions de confirmation." kind="conditions-de-sejour"/>;}
