import Link from "next/link";
import { MovieRow } from "@/components/MovieRow";
import { featuredMovie, movies } from "@/lib/movies";
import { getTrendingMovies } from "@/lib/tmdb";

export default async function Home() {
  const catalogue = await getTrendingMovies().catch(() => movies); const featured = catalogue[0] ?? featuredMovie;
  return <main><section className="hero" style={{ backgroundImage: `linear-gradient(90deg, #0b1220 5%, rgba(11,18,32,.68) 48%, rgba(11,18,32,.9) 100%), url(${featured.backdrop})` }}><div className="hero-content"><p className="eyebrow">Featured today</p><h1>{featured.title}</h1><div className="facts"><span>★ {featured.rating}</span><span>{featured.year}</span><span>{featured.runtime}</span></div><p>{featured.overview}</p><div className="hero-actions"><Link className="button primary" href={`/movies/${featured.slug}`}>View details</Link><Link className="button ghost" href="/search">Browse titles</Link></div></div></section><MovieRow title="Trending now" movies={catalogue.slice(0, 4)} /><MovieRow title="New & noteworthy" movies={catalogue.slice(4, 8)} /><section className="telegram-banner"><div><p className="eyebrow">Never miss a release</p><h2>Get movie updates on Telegram.</h2><p>Join our channel for new uploads and direct download links.</p></div><Link className="button primary" href="https://t.me/moviesandent" target="_blank">Join channel ↗</Link></section></main>;
}
