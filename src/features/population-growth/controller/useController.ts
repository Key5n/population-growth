import { PopulationContext } from '../PopulationContext';

import { LoadingContext } from '@/features/ui/Loading/LoadingContext';
import { useContextAndErrorIfNull } from '@/lib/context/useContextAndErrorIfNull';
import { resasApi } from '@/lib/resasApi';
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
		const populationPrefAPIEndPoint = `population/composition/perYear?cityCode=-&prefCode=${prefCode}`;
		setLoadingState(true);
		const res = await resasApi<PopulationPrefAPIResponse>(
			populationPrefAPIEndPoint
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
