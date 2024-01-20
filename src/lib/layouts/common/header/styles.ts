import { cva } from 'cva';

import type { HeaderCVAProps } from './types';

export const headerClassNameHandler = cva<HeaderCVAProps>(
	'inset-x-1 top-1 z-40 h-header-sm border border-base-content/5 bg-base-100/90 px-1 py-1 shadow shadow-base-content/5 backdrop-blur-sm lg:inset-x-2 lg:top-2 lg:h-header lg:px-2',
	{
		variants: {
			disableScrollEvent: {
				true: 'sticky',
				false: 'fixed rounded-lg'
			}
		},

		defaultVariants: {
			disableScrollEvent: false
		}
	}
);
