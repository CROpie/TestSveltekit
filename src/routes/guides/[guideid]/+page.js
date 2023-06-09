import { redirect } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const id = params.guideid;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const guide = await res.json();

	if (res.ok) {
		return {
			props: {
				guide
			}
		};
	} else {
		throw redirect(301, '/guides');
	}
}
