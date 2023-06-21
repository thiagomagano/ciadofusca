import PocketBase from 'pocketbase';
import { PUBLIC_POCKETBASE_URL, PUBLIC_PB_ADMIN_USER, PUBLIC_PB_ADMIN_PASS } from '$env/static/public';

const pb = new PocketBase(PUBLIC_POCKETBASE_URL);

export default pb;