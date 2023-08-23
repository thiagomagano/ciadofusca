/** @type {import('./$types').LayoutLoad} */
export async function load({ url }) {
  return {
    url: url.pathname
  };
}