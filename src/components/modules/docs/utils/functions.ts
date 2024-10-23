import { Doc } from "./docs-dal.ts";

export const getTitles = (titles: Doc['title']) => {
	if (titles.length === 0) {
		return '-';
	}

	return titles.join(', ');
}

export const getAuthors = (authors: Doc['creator']) => {
	if (!authors || authors.length === 0) {
		return '-';
	}

	return authors.join(', ');
}