import { createFileRoute } from '@tanstack/react-router';
import { PageBanner } from '@/components/hotel-pages';
import { hotelHead } from '@/lib/hotel';
export const Route = createFileRoute('/merci')({ component: Page, head: () => hotelHead('Votre demande | Hôtel L’Hirondelle', 'Retrouvez la référence affichée après l’envoi de votre demande.') });
function Page() { return <PageBanner title="Votre demande de séjour" description="Une demande envoyée affiche sa référence dans le formulaire. Seule la confirmation de l’hôtel vaut réservation." />; }