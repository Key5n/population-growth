import {
	ChartTypeContext,
	chartTypeArray,
	isChartType,
} from './ChartTypeSelectionContext';
import styles from './styles.module.css';

import { useContextAndErrorIfNull } from '@/lib/context/useContextAndErrorIfNull';

export function ChartTypeSelection() {
	const { updateChartType } = useContextAndErrorIfNull(ChartTypeContext);
	return (
		<select
			className={styles.module}
			onChange={(event) => {
				const { value } = event.currentTarget;
				if (isChartType(value)) {
					updateChartType(value);
				}
			}}
		>
			{chartTypeArray.map((chartType) => (
				<option value={chartType} key={chartType}>
					{chartType}
				</option>
			))}
		</select>
	);
}
