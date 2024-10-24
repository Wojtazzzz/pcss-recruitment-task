import exampleData from '../../../../assets/exampleData.json';

type RawDoc = (typeof exampleData)['response']['docs'][number];

export type Doc = {
	id: RawDoc['id'];
	creator: RawDoc['dc_creator'];
	document_type: RawDoc['tech_type'];
	title: RawDoc['dc_title'];
};

export class DocsDal extends null {
	static docs: RawDoc[];

	/* Step 1 */
	static {
		// const { responseHeader, response: { docs }, facet_counts, stats } = exampleData;
		const {
			response: { docs },
		} = exampleData;

		DocsDal.docs = docs;
	}

	/* Step 2 */
	static getMappedDocs() {
		return DocsDal.mapDocs(DocsDal.docs);
	}

	static mapDocs(docs: RawDoc[]) {
		return docs.map((doc) => ({
			id: doc.id,
			creator: doc.dc_creator,
			document_type: doc.tech_type,
			title: doc.dc_title,
		}));
	}

	/* Step 3 */
	static getDocsWithPublishers() {
		const docsFiltered = DocsDal.docs.filter(
			(doc) => typeof doc.dc_publisher !== 'undefined',
		);
		const docsWithDate = docsFiltered.filter(
			(doc) => typeof doc.single_date !== 'undefined',
		);

		// [...docsWithDate] - no mutation on the original array
		return [...docsWithDate].sort((a, b) => {
			const yearA = new Date(a.single_date).getUTCFullYear();
			const yearB = new Date(b.single_date).getUTCFullYear();

			return yearA - yearB;
		});
	}

	/* Step 4 */
	static getFirstDocWithDate() {
		return DocsDal.docs.find((doc) => typeof doc.date !== 'undefined');
	}

	/* Step 5 */
	static getDocsKeywords() {
		return DocsDal.docs.map((doc) => {
			if (
				typeof doc.dc_subject === 'undefined' ||
				doc.dc_subject.length === 0
			) {
				return {
					id: doc.id,
					value: 'brak słów kluczowych',
				};
			}

			return {
				id: doc.id,
				value: doc.dc_subject.join(';'),
			};
		});
	}
}
