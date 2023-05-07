import Head from 'next/head';

import { createGetLayout } from '@/features/layouts/BasicLayout';
import { PopulationGrowth } from '@/features/population-growth';
import { NextPageWithLayout } from '@/lib/next/types';

const Page: NextPageWithLayout = () => (
	<>
		<Head>
			<title>人口推移グラフ</title>
			<meta name="description" content="都道府県ごとの人口推移グラフです。" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<PopulationGrowth />
	</>
);

Page.getLayout = createGetLayout({ title: '人口推移グラフ' });

export default Page;
