export type Movie = {
  slug: string;
  title: string;
  year: number;
  rating: number;
  runtime: string;
  genres: string[];
  overview: string;
  poster: string;
  backdrop: string;
  telegramUrl: string;
  featured?: boolean;
};

export const movies: Movie[] = [
  { slug: "dune-part-two", title: "Dune: Part Two", year: 2024, rating: 8.2, runtime: "2h 46m", genres: ["Science Fiction", "Adventure"], overview: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.", poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg", telegramUrl: "https://t.me/moviesandent", featured: true },
  { slug: "spider-verse", title: "Spider-Man: Across the Spider-Verse", year: 2023, rating: 8.4, runtime: "2h 20m", genres: ["Animation", "Action"], overview: "Miles Morales catapults across the Multiverse, meeting a team of Spider-People charged with protecting its existence.", poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", backdrop: "https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg", telegramUrl: "https://t.me/moviesandent" },
  { slug: "the-batman", title: "The Batman", year: 2022, rating: 7.8, runtime: "2h 57m", genres: ["Crime", "Mystery"], overview: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.", poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg", telegramUrl: "https://t.me/moviesandent" },
  { slug: "the-fall-guy", title: "The Fall Guy", year: 2024, rating: 7.1, runtime: "2h 6m", genres: ["Action", "Comedy"], overview: "A down-and-out stuntman must find the missing star of his ex-girlfriend's blockbuster film.", poster: "https://image.tmdb.org/t/p/w500/tSz1qsmSJon0rqjHBxXZmrotuse.jpg", backdrop: "https://image.tmdb.org/t/p/original/zC8VfV7KbfD6m6j0rZ0cA6w9d5E.jpg", telegramUrl: "https://t.me/moviesandent" },
  { slug: "shogun", title: "Shōgun", year: 2024, rating: 8.7, runtime: "1 Season", genres: ["Drama", "History"], overview: "A sailor lands in 17th-century Japan and becomes entangled in a struggle for power.", poster: "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg", backdrop: "https://image.tmdb.org/t/p/original/4XDDuV2y9xJxS6w9B2l2qP3M8fC.jpg", telegramUrl: "https://t.me/moviesandent" },
  { slug: "solo-leveling", title: "Solo Leveling", year: 2024, rating: 8.6, runtime: "1 Season", genres: ["Anime", "Fantasy"], overview: "A weak hunter discovers a mysterious program that lets him level up beyond all limits.", poster: "https://image.tmdb.org/t/p/w500/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg", backdrop: "https://image.tmdb.org/t/p/original/2lHoJd2u7MZ4StnF6deD5pP5E0L.jpg", telegramUrl: "https://t.me/moviesandent" }
];

export const featuredMovie = movies.find((movie) => movie.featured)!;
export const findMovie = (slug: string) => movies.find((movie) => movie.slug === slug);
