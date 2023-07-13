import { error, fail } from '@sveltejs/kit';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import { PB_ADMIN_USER, PB_ADMIN_PASS } from '$env/static/private';

export async function load({ params, fetch }) {


  const response = await fetch(
    PUBLIC_POCKETBASE_URL + `/api/collections/carros/records/` + params.slug
  );
  const jsonData = await response.json();

  if (jsonData) {
    return jsonData;
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

    const whatsappRegex = new RegExp(/^(?:\+|00)?(?:55)?(?:\(?0?\d{2}\)?)?[9]?\d{4}[-.]?\d{4}$/);

    if (!nome) {
      return fail(400, { missingName: true, msg: 'O campo Nome é obrigatórios' });
    }
    if (!whatsapp) {
      return fail(400, { missingWpp: true, msg: 'O campo Whatsapp obrigatórios' });
    }
    if (!whatsapp.match(whatsappRegex)) {
      return fail(400, {
        incorrect: true,
        msg: 'O numéro deve estar em um formato válido ex: 51987654321'
      });
    }

    const pbData = {
      nome: nome,
      whatsapp: whatsapp,
      email: email,
      idCarro: params.id
    };

    await locals.pb.admins.authWithPassword(PB_ADMIN_USER, PB_ADMIN_PASS);

    const record = await locals.pb.collection('interesses').create(pbData);

    if (!record) throw error(400, { msg: 'Erro ao criar registro' });

    return { success: true, record: JSON.stringify(record) };
  }
};
