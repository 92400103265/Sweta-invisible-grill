export const BASE_URL = "https://www.invisiblesafetygrillpatna.com";

export function getCanonicalUrl(path: string = ""): string {
  // Remove query parameters and hash fragments
  const cleanPath = path.split("?")[0].split("#")[0];

  // Add leading slash when required
  const normalizedPath = cleanPath
    ? cleanPath.startsWith("/")
      ? cleanPath
      : `/${cleanPath}`
    : "";

  // Add trailing slash for all non-root paths
  const finalPath = normalizedPath
    ? normalizedPath.endsWith("/")
      ? normalizedPath
      : `${normalizedPath}/`
    : "";

  return `${BASE_URL}${finalPath}`;
}