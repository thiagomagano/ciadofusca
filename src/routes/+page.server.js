import { error } from '@sveltejs/kit';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
//import { data } from '$lib/stores';

export async function load({ fetch }) {
  const response = await fetch(`${PUBLIC_POCKETBASE_URL}/api/collections/carros/records`);
  const data = await response.json();

  if (data) {
    return {
      cars: data.items,
      carsTotal: data.totalItems,
    }
  }
  error(404, 'Not found');
}
