import { ChartTypeSelection } from './chart-type-selection';
import styles from './styles.module.css';
import { useController } from './useController';

import { Checkbox } from '@/features/ui/Checkbox';

export function Controller() {
	const { prefSources, onChangeHandler } = useController();
	return (
		<div className={styles.module}>
			<h1 className={styles.headline}>都道府県</h1>
			<div className={styles.prefectures}>
				{prefSources.map((prefSource) => {
					const { isSelected, prefName } = prefSource;
					return (
						<Checkbox
							key={prefSource.prefCode}
							inputProps={{
								checked: isSelected,
								onChange: () => {
									(async () => onChangeHandler(prefSource))().catch(() => {
										throw new Error('On Change Handler failed');
									});
								},
							}}
						>
							{prefName}
						</Checkbox>
					);
				})}
			</div>
			<div>
				表示する図の切り替え
				<ChartTypeSelection />
			</div>
		</div>
	);
}
