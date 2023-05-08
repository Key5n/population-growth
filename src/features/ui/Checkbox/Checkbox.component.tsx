import clsx from 'clsx';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

import styles from './styles.module.css';

type Props = {
	className?: string;
	children: ReactNode;
	labelProps?: Omit<ComponentPropsWithoutRef<'label'>, 'className'>;
	inputProps?: Omit<ComponentPropsWithoutRef<'input'>, 'className'>;
};

export const Checkbox = ({
	children,
	className = '',
	labelProps = {},
	inputProps = {},
}: Props) => (
	<div className={clsx(className, styles.module)}>
		<label className={styles.label} {...labelProps}>
			<input type="checkbox" className={styles.input} {...inputProps} />
			<span className={styles.checkbox} />
			{children}
		</label>
	</div>
);
