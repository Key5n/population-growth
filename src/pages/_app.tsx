import '@/styles/globals.css';
import { AppPropsWithLayout } from '@/lib/next/types';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return getLayout(<Component {...pageProps} />);
}
