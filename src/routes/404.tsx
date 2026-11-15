import { createFileRoute, Link } from '@tanstack/react-router';
import { PageBanner } from '@/components/hotel-pages';
import { Button } from '@/components/ui/button';
import { hotelHead } from '@/lib/hotel';
export const Route = createFileRoute('/404')({ component: Page, head: () => hotelHead('Page introuvable | Hôtel L’Hirondelle', 'Retrouvez l’accueil de l’Hôtel L’Hirondelle.') });
function Page() { return <><PageBanner title="Cette page s’est envolée." description="Retrouvez les informations pour préparer votre séjour depuis l’accueil." /><div className="section site-width"><Button asChild><Link to="/">Retour à l’accueil</Link></Button></div></>; }