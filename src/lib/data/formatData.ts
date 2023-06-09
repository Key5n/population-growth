import { ChartType } from '@/features/population-growth/controller/chart-type-selection/ChartTypeSelectionContext';
import { GraphData, PrefSource } from '@/types/dataType';

function mergeObjects(array: GraphData): GraphData {
	const result: GraphData = [];

	array.forEach((obj) => {
		const obj1Index = result.findIndex((obj1) => obj1.year === obj.year);

		if (obj1Index !== -1) {
			result[obj1Index] = { ...result[obj1Index], ...obj };
		} else {
			result.push(obj);
		}
	});

	return result;
}

function sortArray(array: GraphData) {
	const result = [...array];
	result.sort((a, b) => a.year - b.year);

	return result;
}

export function formatData(
	selectedPrefSources: PrefSource[],
	chartType: ChartType
) {
	const data: GraphData = selectedPrefSources
		.map((prefSource) => {
			const boundaryYear = prefSource.boundaryYear || new Date().getFullYear();

			const targetPopulation =
				prefSource.data?.filter(
					(labeledPopulationData) => labeledPopulationData.label === chartType
				) || [];
			const populationData = targetPopulation.map((labeledPopulationData) => {
				const dataWithoutExpectationValues = labeledPopulationData.data.filter(
					(population) => population.year <= boundaryYear
				);
				const namedPopulation = dataWithoutExpectationValues.map((prev) => ({
					year: prev.year,
					[prefSource.prefName]: prev.value,
				}));
				return namedPopulation;
			});
			return [...populationData];
		})
		.flat()
		.flat();

	const d = mergeObjects(data);
	const formattedData = sortArray(d);
	return formattedData;
}
