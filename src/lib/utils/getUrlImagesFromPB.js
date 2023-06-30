import { PUBLIC_POCKETBASE_URL as PBUrl } from '$env/static/public';

export default function getUrlImagesFromPB(collection, id, fileName, thumb = false) {
  if (thumb) {
    return `${PBUrl}/api/files/${collection}/${id}/${fileName}?thumb=100x300`;
  }

  return `${PBUrl}/api/files/${collection}/${id}/${fileName}`;
}
