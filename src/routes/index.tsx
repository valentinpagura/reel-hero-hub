import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Search, ChevronDown, ArrowUpRight, Clock3, Film, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CinemaShell } from '@/components/CinemaShell';
import { peliculas, generos, filtrarPeliculas } from '@/lib/catalogue';
import usher from '@/assets/cinema-usher.png';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Cartelera — CINE! Una función, un plan' },
    { name: 'description', content: 'La cartelera no se queda quieta. Terminator, Jurassic Park, Star Wars y Alien vuelven a la pantalla grande en CINE!.' },
    { property: 'og:title', content: 'CINE! — La cartelera no se queda quieta' },
    { property: 'og:description', content: 'Encontrá tu próxima obsesión entre los clásicos de nuestra cartelera.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Index() {
  const [termino, setTermino] = useState('');
  const [genero, setGenero] = useState('');
  const filtradas = filtrarPeliculas(peliculas, termino, genero);
  const limpiar = () => { setTermino(''); setGenero(''); };

  return <CinemaShell>
    <section className="cine-container cine-hero" aria-labelledby="hero-title">
      <div className="usher-scene">
        <img className="usher-image" src={usher} alt="Acomodador de vinilo blanco en un sillón de cine, con gafas 3D y un balde de pochoclos" width={1024} height={1024} fetchPriority="high" />
      </div>
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> LA PANTALLA GRANDE TE ESPERA</p>
        <h1 id="hero-title" className="hero-title">LA CARTELERA<br />NO SE QUEDA<br /><span>QUIETA.</span></h1>
        <p className="hero-description">Hay historias que merecen volver a verse en el cine.<br />Buscá tu próxima obsesión. El resto es puro pochoclo.</p>
        <div className="movie-filters" aria-label="Filtros de cartelera">
          <label className="search-field">
            <Search size={17} aria-hidden="true" />
            <span className="sr-only">Buscar película</span>
            <input type="search" value={termino} onChange={event => setTermino(event.target.value)} placeholder="Buscar película..." />
          </label>
          <label className="genre-field">
            <span className="sr-only">Género</span>
            <select value={genero} onChange={event => setGenero(event.target.value)}>
              <option value="">Todos los géneros</option>
              {generos.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
            <ChevronDown size={14} aria-hidden="true" />
          </label>
        </div>
      </div>
    </section>
    <section className="cine-container catalogue" aria-labelledby="catalogue-title">
      <div className="catalogue-heading">
        <div><p className="section-kicker">AHORA EN CARTELERA</p><h2 id="catalogue-title" className="catalogue-title">Tu próxima obsesión.</h2></div>
        <div className="movie-count" aria-live="polite">
          {(termino || genero) && <Button variant="ghost" size="icon" title="Limpiar filtros" aria-label="Limpiar filtros" onClick={limpiar}><X /></Button>}
          <Film size={13} /><span>{filtradas.length} {filtradas.length === 1 ? 'película' : 'películas'}</span>
        </div>
      </div>
      {filtradas.length ? <div className="movie-grid">
        {filtradas.map(pelicula => <article className="movie-card" key={pelicula.id}>
          <div className="movie-poster">
            <img src={pelicula.imagen} alt={`Póster de ${pelicula.nombre}`} width={500} height={750} loading="lazy" decoding="async" />
            <span className="age-badge">+{pelicula.restriccion_edad}</span>
          </div>
          <div className="movie-details">
            <div className="movie-genres">{pelicula.generos.map(item => <span key={item}>{item}</span>)}</div>
            <h3 className="movie-title">{pelicula.nombre}</h3>
            <p className="movie-duration"><Clock3 size={12} />{pelicula.duracion_minutos} min <span>·</span> En pantalla grande</p>
            <Button variant="cinema" className="movie-cta" asChild>
              <Link to="/comprar" search={{ pelicula: pelicula.id, titulo: pelicula.nombre }}>VER FUNCIONES <ArrowUpRight size={15} /></Link>
            </Button>
          </div>
        </article>)}
      </div> : <div className="empty-state" role="status">
        <h3>No encontramos películas con esos filtros.</h3>
        <p>Probá otro título o mirá todos los géneros.</p>
        <Button variant="cinema" onClick={limpiar}>Ver toda la cartelera</Button>
      </div>}
    </section>
  </CinemaShell>;
}
