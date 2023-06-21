// src/hooks.server.js
import PocketBase from 'pocketbase';
import { PUBLIC_POCKETBASE_URL, } from '$env/static/public';
import { PB_ADMIN_USER, PB_ADMIN_PASS } from '$env/static/private';


/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  event.locals.pb = new PocketBase(PUBLIC_POCKETBASE_URL);
  //const authData = await event.locals.pb.admins.authWithPassword(PB_ADMIN_USER, PB_ADMIN_PASS);


  // load the store data from the request cookie string
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');


  try {
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
    event.locals.pb.authStore.isValid && await event.locals.pb.collection('interesses').authRefresh();
  } catch (_) {
    // clear the auth store on failed refresh
    event.locals.pb.authStore.clear();
  }

  const response = await resolve(event);

  // send back the default 'pb_auth' cookie to the client with the latest store state
  response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

  return response;
}