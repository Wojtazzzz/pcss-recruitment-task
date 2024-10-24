import { useSearchParams } from '../../../hooks/use-search-params.ts';
import { type SyntheticEvent, useState } from 'react';
import type { ChangeEvent } from 'react';
import { buildSearchParams } from '../../../utils/functions.ts';

export const useDocsFilters = () => {
	const { getString, setSearchParams } = useSearchParams();
	const [activeFilter, setActiveFilter] = useState<string | null>(
		getString('filter'),
	);

	const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const onChangeFilter = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Number(event.target.checked);

		if (value === 0) {
			setSearchParams(buildSearchParams({}));

			return setActiveFilter(null);
		}

		if (event.target.name === 'publishers') {
			setSearchParams(
				buildSearchParams({
					publishers: value,
				}),
			);

			return setActiveFilter('publishers');
		}

		if (event.target.name === 'with-date') {
			setSearchParams(
				buildSearchParams({
					'with-date': value,
				}),
			);

			return setActiveFilter('with-date');
		}
	};

	return {
		activeFilter,
		onSubmit,
		onChangeFilter,
	};
};
