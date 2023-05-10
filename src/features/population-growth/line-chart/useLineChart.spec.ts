import { formatData } from '@/lib/data/formatData';
import { prefSources } from '@/tests/valueForMocks';
import { GraphData } from '@/types/dataType';

describe('APIのデータのフォーマット', () => {
	test('総人口', () => {
		const res = formatData(prefSources, '総人口');
		const goal: GraphData = [
			{
				year: 1985,
				北海道: 100,
			},
			{
				year: 1990,
				北海道: 120,
				青森県: 50,
			},
			{
				year: 1995,
				北海道: 130,
				青森県: 60,
			},
			{
				year: 2000,
				青森県: 80,
			},
		];
		expect(res).toEqual(goal);
	});
	test('生産年齢', () => {
		const res = formatData(prefSources, '生産年齢人口');
		const goal: GraphData = [
			{
				year: 1990,
				北海道: 60,
				青森県: 20,
			},
			{
				year: 1995,
				北海道: 70,
				青森県: 30,
			},
		];
		expect(res).toEqual(goal);
	});
});
