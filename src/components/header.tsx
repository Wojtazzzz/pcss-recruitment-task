import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from './ui/container.tsx';

export const Header = () => {
	return (
		<AppBar position="static">
			<Container>
				<Toolbar disableGutters>
					<Typography
						variant="subtitle1"
						component="h1"
						sx={{
							fontWeight: 500,
						}}
					>
						Zadanie rekrutacyjne - Marcin Witas
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
