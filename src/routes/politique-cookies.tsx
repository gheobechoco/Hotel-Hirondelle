import {createFileRoute} from '@tanstack/react-router';
import {InfoPage} from '@/components/hotel-pages';
import {hotelHead} from '@/lib/hotel';
export const Route=createFileRoute('/politique-cookies')({component:Page,head:()=>hotelHead('Politique de cookies | Hôtel L’Hirondelle','Informations sur les cookies et traceurs du site.')});
function Page(){return <InfoPage title="Politique de cookies" description="Informations sur les cookies et traceurs du site." kind="politique-cookies"/>;}
