import { languageTag } from '$i18n/runtime';

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date?: string, dateStyle: DateStyle = 'long') {
	if (!date) return '';
	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(languageTag(), { dateStyle });
	return dateFormatter.format(dateToFormat);
}
