import { useEffect } from 'react';

import { LoadingContext } from '../ui/Loading/LoadingContext';

import {
	PopulationContext,
	PopulationGrowthContextType,
} from './PopulationContext';

import { api } from '@/lib/api';
import { useContextAndErrorIfNull } from '@/lib/context/useContextAndErrorIfNull';
import {
	BasicPrefInfoAPIResponse,
	PopulationPrefAPIResponse,
} from '@/types/apiType';
import { PrefSource } from '@/types/dataType';

export function useInitialFetch() {
	const { updatePrefSources, prefSources } =
		useContextAndErrorIfNull<PopulationGrowthContextType>(PopulationContext);
	const { setLoadingState } = useContextAndErrorIfNull(LoadingContext);

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
			// 初期値は東京
			const CodeOfTokyo = 13;
			const basicInformationEndPoint =
				'https://opendata.resas-portal.go.jp/api/v1/prefectures';
			const populationPrefAPIEndPoint = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${CodeOfTokyo}`;
			setLoadingState(true);
			// 県のID、名前の情報と県の人口推移は別のルートから取る必要あり
			const res = await Promise.all([
				api<BasicPrefInfoAPIResponse>(basicInformationEndPoint, option),
				api<PopulationPrefAPIResponse>(populationPrefAPIEndPoint, option),
			]);
			setLoadingState(false);

			const basicPrefInfoResponse = res[0];
			const populationPrefRespnse = res[1];
			const basicData: PrefSource[] = basicPrefInfoResponse.result.map(
				(prefInfo) => {
					const isTokyo = prefInfo.prefCode === CodeOfTokyo;
					return {
						prefCode: prefInfo.prefCode,
						prefName: prefInfo.prefName,
						boundaryYear: populationPrefRespnse.result.boundaryYear,
						data: isTokyo ? populationPrefRespnse.result.data : null,
						isSelected: isTokyo,
					};
				}
			);
			updatePrefSources(basicData);
		})().catch(() => {
			throw new Error(`Cannot fetch from RESAS`);
		});
	}, [setLoadingState, updatePrefSources]);
	const prefsWithData = prefSources.filter(
		(prefSource) => prefSource.data !== null && prefSource.boundaryYear !== null
	);
	return { prefsWithData };
}
