import { Dispatch, MouseEvent, SetStateAction } from 'react';
import Image from 'next/image';
import style from '@/style/container/(private)/diary/theme-select/theme/index.module.css';

const Theme = (props: {
	curTheme: number | null;
	id: number;
	title: string;
	name: string;
	description: string;
	setTheme: Dispatch<SetStateAction<number | null>>;
	src?: string;
	audio?: string;
	onClick?: () => void;
}) => {
	const {
		curTheme,
		id,
		title,
		name,
		description,
		setTheme,
		src = '/image/default-image-00.png',
		audio,
	} = props;

	return (
		<div
			className={style.container + (curTheme === id ? ' ' + style['selected-container'] : '')}
			onClick={(event: MouseEvent<HTMLDivElement>) => {
				event.preventDefault();
				event.stopPropagation();
				setTheme(id);
			}}
		>
			<span className={style.description}>{description}</span>
			<span className={style.name}>{name}</span>
			<div className={style.image + (curTheme === id ? ' ' + style['selected-image'] : '')}>
				<Image src={src} alt={name} fill sizes="100%" priority />
			</div>
		</div>
	);
};

export default Theme;
