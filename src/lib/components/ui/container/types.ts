import type { VariantProps } from 'cva';

import type { Boolean } from '$lib/utils/types';

import type { containerClassNameHandler, containerContentClassNameHandler } from './styles';

// Container
export type ContainerStylesProps = VariantProps<typeof containerClassNameHandler>;

export type ContainerPaddingProps = 'top' | 'bottom' | 'top-bottom' | 'none';

export type ContainerCVAProps = {
	padding: Record<ContainerPaddingProps, string>;
};

// Container Content
export type ContainerContentStylesProps = VariantProps<typeof containerContentClassNameHandler>;

export type ContainerContentSizeProps = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export type ContainerContentCVAProps = {
	size: Record<ContainerContentSizeProps, string>;
	padding: Record<Boolean, string>;
};
