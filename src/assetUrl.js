/** Resolve a path under the Vite base (GitHub Pages project site). */
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL || "/";
  const clean = String(path || "").replace(/^\//, "");
  return `${base}${clean}`;
}
