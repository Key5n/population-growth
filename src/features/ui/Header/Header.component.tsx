import { ComponentPropsWithoutRef } from 'react';

import { Hamburger } from './Hamburger/Hamburger.component';
import styles from './styles.module.css';

type Props = ComponentPropsWithoutRef<'header'>;
export function Header({ children, ...props }: Props) {
	return (
		<header {...props} className={styles.module}>
			<h1>{children}</h1>
			<Hamburger />
		</header>
	);
}
