import {createFileRoute} from '@tanstack/react-router';
import {InfoPage} from '@/components/hotel-pages';
import {hotelHead} from '@/lib/hotel';
export const Route=createFileRoute('/informations-pratiques')({component:Page,head:()=>hotelHead('Informations pratiques | Hôtel L’Hirondelle','Les informations à vérifier avant votre venue.')});
function Page(){return <InfoPage title="Informations pratiques" description="Les informations à vérifier avant votre venue." kind="informations-pratiques"/>;}
