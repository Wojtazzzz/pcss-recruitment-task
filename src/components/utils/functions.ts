type NewSearchParams = Record<string, string | number>;

export const buildSearchParams = (newSearchParams: NewSearchParams) => {
	const searchParams = new URLSearchParams();

	for (const [key, value] of Object.entries(newSearchParams)) {
		searchParams.set(key, String(value));
	}

	return '?' + String(searchParams);
}