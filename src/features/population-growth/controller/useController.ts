import { PopulationContext } from '../PopulationContext';

import { LoadingContext } from '@/features/ui/Loading/LoadingContext';
import { api } from '@/lib/api';
import { useContextAndErrorIfNull } from '@/lib/context/useContextAndErrorIfNull';
import { PopulationPrefAPIResponse } from '@/types/apiType';
import { PrefSource } from '@/types/dataType';

export function useController() {
	const { updatePrefSource, prefSources } =
		useContextAndErrorIfNull(PopulationContext);
	const { setLoadingState } = useContextAndErrorIfNull(LoadingContext);

	async function setNewPrefSource(prevPrefSource: PrefSource) {
		const { prefCode, data } = prevPrefSource;
		if (data !== null) {
			throw new Error('Data already exist');
		}
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
		const populationPrefAPIEndPoint = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`;
		setLoadingState(true);
		const res = await api<PopulationPrefAPIResponse>(
			populationPrefAPIEndPoint,
			option
		);
		setLoadingState(false);
		const newPrefSource: PrefSource = {
			...prevPrefSource,
			boundaryYear: res.result.boundaryYear,
			data: res.result.data,
			isSelected: true,
		};
		updatePrefSource(newPrefSource);
	}

	const onChangeHandler = async (prefSource: PrefSource): Promise<void> => {
		const { data, isSelected } = prefSource;

		if (data !== null) {
			updatePrefSource({
				...prefSource,
				isSelected: !isSelected,
			});
			return Promise.resolve();
		}
		await setNewPrefSource(prefSource);
		return Promise.resolve();
	};
	return { prefSources, onChangeHandler };
}