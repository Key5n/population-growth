import { useEffect } from 'react';

import { PopulationContext, PopulationGrowthContextType } from './dataContext';
import { LineChartGraph } from './line-chart';
import styles from './styles.module.css';

import { api } from '@/lib/api';
import { useContextAndErrorIfNull } from '@/lib/context/useContextAndErrorIfNull';
import {
	BasicPrefInfoAPIResponse,
	PopulationPrefAPIResponse,
} from '@/types/apiType';
import { PrefSource } from '@/types/dataType';

export function PopulationGrowth() {
	const { updatePrefSources, prefSources } =
		useContextAndErrorIfNull<PopulationGrowthContextType>(PopulationContext);

	useEffect(() => {
		(async () => {
			const apiKey = process.env.NEXT_PUBLIC_RESAS_API_KEY;
			if (typeof apiKey === 'undefined') {
				throw new Error('RESAS API KEY is undefined');
			}
			const option: RequestInit = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': apiKey,
				},
			};
			// 初期値は北海道
			const CodeOfHokkaido = 1;
			const basicInformationEndPoint =
				'https://opendata.resas-portal.go.jp/api/v1/prefectures';
			const populationPrefAPIEndPoint = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${CodeOfHokkaido}`;
			const res = await Promise.all([
				api<BasicPrefInfoAPIResponse>(basicInformationEndPoint, option),
				api<PopulationPrefAPIResponse>(populationPrefAPIEndPoint, option),
			]);

			const basicPrefInfoResponse = res[0];
			const populationPrefRespnse = res[1];
			const basicData: PrefSource[] = basicPrefInfoResponse.result.map(
				(prefInfo) => {
					const isHokkaido = prefInfo.prefCode === CodeOfHokkaido;
					return {
						prefCode: prefInfo.prefCode,
						prefName: prefInfo.prefName,
						boundaryYear: populationPrefRespnse.result.boundaryYear,
						data: isHokkaido ? populationPrefRespnse.result.data : null,
						isSelected: false,
					};
				}
			);
			updatePrefSources(basicData);
		})();
	}, [updatePrefSources]);
	const data = prefSources.filter((prefSource) => prefSource.data !== null);
	return (
		<main className={styles.module}>
			<LineChartGraph prefSources={data} />
		</main>
	);
}

// ? Is this necessary?
// export function getStaticSiteProps() {
// 	return {
// 		props: null,
// 	};
// }
