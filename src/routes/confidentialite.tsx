import {createFileRoute} from '@tanstack/react-router';
import {InfoPage} from '@/components/hotel-pages';
import {hotelHead} from '@/lib/hotel';
export const Route=createFileRoute('/confidentialite')({component:Page,head:()=>hotelHead('Politique de confidentialité | Hôtel L’Hirondelle','Les informations transmises pour préparer votre séjour.')});
function Page(){return <InfoPage title="Politique de confidentialité" description="Les informations transmises pour préparer votre séjour." kind="confidentialite"/>;}
