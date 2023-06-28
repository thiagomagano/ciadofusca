import { error, fail } from '@sveltejs/kit';
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
/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, locals, params }) => {
    const data = await request.formData();
    const nome = data.get('nome');
    const whatsapp = data.get('whatsapp');
    const email = data.get('email');


    if (!nome || !whatsapp) { return fail(400, { missing: true, msg: 'Faltou preencher campos obrigatórios' }); }
    if (whatsapp.match(/[^0-9]/g)) { return fail(400, { incorrect: true, msg: 'Whatsapp deve conter apenas números' }); }

    const pbData = {
      "nome": nome,
      "whatsapp": whatsapp,
      "email": email,
      "idCarro": params.id
    };

    const record = locals.pb.admins.authWithPassword(PB_ADMIN_USER, PB_ADMIN_PASS).then(async (res) => {
      return await locals.pb.collection('interesses').create(pbData)
    }).catch((err) => { { return fail(400, 'Erro ao criar registro'); } })

    return { success: true, record: JSON.stringify(record) };
  }
}

