import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(0);
	useEffect(() => {
		const onResize = () => {
			setWindowWidth(window.innerWidth);
		};
		setWindowWidth(window.innerWidth);
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);
	return { windowWidth };
};
