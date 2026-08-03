import Link from "next/link";

export function Header() {
  return <header className="site-header"><Link className="brand" href="/">MOVIES<span>&</span>ENT</Link><nav><Link href="/">Home</Link><Link href="/#trending">Trending</Link><Link href="/search">Search</Link></nav><Link className="telegram-link" href="https://t.me/moviesandent" target="_blank">Join Telegram ↗</Link></header>;
}
