import { MainLayout } from '../../layouts/main-layout.tsx';
import { Container } from "../../ui/container.tsx";
import { DocsGrid } from "./docs-grid.tsx";
import { useGetDocs } from "./use-get-docs.ts";
import { Section } from "../../ui/section.tsx";

export const DocsPage = () => {
	const { docs } = useGetDocs();

	return (
		<MainLayout>
			<Container>
				<Section>
					<DocsGrid docs={docs} />
				</Section>
			</Container>
		</MainLayout>
	);
};
