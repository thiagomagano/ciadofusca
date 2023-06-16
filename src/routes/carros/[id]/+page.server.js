import { error } from '@sveltejs/kit';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public'

export async function load({ params, fetch }) {
    const response = await fetch(PUBLIC_POCKETBASE_URL + `/api/collections/carros/records/` + params.id)
    const jsonData = await response.json()

    if (jsonData) {
        return jsonData
    }
    throw error(404, 'Not found');
}