import Typography from '@mui/material/Typography';
import { Container } from './ui/container.tsx';

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<Container>
				<Typography
					variant="subtitle1"
					component="p"
					sx={{
						margin: 1,
						fontWeight: 500,
						textAlign: 'center',
					}}
				>
					© Copyright {currentYear} Lorem Inc. All rights reserved.
				</Typography>
		</Container>
	);
};
