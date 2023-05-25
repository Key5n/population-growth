export async function resasApi<T>(urlSuffix: string): Promise<T> {
	const url = `https://opendata.resas-portal.go.jp/api/v1/${urlSuffix}`;
	const apiKey = process.env.NEXT_PUBLIC_RESAS_API_KEY;
	if (typeof apiKey === 'undefined') {
		throw new Error('RESAS API KEY is undefined');
	}
	const options: RequestInit = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': apiKey,
		},
	};
	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const value = (await response.json()) as Promise<T>;
	return value;
}
