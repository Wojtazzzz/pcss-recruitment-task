import { useState } from "react";
import { DocKeywords, DocsDal } from "../utils/docs-dal.ts";

export const useKeywordsDialog = () => {
	const [currentDocKeywords, setCurrentDocKeywords] = useState<DocKeywords | null>(null);

	const open = (docId: string) => {
		const keywords = DocsDal.getDocsKeywords().find((keyword) => keyword.id === docId)

		setCurrentDocKeywords(keywords ? keywords : null)
	}

	const close = () => {
		setCurrentDocKeywords(null);
	}

	return {
		currentDocKeywords,
		isOpen: Boolean(currentDocKeywords),
		open,
		close
	}
}