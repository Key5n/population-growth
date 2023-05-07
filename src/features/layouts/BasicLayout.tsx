import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

import { Header } from '../ui/Header';
import { Loading } from '../ui/Loading';
import { LoadingProvider } from '../ui/Loading/LoadingProvider';
import { NavigationLinks } from '../ui/NavigationLinks';
import { NavigationProvider } from '../ui/NavigationLinks/NavigationProvider';

import styles from './styles.module.css';

type LayoutProps = {
	children: ReactElement;
	headerProps: ComponentPropsWithoutRef<'header'>;
};

export function BasicLayout({ children, headerProps }: LayoutProps) {
	return (
		<LoadingProvider>
			<NavigationProvider>
				<div className={styles.module}>
					<Header {...headerProps} />
					<div className={styles.layout}>
						<aside>
							<NavigationLinks />
						</aside>
						{children}
					</div>
					<Loading />
					{/* <Notification /> */}
				</div>
			</NavigationProvider>
		</LoadingProvider>
	);
}

export const createGetLayout = ({
	title,
}: {
	title: string;
}): ((page: ReactElement) => ReactNode) =>
	function getLayoutWithFooter(page: ReactElement) {
		return <BasicLayout headerProps={{ children: title }}>{page}</BasicLayout>;
	};
