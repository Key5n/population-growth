import { ChartTypeContext } from '../controller/chart-type-selection/ChartTypeSelectionContext';

import { useWindowWidth } from './useWindowDimensions';

import { useContextAndErrorIfNull } from '@/lib/context/useContextAndErrorIfNull';
import { formatData } from '@/lib/data/formatData';
import { PrefSource } from '@/types/dataType';

export function useLineChart(prefSources: PrefSource[]) {
	const { windowWidth } = useWindowWidth();
	const { chartType } = useContextAndErrorIfNull(ChartTypeContext);
	const selectedPrefSources = prefSources.filter(
		(prefSource) => prefSource.isSelected
	);
	const formattedData = formatData(selectedPrefSources, chartType);
	const bestWidth = windowWidth >= 900 ? 500 : windowWidth - 16;
	return { bestWidth, selectedPrefSources, formattedData };
}
