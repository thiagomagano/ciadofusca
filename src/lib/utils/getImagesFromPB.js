import { PUBLIC_URL_API_FILES } from '$env/static/public';

export default function getImagesFromPb(collection, id, fileName, thumb = false) {

  if (thumb) {
    return `${PUBLIC_URL_API_FILES}/${collection}/${id}/${fileName}?thumb=100x300`
  }

  return `${PUBLIC_URL_API_FILES}/${collection}/${id}/${fileName}`
}