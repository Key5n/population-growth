const colorCodes = [];
for (let i = 0; i < 50; i += 1) {
	let color = Math.floor(Math.random() * 0xffffff).toString(16);
	for (let count = color.length; count < 6; count += 1) {
		color = `0${color}`;
	}
	const randomColor = `"#${color}"`;
	colorCodes.push(randomColor);
}

export const colors = [
	'#647e65',
	'#67123c',
	'#a0ddd8',
	'#c0ffdf',
	'#abfbba',
	'#aecf44',
	'#aeb9ae',
	'#40b90b',
	'#805d1a',
	'#8f5f18',
	'#7cf06a',
	'#243595',
	'#189242',
	'#3d70e0',
	'#a86c26',
	'#d3a774',
	'#7962e9',
	'#e761a1',
	'#1955ea',
	'#13caf3',
	'#e4d8d0',
	'#b408ca',
	'#a7d4c9',
	'#6ed529',
	'#d3a002',
	'#51a5fd',
	'#aac2e2',
	'#1769fe',
	'#aeaf9f',
	'#6fedf7',
	'#acc2b7',
	'#4acb69',
	'#04476c',
	'#246022',
	'#799c24',
	'#cf7e77',
	'#2c2f8b',
	'#7c75d4',
	'#a6b627',
	'#cde8b0',
	'#29c8b6',
	'#7e9d5c',
	'#2b9e5d',
	'#3242bf',
	'#a59734',
	'#190551',
	'#3cd991',
	'#7b2e57',
	'#5ebdf1',
	'#fba288',
];
