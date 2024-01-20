<script lang="ts">
	import { cx } from 'cva';

	import { passwordStrength } from './password-strength';

	export let password: string;

	$: ps = passwordStrength(password ?? '');

	$: strengthPower = cx({
		'bg-error': ps.strength < 0.6,
		'bg-secondary': ps.strength >= 0.6 && ps.strength < 0.8,
		'bg-success': ps.strength >= 0.8
	});
</script>

<div class="h-1.5 w-full rounded-full bg-base-200">
	<div
		style:width={ps.strength * 100 + '%'}
		class={`h-1.5 rounded-full duration-200 ease-out ${strengthPower}`}
	></div>
</div>
<ul
	class="mt-2 flex flex-col space-y-1 rounded border p-2 text-sm font-semibold text-error shadow-sm"
>
	<li class={ps.attrs.lenght ? 'text-success' : undefined}>Minimum length is 8 characters</li>
	<li class={ps.attrs.number ? 'text-success' : undefined}>Contains at least 1 number</li>
	<li class={ps.attrs.lowerCase ? 'text-success' : undefined}>
		Contains at least 1 lowercase letter
	</li>
	<li class={ps.attrs.upperCase ? 'text-success' : undefined}>
		Contains at least 1 uppercase letter
	</li>
	<li class={ps.attrs.special ? 'text-success' : undefined}>
		Contains at least 1 special character
	</li>
</ul>
