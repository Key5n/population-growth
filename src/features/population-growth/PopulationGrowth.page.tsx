import { Controller } from './controller';
import { LineChartGraph } from './line-chart';
import styles from './styles.module.css';
import { useInitialFetch } from './useInitialFetch';

export function PopulationGrowth() {
	const { prefsWithData } = useInitialFetch();
	return (
		<main className={styles.module}>
			<LineChartGraph prefSources={prefsWithData} />
			<Controller />
		</main>
	);
}

// ? Is this necessary?
// export function getStaticSiteProps() {
// 	return {
// 		props: null,
// 	};
// }
