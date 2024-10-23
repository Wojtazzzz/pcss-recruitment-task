import { MainLayout } from '../../layouts/main-layout.tsx';
import { Container } from "../../ui/container.tsx";
import { DocsGrid } from "./docs-grid.tsx";

export const DocsPage = () => {
	return <MainLayout>
		<Container>
			<DocsGrid />
		</Container>
	</MainLayout>;
};
