import { error } from '@sveltejs/kit';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public'
import { PB_ADMIN_USER, PB_ADMIN_PASS } from '$env/static/private';

export async function load({ params, fetch }) {
  const response = await fetch(PUBLIC_POCKETBASE_URL + `/api/collections/carros/records/` + params.id)
  const jsonData = await response.json()

  if (jsonData) {
    return jsonData
  }
  throw error(404, 'Not found');
}

export const actions = {
  register: async ({ cookies, request, locals, params }) => {
    const data = await request.formData();
    const nome = data.get('nome');
    const whatsapp = data.get('whatsapp');
    const email = data.get('email');

    const pbData = {
      "nome": nome,
      "whatsapp": whatsapp,
      "email": email,
      "idCarro": params.id
    };
    const authData = await locals.pb.admins.authWithPassword(PB_ADMIN_USER, PB_ADMIN_PASS);
    const record = await locals.pb.collection('interesses').create(pbData)

    return { success: true, record: JSON.stringify(record) };
  }
};

