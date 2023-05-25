import { useEffect } from 'react';

import { LoadingContext } from '../ui/Loading/LoadingContext';

import {
	PopulationContext,
	PopulationGrowthContextType,
} from './PopulationContext';

import { useContextAndErrorIfNull } from '@/lib/context/useContextAndErrorIfNull';
import { resasApi } from '@/lib/resasApi';
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
			// 初期値は東京
			const CODE_OF_TOKYO = 13;
			const basicInformationEndPoint = 'prefectures';
			const populationPrefAPIEndPoint = `population/composition/perYear?cityCode=-&prefCode=${CODE_OF_TOKYO}`;
			setLoadingState(true);
			// 県のID、名前の情報と県の人口推移は別のルートから取る必要あり
			const res = await Promise.all([
				resasApi<BasicPrefInfoAPIResponse>(basicInformationEndPoint),
				resasApi<PopulationPrefAPIResponse>(populationPrefAPIEndPoint),
			]);
			setLoadingState(false);

			const basicPrefInfoResponse = res[0];
			const populationPrefRespnse = res[1];
			const basicData: PrefSource[] = basicPrefInfoResponse.result.map(
				(prefInfo) => {
					const isTokyo = prefInfo.prefCode === CODE_OF_TOKYO;
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
