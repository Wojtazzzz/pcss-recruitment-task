import { useEffect, useState } from 'react';
import { DocsDal } from './utils/docs-dal.ts';
import { useSearchParams } from '../../../hooks/use-search-params.ts';
import { useLocation } from 'react-router-dom';

export const useGetDocs = () => {
	const { getString } = useSearchParams();
	const location = useLocation();
	const [docs, setDocs] = useState(DocsDal.getMappedDocs);

	useEffect(() => {
		if (getString('filter') === 'with-date') {
			const doc = DocsDal.getFirstDocWithDate();

			setDocs(DocsDal.mapDocs(doc ? [doc] : []));
		} else if (getString('filter') === 'publishers') {
			setDocs(DocsDal.mapDocs(DocsDal.getDocsWithPublishers()));
		} else {
			setDocs(DocsDal.getMappedDocs());
		}
	}, [
		// getNumber, - Maximum update depth exceeded.
		location
	]);

	return {
		docs,
	};
};
