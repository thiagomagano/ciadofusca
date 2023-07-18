import { error } from '@sveltejs/kit';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import sortArray from '$lib/utils/sortArrays'

export async function load({ fetch, params }) {
  const response = await fetch(`${PUBLIC_POCKETBASE_URL}/api/collections/carros/records`);
  const jsonData = await response.json();



  if (jsonData) {
    return { carros: sortArray(jsonData.items) };
  }
  throw error(404, 'Not found');
}
