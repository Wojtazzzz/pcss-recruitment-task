import { type ReactNode } from 'react';
import MUIContainer from '@mui/material/Container';

type ContainerProps = {
	children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
	return <MUIContainer maxWidth="xl">{children}</MUIContainer>;
};
