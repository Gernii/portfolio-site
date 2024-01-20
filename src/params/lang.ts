import type { AvailableLanguageTag } from '$i18n/runtime';
import { availableLanguageTags } from '$i18n/runtime';

export const match = (param: AvailableLanguageTag) => {
	return availableLanguageTags.includes(param);
};
