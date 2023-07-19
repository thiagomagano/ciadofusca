import { error, fail } from '@sveltejs/kit';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import { PB_ADMIN_USER, PB_ADMIN_PASS } from '$env/static/private';
import sendEmail from '$lib/utils/sendEmail'


let car;

export async function load({ params, fetch }) {


  const response = await fetch(
    PUBLIC_POCKETBASE_URL + `/api/collections/carros/records/` + params.slug
  );
  const jsonData = await response.json();

  car = jsonData;

  if (jsonData) {
    return jsonData;
  }
  throw error(404, 'Not found');
}
/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, locals, params, }) => {
    const data = await request.formData();
    const nome = data.get('nome');
    const whatsapp = data.get('whatsapp');
    const email = data.get('email');
    const troca = data.get('troca');
    const proposta = data.get('proposta');

    const whatsappRegex = new RegExp(/^(?:\+|00)?(?:55)?(?:\(?0?\d{2}\)?)?[9]?\d{4}[-.]?\d{4}$/);

    if (!nome) {
      return fail(400, { missingName: true, msg: 'O campo Nome é obrigatório' });
    }
    if (!whatsapp) {
      return fail(400, { missingWpp: true, msg: 'O campo Whatsapp é obrigatório' });
    }
    if (!proposta) {
      return fail(400, { missingProposta: true, msg: 'O campo Proposta é obrigatório' });
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
      troca: (troca === 'on' ? true : false),
      proposta: proposta,
      idCarro: params.slug
    };


    const userData = {
      nome: nome,
      whatsapp: whatsapp,
      email: email
    }

    const templateBody = `<div>
        <h1> Uma nova proposta foi recebida</h1>
        <p> <strong>Carro:</strong> ${car.titulo} </p>
        <p> <strong>Valor:</strong> ${car.preco} </p>
        <p> <strong>Nome:</strong> ${pbData.nome} </p>
        <p> <strong>Zap:</strong> ${pbData.whatsapp} </p>
        <p> <strong>Prposta:</strong> ${pbData.proposta} </p>
        <p> <strong>Carro na Troca:</strong> ${pbData.troca === 'on' ? "Sim" : "Não"} </p>
        <p> <strong>Página do carro:</strong> www.ciadofusca.com.br/carros/${car.id} </p>
      </div>`


    const templateSubject = `NOVA PROPOSTA RECEBIDA - ${car.titulo}`

    await locals.pb.admins.authWithPassword(PB_ADMIN_USER, PB_ADMIN_PASS);

    const record = await locals.pb.collection('propostas').create(pbData);
    const recordUser = await locals.pb.collection('clientes').create(userData);

    const dataEmail = await sendEmail("site@email.ciadofusca.com.br",
      ["othymag@gmail.com"],
      templateSubject,
      templateBody);



    console.log("dataEMail", dataEmail)

    if (!record) throw error(400, { msg: 'Erro ao criar registro' });

    return { success: true, record: JSON.stringify(record), msg: "Proposta enviada." };
  }
};
