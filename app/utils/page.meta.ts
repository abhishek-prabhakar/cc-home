import { V2_MetaFunction } from '@remix-run/node';

export const PageMetaFunction = (props?: {
	title: string;
	description?: string;
}) => {
	const prefix = 'Celebria Collective';
	const combinedTitle = props?.title ? `${props.title} | ${prefix}` : prefix;

	const defaultDescription = props?.description || '';

	const transformer: V2_MetaFunction = () => [
		{ title: combinedTitle },
		{ name: 'description', content: defaultDescription }
	];

	return transformer;
};

export default PageMetaFunction;
