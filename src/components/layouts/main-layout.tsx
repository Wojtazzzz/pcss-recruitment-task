import { type ReactNode } from 'react';
import { Header } from '../header.tsx';

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<>
			<Header />

			<main>{children}</main>
		</>
	);
};
