export default function sanityImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // For local/relative paths, return as-is
  if (src.startsWith('/') || src.startsWith('./')) {
    return src;
  }
  const url = new URL(src);
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', (quality || 75).toString());
  url.searchParams.set('auto', 'format');
  return url.toString();
}
