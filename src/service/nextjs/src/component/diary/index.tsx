import { Dispatch, ReactNode, SetStateAction } from 'react';
import DiarySwiper from './swiper';
import DiaryComponentEditContent from './edit-content';
import DiaryComponentEditTitle from './edit-title';
import DiaryComponentEditPublic from './edit-public';
import DiaryComponentHeader from './header';
import style from '@/style/component/diary/index.module.css';

const DiaryComponent = (props: {
	profileImageSrc?: string;
	author?: string;
	createdAt?: Date;
	title?: string;
	content?: string;
	images?: string[];
	component?: ReactNode;
	isPublic?: boolean;
	isEditing?: boolean;
	setTitle?: Dispatch<SetStateAction<string | undefined>>;
	setContent?: Dispatch<SetStateAction<string | undefined>>;
	setIsPublic?: Dispatch<SetStateAction<boolean>>;
	setIsEditing?: Dispatch<SetStateAction<boolean>>;
}) => {
	const {
		profileImageSrc,
		author,
		createdAt,
		title,
		content,
		images,
		component,
		setTitle,
		setContent,
		isPublic,
		setIsPublic,
		isEditing,
		setIsEditing,
	} = props;

	return (
		<div className={style.container}>
			<DiaryComponentHeader
				profileImageSrc={profileImageSrc}
				author={author}
				createdAt={createdAt}
				component={component}
			/>
			<DiarySwiper images={images} />
			{isEditing && setTitle ? (
				<DiaryComponentEditTitle title={title} setTitle={setTitle} />
			) : (
				<span className={style.title}>{title}</span>
			)}
			{isEditing && setContent ? (
				<DiaryComponentEditContent content={content} setContent={setContent} />
			) : (
				<span className={style.content}>{content}</span>
			)}
			{isEditing && isPublic !== undefined && setIsPublic && (
				<DiaryComponentEditPublic isPublic={isPublic} setIsPublic={setIsPublic} />
			)}
		</div>
	);
};

export default DiaryComponent;
