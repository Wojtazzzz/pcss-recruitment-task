import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Doc } from '../utils/docs-dal.ts';
import Typography from '@mui/material/Typography';
import { getAuthors, getTitles } from '../utils/functions.ts';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(3),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	...theme.applyStyles('dark', {
		backgroundColor: '#1A2027',
	}),
}));

type DocTileProps = {
	doc: Doc;
};

export const DocTile = ({ doc }: DocTileProps) => {
	const titles = getTitles(doc.title);
	const authors = getAuthors(doc.creator);

	return (
		<Item>
			<Typography
				variant="subtitle1"
				component="h2"
				sx={{
					fontWeight: 500,
				}}
			>
				Tytuł(y): {titles}
			</Typography>

			<Typography variant="subtitle1">Autor: {authors}</Typography>

			<Typography variant="subtitle1">
				Typ: {doc.document_type}
			</Typography>
		</Item>
	);
};
