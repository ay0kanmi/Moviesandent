import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin";
import { createClient } from "@/lib/supabase/server";
export default async function AdminPage() { const { data: { user } } = await (await createClient()).auth.getUser(); if (!user) redirect("/login"); if (!isAdmin(user.email)) return <main className="page"><h1>Access denied</h1><p>Your email is not included in ADMIN_EMAILS.</p></main>; return <main className="page"><p className="eyebrow">Control room</p><h1>Admin dashboard</h1><p>Welcome, {user.email}. Configure Telegram links and collections in Supabase.</p></main>; }
