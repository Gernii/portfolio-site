import { page } from '$app/stores';

import { PUBLIC_HOSTNAME } from '$env/static/public';

import { derived, get } from 'svelte/store';

import { type AvailableLanguageTag, availableLanguageTags, sourceLanguageTag } from '$i18n/runtime';

/**
 * Returns the path in the given language, regardless of which language the path is in.
 */
export const route = (path: string, lang?: AvailableLanguageTag, host?: boolean) => {
	path = withoutLanguageTag(path);
	const isStartWithSlash = path.startsWith('/');

	const isHomePage = path === '' || path === '/';

	// Don't prefix the default language
	if (lang === sourceLanguageTag || lang === undefined) {
		if (isStartWithSlash) {
			if (isHomePage) {
				if (!host) {
					return '';
				}
				return `${PUBLIC_HOSTNAME}`;
			}
			if (!host) {
				return `${path}`;
			}
			return `${PUBLIC_HOSTNAME}${path}`;
		}
		if (!host) {
			return `/${path}`;
		}
		return `${PUBLIC_HOSTNAME}/${path}`;
	}

	if (isHomePage) {
		if (!host) {
			return `/${lang}`;
		}
		return `${PUBLIC_HOSTNAME}/${lang}`;
	}

	if (!host) {
		return `/${lang}${isStartWithSlash ? '' : '/'}${path}`;
	}

	// Prefix all other languages
	return `${PUBLIC_HOSTNAME}/${lang}${isStartWithSlash ? '' : '/'}${path}`;
};

export const navigate = (path: string) => {
	const isResetPath = path.startsWith('/');
	if (!isResetPath) return path;

	const pathWithoutLanguage = withoutLanguageTag(path);

	const lang = get(currentLang);
	// Don't prefix the default language
	if (lang === sourceLanguageTag) return pathWithoutLanguage;

	// Prefix all other languages
	return `/${lang}${pathWithoutLanguage === '/' ? '' : pathWithoutLanguage}`;
};

export const currentLang = derived(page, (a) => {
	return (a.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;
});

export const getLang = (lang?: string) => {
	if (!lang) return sourceLanguageTag;

	return lang as AvailableLanguageTag;
};

/**
 * Returns the path without the language tag
 */
function withoutLanguageTag(path: string) {
	const [_, maybeLang, ...rest] = path.split('/');
	if (availableLanguageTags.includes(maybeLang as AvailableLanguageTag)) {
		return rest.join('/');
	}

	return path;
}
