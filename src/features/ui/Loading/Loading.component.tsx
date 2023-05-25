import { LoadingContext } from './LoadingContext';
import styles from './styles.module.css';

import { useContextAndErrorIfNull } from '@/lib/context/useContextAndErrorIfNull';

export function Loading() {
	const { isLoading } = useContextAndErrorIfNull(LoadingContext);

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{isLoading && (
				<div className={styles.overlay}>
					<div className={styles.ldsSpinner}>
						{
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							[...Array(12)].map((_, i) => (
								// eslint-disable-next-line react/no-array-index-key
								<div key={i} />
							))
						}
					</div>
				</div>
			)}
		</>
	);
}
