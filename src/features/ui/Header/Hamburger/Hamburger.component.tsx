import { NavigationContext } from '../../NavigationLinks/NavigationContext';

import styles from './styles.module.css';

import { useContextAndErrorIfNull } from '@/lib/context/useContextAndErrorIfNull';

export function Hamburger() {
	const { toggleNavigationState } = useContextAndErrorIfNull(NavigationContext);
	return (
		<button
			type="button"
			className={styles.module}
			onClick={() => toggleNavigationState()}
		>
			<span className={styles.line} />
			<span className={styles.line} />
			<span className={styles.line} />
		</button>
	);
}
