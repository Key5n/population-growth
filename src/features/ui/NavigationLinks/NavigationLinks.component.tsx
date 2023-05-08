import clsx from 'clsx';
import Link from 'next/link';

import { NavigationContext } from './NavigationContext';
import styles from './styles.module.css';

import { useContextAndErrorIfNull } from '@/lib/context/useContextAndErrorIfNull';

export function NavigationLinks() {
	const { isNavigationOpen } = useContextAndErrorIfNull(NavigationContext);

	return (
		<aside className={styles.module}>
			<ul
				className={clsx(styles.navLinks, isNavigationOpen && styles.expanded)}
			>
				<li>
					<Link href="/">ホーム</Link>
				</li>
				<li>
					<Link href="https://github.com/Key5n/population-growth">
						ソースコード
					</Link>
				</li>
			</ul>
		</aside>
	);
}
