import Grid from '@mui/material/Grid2';
import { Doc } from "./utils/docs-dal.ts";
import { DocTile } from "./doc-tile.tsx";

type DocsGridProps = {
	docs: Doc[]
}

export const DocsGrid = ({ docs }: DocsGridProps) => {
	return (
		<Grid container spacing={2}>
			{docs.map((doc) => (
				<Grid size={{ xs: 12, sm: 6, md: 3 }} key={doc.id}>
					<DocTile doc={doc} />
				</Grid>
			))}
		</Grid>
	);
};
