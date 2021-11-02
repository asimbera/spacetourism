import urlJoin from 'url-join';

export function getAssetUrl(path: string): string {
  const baseUrl = import.meta.env.BASE_URL;
  return urlJoin(baseUrl + path);
}
