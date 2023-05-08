import { ReactNode, useCallback, useMemo, useState } from 'react';

import { ChartType, ChartTypeContext } from './ChartTypeSelectionContext';

type Props = {
	children: ReactNode;
};

export function ChartTypeProvider({ children }: Props) {
	const [chartType, setChartType] = useState<ChartType>('総人口');
	const updateChartType = useCallback((value: ChartType) => {
		setChartType(value);
	}, []);
	const value = useMemo(
		() => ({
			chartType,
			updateChartType,
		}),
		[chartType, updateChartType]
	);
	return (
		<ChartTypeContext.Provider value={value}>
			{children}
		</ChartTypeContext.Provider>
	);
}
