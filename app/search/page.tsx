import { MovieCard } from "@/components/MovieCard";
import { movies } from "@/lib/movies";

export default function SearchPage() { return <main className="page"><p className="eyebrow">Find something great</p><h1>Browse the collection</h1><div className="search-input">⌕ <input aria-label="Search movies" placeholder="Search movies, series, genres..." /></div><div className="chips">{["All", "Action", "Drama", "Anime", "Science Fiction", "Comedy"].map((genre) => <button key={genre}>{genre}</button>)}</div><div className="movie-grid search-grid">{movies.map((movie) => <MovieCard key={movie.slug} movie={movie} />)}</div></main>; }
