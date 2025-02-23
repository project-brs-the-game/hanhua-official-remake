import { ITEMS } from '$lib/const/menu-items';
import type { LayoutServerLoad } from './$types';

export const prerender = true;
export const ssr = true;

export const load: LayoutServerLoad = ({ url }) => {
	for (const { href, description } of ITEMS) {
		if (href === url.pathname) {
			return { title: description };
		}
	}
	return { title: '' };
};
