import { describe, expect, it } from 'vitest';
import { peliculas, filtrarPeliculas } from '@/lib/catalogue';

describe('Requested movie ratings', () => {
  for (const nombre of ['Terminator', 'Jurassic Park', 'Star Wars: El Imperio Contraataca', 'Alien']) {
    it(`${nombre} is classified +16`, () => {
      expect(peliculas.find(pelicula => pelicula.nombre === nombre)?.restriccion_edad).toBe(16);
    });
  }
});

describe('Catalogue filters', () => {
  it('finds a movie by title', () => {
    expect(filtrarPeliculas(peliculas, 'jurassic', '').map(pelicula => pelicula.nombre)).toEqual(['Jurassic Park']);
  });
  it('combines genre and title filters', () => {
    expect(filtrarPeliculas(peliculas, 'alien', 'Aventura')).toEqual([]);
    expect(filtrarPeliculas(peliculas, '', 'Terror').map(pelicula => pelicula.nombre)).toEqual(['Alien']);
  });
});