import Grid from '@mui/material/Grid2';
import { Doc } from '../utils/docs-dal.ts';
import { DocTile } from './doc-tile.tsx';
import { useKeywordsDialog } from "./use-keywords-dialog.ts";
import { ButtonBase, Dialog } from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography";

type DocsGridProps = {
	docs: Doc[];
};

export const DocsGrid = ({ docs }: DocsGridProps) => {
	const {currentDocKeywords, isOpen, open, close} = useKeywordsDialog();

	return (
		<>
			<Grid container spacing={2}>
				{docs.map((doc) => (
					<Grid size={{ xs: 12, sm: 6, md: 3 }} key={doc.id}>
						<ButtonBase onClick={() => open(doc.id)} aria-label="pokaż słowa kluczowe">
							<DocTile doc={doc} />
						</ButtonBase>
					</Grid>
				))}
			</Grid>

			<Dialog onClose={close} open={isOpen}>
				<DialogTitle>Słowa klucz</DialogTitle>

				<IconButton
					aria-label="close"
					onClick={close}
					sx={(theme) => ({
						position: 'absolute',
						right: 8,
						top: 8,
						color: theme.palette.grey[500],
					})}
				>
					<CloseIcon />
				</IconButton>

				<DialogContent>
					<Typography gutterBottom>
						{currentDocKeywords?.value}
					</Typography>
				</DialogContent>
			</Dialog>
		</>
	);
};
