import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { VITE_BASE_PATH } from "./utils/env.ts";

const root = document.getElementById('root');

if (!root) {
	throw new Error('#root element not found');
}

const router = createBrowserRouter([
	{
		path: VITE_BASE_PATH,
		element: <App />,
	},
]);

createRoot(root).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
