import { useSearchParams as useRouterSearchParams } from "react-router-dom";

export const useSearchParams = () => {
	const [searchParams, setSearchParams] = useRouterSearchParams();

	const getNumber = (name: string) => {
		const param = searchParams.get(name);

		if (!param) {
			return 0;
		}

		return Number(param);
	}

	const getString = (name: string) => {
		return searchParams.get(name);
	}

	return {
		searchParams,
		setSearchParams,
		getString,
		getNumber
	}
}