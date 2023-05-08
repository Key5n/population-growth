import { PopulationContext } from '../dataContext';

import styles from './styles.module.css';

import { Checkbox } from '@/features/ui/Checkbox';
import { useContextAndErrorIfNull } from '@/lib/context/useContextAndErrorIfNull';

export function Controller() {
	const { updatePrefSource, prefSources } =
		useContextAndErrorIfNull(PopulationContext);
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
								onChange: () =>
									updatePrefSource({
										...prefSource,
										isSelected: !isSelected,
									}),
							}}
						>
							{prefName}
						</Checkbox>
					);
				})}
			</div>
		</div>
	);
}
