export function isAdmin(email?: string) { return Boolean(email && process.env.ADMIN_EMAILS?.split(",").map((item) => item.trim().toLowerCase()).includes(email.toLowerCase())); }
