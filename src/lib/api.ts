export async function api<T>(url: string, options?: RequestInit): Promise<T> {
	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const value = (await response.json()) as Promise<T>;
	return value;
}
