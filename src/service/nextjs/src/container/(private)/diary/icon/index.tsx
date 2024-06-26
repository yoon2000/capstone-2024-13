import { MouseEvent } from 'react';

export const CreatingIcon = (props: {
	width?: number | string;
	height?: number | string;
	onClick?: (event: MouseEvent<SVGSVGElement>) => void;
	className?: string;
}) => {
	const { width = '100%', height = '100%', onClick = () => {}, className = '' } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 129 117"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={onClick}
			className={className}
		>
			<path
				d="M112.265 1.54218C102.418 21.8856 90.8303 40.9745 77.9061 59.5056C73.6421 65.6194 69.2121 71.6217 65.055 77.8098C64.0482 79.3083 61.996 81.7865 61.6229 83.7587C60.001 92.3318 79.8576 106.278 85.6472 97.0674C98.3934 76.7894 110.193 55.8613 122.942 35.5575C126.153 30.4436 127.542 25.6063 127.366 19.5413C127.187 13.4092 122.941 7.91587 119.815 2.91499"
				stroke="black"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<path
				d="M58.0383 89.4025C58.0383 91.3193 56.9999 107.037 58.6484 107.211C65.0099 107.881 70.639 106.628 75.8849 103.131"
				stroke="black"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<path
				d="M2.43921 114.8C2.63526 114.996 2.50322 114.912 2.74428 114.418C3.52519 112.819 4.30886 111.378 5.64245 110.147C8.1119 107.868 11.5624 106.697 14.7564 108.012C17.426 109.111 19.4001 111.153 22.3451 111.635C28.262 112.603 34.6983 112.176 40.6493 111.711C46.8497 111.226 52.8569 108.881 58.9535 108.622C61.7503 108.503 64.2914 107.249 66.9616 107.249"
				stroke="black"
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</svg>
	);
};
