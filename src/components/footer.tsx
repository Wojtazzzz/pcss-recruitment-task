import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from './ui/container.tsx';

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<Container>
			<Toolbar disableGutters>
				<Typography
					variant="subtitle1"
					component="p"
					sx={{
						fontWeight: 500,
						textAlign: 'center',
					}}
				>
					© Copyright {currentYear} Lorem Inc. All rights reserved.
				</Typography>
			</Toolbar>
		</Container>
	);
};
