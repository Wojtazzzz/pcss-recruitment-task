import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(() => {
	// const env = loadEnv(mode, process.cwd());

	return {
		plugins: [react()],
		// base: env.VITE_BASE_PATH
		base: '/pcss-recruitment-task/'
	};
});