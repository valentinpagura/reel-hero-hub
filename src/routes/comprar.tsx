import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import { CinemaShell } from '@/components/CinemaShell';
import { Button } from '@/components/ui/button';
import { peliculas } from '@/lib/catalogue';

export const Route = createFileRoute('/comprar')({
  validateSearch: (search: Record<string, unknown>) => ({ pelicula: typeof search.pelicula === 'string' ? search.pelicula : '', titulo: typeof search.titulo === 'string' ? search.titulo : '' }),
  head: () => ({ meta: [
    { title: 'Funciones — CINE! Una función, un plan' },
    { name: 'description', content: 'Consultá las funciones de tus películas favoritas en CINE!.' },
    { property: 'og:title', content: 'Funciones — CINE!' },
    { property: 'og:description', content: 'Tu próxima salida al cine empieza con una función.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Funciones,
});

function Funciones() {
  const search = Route.useSearch();
  const pelicula = peliculas.find(item => item.id === search.pelicula);
  return <CinemaShell>
    <section className="cine-container booking-page">
      <Button variant="ghost" asChild><Link to="/"><ArrowLeft /> Volver a cartelera</Link></Button>
      <div className="booking-layout">
        {pelicula && <img src={pelicula.imagen} alt={`Póster de ${pelicula.nombre}`} width={220} height={330} />}
        <div>
          <p className="section-kicker">ELEGÍ TU PRÓXIMO PLAN</p>
          <h1 className="booking-title">{pelicula?.nombre || 'Funciones'}</h1>
          {pelicula && <p className="movie-duration">+{pelicula.restriccion_edad} · {pelicula.duracion_minutos} min · {pelicula.generos.join(' / ')}</p>}
          {pelicula && <p className="hero-description">{pelicula.sinopsis}</p>}
          <div className="booking-notice" role="status">
            <CalendarDays className="text-primary mb-4" size={28} />
            <h2 className="catalogue-title">Funciones aún no disponibles</h2>
            <p className="hero-description mt-4">La conexión a la cartelera original está pendiente. Por ahora no podemos consultar horarios ni reservar entradas.</p>
            <Button variant="cinema" asChild><Link to="/">Volver a cartelera <ArrowLeft /></Link></Button>
          </div>
        </div>
      </div>
    </section>
  </CinemaShell>;
}