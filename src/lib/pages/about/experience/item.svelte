<script lang="ts">
	import * as m from '$i18n/messages';

	import { currentLang } from '$lib/libs/i18n/routing';

	interface $$Props {
		role: string;
		companyName: string;
		companyLongName?: string;
		companyUrl?: string;
		monthStart: number;
		yearStart: number;
		monthEnd?: number;
		yearEnd?: number;
		description?: string;
		isWorking?: boolean;
	}

	export let role: $$Props['role'];
	export let companyName: $$Props['companyName'];
	export let companyLongName: $$Props['companyLongName'] = undefined;
	export let companyUrl: $$Props['companyUrl'] = undefined;
	export let monthStart: $$Props['monthStart'];
	export let yearStart: $$Props['yearStart'];
	export let monthEnd: $$Props['monthEnd'] = undefined;
	export let yearEnd: $$Props['yearEnd'] = undefined;
	export let description: $$Props['description'] = undefined;
	export let isWorking: $$Props['isWorking'] = false;

	$: dateStart = createDate(monthStart, yearStart);
	$: dateEnd = createDate(monthEnd, yearEnd);

	const createDate = (month?: number, year?: number) => {
		const date = new Date();
		if (month) {
			date.setMonth(month - 1);
		}
		if (year) {
			date.setFullYear(year);
		}
		return date;
	};
</script>

<div class="space-y-4">
	<div>
		<p class="text-lg font-semibold">
			{role} - {m.at()}
			{#if companyUrl}
				<a
					href={companyUrl}
					target="_blank"
					class="link tooltip"
					rel="noopener noreferrer"
					data-tip={companyLongName}>{companyName}</a
				>
			{:else}
				<span class="tooltip" data-tip={companyLongName}>
					{companyName}
				</span>
			{/if}
		</p>
		<p>
			{dateStart.toLocaleString($currentLang, { month: 'long' })} -
			{dateStart.toLocaleString($currentLang, { year: 'numeric' })} ~
			{#if isWorking}
				<span class="text-primary">{m.now()}</span>
			{:else}
				{#if monthEnd}
					{dateEnd.toLocaleString($currentLang, { month: 'long' })}
				{/if}
				{#if monthEnd && yearEnd}
					{' '}-{' '}
				{/if}
				{#if yearEnd}
					{dateEnd.toLocaleString($currentLang, { year: 'numeric' })}
				{/if}
			{/if}
		</p>
	</div>

	{#if description}
		<p>
			{description}
		</p>
	{/if}
</div>
