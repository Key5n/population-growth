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
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
					</div>
				</div>
			)}
		</>
	);
}
