import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDocsFilters } from './use-docs-filters.ts';

export const DocsFilters = () => {
	const { activeFilter, onSubmit, onChangeFilter } = useDocsFilters();

	return (
		<form action="#" onSubmit={onSubmit}>
			<FormGroup>
				<FormControlLabel
					control={
						<Checkbox
							name="publishers"
							checked={activeFilter === 'publishers'}
							onChange={onChangeFilter}
						/>
					}
					label="Zawierające wydawców"
				/>
				<FormControlLabel
					control={
						<Checkbox
							name="with-date"
							checked={activeFilter === 'with-date'}
							onChange={onChangeFilter}
						/>
					}
					label="Pierwszy z datą"
				/>
			</FormGroup>
		</form>
	);
};
