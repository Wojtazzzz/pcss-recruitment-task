const parseEnv = (env: unknown, envName: string) => {
	if (!env) {
		throw new Error(`Env variable ${envName} is not set`);
	}

	return String(env);
}

export const VITE_BASE_PATH = parseEnv(import.meta.env.BASE_URL, 'VITE_BASE_PATH');