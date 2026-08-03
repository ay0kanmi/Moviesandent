import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findMovie, movies } from "@/lib/movies";
import { MovieRow } from "@/components/MovieRow";

export default async function MoviePage({ params }: { params: Promise<{ slug: string }> }) { const movie = findMovie((await params).slug); if (!movie) notFound(); return <main><section className="detail-hero" style={{ backgroundImage: `linear-gradient(90deg, #0b1220 8%, rgba(11,18,32,.78) 52%, #0b1220 100%), url(${movie.backdrop})` }}><div className="detail"><Image src={movie.poster} alt={`${movie.title} poster`} width={220} height={330} priority /><div><p className="eyebrow">{movie.genres.join(" · ")}</p><h1>{movie.title}</h1><div className="facts"><span>★ {movie.rating}</span><span>{movie.year}</span><span>{movie.runtime}</span></div><p>{movie.overview}</p><Link className="button primary" href={movie.telegramUrl} target="_blank">Download on Telegram ↗</Link></div></div></section><MovieRow title="You may also like" movies={movies.filter((item) => item.slug !== movie.slug).slice(0, 4)} /></main>; }
