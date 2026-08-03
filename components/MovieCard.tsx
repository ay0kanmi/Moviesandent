import Image from "next/image";
import Link from "next/link";
import type { Movie } from "@/lib/movies";

export function MovieCard({ movie }: { movie: Movie }) {
  return <Link href={`/movies/${movie.slug}`} className="movie-card"><div className="poster"><Image src={movie.poster} alt={`${movie.title} poster`} fill sizes="(max-width: 700px) 45vw, 190px" /><span>★ {movie.rating}</span></div><h3>{movie.title}</h3><p>{movie.year} · {movie.genres[0]}</p></Link>;
}
