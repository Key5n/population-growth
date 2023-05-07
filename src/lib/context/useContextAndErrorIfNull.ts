import { Context, useContext } from 'react';

export const useContextAndErrorIfNull = <ItemType>(
	context: Context<ItemType | null>
) => {
	const contextValue = useContext(context);
	if (contextValue === null) {
		throw new Error('Context has not been Provided');
	}
	return contextValue;
};
