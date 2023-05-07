import clsx from 'clsx';
import Link from 'next/link';

import { NavigationContext } from './NavigationContext';
import styles from './styles.module.css';

import { useContextAndErrorIfNull } from '@/lib/context/useContextAndErrorIfNull';

export function NavigationLinks() {
	const isOpen = useContextAndErrorIfNull(NavigationContext);
	return (
		<ul className={clsx(styles.navLinks, isOpen && styles.expanded)}>
			<li>
				<Link href="/">ホーム</Link>
			</li>
		</ul>
	);
}
