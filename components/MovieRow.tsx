import type { Movie } from "@/lib/movies";
import { MovieCard } from "./MovieCard";

export function MovieRow({ title, movies }: { title: string; movies: Movie[] }) { return <section className="movie-row"><div className="section-title"><h2>{title}</h2><span>Explore all →</span></div><div className="movie-grid">{movies.map((movie) => <MovieCard key={movie.slug} movie={movie} />)}</div></section>; }
