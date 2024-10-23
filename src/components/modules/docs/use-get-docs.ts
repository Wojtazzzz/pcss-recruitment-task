import { useState } from "react";
import { DocsDal } from "./utils/docs-dal.ts";

export const useGetDocs = () => {
	const [docs, setDocs] = useState(DocsDal.getMappedDocs);

	return {
		docs
	}
}