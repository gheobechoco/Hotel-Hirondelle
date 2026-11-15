import {createFileRoute} from '@tanstack/react-router';
import {InfoPage} from '@/components/hotel-pages';
import {hotelHead} from '@/lib/hotel';
export const Route=createFileRoute('/mentions-legales')({component:Page,head:()=>hotelHead('Mentions légales | Hôtel L’Hirondelle','Informations relatives à l’éditeur du site.')});
function Page(){return <InfoPage title="Mentions légales" description="Informations relatives à l’éditeur du site." kind="mentions-legales"/>;}
