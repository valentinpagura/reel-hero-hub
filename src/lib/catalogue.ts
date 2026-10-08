import terminator from '@/assets/terminator.jpg.asset.json';
import jurassicPark from '@/assets/jurassic-park.jpg.asset.json';
import starWars from '@/assets/star-wars.jpg.asset.json';
import alien from '@/assets/alien.jpg.asset.json';

// Preview records only. IDs are deliberately not database IDs.
// Replace with verified existing records when the original connection is available.
export interface Pelicula {
  id: string;
  nombre: string;
  imagen: string;
  generos: string[];
  restriccion_edad: number;
  duracion_minutos: number;
  sinopsis: string;
}

export const peliculas: Pelicula[] = [
  { id: 'preview-terminator', nombre: 'Terminator', imagen: terminator.url, generos: ['Ciencia ficción', 'Acción'], restriccion_edad: 16, duracion_minutos: 107, sinopsis: 'Un viaje desde el futuro. Una persecución que lo cambia todo.' },
  { id: 'preview-jurassic-park', nombre: 'Jurassic Park', imagen: jurassicPark.url, generos: ['Aventura', 'Ciencia ficción'], restriccion_edad: 16, duracion_minutos: 127, sinopsis: 'La vida encuentra un camino. El parque más extraordinario vuelve a abrir sus puertas.' },
  { id: 'preview-star-wars', nombre: 'Star Wars: El Imperio Contraataca', imagen: starWars.url, generos: ['Ciencia ficción', 'Aventura'], restriccion_edad: 16, duracion_minutos: 124, sinopsis: 'La Rebelión enfrenta su mayor desafío en una galaxia muy, muy lejana.' },
  { id: 'preview-alien', nombre: 'Alien', imagen: alien.url, generos: ['Terror', 'Ciencia ficción'], restriccion_edad: 16, duracion_minutos: 117, sinopsis: 'En el espacio, nadie puede oír tus gritos.' },
];

export const generos = [...new Set(peliculas.flatMap(pelicula => pelicula.generos))].sort();
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es').trim();
export function filtrarPeliculas(lista: Pelicula[], termino: string, genero: string) {
  return lista.filter(pelicula => normalize(pelicula.nombre).includes(normalize(termino)) && (!genero || pelicula.generos.includes(genero)));
}