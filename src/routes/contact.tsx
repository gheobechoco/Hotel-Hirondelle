import {createFileRoute} from '@tanstack/react-router';
import {ContactPage} from '@/components/hotel-pages';
import {hotelHead} from '@/lib/hotel';
export const Route=createFileRoute('/contact')({component:Page,head:()=>hotelHead('Contact | Hôtel L’Hirondelle','Contactez l’Hôtel L’Hirondelle pour préparer votre séjour.')});
function Page(){return <ContactPage/>;}
