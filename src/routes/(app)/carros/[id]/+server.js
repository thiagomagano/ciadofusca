import { redirect } from '@sveltejs/kit';

/**
 * Creates a `POST /carros/:id` server-side endpoint
 *
 * @type {import('./$types').RequestHandler}
 */
export async function POST({ request, locals }) {
	//const { adminEmail, password } = locals.pb.auth
	const { nome, whatsapp, email, cardId } = await request.json();

	const data = {
		nome: nome,
		whatsapp: whatsapp,
		email: email,
		idCarro: cardId
	};
	console.log(data);

	const record = await locals.pb.collection('interesses').create(data);

	throw redirect(403, '/home');

	return new Response('Success...', record);
}
