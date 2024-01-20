import type { VariantProps } from 'cva';

import type { Boolean } from '$lib/utils/types/common';

import type { headerClassNameHandler } from './styles';

export type HeaderCVAProps = {
	disableScrollEvent: Record<Boolean, string>;
};

export interface HeaderStylesProps extends VariantProps<typeof headerClassNameHandler> {}

export interface HeaderProps {
	disableScrollEvent?: boolean;
}
